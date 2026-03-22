import { 
    IsArray,
    ArrayMinSize,
    IsBoolean,
    IsIn,
    IsNumber,
    IsPositive,
    IsString,
    Min,
    MinLength,
} from 'class-validator';

export class CreateArtworkDto {
    @IsString()
    @MinLength(3)
    slug: string;

    @IsString()
    @MinLength(2)
    title: string;

    @IsString()
    @MinLength(10)
    description: string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsIn(['UYU', 'USD'])
    currency: 'UYU' | 'USD';

    @IsNumber()
    @Min(1)
    widthCm: number;

    @IsNumber()
    @Min(1)
    heightCm: number;

    @IsString()
    @MinLength(2)
    technique: string;

    @IsString()
    @MinLength(2)
    collection: string;

    @IsArray()
    @ArrayMinSize(1)
    @IsString({ each: true })
    images: string[];

    @IsBoolean()
    available: boolean;

    @IsBoolean()
    featured: boolean;
}