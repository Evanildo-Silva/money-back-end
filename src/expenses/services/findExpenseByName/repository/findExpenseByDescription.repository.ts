import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExpenseEntity } from "src/expenses/entity/expenses.entity";
import { Repository } from "typeorm";
import { FindExpenseByDescriptionInputDto } from "../dto/findExpenseByDescription.dto";
import { IFindExpenseByDescriptionRepository } from "../interface/repository.interface";

@Injectable()
export class FindExpenseByDescriptionRepository implements IFindExpenseByDescriptionRepository {
    constructor(
        @InjectRepository(ExpenseEntity)
        private readonly expenseRepository: Repository<ExpenseEntity>
    ) { }

    public async findExpenseByDescription({ description }: FindExpenseByDescriptionInputDto): Promise<ExpenseEntity> {
        const expense = await this.expenseRepository.findOneBy({ description });

        return expense;
    }
}
