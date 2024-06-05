import { ExpenseEntity } from "src/expenses/entity/expenses.entity";
import { ListExpensesInputDto } from "../dto/listExpensesInput.dto";

export interface ListExpensesRepositoryInterface {
    listAllExpenses({ user_id }: ListExpensesInputDto): Promise<ExpenseEntity[] | []>;
}