import { Injectable } from '@nestjs/common';
import { ExpenseEntity } from 'src/expenses/entity/expenses.entity';
import { CreateExpenseInputDto } from '../dto/createExpense.dto';
import { CreateExpensesRepository } from '../repository/createExpenses.repository';

@Injectable()
export class CreateExpensesService {
    constructor(
        private readonly createExpensesRepository: CreateExpensesRepository
    ) { }
    public async execute(expense: CreateExpenseInputDto): Promise<ExpenseEntity> {
        const newExpense = await this.createExpensesRepository.create({ ...expense })

        return newExpense
    }
}
