import { ExpenseEntity } from "src/expenses/entity/expenses.entity";
import { CreateExpenseInputDto } from "../dto/createExpense.dto";

export interface ICreateExpensesRepository {
    create(expense: CreateExpenseInputDto): Promise<ExpenseEntity>;
}