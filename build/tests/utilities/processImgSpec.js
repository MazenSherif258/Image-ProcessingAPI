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
const processImg_1 = __importDefault(require("../../utilities/processImg"));
describe('Test Function Process', () => {
    it('Expects to Process Image Successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, processImg_1.default)('fjord', 250, 20)).toBeResolved();
    }));
    it('Expects to Throw Error Input File Is Missing', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync((0, processImg_1.default)('fj', 250, 250)).toBeRejectedWithError('Input file is missing');
    }));
});
