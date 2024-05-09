import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ListCategoriesOutputDto } from "./dtos/listCategoriesOutput.dto";
import { CategoryEntity } from "./entity/category.entity";
import { ICategoryRepository } from "./interface/repository.interface";

@Injectable()
export class CategoriesRepository implements ICategoryRepository {
    constructor(
        @InjectRepository(CategoryEntity)
        private readonly categoryRepository: Repository<CategoryEntity>
    ) { }

    public async list(): Promise<ListCategoriesOutputDto[]> {
        const categoryList = await this.categoryRepository.find()

        return categoryList
    }
}