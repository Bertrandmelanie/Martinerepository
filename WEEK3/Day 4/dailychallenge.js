var sentence = "The movie is not bad, I like it";
console.log(sentence);

var wordNot = sentence.indexOf("not");
console.log(wordNot);

var wordBad = sentence.indexOf("bad");
console.log(wordBad);

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(newSentence);
  } else {
    console.log(sentence);

  }
