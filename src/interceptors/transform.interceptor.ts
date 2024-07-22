import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
  import { classToPlain, plainToClass } from 'class-transformer';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  
  @Injectable()
  export class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      return next.handle().pipe(
        map((data) => {
          const classType = this.getClassType(context);
          if (classType) {
            return plainToClass(classType, classToPlain(data));
          }
          return data;
        }),
      );
    }
  
    private getClassType(context: ExecutionContext): any {
      const handler = context.getHandler();
      const classType = Reflect.getMetadata('class-type', handler);
      return classType;
    }
  }