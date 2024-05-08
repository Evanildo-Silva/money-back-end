import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IUser } from "../interface/user.interface";

@Entity({ name: 'user' })
export class UserEntity implements IUser {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'email', nullable: false })
    email: string;

    @Column({ name: 'password', nullable: false })
    password: string;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;
}