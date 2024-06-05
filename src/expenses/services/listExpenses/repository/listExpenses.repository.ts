import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExpenseEntity } from "src/expenses/entity/expenses.entity";
import { Repository } from "typeorm";
import { ListExpensesRepositoryInterface } from "../interface/repository.interface";

@Injectable()
export class ListExpensesRepository implements ListExpensesRepositoryInterface {
    constructor(
        @InjectRepository(ExpenseEntity)
        private readonly expenseRepository: Repository<ExpenseEntity>
    ) { }

    public async listAllExpenses(): Promise<ExpenseEntity[]> {
        const listExpenses = await this.expenseRepository.find()

        return listExpenses
    }
}