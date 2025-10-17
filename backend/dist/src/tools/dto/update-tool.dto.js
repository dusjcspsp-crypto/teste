"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateToolDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tool_dto_1 = require("./create-tool.dto");
class UpdateToolDto extends (0, mapped_types_1.PartialType)(create_tool_dto_1.CreateToolDto) {
}
exports.UpdateToolDto = UpdateToolDto;
//# sourceMappingURL=update-tool.dto.js.map