import { Module } from '@nestjs/common';
import { AuthController } from './api/auth/auth.controller.js';
import { RegisterUseCase } from './application/register/register.usecase.js';
import { LoginUseCase } from './application/login/login.usecase.js';
import { LogoutUseCase } from './application/logout/logout.usecase.js';
import { ForgotPasswordUseCase } from './application/forgot-password/forgot-password.usecase.js';
import { ResetPasswordUseCase } from './application/reset-password/reset-password.usecase.js';
import { UserRepositoryAdapter } from './adapters/user-repository/user-repository.adapter.js';
import { EmailAdapter } from './adapters/email/email.adapter.js';

@Module({
        providers: [
                RegisterUseCase,
                LoginUseCase,
                LogoutUseCase,
                ForgotPasswordUseCase,
                ResetPasswordUseCase,
                UserRepositoryAdapter,
                EmailAdapter
        ],
        controllers: [AuthController]
})
export class AuthModule {}
