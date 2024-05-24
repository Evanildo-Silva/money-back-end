import { ExpenseEntity } from "src/expenses/entity/expenses.entity";
import { FindExpenseByDescriptionInputDto } from "../dto/findExpenseByDescription.dto";

export interface IFindExpenseByDescriptionRepository {
    findExpenseByDescription({ description }: FindExpenseByDescriptionInputDto): Promise<ExpenseEntity | null>;
}