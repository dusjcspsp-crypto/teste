import { LocationsService } from './locations.service';
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    create(createDto: any): Promise<{
        id: string;
        name: string;
        address: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
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
    update(id: string, updateDto: any): Promise<{
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
