import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoriesRepository } from './category.repository';
import { CategoryService } from './category.service';
import { CategoryEntity } from './entity/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoryController],
  providers: [CategoryService, CategoriesRepository],
})
export class CategoryModule { }
