"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublisherSchema = void 0;
const mongoose = require("mongoose");
exports.PublisherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    established: { type: Number, required: true },
});
//# sourceMappingURL=publisher.model.js.map