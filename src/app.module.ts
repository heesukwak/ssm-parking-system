import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingPmsModule } from './pms/pms.module';
import { EqInfo } from './pms/entities/eqinfo.entity';

@Module({
  imports: [
    EqInfo,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'DY_PMS',
      // entities: [
      //   EqInfo,
      // ],
      autoLoadEntities: true,
      synchronize: false,
      logging: true,
    }),
    ParkingPmsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,],
})
export class AppModule {}
