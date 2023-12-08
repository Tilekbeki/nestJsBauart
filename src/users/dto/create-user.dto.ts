import { PublicFile } from '@prisma/client';
import { IsNotEmpty, IsString, isEmail, isString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  name: string;
  @IsString()
  password: string;
}

export default CreateUserDto;
