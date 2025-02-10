"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const user_module_1 = require("./user/user.module");
async function bootstrap() {
    const user = await core_1.NestFactory.create(user_module_1.UserModule);
    await user.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map