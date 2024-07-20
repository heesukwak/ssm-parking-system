import { Test, TestingModule } from '@nestjs/testing';
import { ParkingPmsService } from './pms.service';

describe('ParkingPmsService', () => {
  let service: ParkingPmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkingPmsService],
    }).compile();

    service = module.get<ParkingPmsService>(ParkingPmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
