import { Entity, Column, PrimaryColumn } from 'typeorm';

/**
 * rcginfo : 차번인식 정보 
 */
@Entity('rcginfo')
export class RcgInfo {
  @PrimaryColumn({ type: 'varchar', length: 4 })
  eqno: string; // 장비 번호

  @PrimaryColumn({ type: 'datetime' })
  rcgdt: Date; // 차번인식 일시

  @PrimaryColumn({ type: 'varchar', length: 15 })
  carno: string; // 차량 번호

  @Column({ type: 'tinyint' })
  rcgtypeid: number; // 차번인식 구분

  @Column({ type: 'varchar', length: 64, nullable: true })
  rcgfname: string; // 차번인식 파일 이름

  @Column({ type: 'datetime' })
  mkdt: Date; // 생성 일시
}