import { Body, Controller, Get, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateExpenseInputDto } from 'src/expenses/services/createExpense/dto/createExpense.dto';
import { CreateExpensesService } from 'src/expenses/services/createExpense/services/createExpenses.service';
import { ExpenseEntity } from '../entity/expenses.entity';
import { FindExpenseByDescriptionInputDto } from '../services/findExpenseByDescription/dto/findExpenseByDescription.dto';
import { FindExpenseByDescriptionService } from '../services/findExpenseByDescription/services/findExpenseByDescription.service';
import { UpdateExpenseInputDto } from '../services/updateExpense/dto/updateExpenseInput.dto';
import { UpdateExpenseOutputDto } from '../services/updateExpense/dto/updateExpenseOutput.dto';
import { UpdateExpenseService } from '../services/updateExpense/service/updateexpense.service';

@ApiTags('Expenses')
@Controller('expenses')
export class ExpensesController {
    constructor(
        private readonly createExpenseService: CreateExpensesService,
        private readonly findExpenseByDescriptionService: FindExpenseByDescriptionService,
        private readonly updateExpenseService: UpdateExpenseService,
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

    @UsePipes(ValidationPipe)
    @ApiBody({ type: UpdateExpenseInputDto })
    @ApiResponse({ type: UpdateExpenseOutputDto })
    @Put()
    async updateExpense(@Body() expense: UpdateExpenseInputDto): Promise<ExpenseEntity> {
        const updatedExpense = await this.updateExpenseService.execute(expense)

        return updatedExpense
    }

}
