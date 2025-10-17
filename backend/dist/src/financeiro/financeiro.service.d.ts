import { PrismaService } from '../prisma/prisma.service';
export declare class FinanceiroService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string | null;
        description: string;
        budgetId: string | null;
        employeeId: string | null;
        date: Date;
        amount: number;
        type: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string | null;
        description: string;
        budgetId: string | null;
        employeeId: string | null;
        date: Date;
        amount: number;
        type: string;
    }>;
    create(data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string | null;
        description: string;
        budgetId: string | null;
        employeeId: string | null;
        date: Date;
        amount: number;
        type: string;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string | null;
        description: string;
        budgetId: string | null;
        employeeId: string | null;
        date: Date;
        amount: number;
        type: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string | null;
        description: string;
        budgetId: string | null;
        employeeId: string | null;
        date: Date;
        amount: number;
        type: string;
    }>;
    getSummary(): Promise<{
        totalReceitas: number;
        totalDespesas: number;
        receitasMes: number;
        despesasMes: number;
        lucroLiquidoMes: number;
    }>;
}
