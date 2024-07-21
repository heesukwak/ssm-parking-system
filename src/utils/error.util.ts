import { HttpException, HttpStatus } from '@nestjs/common';
import { Logger } from '@nestjs/common';

export function handleDatabaseError(error: any, context: string) {
  const logger = new Logger(context);
  logger.error(`Error in ${context}`, error.stack);
  throw new HttpException('Database query failed', HttpStatus.INTERNAL_SERVER_ERROR);
}