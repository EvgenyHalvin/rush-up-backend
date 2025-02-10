import { NestFactory } from '@nestjs/core';

import { UserModule } from './user/user.module';

async function bootstrap() {
  const user = await NestFactory.create(UserModule);

  user.enableCors({
    origin: [
      'http://localhost:3000',
      'https://rush-up-frontend-production.up.railway.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  });

  await user.listen(process.env.PORT ?? 3000);
}
bootstrap();
