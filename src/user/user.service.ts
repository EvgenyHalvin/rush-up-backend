import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) { }

	async createUser(data: { telegramId: string; username?: string }) {
		await this.prisma.user.create({
			data: {
				telegramId: BigInt(data.telegramId),
				username: data.username,
			},
		});

		return { message: 'success' };
	}
}
