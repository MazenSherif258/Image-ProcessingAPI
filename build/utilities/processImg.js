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
const sharp_1 = __importDefault(require("sharp"));
/**
 *
 * @param input Path of the image wanted
 * @param height desired height of image
 * @param width desired width of image
 * @throws Error if processing the image failed
 */
const process = (input, height, width) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, sharp_1.default)('./assets/full/' + input + '.jpg')
            .resize(width, height)
            .toFile(`./assets/thumb/${input}_${width}_${height}-thumb.jpg`);
    }
    catch (err) {
        throw new Error('Input file is missing');
    }
    const time = new Date();
    console.log(`\nServed Image ${input}_${width}_${height}-thumb.jpg `, `\nDetails: {\n Width: ${width} px \n Height: ${height} px\n}`, `\nAt ${time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric'
    })}\n`);
});
exports.default = process;
