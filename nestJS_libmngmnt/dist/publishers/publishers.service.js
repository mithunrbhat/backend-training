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
exports.PublishersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PublishersService = class PublishersService {
    constructor(publisherModel) {
        this.publisherModel = publisherModel;
    }
    async includePublisher(name, email, contact, established) {
        const newPublisher = new this.publisherModel({
            name,
            email,
            contact,
            established,
        });
        const result = await newPublisher.save();
        return result.id;
    }
    async provideAllPublishers() {
        const publishers = await this.publisherModel.find().exec();
        return publishers.map((pub) => ({
            id: pub.id,
            name: pub.name,
            email: pub.email,
            contact: pub.contact,
            established: pub.established,
        }));
    }
    async provideOnePublisher(publisherId) {
        const publisher = await this.findPublisher(publisherId);
        return {
            id: publisher.id,
            name: publisher.name,
            email: publisher.email,
            contact: publisher.contact,
            established: publisher.established,
        };
    }
    async removePublisher(publisherId) {
        const result = await this.publisherModel
            .deleteOne({ _id: publisherId })
            .exec();
        if (result.n === 0) {
            throw new common_1.NotFoundException('Could not find!!');
        }
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
        return publisher;
    }
};
PublishersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Publisher')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PublishersService);
exports.PublishersService = PublishersService;
//# sourceMappingURL=publishers.service.js.map