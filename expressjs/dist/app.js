"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const middlewares_1 = require("./middlewares");
exports.app = (0, express_1.default)();
exports.app.use(middlewares_1.CORS);
// Middleware to log requests
exports.app.use((0, morgan_1.default)('combined'));
// Middleware to parse JSON bodies
exports.app.use(express_1.default.json());
exports.app.get('/', (req, res) => {
    res.send({
        status: 200
    });
});
//# sourceMappingURL=app.js.map