import { BadRequestException } from '@nestjs/common';

export function toFormattedDateString(value: any): string {
  console.log('Transforming date:', value); // 로그 추가
  if (typeof value === 'string') {
    if (/^\d{8}$/.test(value)) {
      // YYYYMMDD 형식
      return `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`;
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      // YYYY-MM-DD 형식
      return value;
    } else if (/^\d{6}-\d{2}$/.test(value)) {  
    }
  }
  throw new BadRequestException(`Invalid date format: ${value}`);
}