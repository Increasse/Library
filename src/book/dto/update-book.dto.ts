import { IsString, IsOptional } from 'class-validator';

export class UpdateBookDto {
    id: number;

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    author?: string;

    @IsOptional()
    @IsString()
    genre?: string;
}