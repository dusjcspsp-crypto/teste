import { PrismaService } from '../prisma/prisma.service';
export declare class InventoryService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        location: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        quantity: number;
    }[]>;
    findOne(id: string): Promise<{
        location: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        quantity: number;
    }>;
    create(data: any): Promise<{
        location: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        quantity: number;
    }>;
    update(id: string, data: any): Promise<{
        location: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        quantity: number;
    }>;
    remove(id: string): Promise<{
        location: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        quantity: number;
    }>;
}
