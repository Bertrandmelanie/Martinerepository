let text =  prompt ("Enter words seperated by commas:");

let words = text.split(",");

let maxLength = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].length > maxLength) {
    maxLength = words[i].length;
  }
}

const border = "*".repeat(maxLength + 4);
console.log(border);
for (let i = 0; i < words.length; i++) {
  const spaces = " ".repeat(maxLength - words[i].length);
  console.log(`* ${words[i]}${spaces} *`);
}
console.log(border);