import { IsString, IsOptional, IsDateString } from 'class-validator';

export class ParkingLogDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsDateString()
  @IsOptional()
  startDate?: string;

  @IsDateString()
  @IsOptional()
  endDate?: string;
}