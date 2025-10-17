import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.inventory.findMany();
  }

  async findOne(id: string) {
    return this.prisma.inventory.findUnique({
      where: { id },
    });
  }

  async create(data: any) {
    return this.prisma.inventory.create({
      data,
    });
  }

  async update(id: string, data: any) {
    return this.prisma.inventory.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.inventory.delete({
      where: { id },
    });
  }
}
