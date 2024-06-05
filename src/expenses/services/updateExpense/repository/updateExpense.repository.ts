import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExpenseEntity } from "src/expenses/entity/expenses.entity";
import { Repository } from "typeorm";
import { UpdateExpenseInputDto } from "../dto/updateExpenseInput.dto";
import { UpdateExpenseRepositoryInterface } from "../interface/repository.interface";

@Injectable()
export class UpdateExpenseRepository implements UpdateExpenseRepositoryInterface {
    constructor(
        @InjectRepository(ExpenseEntity)
        private readonly expenseRepository: Repository<ExpenseEntity>
    ) { }

    public async findExpenseById(id: number): Promise<ExpenseEntity> {
        const expense = await this.expenseRepository.findOneBy({ id })

        return expense
    }

    public async updateExpense(expense: UpdateExpenseInputDto): Promise<ExpenseEntity> {
        const updatedExpense = await this.expenseRepository.save(expense)

        return updatedExpense
    }
}