import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ExpenseEntity } from "src/expenses/entity/expenses.entity";
import { ListExpensesInputDto } from "../dto/listExpensesInput.dto";
import { ListExpensesRepository } from "../repository/listExpenses.repository";

@Injectable()
export class ListExpensesService {
    constructor(
        private readonly listExpensesRepository: ListExpensesRepository
    ) { }

    public async execute({ user_id }: ListExpensesInputDto): Promise<ExpenseEntity[]> {
        try {
            const listExpenses = await this.listExpensesRepository.listAllExpenses({ user_id })

            return listExpenses
        } catch (error) {
            throw new HttpException(
                'Ocorreu um erro ao listar as despesas.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}