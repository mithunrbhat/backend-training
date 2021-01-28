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
exports.AuthorsController = void 0;
const common_1 = require("@nestjs/common");
const authors_service_1 = require("./authors.service");
let AuthorsController = class AuthorsController {
    constructor(authorService) {
        this.authorService = authorService;
    }
    async addAuthor(authorName, authorEmail, authorDob) {
        const generatedId = await this.authorService.includeAuthor(authorName, authorEmail, authorDob);
        return { id: generatedId };
    }
    async getAuthors() {
        const books = await this.authorService.provideAllAuthors();
        return books;
    }
    async getOneAuthor(authId) {
        const book = await this.authorService.provideOneAuthor(authId);
        return book;
    }
    async deleteAuthor(authId) {
        await this.authorService.removeAuthor(authId);
        return null;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('name')),
    __param(1, common_1.Body('email')),
    __param(2, common_1.Body('dob')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AuthorsController.prototype, "addAuthor", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorsController.prototype, "getAuthors", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorsController.prototype, "getOneAuthor", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorsController.prototype, "deleteAuthor", null);
AuthorsController = __decorate([
    common_1.Controller('author'),
    __metadata("design:paramtypes", [authors_service_1.AuthorsService])
], AuthorsController);
exports.AuthorsController = AuthorsController;
//# sourceMappingURL=authors.controller.js.map