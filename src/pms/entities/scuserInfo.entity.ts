import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * scuserinfo : 정기권 그룹 정보
 */
@Entity('scuserinfo')
export class ScUserInfo {
  @PrimaryGeneratedColumn({ type: 'smallint' })
  scuserid: number; // 정기권 그룹 ID

  @Column({ type: 'varchar', length: 12 })
  name: string; // 정기권 그룹 이름

  @Column({ type: 'int', nullable: true })
  parkset: number; // 주차 설정

  @Column({ type: 'tinyint', nullable: true })
  fstypeid: number; // 요금 체계 구분

  @Column({ type: 'varchar', length: 32, nullable: true })
  dscp: string; // 설명

  @Column({ type: 'datetime' })
  chdt: Date; // 변경 일시

  @Column({ type: 'datetime' })
  mkdt: Date; // 생성 일시
}