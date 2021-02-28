/*
 * QR Code generator test worker (TypeScript)
 *
 * This program reads data and encoding parameters from standard input and writes
 * QR Code bitmaps to standard output. The I/O format is one integer per line.
 * Run with no command line arguments. The program is intended for automated
 * batch testing of end-to-end functionality of this QR Code generator library.
 *
 * Copyright (c) Project Nayuki. (MIT License)
 * https://www.nayuki.io/page/qr-code-generator-library
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * - The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 * - The Software is provided "as is", without warranty of any kind, express or
 *   implied, including but not limited to the warranties of merchantability,
 *   fitness for a particular purpose and noninfringement. In no event shall the
 *   authors or copyright holders be liable for any claim, damages or other
 *   liability, whether in an action of contract, tort or otherwise, arising from,
 *   out of or in connection with the Software or the use or other dealings in the
 *   Software.
 */
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var length_1, data, i, _a, _b, errCorLvl, minVersion, maxVersion, mask, boostEcl, segs, s, qr, y, x, e_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!true) return [3 /*break*/, 23];
                    return [4 /*yield*/, input.readInt()];
                case 1:
                    length_1 = _c.sent();
                    if (length_1 == -1)
                        return [3 /*break*/, 23];
                    data = [];
                    i = 0;
                    _c.label = 2;
                case 2:
                    if (!(i < length_1)) return [3 /*break*/, 5];
                    _b = (_a = data).push;
                    return [4 /*yield*/, input.readInt()];
                case 3:
                    _b.apply(_a, [_c.sent()]);
                    _c.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, input.readInt()];
                case 6:
                    errCorLvl = _c.sent();
                    return [4 /*yield*/, input.readInt()];
                case 7:
                    minVersion = _c.sent();
                    return [4 /*yield*/, input.readInt()];
                case 8:
                    maxVersion = _c.sent();
                    return [4 /*yield*/, input.readInt()];
                case 9:
                    mask = _c.sent();
                    return [4 /*yield*/, input.readInt()];
                case 10:
                    boostEcl = _c.sent();
                    segs = void 0;
                    if (data.every(function (b) { return b < 128; })) { // Is ASCII
                        s = data.map(function (b) { return String.fromCharCode(b); }).join("");
                        segs = qrcodegen.QrSegment.makeSegments(s);
                    }
                    else
                        segs = [qrcodegen.QrSegment.makeBytes(data)];
                    _c.label = 11;
                case 11:
                    _c.trys.push([11, 19, , 22]);
                    qr = qrcodegen.QrCode.encodeSegments(segs, ECC_LEVELS[errCorLvl], minVersion, maxVersion, mask, boostEcl != 0);
                    // Print grid of modules
                    return [4 /*yield*/, printLine(qr.version)];
                case 12:
                    // Print grid of modules
                    _c.sent();
                    y = 0;
                    _c.label = 13;
                case 13:
                    if (!(y < qr.size)) return [3 /*break*/, 18];
                    x = 0;
                    _c.label = 14;
                case 14:
                    if (!(x < qr.size)) return [3 /*break*/, 17];
                    return [4 /*yield*/, printLine(qr.getModule(x, y) ? 1 : 0)];
                case 15:
                    _c.sent();
                    _c.label = 16;
                case 16:
                    x++;
                    return [3 /*break*/, 14];
                case 17:
                    y++;
                    return [3 /*break*/, 13];
                case 18: return [3 /*break*/, 22];
                case 19:
                    e_1 = _c.sent();
                    if (!(e_1 == "Data too long")) return [3 /*break*/, 21];
                    return [4 /*yield*/, printLine(-1)];
                case 20:
                    _c.sent();
                    _c.label = 21;
                case 21: return [3 /*break*/, 22];
                case 22: return [3 /*break*/, 0];
                case 23: return [2 /*return*/];
            }
        });
    });
}
var input;
(function (input) {
    var queue = [];
    var callback = null;
    var readline = require("readline");
    var reader = readline.createInterface({
        input: process.stdin,
        terminal: false,
    });
    reader.on("line", function (line) {
        queue.push(line);
        if (callback !== null) {
            callback(queue.shift());
            callback = null;
        }
    });
    function readLine() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        if (callback !== null)
                            throw "Illegal state";
                        if (queue.length > 0)
                            resolve(queue.shift());
                        else
                            callback = resolve;
                    })];
            });
        });
    }
    function readInt() {
        return __awaiter(this, void 0, void 0, function () {
            var s;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, readLine()];
                    case 1:
                        s = _a.sent();
                        if (!/^-?\d+$/.test(s))
                            throw "Invalid number syntax";
                        return [2 /*return*/, parseInt(s, 10)];
                }
            });
        });
    }
    input.readInt = readInt;
})(input || (input = {}));
function printLine(x) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    return process.stdout.write(x + "\n", "utf-8", function () { return resolve(); });
                })];
        });
    });
}
var ECC_LEVELS = [
    qrcodegen.QrCode.Ecc.LOW,
    qrcodegen.QrCode.Ecc.MEDIUM,
    qrcodegen.QrCode.Ecc.QUARTILE,
    qrcodegen.QrCode.Ecc.HIGH,
];
main();
