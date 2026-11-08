const lookup = {
  A: "N", B: "O", C: "P", D: "Q", E: "R", F: "S", G: "T", H: "U", I: "V",
  J: "W", K: "X", L: "Y", M: "Z", N: "A", O: "B", P: "C", Q: "D", R: "E",
  S: "F", T: "G", U: "H", V: "I", W: "J", X: "K", Y: "L", Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line
  for (const ch of encodedStr) {
    decodedArr.push(lookup[ch.toUpperCase()] ?? ch);
  }
  return decodedArr.join("");
}

// Do not change this line
window.rot13 = rot13;