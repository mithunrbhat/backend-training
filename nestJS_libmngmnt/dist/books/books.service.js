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
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BooksService = class BooksService {
    constructor(bookModel, authorModel, publisherModel) {
        this.bookModel = bookModel;
        this.authorModel = authorModel;
        this.publisherModel = publisherModel;
    }
    async includeBook(title, totalPages, rating, isbn, authorId, publisherId) {
        const newBook = new this.bookModel({
            title,
            totalPages,
            rating,
            isbn,
            authorId,
            publisherId,
        });
        const result = await newBook.save();
        return result.id;
    }
    async provideAllBooks(sortBy, searchBy) {
        let books = [];
        if (sortBy !== undefined) {
            let sortValue;
            (function (sortValue) {
                sortValue[sortValue["asc"] = 1] = "asc";
                sortValue[sortValue["desc"] = -1] = "desc";
                sortValue[sortValue["undefined"] = 1] = "undefined";
            })(sortValue || (sortValue = {}));
            let sortObj = {};
            let sortArr = sortBy.split(',');
            sortArr = sortArr.map((item) => item.split('_'));
            for (let i = 0; i < sortArr.length; i++) {
                const key = sortArr[i][0];
                const value = sortArr[i][1];
                sortObj[key] = sortValue[value];
            }
            books = await this.bookModel.find().sort(sortObj).exec();
        }
        else if (searchBy !== undefined) {
            let searchArr = searchBy.split('_');
            let searchObj = {};
            searchObj[searchArr[0]] = searchArr[1];
            books = await this.bookModel.find(searchObj).exec();
        }
        else {
            books = await this.bookModel.find().exec();
        }
        return await Promise.all(books.map(async (bk) => {
            const author = await this.findAuthor(bk.authorId);
            const publisher = await this.findPublisher(bk.publisherId);
            return {
                id: bk.id,
                title: bk.title,
                totalPages: bk.totalPages,
                rating: bk.rating,
                isbn: bk.isbn,
                author,
                publisher,
            };
        }));
    }
    async provideOneBook(bookId) {
        const book = await this.findBook(bookId);
        return {
            id: book.id,
            title: book.title,
            totalPages: book.totalPages,
            rating: book.rating,
            isbn: book.isbn,
            author: await this.findAuthor(book.authorId),
            publisher: await this.findPublisher(book.publisherId),
        };
    }
    async removeBook(bookId) {
        const result = await this.bookModel.deleteOne({ _id: bookId }).exec();
        if (result.n === 0) {
            throw new common_1.NotFoundException('Could not find!!');
        }
    }
    async findBook(id) {
        let book;
        try {
            book = await this.bookModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find!!');
        }
        if (!book) {
            throw new common_1.NotFoundException('Could not Find!!');
        }
        return book;
    }
    async findAuthor(id) {
        let author;
        try {
            author = await this.authorModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find!!');
        }
        if (!author) {
            throw new common_1.NotFoundException('Could not Find!!');
        }
        return {
            id: author.id,
            name: author.name,
            email: author.email,
            dob: author.dob,
        };
    }
    async findPublisher(id) {
        let publisher;
        try {
            publisher = await this.publisherModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find!!');
        }
        if (!publisher) {
            throw new common_1.NotFoundException('Could not Find!!');
        }
        return {
            id: publisher.id,
            name: publisher.name,
            email: publisher.email,
            contact: publisher.contact,
            established: publisher.established,
        };
    }
};
BooksService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Book')),
    __param(1, mongoose_1.InjectModel('Author')),
    __param(2, mongoose_1.InjectModel('Publisher')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map