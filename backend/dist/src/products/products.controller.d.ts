import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createDto: any): Promise<{
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
    update(id: string, updateDto: any): Promise<{
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
