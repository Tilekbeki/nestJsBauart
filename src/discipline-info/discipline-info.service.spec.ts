import { Test, TestingModule } from '@nestjs/testing';
import { DisciplineInfoService } from './discipline-info.service';

describe('DisciplineInfoService', () => {
  let service: DisciplineInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisciplineInfoService],
    }).compile();

    service = module.get<DisciplineInfoService>(DisciplineInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
