import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UpdateExpenseInputDto } from "../dto/updateExpenseInput.dto";
import { UpdateExpenseRepository } from "../repository/updateExpense.repository";

@Injectable()
export class UpdateExpenseService {
    constructor(
        private readonly updateExpenseRepository: UpdateExpenseRepository
    ) { }

    public async execute(expense: UpdateExpenseInputDto) {
        const expenseToUpdate = await this.updateExpenseRepository.findExpenseById(expense.id)

        if (!expenseToUpdate) {
            throw new HttpException(
                'Despesa não cadastrada',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }

        try {
            const updatedExpense = await this.updateExpenseRepository.updateExpense(expense)

            return updatedExpense
        } catch (error) {
            throw new HttpException(
                'Erro ao atualizar despesa',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}