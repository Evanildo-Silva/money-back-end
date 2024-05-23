import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateExpenseInputDto } from 'src/expenses/services/createExpense/dto/createExpense.dto';
import { CreateExpensesService } from 'src/expenses/services/createExpense/services/createExpenses.service';
import { ExpenseEntity } from '../entity/expenses.entity';

@ApiTags('Expenses')
@Controller('expenses')
export class ExpensesController {
    constructor(
        private readonly createExpenseService: CreateExpensesService
    ) { }

    @UsePipes(ValidationPipe)
    @Post()
    async createExpense(@Body() expense: CreateExpenseInputDto): Promise<ExpenseEntity> {
        const newExpense = await this.createExpenseService.execute(expense)

        return newExpense
    }
}
