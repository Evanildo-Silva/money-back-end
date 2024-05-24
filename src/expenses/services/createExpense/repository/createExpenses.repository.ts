import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExpenseEntity } from "src/expenses/entity/expenses.entity";
import { Repository } from "typeorm";
import { CreateExpenseInputDto } from "../dto/createExpense.dto";
import { ICreateExpensesRepository } from "../interface/repository.interface";

@Injectable()
export class CreateExpensesRepository implements ICreateExpensesRepository {
    constructor(
        @InjectRepository(ExpenseEntity)
        private readonly expensesRepository: Repository<ExpenseEntity>,
    ) { }

    public async create({ category_id, description, value, user_id }: CreateExpenseInputDto): Promise<ExpenseEntity> {
        const newExpense = this.expensesRepository.create({ category: { id: category_id }, description, value, user: { id: user_id } })

        await this.expensesRepository.save(newExpense)

        return newExpense
    }

}