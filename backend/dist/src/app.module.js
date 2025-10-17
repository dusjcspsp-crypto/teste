"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const customers_module_1 = require("./customers/customers.module");
const vehicles_module_1 = require("./vehicles/vehicles.module");
const employees_module_1 = require("./employees/employees.module");
const products_module_1 = require("./products/products.module");
const locations_module_1 = require("./locations/locations.module");
const services_module_1 = require("./services/services.module");
const budgets_module_1 = require("./budgets/budgets.module");
const schedules_module_1 = require("./schedules/schedules.module");
const budget_items_module_1 = require("./budget-items/budget-items.module");
const visual_markings_module_1 = require("./visual-markings/visual-markings.module");
const inventory_module_1 = require("./inventory/inventory.module");
const catalog_module_1 = require("./catalog/catalog.module");
const financeiro_module_1 = require("./financeiro/financeiro.module");
const tools_module_1 = require("./tools/tools.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', '..', '..', 'frontend', 'dist'),
            }),
            prisma_module_1.PrismaModule,
            customers_module_1.CustomersModule,
            vehicles_module_1.VehiclesModule,
            employees_module_1.EmployeesModule,
            products_module_1.ProductsModule,
            locations_module_1.LocationsModule,
            services_module_1.ServicesModule,
            budgets_module_1.BudgetsModule,
            budget_items_module_1.BudgetItemsModule,
            visual_markings_module_1.VisualMarkingsModule,
            schedules_module_1.SchedulesModule,
            inventory_module_1.InventoryModule,
            catalog_module_1.CatalogModule,
            financeiro_module_1.FinanceiroModule,
            tools_module_1.ToolsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map