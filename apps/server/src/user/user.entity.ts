import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  username: string;

  @Column()
  name: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column()
  avatar_url: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  twitter: string;

  @Column({ nullable: true })
  company: string;

  @Column({ nullable: true })
  blog: string;

  @Column()
  followers: number;

  @Column()
  following: number;

  @Column()
  public_repos: number;
}
