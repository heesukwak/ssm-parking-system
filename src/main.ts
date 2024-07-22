import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  app.useLogger(logger);

   // 전역 ValidationPipe 설정
   app.useGlobalPipes(new ValidationPipe({
    transform: true,  // DTO 변환 활성화
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  await app.listen(3000);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
