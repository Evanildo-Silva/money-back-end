import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1715134071367 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE public.user (
            id uuid NOT NULL DEFAULT uuid_generate_v4(),
            name varchar NOT NULL,
            email varchar NOT NULL UNIQUE,
            password varchar NOT NULL,
            created_at timestamp with time zone DEFAULT now() NOT NULL,
            updated_at timestamp with time zone DEFAULT now() NOT NULL,
            PRIMARY KEY (id)
          );
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        drop table public.user;
    `);
    }


}
