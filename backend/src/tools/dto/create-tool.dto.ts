import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateToolDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  code?: string;

  @IsString()
  @IsOptional()
  defaultLocation?: string;

  @IsNumber()
  @IsOptional()
  acquisitionValue?: number;

  @IsString()
  @IsOptional()
  status?: string = 'DISPONIVEL';
}
