import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EqInfo } from './entities/eqInfo.entity';
import { EnExInfo } from './entities/enexInfo.entity';
import { ParkInfo } from './entities/parkInfo.entity';
import { RcgInfo } from './entities/rcgInfo.entity';
import { ScUserInfo } from './entities/scuserInfo.entity';
import { ScIssInfo } from './entities/scIssInfo.entity';
import { ScInfo } from './entities/scInfo.entity';
import { handleDatabaseError } from 'src/utils/error.util';
import { ParkingLogDto } from 'src/dto/parkingLog.dto';

@Injectable()
export class ParkingPmsService {

  constructor(
    @InjectRepository(EqInfo)
    private readonly eqInfoRepository: Repository<EqInfo>,
    @InjectRepository(EnExInfo)
    private readonly enexInfoRepository: Repository<EnExInfo>,
    @InjectRepository(ParkInfo)
    private readonly parkInfoRepository: Repository<ParkInfo>,
    @InjectRepository(RcgInfo)
    private readonly rcgInfoRepository: Repository<RcgInfo>,
    @InjectRepository(ScUserInfo)
    private readonly scUserInfoRepository: Repository<ScUserInfo>,
    @InjectRepository(ScIssInfo)
    private readonly scIssInfoRepository: Repository<ScIssInfo>,
    @InjectRepository(ScInfo)
    private readonly scInfoRepository: Repository<ScInfo>,
  ){}

  // 장비 목록 조회
  async findEqInfo(): Promise<EqInfo[]> {
    try {
      return await this.eqInfoRepository.find();
    } catch (error) {
      handleDatabaseError(error, 'findEqInfo');
    }
  }

  // 입출차 조회
  async findEnExInfo(): Promise<EnExInfo[]> {
    try {
      return await this.enexInfoRepository.find();
    } catch (error) {
      handleDatabaseError(error, 'findEnExInfo');
    }
  }

  // 입출차 로그 조회
  async findParkingLogInfo(parkingLogDto :ParkingLogDto) {
    const {name, startDate, endDate } = parkingLogDto
    try{
      const query = this.eqInfoRepository
      .createQueryBuilder('eqinfo')
      .leftJoinAndSelect('enexinfo', 'enexinfo', 'eqinfo.eqno = enexinfo.eqno')
      .select([
        'eqinfo.eqno as eqno',
        'eqinfo.name as name',
        'enexinfo.carno as carno',
        'enexinfo.enexdt as enexdt',
        'enexinfo.enextypeid as enextypeid',
        'enexinfo.tkttypeid as tkttypeid',
        'enexinfo.mkdt as mkdt',         
      ]);
        
      if (name) {
        query.where("eqinfo.name = :name", { name });
      } else {
        query.where("eqinfo.name IN (:...names)", { names: ['입구', '출구'] });
      }

     
      function convertToLocalISO(dateString, addDays = 0) {
        const date = new Date(dateString);
        date.setDate(date.getDate() + addDays);
        return new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('.')[0] + 'Z';
      }
      if (startDate || endDate){
        const setStartDate = convertToLocalISO(startDate);
        const setEndDate = convertToLocalISO(endDate, 1); 
        if (setStartDate && setEndDate) {
          console.log(setEndDate, setStartDate);
          query.andWhere('enexinfo.enexdt >= :setStartDate AND enexinfo.enexdt < :setEndDate', {
            setStartDate,
            setEndDate,
          });
        }
      }
      
      const result = await query.getRawMany();
      
      const parsingResult = result.reduce((acc, body) => {
        const { eqno, name, carno, enexdt, enextypeid, tkttypeid, mkdt } = body;
        if (!acc[eqno]) {
          acc[eqno] = { eqno, name,log: [] };
        }
        acc[eqno].log.push({ 
          carno, 
          enexdt, 
          enextypeid: enextypeid === 1 ? '입차' : enextypeid === 2 ? '출차' : enextypeid === 3 ? '수동입차': enextypeid === 4 ? '수동출차': '기타',
          tkttypeid: tkttypeid === 1 ? '일반권' : tkttypeid === 2 ? '정기권' : '기타', 
          mkdt 
        });
        return acc;
      }, {});
    
      return Object.values(parsingResult);

    }catch (error) {
      handleDatabaseError(error, 'findParkingLogInfo');
    }
  }

  /**
   * 주차 정보 조회
   */  
  async findParkInfo(): Promise<ParkInfo[]> {
    try {
      return await this.parkInfoRepository.find();
    } catch (error) {
      handleDatabaseError(error, 'findParkInfo');
    }
  }

   /**
   * 주차 정보 조회
   */  
   async findRcgInfo(): Promise<RcgInfo[]> {
    try {
      return await this.rcgInfoRepository.find();
    } catch (error) {
      handleDatabaseError(error, 'findRcgInfo');
    }
  }

   /**
   * 정기권 그룹 정보 조회
   */  
   async findScUserInfo(): Promise<ScUserInfo[]> {
    try {
      return await this.scUserInfoRepository.find();
    } catch (error) {
      handleDatabaseError(error, 'findScUserInfo');
    }
  }
  
   /**
   * 정기권 발급 정보 조회(동적)
   */  
   async findScIssInfo(): Promise<ScIssInfo[]> {
    try {
      return await this.scIssInfoRepository.find();
    } catch (error) {
      handleDatabaseError(error, 'findScIssInfo');
    }
  }

   /**
   * 정기권 정보 조회(동적)
   */  
   async findScInfo(): Promise<ScInfo[]> {
    try {
      return await this.scInfoRepository.find();
    } catch (error) {
      handleDatabaseError(error, 'findScInfo');
    }
  }

}
    