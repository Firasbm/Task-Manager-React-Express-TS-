"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
const isProd = process.env.NODE_ENV === "production";
if (isProd) {
    app.use(express_1.default.static(path_1.default.resolve(__dirname, "public")));
}
app.get("/api/message", (req, res) => {
    res.send("hello");
});
app.listen(port, () => console.log(`server running at ${port}`));
