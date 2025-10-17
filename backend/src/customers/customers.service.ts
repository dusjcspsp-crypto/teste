import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.customer.findMany({
      include: {
        vehicles: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.customer.findUnique({
      where: { id },
      include: {
        vehicles: true,
        budgets: true,
      },
    });
  }

  async create(data: any) {
    return this.prisma.customer.create({
      data,
    });
  }

  async update(id: string, data: any) {
    return this.prisma.customer.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.customer.delete({
      where: { id },
    });
  }

  async getStats() {
    const total = await this.prisma.customer.count();
    return {
      total,
      active: total,
      vip: 0,
      newThisMonth: 0,
    };
  }
}
