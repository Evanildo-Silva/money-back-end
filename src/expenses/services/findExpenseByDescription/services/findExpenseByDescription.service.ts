import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { FindExpenseByDescriptionInputDto } from "../dto/findExpenseByDescription.dto";
import { FindExpenseByDescriptionRepository } from "../repository/findExpenseByDescription.repository";

@Injectable()
export class FindExpenseByDescriptionService {
    constructor(
        private readonly findExpenseByDescriptionRepository: FindExpenseByDescriptionRepository
    ) { }

    public async execute({ description }: FindExpenseByDescriptionInputDto) {
        try {
            const expense = await this.findExpenseByDescriptionRepository.findExpenseByDescription({ description })

            return expense
        } catch (error) {
            throw new HttpException(
                'Ocorreu um erro ao localizar despesa.',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }

    }
}