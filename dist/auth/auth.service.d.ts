import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private jwtService;
    private prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    validateOrCreateUser(telegramId: number): Promise<{
        user: {
            id: number;
            telegramId: bigint;
            createdAt: Date;
        };
        token: string;
    }>;
}
