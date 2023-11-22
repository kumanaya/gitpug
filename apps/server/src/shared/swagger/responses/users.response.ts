import { ApiProperty } from '@nestjs/swagger';

export class UsersResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  avatar_url: string;

  @ApiProperty()
  bio: string;

  @ApiProperty()
  twitter: string;

  @ApiProperty()
  company: string;

  @ApiProperty()
  blog: string;

  @ApiProperty()
  followers: string;

  @ApiProperty()
  following: string;

  @ApiProperty()
  public_repos: string;

  createdAt: Date;
}
