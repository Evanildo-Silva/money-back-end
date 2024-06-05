import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExpensesController } from "../controller/expenses.controller";
import { ExpenseEntity } from "../entity/expenses.entity";
import { CreateExpensesRepository } from "./createExpense/repository/createExpenses.repository";
import { CreateExpensesService } from "./createExpense/services/createExpenses.service";
import { FindExpenseByDescriptionRepository } from "./findExpenseByDescription/repository/findExpenseByDescription.repository";
import { FindExpenseByDescriptionService } from "./findExpenseByDescription/services/findExpenseByDescription.service";
import { UpdateExpenseRepository } from "./updateExpense/repository/updateExpense.repository";
import { UpdateExpenseService } from "./updateExpense/service/updateexpense.service";

@Module({
    imports: [TypeOrmModule.forFeature([ExpenseEntity])],
    controllers: [ExpensesController],
    providers: [
        CreateExpensesService,
        FindExpenseByDescriptionService,
        UpdateExpenseService,
        CreateExpensesRepository,
        FindExpenseByDescriptionRepository,
        UpdateExpenseRepository
    ],
})
export class ExpensesServicesModule { }