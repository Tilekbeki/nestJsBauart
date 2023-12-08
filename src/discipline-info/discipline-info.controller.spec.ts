import { Test, TestingModule } from '@nestjs/testing';
import { DisciplineInfoController } from './discipline-info.controller';
import { DisciplineInfoService } from './discipline-info.service';

describe('DisciplineInfoController', () => {
  let controller: DisciplineInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisciplineInfoController],
      providers: [DisciplineInfoService],
    }).compile();

    controller = module.get<DisciplineInfoController>(DisciplineInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
