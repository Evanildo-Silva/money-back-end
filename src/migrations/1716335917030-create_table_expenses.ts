import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableExpenses1716335917030 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE public.expenses (
            id SERIAL PRIMARY KEY,
            value DECIMAL(10, 2) NOT NULL,
            description VARCHAR NOT NULL,
            category_id INT NOT NULL,
            user_id uuid NOT NULL DEFAULT uuid_generate_v4(),
            CONSTRAINT FK_expense_category FOREIGN KEY (category_id) REFERENCES public.category(id),
            CONSTRAINT FK_expense_user FOREIGN KEY (user_id) REFERENCES public.user(id),
            created_at timestamp with time zone DEFAULT now() NOT NULL,
            updated_at timestamp with time zone DEFAULT now() NOT NULL
          );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        drop table public.expenses;
    `);
    }

}

