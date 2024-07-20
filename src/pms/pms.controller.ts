import { Controller, Get, Param, Query} from '@nestjs/common';
import { ParkingPmsService } from './pms.service';
import { EqInfo } from './entities/eqinfo.entity';
import { EnExInfo } from './entities/enexInfo.entity';
import { ParkInfo } from './entities/parkInfo.entity';
import { RcgInfo } from './entities/rcgInfo.entity';
import { ScUserInfo } from './entities/scuserInfo.entity';
import { ScIssInfo } from './entities/scIssInfo.entity';
import { ScInfo } from './entities/scInfo.entity';
import { ParkingLogDto } from './dto/parkingLog.dto';


@Controller('pms')
export class ParkingPmsController {
  constructor(private readonly parkingPmsService: ParkingPmsService) {}
  
  /**
   * 장비 목록 조회
   */
  @Get('getEqInfo')
  async getEqinfo(): Promise<EqInfo[]> {
    return await this.parkingPmsService.findEqInfo();
  }

  /**
   * 입출차 조회
   */
  @Get('getEnExInfo')
  async getEnExInfo(): Promise<EnExInfo[]> {
    return await this.parkingPmsService.findEnExInfo();
  }

  /**
   * 입출차 로그 조회
  */
 @Get('getParkingLog')
 async getParkingLogInfo(@Query() parkingLogDto : ParkingLogDto) {
    const result = await this.parkingPmsService.findParkingLogInfo(parkingLogDto);
    return {
      resultCode: "SUCCESS",
      body: result
    };
  }

  /**
   * 주차 정보 조회
   */
   @Get('getParkInfo')
   async getParkInfo(): Promise<ParkInfo[]> {
     return await this.parkingPmsService.findParkInfo();
   }

   /**
   * 주차 정보 조회
   */
   @Get('getRcgInfo')
   async getRcgInfo(): Promise<RcgInfo[]> {
     return await this.parkingPmsService.findRcgInfo();
   }

  /**
   * 정기권 그룹 정보 조회
   */
  @Get('getScUserInfo')
  async getScUserInfo(): Promise<ScUserInfo[]> {
    return await this.parkingPmsService.findScUserInfo();
  }


  /**
   * 정기권 발급 정보 조회
   */
  @Get('getScIssInfo')
  async getScIssInfo(): Promise<ScIssInfo[]> {
    return await this.parkingPmsService.findScIssInfo();
  }


  /**
   * 정기권 정보 조회
   */
  @Get('getScInfo')
  async getScInfo(): Promise<ScInfo[]> {
    return await this.parkingPmsService.findScInfo();
  }


}
