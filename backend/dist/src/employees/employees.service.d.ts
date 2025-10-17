import { PrismaService } from '../prisma/prisma.service';
export declare class EmployeesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        password: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        password: string;
    }>;
    create(data: any): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        password: string;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        password: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        password: string;
    }>;
}
