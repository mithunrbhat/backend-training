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
exports.AuthorsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AuthorsService = class AuthorsService {
    constructor(authorModel) {
        this.authorModel = authorModel;
    }
    async includeAuthor(name, email, dob) {
        const newAuthor = new this.authorModel({ name, email, dob });
        const result = await newAuthor.save();
        return result.id;
    }
    async provideAllAuthors() {
        const authors = await this.authorModel.find().exec();
        return authors.map((auth) => ({
            id: auth.id,
            name: auth.name,
            email: auth.email,
            dob: auth.dob,
        }));
    }
    async provideOneAuthor(authorId) {
        const author = await this.findAuthor(authorId);
        return {
            id: author.id,
            name: author.name,
            email: author.email,
            dob: author.dob,
        };
    }
    async removeAuthor(authorId) {
        const result = await this.authorModel.deleteOne({ _id: authorId }).exec();
        if (result.n === 0) {
            throw new common_1.NotFoundException('Could not find!!');
        }
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
        return author;
    }
};
AuthorsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Author')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AuthorsService);
exports.AuthorsService = AuthorsService;
//# sourceMappingURL=authors.service.js.map