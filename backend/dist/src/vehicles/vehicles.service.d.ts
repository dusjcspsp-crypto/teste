import { PrismaService } from '../prisma/prisma.service';
export declare class VehiclesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        os: string;
        brand: string;
        model: string;
        plate: string;
        color: string | null;
        customerId: string;
        locationId: string;
        status: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        os: string;
        brand: string;
        model: string;
        plate: string;
        color: string | null;
        customerId: string;
        locationId: string;
        status: string;
    }>;
    create(data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        os: string;
        brand: string;
        model: string;
        plate: string;
        color: string | null;
        customerId: string;
        locationId: string;
        status: string;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        os: string;
        brand: string;
        model: string;
        plate: string;
        color: string | null;
        customerId: string;
        locationId: string;
        status: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        os: string;
        brand: string;
        model: string;
        plate: string;
        color: string | null;
        customerId: string;
        locationId: string;
        status: string;
    }>;
}
