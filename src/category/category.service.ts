import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from './category.repository';

@Injectable()
export class CategoryService {
    constructor(
        private readonly listCategoryRepository: CategoriesRepository
    ) { }

    async execute() {
        const listCategories = await this.listCategoryRepository.list()

        return listCategories
    }
}
