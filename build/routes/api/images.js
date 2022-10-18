"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkExist_1 = __importDefault(require("../../middleware/checkExist"));
const processImg_1 = __importDefault(require("../../utilities/processImg"));
const images = express_1.default.Router();
images.use(checkExist_1.default);
images.get('', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.query.filename;
    const height = parseInt(req.query.height) || undefined;
    const width = parseInt(req.query.width) || undefined;
    if (name) {
        try {
            yield (0, processImg_1.default)(name, height, width);
        }
        catch (err) {
            next('Error at sharp processig ' + err);
        }
        res.status(200).sendFile(`${name}-thumb.jpg`, { root: 'assets/thumb' });
    }
    else {
        res.status(200).sendFile('simpleForm.html', { root: './basicFrontend' });
    }
}));
exports.default = images;
