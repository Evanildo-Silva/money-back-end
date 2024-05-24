import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateExpenseInputDto } from 'src/expenses/services/createExpense/dto/createExpense.dto';
import { CreateExpensesService } from 'src/expenses/services/createExpense/services/createExpenses.service';
import { ExpenseEntity } from '../entity/expenses.entity';
import { FindExpenseByDescriptionInputDto } from '../services/findExpenseByName/dto/findExpenseByDescription.dto';
import { FindExpenseByDescriptionService } from '../services/findExpenseByName/services/findExpenseByDescription.service';

@ApiTags('Expenses')
@Controller('expenses')
export class ExpensesController {
    constructor(
        private readonly createExpenseService: CreateExpensesService,
        private readonly findExpenseByDescriptionService: FindExpenseByDescriptionService,
    ) { }

    @UsePipes(ValidationPipe)
    @Post()
    async createExpense(@Body() expense: CreateExpenseInputDto): Promise<ExpenseEntity> {
        const newExpense = await this.createExpenseService.execute(expense)

        return newExpense
    }

    @UsePipes(ValidationPipe)
    @Get('/find-by-description')
    async findExpenseByDescription(@Query() { description }: FindExpenseByDescriptionInputDto): Promise<ExpenseEntity> {
        const expense = await this.findExpenseByDescriptionService.execute({ description })

        return expense
    }

}
