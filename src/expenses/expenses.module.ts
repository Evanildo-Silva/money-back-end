import { Module } from '@nestjs/common';
import { ExpensesServicesModule } from './services/expensesServices.module';


@Module({
  imports: [ExpensesServicesModule],
  exports: [ExpensesServicesModule],
})
export class ExpensesModule { }
