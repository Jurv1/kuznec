import {Kuznec} from "./kuznec";

let kuz: Kuznec = new Kuznec();
let block: Buffer = Buffer.from('plainTextBlock12');
let encrypted_block: Buffer = kuz.Encryption(block);
console.log(encrypted_block);
let decrypted_block: Buffer = kuz.Decryption(encrypted_block);
console.log(decrypted_block.toString('utf-8')); //// plainTextBlock12