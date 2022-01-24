function longWord(str){
    let words = str.split(" ");
    words.sort((w1, w2) => w2.length - w1.length);

    return words[0];
}

console.log(longWord('what a shame what a rotten way to die'));