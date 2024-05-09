import { ListCategoriesOutputDto } from "../dtos/listCategoriesOutput.dto";

export interface ICategoryRepository {
    list(): Promise<ListCategoriesOutputDto[]>
}