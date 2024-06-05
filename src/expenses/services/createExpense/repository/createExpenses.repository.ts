import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExpenseEntity } from "src/expenses/entity/expenses.entity";
import { Repository } from "typeorm";
import { CreateExpenseInputDto } from "../dto/createExpense.dto";
import { ICreateExpensesRepository } from "../interface/repository.interface";

@Injectable()
export class CreateExpensesRepository implements ICreateExpensesRepository {
    constructor(
        @InjectRepository(ExpenseEntity)
        private readonly expensesRepository: Repository<ExpenseEntity>,
    ) { }

    public async create({ category_id, description, value, user_id }: CreateExpenseInputDto): Promise<ExpenseEntity> {
        try {
            const newExpense = this.expensesRepository.create({ category: { id: category_id }, description, value, user: { id: user_id } })

            await this.expensesRepository.save(newExpense)

            return newExpense
        } catch (error) {
            if (error instanceof HttpException) throw error;
            throw new HttpException(
                'Ocorreu um erro ao criar desespas. Tente novamento ou contate o suporte.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

}