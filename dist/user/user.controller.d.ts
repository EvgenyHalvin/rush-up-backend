import { UserService } from './user.service';
export declare class UsersController {
    private userService;
    constructor(userService: UserService);
    createUser(data: {
        telegramId: string;
        username?: string;
    }): Promise<{
        message: string;
    }>;
}
