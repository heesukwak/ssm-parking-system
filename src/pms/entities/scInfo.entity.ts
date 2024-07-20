import { Entity, Column, PrimaryColumn } from 'typeorm';

/**
 * scinfo : 정기권 정보
 */
@Entity('scinfo')
export class ScInfo {
  @PrimaryColumn({ type: 'varchar', length: 15 })
  carno: string; // 차량 번호

  @Column({ type: 'varchar', length: 36, nullable: true })
  tktno: string; // 주차권 번호

  @Column({ type: 'smallint' })
  scuserid: number; // 정기권 그룹 ID

  @Column({ type: 'tinyint' })
  scmdtypeid: number; // 정기권 매체 구분 ID

  @Column({ type: 'varchar', length: 24, nullable: true })
  carname: string; // 차량 이름

  @Column({ type: 'varchar', length: 24, nullable: true })
  name: string; // 사용자 이름

  @Column({ type: 'varchar', length: 18, nullable: true })
  tel: string; // 전화 번호

  @Column({ type: 'varchar', length: 48, nullable: true })
  org: string; // 소속

  @Column({ type: 'varchar', length: 48, nullable: true })
  part: string; // 부서(동)

  @Column({ type: 'varchar', length: 24, nullable: true })
  pos: string; // 직급(호)

  @Column({ type: 'tinyint' })
  scsttypeid: number; // 정기권 상태 구분 ID

  @Column({ type: 'datetime' })
  usebgndt: Date; // 사용 시작 일시

  @Column({ type: 'datetime' })
  useenddt: Date; // 사용 종료 일시

  @Column({ type: 'tinyint' })
  isnoti: number; // 알림 여부

  @Column({ type: 'tinyint' })
  isplot: number; // 주차 여부

  @Column({ type: 'datetime' })
  lastentdt: Date; // 최종 입차 일시
}