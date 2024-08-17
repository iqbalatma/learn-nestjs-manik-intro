import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UserService } from 'src/users/providers/user.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(()=> UserService))
        private readonly userService: UserService) {
    }
    public login(email: string, password: string, id: string) {
        const user = this.userService.findById("1234")

        return "SAMPLE TOKEN"
    }

    public isAuthenticated(): boolean {
        return true;
    }
}
