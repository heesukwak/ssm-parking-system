import { Entity, Column, PrimaryColumn } from 'typeorm';
/***
 * EnExInfo : 입출차 정보
 */
@Entity('enexinfo')
export class EnExInfo {
  @PrimaryColumn({ type: 'varchar', length: 4 })
  eqno: string; // 장비번호

  @PrimaryColumn({ type: 'datetime' })
  enexdt: Date; // 입출차 일시

  @Column({ type: 'varchar', length: 15, nullable: true })
  carno: string; // 차량번호

  @Column({ type: 'varchar', length: 36, nullable: true })
  tktno: string; // 주차권 번호

  @Column({ type: 'tinyint' })
  enextypeid: number; // 입출차 구분

  @Column({ type: 'tinyint' })
  tkttypeid: number; // 주차권 구분

  @Column({ type: 'tinyint' })
  tktmdtypeid: number; // 주차권 매체 구분

  @Column({ type: 'tinyint' })
  fstypeid: number; // 요금체계 구분

  @Column({ type: 'varchar', length: 4, nullable: true })
  rcgeqno: string; // 차번인식 장비번호

  @Column({ type: 'datetime', nullable: true })
  rcgdt: Date; // 인식 일시

  @Column({ type: 'varchar', length: 8, nullable: true })
  userid: string; // 사용자 ID

  @Column({ type: 'datetime' })
  mkdt: Date; // 생성 일시

  @Column({ type: 'datetime' })
  chdt: Date; // 변경 일시
}