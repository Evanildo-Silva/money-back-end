import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExpenseEntity } from "src/expenses/entity/expenses.entity";
import { Equal, Repository } from "typeorm";
import { ListExpensesInputDto } from "../dto/listExpensesInput.dto";
import { ListExpensesRepositoryInterface } from "../interface/repository.interface";

@Injectable()
export class ListExpensesRepository implements ListExpensesRepositoryInterface {
    constructor(
        @InjectRepository(ExpenseEntity)
        private readonly expenseRepository: Repository<ExpenseEntity>
    ) { }

    public async listAllExpenses({ user_id }: ListExpensesInputDto): Promise<ExpenseEntity[]> {
        const listExpenses = await this.expenseRepository.find({
            where: {
                user: { id: Equal(user_id) }
            }
        })

        return listExpenses
    }
}