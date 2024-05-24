import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExpensesController } from "../controller/expenses.controller";
import { ExpenseEntity } from "../entity/expenses.entity";
import { CreateExpensesRepository } from "./createExpense/repository/createExpenses.repository";
import { CreateExpensesService } from "./createExpense/services/createExpenses.service";
import { FindExpenseByDescriptionRepository } from "./findExpenseByName/repository/findExpenseByDescription.repository";
import { FindExpenseByDescriptionService } from "./findExpenseByName/services/findExpenseByDescription.service";

@Module({
    imports: [TypeOrmModule.forFeature([ExpenseEntity])],
    controllers: [ExpensesController],
    providers: [
        CreateExpensesService,
        FindExpenseByDescriptionService,
        CreateExpensesRepository,
        FindExpenseByDescriptionRepository
    ],
})
export class ExpensesServicesModule { }