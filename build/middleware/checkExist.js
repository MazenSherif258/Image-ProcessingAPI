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
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
sharp_1.default.cache(false);
// MiddleWare to check the existence of an image
function checkExist(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = req.query.filename;
        const height = parseInt(req.query.height);
        const width = parseInt(req.query.width);
        if (fs_1.default.existsSync('./assets/thumb/' + name + '-thumb.jpg')) {
            const image = (0, sharp_1.default)('./assets/thumb/' + name + '-thumb.jpg');
            const metadata = yield image.metadata();
            if (metadata.height === height && metadata.width === width) {
                res.status(200).sendFile(`${name}-thumb.jpg`, { root: 'assets/thumb' });
            }
            else {
                next();
            }
        }
        else
            next();
    });
}
exports.default = checkExist;
