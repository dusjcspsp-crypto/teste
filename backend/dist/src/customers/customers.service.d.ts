import { PrismaService } from '../prisma/prisma.service';
export declare class CustomersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        vehicles: {
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
        }[];
    } & {
        id: string;
        name: string;
        phone: string | null;
        email: string;
        document: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        vehicles: {
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
        }[];
        budgets: {
            number: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            customerId: string;
            locationId: string | null;
            status: string | null;
            vehicleId: string | null;
            totalValue: number;
            discount: number | null;
            discountType: string | null;
            discountValue: number | null;
            paymentConditions: string | null;
            observations: string | null;
            entryDate: Date | null;
            exitDate: Date | null;
            sentAt: Date | null;
            approvedAt: Date | null;
            rejectedAt: Date | null;
            vbiStatus: string | null;
            vbiChecklistCompleted: boolean;
            vbiPaintFormulaReady: boolean;
            vbiMaterialRequest: boolean;
            vbiMaterialPosted: boolean;
            vbiProductivityScore: number | null;
        }[];
    } & {
        id: string;
        name: string;
        phone: string | null;
        email: string;
        document: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(data: any): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        document: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: any): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        document: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        document: string | null;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getStats(): Promise<{
        total: number;
        active: number;
        vip: number;
        newThisMonth: number;
    }>;
}
