import { ExpenseEntity } from "src/expenses/entity/expenses.entity";

export interface ListExpensesRepositoryInterface {
    listAllExpenses(): Promise<ExpenseEntity[]>;
}