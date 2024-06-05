import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ExpenseEntity } from "src/expenses/entity/expenses.entity";
import { ListExpensesRepository } from "../repository/listExpenses.repository";

@Injectable()
export class ListExpensesService {
    constructor(
        private readonly listExpensesRepository: ListExpensesRepository
    ) { }

    public async execute(): Promise<ExpenseEntity[]> {
        try {
            const listExpenses = await this.listExpensesRepository.listAllExpenses()

            return listExpenses
        } catch (error) {
            throw new HttpException(
                'Ocorreu um erro ao listar as despesas.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}