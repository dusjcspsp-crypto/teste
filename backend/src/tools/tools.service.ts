import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';

@Injectable()
export class ToolsService {
  constructor(private prisma: PrismaService) {}

  async create(createToolDto: CreateToolDto) {
    return this.prisma.tool.create({
      data: createToolDto,
    });
  }

  async findAll() {
    return this.prisma.tool.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.tool.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateToolDto: UpdateToolDto) {
    return this.prisma.tool.update({
      where: { id },
      data: updateToolDto,
    });
  }

  async remove(id: string) {
    return this.prisma.tool.delete({
      where: { id },
    });
  }

  async requestTool(id: string, employeeId: string) {
    return this.prisma.tool.update({
      where: { id },
      data: {
        status: 'EM_USO',
        assignedEmployeeId: employeeId,
        lastRequestDate: new Date(),
      },
    });
  }

  async returnTool(id: string) {
    return this.prisma.tool.update({
      where: { id },
      data: {
        status: 'DISPONIVEL',
        assignedEmployeeId: null,
      },
    });
  }

  async getToolHistory(id: string) {
    // Implementar histórico de movimentações da ferramenta
    return this.prisma.toolMovement.findMany({
      where: { toolId: id },
      include: {
        employee: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
