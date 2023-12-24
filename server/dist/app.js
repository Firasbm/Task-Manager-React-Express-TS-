"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var controller_1 = __importDefault(require("./controller"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
dotenv_1.default.config({
    path: ".env.stage.".concat(process.env.STAGE),
});
mongoose_1.default
    .connect("mongodb+srv://".concat(process.env.MONGO_USER, ":").concat(process.env.MONGO_PASSWORD, "@").concat(process.env.MONGO_HOST))
    .then(function () { return console.log("Connected to MongoDB"); })
    .catch(function (error) {
    return console.log("Error connecting to MongoDB: ", error.message);
});
var isProd = process.env.NODE_ENV === "production";
if (isProd) {
    app.use(express_1.default.static(path_1.default.resolve(__dirname, "public")));
}
app.use("/api/", controller_1.default);
app.listen(process.env.PORT, function () {
    return console.log("server running at ".concat(process.env.PORT));
});
