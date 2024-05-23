import { ExpenseEntity } from "src/expenses/entity/expenses.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("category")
export class CategoryEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'icon_name', nullable: false })
    iconName: string;

    @OneToMany(() => ExpenseEntity, (expense) => expense.category)
    expenses: ExpenseEntity[];
}