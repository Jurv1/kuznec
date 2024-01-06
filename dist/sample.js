"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kuznec_1 = require("./kuznec");
let kuz = new kuznec_1.Kuznec();
let block = Buffer.from('plainTextBlock12');
let encrypted_block = kuz.Encryption(block);
console.log(encrypted_block);
let decrypted_block = kuz.Decryption(encrypted_block);
console.log(decrypted_block.toString('utf-8')); //// plainTextBlock12
//# sourceMappingURL=sample.js.map