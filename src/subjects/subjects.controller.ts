import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Res,
  Req,
} from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import JwtAuthenticationGuard from 'src/authentication/jwt-authentication.guard';
import { UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import RoleGuard from '../guards/checkingRoles.guard';
import { ApiTags } from '@nestjs/swagger';
import RequestWithUser from 'src/authentication/requestWithUser.interface';

@ApiTags('subjects')
@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  create(@Body() createSubjectDto: CreateSubjectDto, @Req() request: RequestWithUser) {
    return this.subjectsService.create(createSubjectDto, request.user.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthenticationGuard)
  async findOne(@Param('id') id: string) {
    const subject = await this.subjectsService.findOne(+id);
    return subject;
  }

  @Get()
  @UseGuards(RoleGuard('ADMIN'))
  findAll() {
    return this.subjectsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectsService.update(+id, updateSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectsService.remove(+id);
  }
}
