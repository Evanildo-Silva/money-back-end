import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableCategory1715217690253 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE public.category (
            id SERIAL PRIMARY KEY,
            name VARCHAR NOT NULL UNIQUE,
            icon_name VARCHAR NULL UNIQUE
          );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        drop table public.category;
    `);
    }

}
