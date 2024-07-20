import { Test, TestingModule } from '@nestjs/testing';
import { ParkingPmsController } from './pms.controller';
import { ParkingPmsService } from './pms.service';

describe('ParkingPmsController', () => {
  let controller: ParkingPmsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkingPmsController],
      providers: [ParkingPmsService],
    }).compile();

    controller = module.get<ParkingPmsController>(ParkingPmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
