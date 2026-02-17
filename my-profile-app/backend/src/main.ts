import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');  // This adds /api to all routes
  app.enableCors();
  await app.listen(process.env.PORT || 3001);
}
bootstrap();