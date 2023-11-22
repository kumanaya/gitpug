import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import {
  ApiOperation,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthResponse } from 'src/shared/swagger/responses/auth.response';
import { ErrorResponse } from 'src/shared/swagger/responses/error.response';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'User authentication' })
  @ApiOkResponse({ type: AuthResponse, description: 'Authentication token' })
  @ApiUnauthorizedResponse({ type: ErrorResponse, description: 'Unauthorized' })
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
