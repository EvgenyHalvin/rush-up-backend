import { NestFactory } from '@nestjs/core';

import { UserModule } from './user/user.module';

async function bootstrap() {
  const user = await NestFactory.create(UserModule);
  await user.listen(process.env.PORT ?? 3000);
}
bootstrap();
