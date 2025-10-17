import { SchedulesService } from './schedules.service';
export declare class SchedulesController {
    private readonly schedulesService;
    constructor(schedulesService: SchedulesService);
    create(createDto: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        budgetId: string;
        employeeId: string;
        serviceId: string;
        date: Date;
        time: string;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        budgetId: string;
        employeeId: string;
        serviceId: string;
        date: Date;
        time: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        budgetId: string;
        employeeId: string;
        serviceId: string;
        date: Date;
        time: string;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        budgetId: string;
        employeeId: string;
        serviceId: string;
        date: Date;
        time: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        budgetId: string;
        employeeId: string;
        serviceId: string;
        date: Date;
        time: string;
    }>;
}
