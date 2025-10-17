import { FinanceiroService } from './financeiro.service';
export declare class FinanceiroController {
    private readonly financeiroService;
    constructor(financeiroService: FinanceiroService);
    create(createDto: any): Promise<{
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
    getSummary(): Promise<{
        totalReceitas: number;
        totalDespesas: number;
        receitasMes: number;
        despesasMes: number;
        lucroLiquidoMes: number;
    }>;
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
    update(id: string, updateDto: any): Promise<{
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
}
