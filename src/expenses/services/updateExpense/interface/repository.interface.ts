import { ExpenseEntity } from "src/expenses/entity/expenses.entity";
import { UpdateExpenseInputDto } from "../dto/updateExpenseInput.dto";

export interface UpdateExpenseRepositoryInterface {
    findExpenseById(id: number): Promise<ExpenseEntity>;
    updateExpense(expense: UpdateExpenseInputDto): Promise<ExpenseEntity>;
}