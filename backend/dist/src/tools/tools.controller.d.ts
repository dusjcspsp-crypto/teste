import { ToolsService } from './tools.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
export declare class ToolsController {
    private readonly toolsService;
    constructor(toolsService: ToolsService);
    create(createToolDto: CreateToolDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        description: string | null;
        code: string | null;
        defaultLocation: string | null;
        acquisitionValue: number | null;
        lastRequestDate: Date | null;
        assignedEmployeeId: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        description: string | null;
        code: string | null;
        defaultLocation: string | null;
        acquisitionValue: number | null;
        lastRequestDate: Date | null;
        assignedEmployeeId: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        description: string | null;
        code: string | null;
        defaultLocation: string | null;
        acquisitionValue: number | null;
        lastRequestDate: Date | null;
        assignedEmployeeId: string | null;
    }>;
    update(id: string, updateToolDto: UpdateToolDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        description: string | null;
        code: string | null;
        defaultLocation: string | null;
        acquisitionValue: number | null;
        lastRequestDate: Date | null;
        assignedEmployeeId: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        description: string | null;
        code: string | null;
        defaultLocation: string | null;
        acquisitionValue: number | null;
        lastRequestDate: Date | null;
        assignedEmployeeId: string | null;
    }>;
    requestTool(id: string, body: {
        employeeId: string;
    }): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        description: string | null;
        code: string | null;
        defaultLocation: string | null;
        acquisitionValue: number | null;
        lastRequestDate: Date | null;
        assignedEmployeeId: string | null;
    }>;
    returnTool(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        description: string | null;
        code: string | null;
        defaultLocation: string | null;
        acquisitionValue: number | null;
        lastRequestDate: Date | null;
        assignedEmployeeId: string | null;
    }>;
    getToolHistory(id: string): Promise<({
        employee: {
            id: string;
            name: string;
            phone: string | null;
            email: string;
            createdAt: Date;
            updatedAt: Date;
            role: string;
            password: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
        date: Date;
        type: string;
        toolId: string;
    })[]>;
}
