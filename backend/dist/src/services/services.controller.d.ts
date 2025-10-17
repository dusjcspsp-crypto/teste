import { ServicesService } from './services.service';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    create(createDto: any): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        description: string | null;
        timeEstimate: number;
        price: number;
    }>;
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
    update(id: string, updateDto: any): Promise<{
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
