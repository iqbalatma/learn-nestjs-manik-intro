import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches, Max, MaxLength, Min, MinLength } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
export class PatchUserDto extends PartialType(CreateUserDto) {
    
}