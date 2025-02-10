import { NestFactory } from '@nestjs/core';

import { UserModule } from './user/user.module';

async function bootstrap() {
  const user = await NestFactory.create(UserModule);

  user.enableCors({
    origin: [/^https:\/\/([\w-]+\.)?rush-up\.com$/, 'http://localhost'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  });

  await user.listen(process.env.PORT ?? 3000);
}
bootstrap();
