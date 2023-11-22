import { Injectable } from '@nestjs/common';
import { compare, hashSync } from 'bcryptjs';

@Injectable()
export class CryptoService {
  async generateHash(plainText: string): Promise<string> {
    return await hashSync(plainText, 10);
  }

  async compareHash(plainText: string, hash: string): Promise<boolean> {
    return await compare(plainText, hash);
  }
}
