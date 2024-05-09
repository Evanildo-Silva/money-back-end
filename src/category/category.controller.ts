import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    async listCategories() {
        const listCategories = await this.categoryService.execute()

        return listCategories
    }
}
