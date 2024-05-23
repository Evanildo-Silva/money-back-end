import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExpensesController } from "../controller/expenses.controller";
import { ExpenseEntity } from "../entity/expenses.entity";
import { CreateExpensesRepository } from "./createExpense/repository/createExpenses.repository";
import { CreateExpensesService } from "./createExpense/services/createExpenses.service";

@Module({
    imports: [TypeOrmModule.forFeature([ExpenseEntity])],
    controllers: [ExpensesController],
    providers: [CreateExpensesService, CreateExpensesRepository],
})
export class ExpensesServicesModule { }