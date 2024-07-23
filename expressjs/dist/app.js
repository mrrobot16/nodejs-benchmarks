"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const mongodb_1 = require("mongodb");
const middlewares_1 = require("./middlewares");
const url = "mongodb+srv://dylan:43VFMVJVJUFAII9g@cluster0.8phbhhb.mongodb.net/?retryWrites=true&w=majority";
const client = new mongodb_1.MongoClient(url);
exports.app = (0, express_1.default)();
exports.app.use(middlewares_1.CORS);
// Middleware to log requests
exports.app.use((0, morgan_1.default)('combined'));
// Middleware to parse JSON bodies
exports.app.use(express_1.default.json());
exports.app.get('/', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('weave-dev-db');
        const workflows = await db.collection('workflows').find({ user_id: 'hmgaar@gmail.com' }).toArray();
        const data = {
            workflows
        };
        res.send({
            status: 200,
            data
        });
    }
    catch (error) {
        console.error('GET_WORKFLOW_ERROR_MESSAGE', error);
    }
    finally {
        await client.close();
    }
});
//# sourceMappingURL=app.js.map