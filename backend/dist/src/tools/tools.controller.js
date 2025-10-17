"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolsController = void 0;
const common_1 = require("@nestjs/common");
const tools_service_1 = require("./tools.service");
const create_tool_dto_1 = require("./dto/create-tool.dto");
const update_tool_dto_1 = require("./dto/update-tool.dto");
let ToolsController = class ToolsController {
    constructor(toolsService) {
        this.toolsService = toolsService;
    }
    create(createToolDto) {
        return this.toolsService.create(createToolDto);
    }
    findAll() {
        return this.toolsService.findAll();
    }
    findOne(id) {
        return this.toolsService.findOne(id);
    }
    update(id, updateToolDto) {
        return this.toolsService.update(id, updateToolDto);
    }
    remove(id) {
        return this.toolsService.remove(id);
    }
    requestTool(id, body) {
        return this.toolsService.requestTool(id, body.employeeId);
    }
    returnTool(id) {
        return this.toolsService.returnTool(id);
    }
    getToolHistory(id) {
        return this.toolsService.getToolHistory(id);
    }
};
exports.ToolsController = ToolsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tool_dto_1.CreateToolDto]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tool_dto_1.UpdateToolDto]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id/request'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "requestTool", null);
__decorate([
    (0, common_1.Put)(':id/return'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "returnTool", null);
__decorate([
    (0, common_1.Get)(':id/history'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "getToolHistory", null);
exports.ToolsController = ToolsController = __decorate([
    (0, common_1.Controller)('tools'),
    __metadata("design:paramtypes", [tools_service_1.ToolsService])
], ToolsController);
//# sourceMappingURL=tools.controller.js.map