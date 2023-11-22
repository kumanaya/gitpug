import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import axios from 'axios';
import { User } from './user.entity';
import { CryptoService } from 'src/shared/services/crypto.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private cryptoService: CryptoService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const { username } = createUserDto;

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
      );

      const password = await this.cryptoService.generateHash(
        createUserDto.password,
      );

      const {
        name,
        avatar_url,
        bio,
        twitter,
        company,
        blog,
        followers,
        following,
        public_repos,
      } = response.data;

      const user = {
        username: createUserDto.username,
        email: createUserDto.email,
        password,
        name: name || null,
        avatar_url: avatar_url || null,
        bio: bio || null,
        twitter: twitter || null,
        company: company || null,
        blog: blog || null,
        followers: followers || null,
        following: following || null,
        public_repos: public_repos || null,
      };

      return this.userRepository.save(user);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new NotFoundException(
          `GitHub user with username ${username} not found`,
        );
      }
      throw error;
    }
  }

  async findOne(username: string) {
    try {
      const response_user = await axios.get(
        `https://api.github.com/users/${username}`,
      );

      const response_repos = await axios.get(
        `https://api.github.com/users/${username}/repos`,
      );

      const reposFiltred = response_repos.data.map((repo: any) => ({
        id: repo.id,
        html_url: repo.html_url,
        full_name: repo.full_name,
        avatar_url: repo.owner.avatar_url,
        description: repo.description || null,
        language: repo.language || null,
        updated_at: repo.updated_at || null,
      }));

      const {
        login,
        email,
        name,
        avatar_url,
        bio,
        twitter,
        company,
        blog,
        followers,
        following,
        public_repos,
      } = response_user.data;

      const user = {
        login,
        email: email || null,
        name: name || null,
        avatar_url: avatar_url || null,
        bio: bio || null,
        twitter: twitter || null,
        company: company || null,
        blog: blog || null,
        followers: followers || null,
        following: following || null,
        public_repos: public_repos || null,
        repos: reposFiltred || [],
      };

      return JSON.stringify(user);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new NotFoundException(
          `GitHub user with username ${username} not found`,
        );
      }
      throw error;
    }
  }

  findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  findUserByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const password = await this.cryptoService.generateHash(
      updateUserDto.password,
    );
    updateUserDto.password = password;
    return this.userRepository.update(id, updateUserDto);
  }
}
