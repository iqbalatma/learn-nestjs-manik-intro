import { Body, Controller, Get, Param, Post, Query, Req, ParseIntPipe, DefaultValuePipe, ValidationPipe, Patch } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-params.dto';
import { PatchUserDto } from './dtos/patch-user.dto copy';

@Controller('users')
export class UsersController {
    
    @Get("/:id?")
    public getUsers(
        @Param() getUsersParamDto: GetUsersParamDto,
        @Query("limit", new DefaultValuePipe(10),ParseIntPipe) limit: number,
        @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number,
    ) {

        return "send a get request to users endpoint";
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
