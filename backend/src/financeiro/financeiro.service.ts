import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FinanceiroService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.financeiro.findMany();
  }

  async findOne(id: string) {
    return this.prisma.financeiro.findUnique({
      where: { id },
    });
  }

  async create(data: any) {
    return this.prisma.financeiro.create({
      data,
    });
  }

  async update(id: string, data: any) {
    return this.prisma.financeiro.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
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
}
