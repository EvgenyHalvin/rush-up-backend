import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  async login(@Query('telegramId') telegramId: string) {
    const result = await this.authService.validateOrCreateUser(
      Number(telegramId),
    );
    return { message: 'User authenticated', token: result.token };
  }
}
