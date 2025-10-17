import { InventoryService } from './inventory.service';
export declare class InventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    create(createDto: any): Promise<{
        location: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        quantity: number;
    }>;
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
    update(id: string, updateDto: any): Promise<{
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
