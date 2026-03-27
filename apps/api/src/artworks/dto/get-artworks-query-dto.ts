import { IsBooleanString, IsOptional, IsString } from 'class-validator';

export class GetArtworksQueryDto {
    @IsOptional()
    @IsString()
    collection?: string;

    @IsOptional()
    @IsString()
    technique?: string;

    @IsOptional()
    @IsBooleanString()
    available?: string;

    @IsOptional()
    @IsBooleanString()
    featured?: string
}