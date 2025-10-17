import { PrismaService } from '../prisma/prisma.service';
export declare class ServicesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        description: string | null;
        timeEstimate: number;
        price: number;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        description: string | null;
        timeEstimate: number;
        price: number;
    }>;
    create(data: any): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        description: string | null;
        timeEstimate: number;
        price: number;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        description: string | null;
        timeEstimate: number;
        price: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        description: string | null;
        timeEstimate: number;
        price: number;
    }>;
}
