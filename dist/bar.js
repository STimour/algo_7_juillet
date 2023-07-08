"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bar = void 0;
const bar = () => {
    const a = 5;
    const b = 1;
    (a > Math.PI) ? console.log("a est superieur à Pi") : console.log("a est inferieur à Pi");
    (b > Math.PI) ? console.log("b est superieur à Pi") : console.log("b est inferieur à Pi");
    (a > b) ? console.log("a est superieur à b") : console.log("a est inferieur à b");
};
exports.bar = bar;
