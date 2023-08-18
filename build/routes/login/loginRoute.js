"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express')
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const validate_1 = __importDefault(require("../../validate"));
const loginController_1 = __importDefault(require("./loginController"));
router.post("/", validate_1.default, loginController_1.default.makeToken);
exports.default = router;
