import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { EnExInfo } from './enexInfo.entity';
/***
 * eqinfo : 장비 정보
 */
@Entity('eqinfo')
export class EqInfo {
  @PrimaryColumn({ type: 'varchar', length: 4 })
  eqno: string; // 장비번호

  @Column({ type: 'varchar', length: 8 })
  name: string; // 이름

  @Column({ type: 'varchar', length: 15, nullable: true })
  addrip: string; // IP주소

  @Column({ type: 'smallint', nullable: true })
  portip: number; // IP포트

  @Column({ type: 'varchar', length: 4 })
  mngeqno: string; // 관리장비번호

  @Column({ type: 'tinyint' })
  plotid: number; // 주차장ID

  @Column({ type: 'tinyint' })
  eqloctypeid: number; // 장비위치구분

  @Column({ type: 'smallint' })
  seqtypeid: number; // 상세장비구분

  @Column({ type: 'tinyint' })
  locno: number; // 위치번호

  @Column({ type: 'tinyint' })
  ordno: number; // 순번

  @Column({ type: 'tinyint', nullable: true })
  used: number; // 사용여부

  @Column({ type: 'datetime' })
  chdt: Date; // 변경일시

  @Column({ type: 'datetime' })
  mkdt: Date; // 생성일시

  @OneToMany(() => EnExInfo, enexinfo => enexinfo.eqinfo)
  enexinfo: EnExInfo[];
}