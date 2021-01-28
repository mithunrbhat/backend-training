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
exports.PublishersController = void 0;
const common_1 = require("@nestjs/common");
const publishers_service_1 = require("./publishers.service");
let PublishersController = class PublishersController {
    constructor(publishersService) {
        this.publishersService = publishersService;
    }
    async addPublisher(publisherName, publisherEmail, publisherContact, publisherEstablished) {
        const generatedId = await this.publishersService.includePublisher(publisherName, publisherEmail, publisherContact, publisherEstablished);
        return { id: generatedId };
    }
    async getPublishers() {
        const publishers = await this.publishersService.provideAllPublishers();
        return publishers;
    }
    async getOnePublisher(pubId) {
        const publisher = await this.publishersService.provideOnePublisher(pubId);
        return publisher;
    }
    async deletePublisher(pubId) {
        await this.publishersService.removePublisher(pubId);
        return null;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('name')),
    __param(1, common_1.Body('email')),
    __param(2, common_1.Body('contact')),
    __param(3, common_1.Body('established')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", Promise)
], PublishersController.prototype, "addPublisher", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PublishersController.prototype, "getPublishers", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PublishersController.prototype, "getOnePublisher", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PublishersController.prototype, "deletePublisher", null);
PublishersController = __decorate([
    common_1.Controller('publisher'),
    __metadata("design:paramtypes", [publishers_service_1.PublishersService])
], PublishersController);
exports.PublishersController = PublishersController;
//# sourceMappingURL=publishers.controller.js.map