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
const verifyBodyMiddeware_1 = __importDefault(require("../verifyBodyMiddeware"));
class userBodyMiddleware {
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('reqBody -->', req.body);
            const response = yield (0, verifyBodyMiddeware_1.default)(req, [
                'nome',
                'email',
                'senha',
                'cpf',
                'telefone',
                'cep',
                'cidade',
                'bairro',
                'endereco',
                'numero',
                'complemento',
            ], [
                'string',
                'string',
                'string',
                'string',
                'string',
                'string',
                'string',
            ], {
                email: (value) => {
                    const RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                    return RegExp.test(value)
                        ? undefined
                        : {
                            message: 'must be a email',
                            expected: true,
                        };
                },
                password: (value) => {
                    const RegExp = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g;
                    return RegExp.test(value)
                        ? undefined
                        : {
                            message: 'include upper lower case, symbol and number',
                            expected: true,
                        };
                },
            });
            response === undefined
                ? next()
                : res.status(400).json(response);
        });
    }
    edit(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            next();
        });
    }
}
exports.default = new userBodyMiddleware();
