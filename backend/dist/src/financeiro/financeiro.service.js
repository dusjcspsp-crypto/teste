"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceiroService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FinanceiroService = class FinanceiroService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.financeiro.findMany();
    }
    async findOne(id) {
        return this.prisma.financeiro.findUnique({
            where: { id },
        });
    }
    async create(data) {
        return this.prisma.financeiro.create({
            data,
        });
    }
    async update(id, data) {
        return this.prisma.financeiro.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.financeiro.delete({
            where: { id },
        });
    }
    async getSummary() {
        const receitas = await this.prisma.financeiro.findMany({
            where: { type: 'receita' },
        });
        const despesas = await this.prisma.financeiro.findMany({
            where: { type: 'despesa' },
        });
        const totalReceitas = receitas.reduce((sum, item) => sum + item.amount, 0);
        const totalDespesas = despesas.reduce((sum, item) => sum + item.amount, 0);
        return {
            totalReceitas,
            totalDespesas,
            receitasMes: totalReceitas,
            despesasMes: totalDespesas,
            lucroLiquidoMes: totalReceitas - totalDespesas,
        };
    }
};
exports.FinanceiroService = FinanceiroService;
exports.FinanceiroService = FinanceiroService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FinanceiroService);
//# sourceMappingURL=financeiro.service.js.map