import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsDateString } from 'class-validator';
import { toFormattedDateString } from 'src/utils/date.util';

export class ParkingLogDto {
  @IsString()
  @IsOptional()
  //@Transform(({ value }) => String(value))
  name?: string;

  @IsDateString()
  @IsOptional()
  //@Transform(({ value }) => toFormattedDateString(value))
  startDate?: string;

  @IsDateString()
  @IsOptional()
 // @Transform(({ value }) => toFormattedDateString(value))
  endDate?: string;
}