import { Module } from '@nestjs/common';
import { DisciplineInfoService } from './discipline-info.service';
import { DisciplineInfoController } from './discipline-info.controller';

@Module({
  controllers: [DisciplineInfoController],
  providers: [DisciplineInfoService]
})
export class DisciplineInfoModule {}
