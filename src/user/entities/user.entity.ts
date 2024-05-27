import { Entity, PrimaryGeneratedColumn, Column, } from 'typeorm';
import { Role } from '../../auth/interfaces/user.interface';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ type: 'varchar', length: 50, default: 'Customer' })
  role: Role;
}
