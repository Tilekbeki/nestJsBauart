import { Injectable } from '@nestjs/common';
import { CreateDisciplineInfoDto } from './dto/create-discipline-info.dto';
import { UpdateDisciplineInfoDto } from './dto/update-discipline-info.dto';

@Injectable()
export class DisciplineInfoService {
  prismaService: any;
  create(createDisciplineInfoDto: CreateDisciplineInfoDto) {
    return 'This action adds a new disciplineInfo';
  }

  async findAll() {
    return await this.prismaService.disciplineInfo.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} disciplineInfo`;
  }

  update(id: number, updateDisciplineInfoDto: UpdateDisciplineInfoDto) {
    return `This action updates a #${id} disciplineInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} disciplineInfo`;
  }
}
