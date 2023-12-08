import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisciplineInfoService } from './discipline-info.service';
import { CreateDisciplineInfoDto } from './dto/create-discipline-info.dto';
import { UpdateDisciplineInfoDto } from './dto/update-discipline-info.dto';

@Controller('discipline-info')
export class DisciplineInfoController {
  prismaService: any;
  constructor(private readonly disciplineInfoService: DisciplineInfoService) {}

  @Post()
  async create(@Body() createDisciplineInfoDto: CreateDisciplineInfoDto) {
    const newDisciplineInfo = await this.prismaService.disciplineInfo.create({
      data: CreateDisciplineInfoDto,
    });
    return newDisciplineInfo;
  }

  @Get()
  findAll() {
    return this.disciplineInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.disciplineInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDisciplineInfoDto: UpdateDisciplineInfoDto) {
    return this.disciplineInfoService.update(+id, updateDisciplineInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disciplineInfoService.remove(+id);
  }
}
