import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EqInfo } from './entities/eqinfo.entity';
import { EnExInfo } from './entities/enexInfo.entity';
import { ParkInfo } from './entities/parkInfo.entity';
import { RcgInfo } from './entities/rcgInfo.entity';
import { ScUserInfo } from './entities/scuserInfo.entity';
import { ScIssInfo } from './entities/scIssInfo.entity';
import { ScInfo } from './entities/scInfo.entity';

@Injectable()
export class ParkingPmsService {
  private readonly logger = new Logger(ParkingPmsService.name);

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
      this.logger.error('Error fetching equipment information', error.stack);
      throw new HttpException('Database query failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // 입출차 조회
  async findEnExInfo(): Promise<EnExInfo[]> {
    try {
      return await this.enexInfoRepository.find();
    } catch (error) {
      this.logger.error('Error fetching entry/exit information', error.stack);
      throw new HttpException('Database query failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // 입출차 로그 조회
  async findParkingLogInfo(name?: string, startDate?: string, endDate?: string) {
    try{
      const query = await this.eqInfoRepository
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

      if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        end.setDate(end.getDate() + 1); 
        query.andWhere("enexinfo.enexdt >= :startDate AND enexinfo.enexdt < :endDate", { startDate: start, endDate: end });
      }

      const result = await query.getRawMany();

      const parsingResult = result.reduce((acc, body) => {
        const { eqno, name, carno, enexdt, enextypeid, tkttypeid, mkdt } = body;
        if (!acc[eqno]) {
          acc[eqno] = { eqno, name,log: [] };
        }
        acc[eqno].log.push({ carno, enexdt, 
          enextypeid: enextypeid === 1 ? '입차' : enextypeid === 2 ? '출차' : enextypeid === 3 ? '수동입차': enextypeid === 4 ? '수동출차': '기타',
          tkttypeid: tkttypeid === 1 ? '일반권' : tkttypeid === 2 ? '정기권' : '기타', 
          mkdt });
        return acc;
      }, {});
    
      return Object.values(parsingResult);

    }catch (error) {
      this.logger.error('Error fetching parking log information', error.stack);
      throw new HttpException('Database query failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * 주차 정보 조회
   */  
  async findParkInfo(): Promise<ParkInfo[]> {
    try {
      return await this.parkInfoRepository.find();
    } catch (error) {
      this.logger.error('Error fetching parking information', error.stack);
      throw new HttpException('Database query failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

   /**
   * 주차 정보 조회
   */  
   async findRcgInfo(): Promise<RcgInfo[]> {
    try {
      return await this.rcgInfoRepository.find();
    } catch (error) {
      this.logger.error('Error fetching recognition information', error.stack);
      throw new HttpException('Database query failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

   /**
   * 정기권 그룹 정보 조회
   */  
   async findScUserInfo(): Promise<ScUserInfo[]> {
    try {
      return await this.scUserInfoRepository.find();
    } catch (error) {
      this.logger.error('Error fetching regular user information', error.stack);
      throw new HttpException('Database query failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
   /**
   * 정기권 발급 정보 조회(동적)
   */  
   async findScIssInfo(): Promise<ScIssInfo[]> {
    try {
      return await this.scIssInfoRepository.find();
    } catch (error) {
      this.logger.error('Error fetching regular issuance information', error.stack);
      throw new HttpException('Database query failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

   /**
   * 정기권 정보 조회(동적)
   */  
   async findScInfo(): Promise<ScInfo[]> {
    try {
      return await this.scInfoRepository.find();
    } catch (error) {
      this.logger.error('Error fetching regular information', error.stack);
      throw new HttpException('Database query failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
    