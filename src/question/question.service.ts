import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TypeOfQuestion } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import CreateQuestionDto from './dto/create-question.dto';

@Injectable()
export class QuestionService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  // create(data) {
  //  return this.prismaService.question.create({
  //   data: {
  //     title: data.title,
  //     type: data.type,
  //     id_task: data.id_task,
  //   }
  //  })
  // }


  async create(createQuestionDto: CreateQuestionDto) {
    return await this.prismaService.question.create({
     data: createQuestionDto,
    })
   }


  async findTaskQuestion(task_id: number) {
    return await this.prismaService.question.findMany({
      where:{
        id_task:task_id
      }
    })
  }

  async findOne(id: number) {
    const question = await this.prismaService.question.findUnique({
      where: {
        id,
      },
    });
    if (question) {
      return question;
    }
    throw new HttpException(
      'Question with this id does not exist',
      HttpStatus.NOT_FOUND,
    );;
  }



  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
