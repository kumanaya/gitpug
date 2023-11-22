import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CryptoService } from 'src/shared/services/crypto.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private cryptoService: CryptoService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findUserByEmail(email);
    const correctPassword =
      user && (await this.cryptoService.compareHash(password, user.password));

    if (correctPassword) {
      return { id: user.id, email: user.email };
    }

    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };

    const userProfile = await this.usersService.findUserByEmail(user.email);

    return {
      user: userProfile,
      token: this.jwtService.sign(payload),
    };
  }
}
