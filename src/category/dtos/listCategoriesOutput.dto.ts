import { ApiProperty } from "@nestjs/swagger"

export class ListCategoriesOutputDto {
    @ApiProperty({ type: String })
    id: number

    @ApiProperty({ type: String })
    name: string

    @ApiProperty({ type: String })
    iconName: string
}