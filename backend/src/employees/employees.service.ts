import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.employee.findMany();
  }

  async findOne(id: string) {
    return this.prisma.employee.findUnique({
      where: { id },
    });
  }

  async create(data: any) {
    return this.prisma.employee.create({
      data,
    });
  }

  async update(id: string, data: any) {
    return this.prisma.employee.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.employee.delete({
      where: { id },
    });
  }
}
