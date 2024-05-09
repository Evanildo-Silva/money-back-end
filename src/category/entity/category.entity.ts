import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("category")
export class CategoryEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ name: 'name', nullable: false })
    name: string;

    @Column({ name: 'icon_name', nullable: false })
    iconName: string;
}