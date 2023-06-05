import { passwordGenerator } from "./app/passwordGenerator.js";
import { copyContent } from "./app/copyContent.js";

const range = document.getElementById('range');
const output = document.getElementById('output');
const button = document.getElementById('button');
const copyBtn = document.getElementById('copyBtn');

button.addEventListener('click', () => {
    output.value = passwordGenerator(range.value);
})

copyBtn.addEventListener('click', () => copyContent());