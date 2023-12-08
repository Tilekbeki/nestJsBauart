import { IsNumber } from 'class-validator';

export class CreateDisciplineInfoDto {
  @IsNumber()
  id_subject: number;
  @IsNumber()
  id_student: number;
  @IsNumber()
  quantitySubscribed: number;
}
