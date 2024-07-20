import { Module } from '@nestjs/common';
import { ParkingPmsService } from './pms.service';
import { ParkingPmsController } from './pms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EqInfo } from './entities/eqinfo.entity';
import { EnExInfo } from './entities/enexInfo.entity';
import { ParkInfo } from './entities/parkInfo.entity';
import { RcgInfo } from './entities/rcgInfo.entity';
import { ScUserInfo } from './entities/scuserInfo.entity';
import { ScIssInfo } from './entities/scIssInfo.entity';
import { ScInfo } from './entities/scInfo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EqInfo, 
      EnExInfo,
      ParkInfo,
      RcgInfo,
      ScUserInfo,
      ScIssInfo,
      ScInfo,
    ])
  ],
  controllers: [ParkingPmsController],
  providers: [ParkingPmsService],
})
export class ParkingPmsModule {}
