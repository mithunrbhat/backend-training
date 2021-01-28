"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const mongoose = require("mongoose");
exports.BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    totalPages: { type: Number, required: true },
    rating: { type: String, required: true },
    isbn: { type: Number, required: true },
    authorId: { type: String, required: true },
    publisherId: { type: String, required: true },
});
//# sourceMappingURL=book.model.js.map