import { VehiclesService } from './vehicles.service';
export declare class VehiclesController {
    private readonly vehiclesService;
    constructor(vehiclesService: VehiclesService);
    create(createDto: any): Promise<{
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
    update(id: string, updateDto: any): Promise<{
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
