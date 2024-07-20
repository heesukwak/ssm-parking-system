import { Entity, Column, PrimaryColumn } from 'typeorm';

/**
 * parkinfo : 주차 정보
 */
@Entity('parkinfo')
export class ParkInfo {
  @PrimaryColumn({ type: 'varchar', length: 4 })
  enteqno: string; // 입차 장비 번호

  @PrimaryColumn({ type: 'datetime' })
  entdt: Date; // 입차 일시

  @Column({ type: 'tinyint' })
  fstypeid: number; // 요금 체계 구분

  @Column({ type: 'tinyint' })
  tkttypeid: number; // 주차권 구분

  @Column({ type: 'varchar', length: 36, nullable: true })
  tktno: string; // 주차권 번호

  @Column({ type: 'varchar', length: 15, nullable: true })
  carno: string; // 차량 번호

  @Column({ type: 'varchar', length: 64, nullable: true })
  rcgfname: string; // 인식 파일 이름

  @Column({ type: 'datetime' })
  mkdt: Date; // 생성 일시
}