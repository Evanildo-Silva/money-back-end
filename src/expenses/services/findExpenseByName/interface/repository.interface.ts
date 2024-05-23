import { ExpenseEntity } from "src/expenses/entity/expenses.entity";

export interface IFindExpenseByDescriptionRepository {
    findExpenseByDescription(description: string): Promise<ExpenseEntity | null>;
}