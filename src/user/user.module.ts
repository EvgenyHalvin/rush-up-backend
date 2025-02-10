import { Module } from '@nestjs/common';

import { UsersController } from './user.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
	controllers: [UsersController],
	providers: [PrismaService],
	exports: [],
})
export class UserModule { }