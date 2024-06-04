import { HttpException, Injectable } from "@nestjs/common";
import { FindExpenseByDescriptionInputDto } from "../dto/findExpenseByDescription.dto";
import { FindExpenseByDescriptionRepository } from "../repository/findExpenseByDescription.repository";

@Injectable()
export class FindExpenseByDescriptionService {
    constructor(
        private readonly findExpenseByDescriptionRepository: FindExpenseByDescriptionRepository
    ) { }

    public async execute({ description }: FindExpenseByDescriptionInputDto) {
        const expense = await this.findExpenseByDescriptionRepository.findExpenseByDescription({ description })

        if (!expense) {
            throw new HttpException(
                'Erro ao buscar pedidos de exames do usuário',
                500,
            );
        }

        return expense
    }
}