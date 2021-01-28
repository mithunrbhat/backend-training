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
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    async addBook(bookName, bookPages, bookRating, bookIsbn, authorId, publisherId) {
        const generatedId = await this.booksService.includeBook(bookName, bookPages, bookRating, bookIsbn, authorId, publisherId);
        return { id: generatedId };
    }
    async getBooks(sortBy, searchBy) {
        const books = await this.booksService.provideAllBooks(sortBy, searchBy);
        return books;
    }
    async getOneBook(bookId) {
        const book = await this.booksService.provideOneBook(bookId);
        return book;
    }
    async deleteBook(bookId) {
        await this.booksService.removeBook(bookId);
        return null;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('title')),
    __param(1, common_1.Body('totalPages')),
    __param(2, common_1.Body('rating')),
    __param(3, common_1.Body('isbn')),
    __param(4, common_1.Body('authorId')),
    __param(5, common_1.Body('publisherId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, Number, String, String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "addBook", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('sort')),
    __param(1, common_1.Query('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getBooks", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getOneBook", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "deleteBook", null);
BooksController = __decorate([
    common_1.Controller('book'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
exports.BooksController = BooksController;
//# sourceMappingURL=books.controller.js.map