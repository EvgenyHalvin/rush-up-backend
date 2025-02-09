import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async validateOrCreateUser(telegramId: number) {
    let user = await this.prisma.user.findUnique({ where: { telegramId } });

    if (!user) {
      user = await this.prisma.user.create({ data: { telegramId } });
    }

    const token = this.jwtService.sign({
      id: user.id,
      telegramId: user.telegramId,
    });
    return { user, token };
  }
}
