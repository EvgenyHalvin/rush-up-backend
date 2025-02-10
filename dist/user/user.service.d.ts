import { PrismaService } from '../prisma/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: {
        telegramId: string;
        username?: string;
    }): Promise<{
        message: string;
    }>;
}
