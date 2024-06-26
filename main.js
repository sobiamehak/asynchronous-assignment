"use strict";
//write a typescript function that uses async/await 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
//to wait for 2 second and then return a string "hello world"
function newmessage(delay) {
    return new Promise(function (resolve) { return setTimeout(resolve, delay); });
}
function printmessage() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, newmessage(2000)];
                case 1:
                    _a.sent();
                    console.log("hello world");
                    return [2 /*return*/];
            }
        });
    });
}
printmessage();
//Question 2: Create a TypeScript function that takes a callback function as an 
//argument and uses setTimeout to call the callback after 1 second.
function callback(mytask, delay, callback) {
    setTimeout(function () {
        console.log(mytask);
    }, delay);
}
callback("i am callback", 1000, function () { });
//Question 3: Write a TypeScript function that returns a Promise that resolves with the value
// "Resolved!" after 3 seconds.
function problem() {
    var Promises = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("resolved");
        }, 3000);
    });
    return Promises;
}
problem()
    .then(function (res) { return console.log(res); })
    .catch(function (err) { return console.log(err); });
//Question 4: Create a TypeScript function that uses async/await to wait for
//two Promises to  and then returns their results as an array.
// Define two promises
var promise1 = new Promise(function (resolve) {
    setTimeout(function () {
        console.log("resolved 1");
        resolve("Promise 1 resolved");
    }, 2000);
});
var promise2 = new Promise(function (resolve) {
    setTimeout(function () {
        console.log("resolved 2");
        resolve("Promise 2 resolved");
    }, 3000);
});
// Async function to wait for both promises
function waitFromPromise() {
    return __awaiter(this, void 0, void 0, function () {
        var awaitPromise1, awaitPromise2, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, promise1];
                case 1:
                    awaitPromise1 = _a.sent();
                    return [4 /*yield*/, promise2];
                case 2:
                    awaitPromise2 = _a.sent();
                    result = [awaitPromise1, awaitPromise2];
                    console.log(result);
                    return [2 /*return*/, result];
            }
        });
    });
}
waitFromPromise();
//Question 5: Write a TypeScript function that uses async/await to wait for 
//a Promise to resolve and then logs the result to the console.
function tsPromise() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                        resolve("resolved");
                    })
                        .then(function (res) {
                        console.log(res);
                    })
                        .catch(function (err) {
                        console.log(err);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
tsPromise();
//Question 6: Write a TypeScript function that uses async/await to 
//wait for a Promise to reject and then logs the error to the console.
function fwpromise() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                        reject("reject");
                    })
                        .then(function (res) {
                        console.log(res);
                    })
                        .catch(function (err) {
                        console.log(err);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
fwpromise();
//Question 7: Create a TypeScript function that takes a number as an argument and returns a Promise 
//that resolves with the square of the number after a delay of 1 second.
function square(size) {
    var promises = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(Math.pow(size, 2));
        }, 1000);
    });
    return promises;
    square(2).then(function (res) {
        console.log(res);
    });
}
//Question 8: Write a TypeScript function that uses async/await to wait for an array 
// of Promises to resolve and then returns an array of their results.
function arryfunc(num) {
    return new Promise(function (resolve, reject) {
        resolve("problem".concat(num, "resolved"));
    });
}
function newfunc(respromise) {
    return __awaiter(this, void 0, void 0, function () {
        var allpromises;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(respromise)];
                case 1:
                    allpromises = _a.sent();
                    console.log(allpromises);
                    return [2 /*return*/, allpromises];
            }
        });
    });
}
var add = newfunc([
    arryfunc(1),
    arryfunc(2),
    arryfunc(3),
    arryfunc(4),
    arryfunc(5),
]);
//Question 9: Create a TypeScript function that uses 
//to call a function repeatedly every 2 seconds.
function repeated() {
    function callrepeated() {
        console.log("Hello typescript world");
        setTimeout(callrepeated, 2000);
    }
    callrepeated();
}
repeated();
//Question 10: Write a TypeScript function that uses async/await to wait 
//for a Promise to resolve and then returns a new Promise that resolves with the result multiplied by 2.
var arrowfunc = new Promise(function (resolve) {
    return setTimeout(function () {
        resolve(4);
    }, 1000);
});
function givepromise(promise) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, promise];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, new Promise(function (resolve, reject) { return resolve(result * 2); })];
            }
        });
    });
}
