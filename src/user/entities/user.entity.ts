import { ExpenseEntity } from "src/expenses/entity/expenses.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @OneToMany(() => ExpenseEntity, (expense) => expense.user)
    expenses: ExpenseEntity[];

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date;
}