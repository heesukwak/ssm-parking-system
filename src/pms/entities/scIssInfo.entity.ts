import { Entity, Column, PrimaryColumn } from 'typeorm';

/**
 * scuserinfo : 정기권 발급 정보
 */
@Entity('scissinfo')
export class ScIssInfo {
  @PrimaryColumn({ type: 'varchar', length: 4 })
  eqno: string; // 장비 번호

  @PrimaryColumn({ type: 'datetime' })
  issdt: Date; // 발급 일시

  @Column({ type: 'varchar', length: 15 })
  carno: string; // 차량 번호

  @Column({ type: 'varchar', length: 36, nullable: true })
  tktno: string; // 주차권 번호

  @Column({ type: 'tinyint' })
  scisstypeid: number; // 정기권 발급 구분 ID

  @Column({ type: 'varchar', length: 12, nullable: true })
  signer: string; // 발급자

  @Column({ type: 'date', nullable: true })
  signdate: Date; // 발급일

  @Column({ type: 'datetime', nullable: true })
  usebgndt: Date; // 사용 시작 일시

  @Column({ type: 'datetime', nullable: true })
  useenddt: Date; // 사용 종료 일시

  @Column({ type: 'int' })
  issamt: number; // 발급 금액

  @Column({ type: 'int', nullable: true })
  paytypeid: number; // 지불 구분 ID

  @Column({ type: 'varchar', length: 8, nullable: true })
  shopid: string; // 상점 ID

  @Column({ type: 'varchar', length: 32, nullable: true })
  msg: string; // 비고

  @Column({ type: 'varchar', length: 8, nullable: true })
  user: string; // 사용자

  @Column({ type: 'datetime' })
  mkdt: Date; // 생성 일시
}