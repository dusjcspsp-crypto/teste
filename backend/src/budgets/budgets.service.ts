import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BudgetsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.budget.findMany();
  }

  async findOne(id: string) {
    return this.prisma.budget.findUnique({
      where: { id },
    });
  }

  async create(data: any) {
    return this.prisma.budget.create({
      data,
    });
  }

  async update(id: string, data: any) {
    return this.prisma.budget.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.budget.delete({
      where: { id },
    });
  }

  async getStats() {
    const total = await this.prisma.budget.count();
    return {
      total,
      pending: 0,
      approved: 0,
      rejected: 0,
      totalValueThisMonth: 0,
    };
  }
}
