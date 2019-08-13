"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert = __importStar(require("assert"));
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.sum = function (n1, n2) {
        return n1 + n2;
    };
    return Calculator;
}());
describe("calculator", function () {
    it("adds", function () {
        var calculator = new Calculator();
        assert.strictEqual(calculator.sum(1, 4), 5);
    });
});
