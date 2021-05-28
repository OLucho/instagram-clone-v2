import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Like } from 'src/modules/like/like.entity';
import { User } from 'src/modules/user/user.entity';
import { Comment } from 'src/modules/comment/comment.entity';

@Entity()
export class Photo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @Column()
  key: string;

  @ManyToOne(() => User, (user) => user.photos, { onDelete: 'CASCADE' })
  user: User;

  @OneToMany(() => Like, (like) => like.photo, { onDelete: 'CASCADE' })
  likes: Like[];

  @OneToMany(() => Comment, (comment) => comment.photo, { onDelete: 'CASCADE' })
  comment: Comment[];

  @Column()
  userId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
