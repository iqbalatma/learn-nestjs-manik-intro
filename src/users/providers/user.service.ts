import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-params.dto";
import { AuthService } from "src/auth/providers/auth.service";

@Injectable()
export class UserService{
    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ) {
        
    }
    getHello(): string {
        return "Halo"
    }


    public async findAll(
        getUsersParamDto: GetUsersParamDto,
        limit: number,
        page: number
    ) {
        return [
            {
                firstName: "John",
                email : "john@mail.com"
            },
            {
                firstName: "cena",
                email : "cena@mail.com"
            }
        ];
    }

    public async findById(
        id:string
    ) {
        return {
            id: 123,
            firstName: "John",
            email : "john@mail.com"
        }
    }
}