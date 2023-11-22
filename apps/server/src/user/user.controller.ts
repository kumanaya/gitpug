import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  ClassSerializerInterceptor,
  HttpCode,
  HttpStatus,
  UseInterceptors,
  Put,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { ErrorResponse } from 'src/shared/swagger/responses/error.response';
import { UsersResponse } from 'src/shared/swagger/responses/users.response';
import { User } from './user.entity';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ summary: 'Create a new user' })
  @ApiCreatedResponse({ type: UsersResponse, description: 'Created user' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @ApiBearerAuth()
  @Get(':username')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get an user' })
  @ApiCreatedResponse({ type: UsersResponse, description: 'Get an user' })
  @ApiBadRequestResponse({ type: ErrorResponse, description: 'Bad Request' })
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({ summary: 'Update a user' })
  @ApiOkResponse({ type: UsersResponse, description: 'Updated user' })
  @ApiNotFoundResponse({ type: ErrorResponse, description: 'Not Found' })
  update(
    @Request() req: any,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    if (parseFloat(id) !== req.user.userId) {
      throw new UnauthorizedException(
        'Você não tem permissão para atualizar este perfil',
      );
    }

    return this.usersService.update(id, updateUserDto);
  }
}
