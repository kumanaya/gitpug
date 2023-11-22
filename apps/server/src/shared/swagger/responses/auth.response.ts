import { ApiProperty } from '@nestjs/swagger';

export class AuthRequest {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export class AuthResponse {
  @ApiProperty()
  token: string;
}
