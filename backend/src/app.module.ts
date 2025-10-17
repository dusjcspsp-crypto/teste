import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CustomersModule } from './customers/customers.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { LocationsModule } from './locations/locations.module';
import { ServicesModule } from './services/services.module';
import { BudgetsModule } from './budgets/budgets.module';
import { SchedulesModule } from './schedules/schedules.module';
import { BudgetItemsModule } from './budget-items/budget-items.module';
import { VisualMarkingsModule } from './visual-markings/visual-markings.module';
import { InventoryModule } from './inventory/inventory.module';
import { CatalogModule } from './catalog/catalog.module';
import { FinanceiroModule } from './financeiro/financeiro.module';
import { ToolsModule } from './tools/tools.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'frontend', 'dist'),
    }),
    PrismaModule,
    CustomersModule,
    VehiclesModule,
    EmployeesModule,
    ProductsModule,
    LocationsModule,
    ServicesModule,
    BudgetsModule,
    BudgetItemsModule,
    VisualMarkingsModule,
    SchedulesModule,
    InventoryModule,
    CatalogModule,
    FinanceiroModule,
    ToolsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

