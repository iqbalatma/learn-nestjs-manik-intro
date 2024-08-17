import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "../dtos/create-post.dto";
import { UserService } from "src/users/providers/user.service";

@Injectable()
export class PostService {
    constructor(private readonly userService : UserService) {
        
    }

    public getAllData(
        userId: string,
        limit: number,
        page: number,
    ) {
        const user = this.userService.findById(userId)
        console.log(userId)
        return [
            {
                title: "Halo",
                author: "Iqbal"
            },
            {
                title: "Halo halo bandung",
                author: "Atma"
            }
        ];
    }

    public addNewData(createPostDto : CreatePostDto) {
        return  {
            title: "Halo",
            author: "Iqbal"
        }
    }

}