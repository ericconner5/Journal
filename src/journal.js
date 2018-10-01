export function journalWordSplit(entry) {
  var output = entry.split(" "); // returns an array
  return output;
}

export function journalWordCount(array) {
  var output = array.length;
  return output;
}

export function journalVowelCount(entry) {
  var matches = entry.match(/[aeiouy]/gi);
  if (matches === null) {
    return "No vowels here!"
  } else {
    return (matches.length);
  }
}

export function journalConsonantCount(entry) {
  var matches = entry.match(/[bcdfghjklmnpqrstvwxz]/gi);
  if (matches === null) {
    return "No consonants here, fren!"
  } else {
    return (matches.length);
  }
}

export function journalTeaserMaker(array) {
  var ellipsis = "..."
  if (array.length <= 8) {
    var teaserOne = array.join(" ");
    return teaserOne.concat(ellipsis);
  } else {
    var firstEight = array.slice(0, 8);
    return firstEight.concat(ellipsis);
  }
}
