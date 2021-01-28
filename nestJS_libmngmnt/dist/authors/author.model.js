"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorSchema = void 0;
const mongoose = require("mongoose");
exports.AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: String, required: true },
});
//# sourceMappingURL=author.model.js.map