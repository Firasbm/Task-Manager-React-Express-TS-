"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var task_controller_1 = __importDefault(require("./modules/task/task.controller"));
var router = express_1.default.Router();
router.use("/v1/tasks", task_controller_1.default);
exports.default = router;
