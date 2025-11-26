import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AuthModule } from './auth/auth.module.js';
import { ConfigModule } from '@nestjs/config';

@Module({
        imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule],
        controllers: [AppController],
        providers: []
})
export class AppModule {}
