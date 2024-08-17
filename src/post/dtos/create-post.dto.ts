import { IsAlphanumeric, IsNotEmpty, MaxLength, MinLength } from "class-validator";


export class CreatePostDto {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    @IsAlphanumeric()
    title: string;

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    @IsAlphanumeric()
    author: string;
}