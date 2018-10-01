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
    return "No vowels here!";
  } else {
    return (matches.length);
  }
}

export function journalConsonantCount(entry) {
  var matches = entry.match(/[bcdfghjklmnpqrstvwxz]/gi);
  if (matches === null) {
    return "No consonants here, fren!";
  } else {
    return (matches.length);
  }
}

export function lastItemCleaner(array) {
  debugger;
  var lastEntry = array[array.length - 1];
  if (lastEntry.match(/[,.?!]$/) != null) {
    var cleanedEntry = lastEntry.replace(/[,.?!]$/, "");
    array.splice(lastEntry, 1, cleanedEntry);
    return array;
  }
}

export function journalTeaserMaker(array) {
  var ellipsis = "...";
  var newArray = lastItemCleaner(array);
  if (newArray.length <= 8) {
    var teaserLess = newArray.join(" ");
    return teaserLess.concat(ellipsis);
  } else {
    var firstEight = newArray.slice(0, 8);
    var teaserMore = firstEight.join(" ");
    return teaserMore.concat(ellipsis);
  }
}
