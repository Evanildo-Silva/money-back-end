import { CategoryEntity } from "src/category/entity/category.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({ name: "expenses" })
export class ExpenseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    value: number;

    @Column()
    description: string;

    @ManyToOne(() => CategoryEntity, (category) => category.expenses)
    @JoinColumn({ name: "category_id" })
    category: CategoryEntity;

    @ManyToOne(() => UserEntity, (user) => user.expenses)
    @JoinColumn({ name: "user_id" })
    user: UserEntity;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}