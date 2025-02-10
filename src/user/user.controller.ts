import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('/user')
export class UsersController {
	constructor(private userService: UserService) { }

	@Post()
	async createUser(@Body() data: { telegramId: string; username?: string }) {
		try {
			return await this.userService.createUser(data);
		} catch (error) {
			throw new HttpException(
				'Ошибка при создании пользователя',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}
}