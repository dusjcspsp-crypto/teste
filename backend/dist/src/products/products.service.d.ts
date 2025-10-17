import { PrismaService } from '../prisma/prisma.service';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        location: string | null;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        unit: string;
        costPrice: number;
        salePrice: number | null;
        stock: number;
    }[]>;
    findOne(id: string): Promise<{
        location: string | null;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        unit: string;
        costPrice: number;
        salePrice: number | null;
        stock: number;
    }>;
    create(data: any): Promise<{
        location: string | null;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        unit: string;
        costPrice: number;
        salePrice: number | null;
        stock: number;
    }>;
    update(id: string, data: any): Promise<{
        location: string | null;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        unit: string;
        costPrice: number;
        salePrice: number | null;
        stock: number;
    }>;
    remove(id: string): Promise<{
        location: string | null;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        unit: string;
        costPrice: number;
        salePrice: number | null;
        stock: number;
    }>;
}
