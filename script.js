const lookup = {
  A: "N", B: "O", C: "P", D: "Q", E: "R", F: "S", G: "T", H: "U", I: "V",
  J: "W", K: "X", L: "Y", M: "Z", N: "A", O: "B", P: "C", Q: "D", R: "E",
  S: "F", T: "G", U: "H", V: "I", W: "J", X: "K", Y: "L", Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = [];
  // Only change code below this line
  for (const ch of encodedStr) {
    const upper = ch.toUpperCase();
    if (lookup[upper] && upper !== ch) {
      // lowercase letter: map, then restore lowercase
      decodedArr.push(lookup[upper].toLowerCase());
    } else {
      // uppercase letter or non-letter: map or pass through
      decodedArr.push(lookup[ch] ?? ch);
    }
  }
  return decodedArr.join("");
}

// Do not change this line
window.rot13 = rot13;