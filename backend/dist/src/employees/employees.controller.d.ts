import { EmployeesService } from './employees.service';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createDto: any): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        password: string;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        password: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        password: string;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        password: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        role: string;
        password: string;
    }>;
}
