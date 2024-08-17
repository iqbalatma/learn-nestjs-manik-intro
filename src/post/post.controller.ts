import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PostService } from './providers/post.service';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {
        
    }

    @Get('/:userId')
    public index(
        @Param('userId') userId: string,
        @Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number
    ) {
        return this.postService.getAllData(userId, limit, page)
    }


    public store(
        @Body() createPostDto : CreatePostDto
    ) {
        return this.postService.addNewData(createPostDto)
    }


}
