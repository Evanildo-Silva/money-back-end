import { Injectable } from "@nestjs/common";
import { ExpenseEntity } from "src/expenses/entity/expenses.entity";
import { Repository } from "typeorm";
import { IFindExpenseByDescriptionRepository } from "../interface/repository.interface";

@Injectable()
export class FindExpenseByDescriptionRepository implements IFindExpenseByDescriptionRepository {
    constructor(private readonly expenseRepository: Repository<ExpenseEntity>) { }
    public async findExpenseByDescription(description: string): Promise<ExpenseEntity> {
        const expense = await this.expenseRepository.findOneBy({ description });

        return expense;
    }
}