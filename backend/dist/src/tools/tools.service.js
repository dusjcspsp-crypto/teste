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
exports.ToolsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ToolsService = class ToolsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createToolDto) {
        return this.prisma.tool.create({
            data: createToolDto,
        });
    }
    async findAll() {
        return this.prisma.tool.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        return this.prisma.tool.findUnique({
            where: { id },
        });
    }
    async update(id, updateToolDto) {
        return this.prisma.tool.update({
            where: { id },
            data: updateToolDto,
        });
    }
    async remove(id) {
        return this.prisma.tool.delete({
            where: { id },
        });
    }
    async requestTool(id, employeeId) {
        return this.prisma.tool.update({
            where: { id },
            data: {
                status: 'EM_USO',
                assignedEmployeeId: employeeId,
                lastRequestDate: new Date(),
            },
        });
    }
    async returnTool(id) {
        return this.prisma.tool.update({
            where: { id },
            data: {
                status: 'DISPONIVEL',
                assignedEmployeeId: null,
            },
        });
    }
    async getToolHistory(id) {
        return this.prisma.toolMovement.findMany({
            where: { toolId: id },
            include: {
                employee: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
};
exports.ToolsService = ToolsService;
exports.ToolsService = ToolsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ToolsService);
//# sourceMappingURL=tools.service.js.map