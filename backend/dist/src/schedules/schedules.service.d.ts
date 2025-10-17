import { PrismaService } from '../prisma/prisma.service';
export declare class SchedulesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        budgetId: string;
        employeeId: string;
        serviceId: string;
        date: Date;
        time: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        budgetId: string;
        employeeId: string;
        serviceId: string;
        date: Date;
        time: string;
    }>;
    create(data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        budgetId: string;
        employeeId: string;
        serviceId: string;
        date: Date;
        time: string;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        budgetId: string;
        employeeId: string;
        serviceId: string;
        date: Date;
        time: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        budgetId: string;
        employeeId: string;
        serviceId: string;
        date: Date;
        time: string;
    }>;
}
