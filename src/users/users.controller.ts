import { Body, Controller, Get, Param, Post, Query, Req, ParseIntPipe, DefaultValuePipe, ValidationPipe, Patch } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-params.dto';
import { PatchUserDto } from './dtos/patch-user.dto copy';
import { UserService } from './providers/user.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) {
        
    }

    @Get("/:id?")
    public getUsers(
        @Param() getUsersParamDto: GetUsersParamDto,
        @Query("limit", new DefaultValuePipe(10),ParseIntPipe) limit: number,
        @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number,
    ) {
        
        return this.userService.findAll(getUsersParamDto, limit, page);
    }


    //this is recomended way
    @Post()
    public createUsers(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto)
        return "send a post request to users endpoint"
    }

    // @Post()
    // public createUsers(@Req() request: Request) {
    //     console.log(request)
    //     return "send a post request to users endpoint"
    // }

    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDto) {
        
    }
}
