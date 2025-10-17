import { PrismaService } from '../prisma/prisma.service';
export declare class LocationsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        name: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(data: any): Promise<{
        id: string;
        name: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        name: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
