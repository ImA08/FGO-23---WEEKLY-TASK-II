export const checkPalindrom = (text) => {
  if (typeof text != "string") return;
  const arrOfText = [];
  const reverseArr = [];
  let tempString = "";

  for (let i = 0; i < text.length; i++) {
    tempString += text[i];
    arrOfText[arrOfText.length] = tempString;
    tempString = "";
  }

  let arrLength = arrOfText.length;

  for (let i = arrLength - 1; i >= 0; i--) {
    reverseArr[reverseArr.length] = arrOfText[i];
  }

  let newReversetext = "";

  for (let i = 0; i < reverseArr.length; i++) {
    newReversetext += reverseArr[i];
  }

  if (text === newReversetext) {
    console.log(
      `Kata yang di masukkan merupakan palindrom, karena ${text} di jika dibalik tetap menjadi ${newReversetext}`
    );
  } else {
    console.log(
      `Kata yang di masukkan bukan merupakan palindrom, karena ${text} di jika dibalik menjadi ${newReversetext}`
    );
  }
};

// checkPalindrom("MALAM");

export function reverseWords(sentence) {
  let words = [];
  let word = "";

  // Memisahkan kata-kata dalam kalimat tanpa split()
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      word += sentence[i]; // Menyusun huruf menjadi kata
    } else {
      if (word !== "") {
        words.push(word); // Menambahkan kata ke array jika ada
      }
      word = ""; // Reset kata setelah bertemu spasi
    }
  }
  if (word !== "") {
    words.push(word); // Menambahkan kata terakhir
  }

  // Membalikkan urutan kata tanpa reverse()
  let reversedSentence = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversedSentence += words[i]; // Menambahkan kata ke hasil akhir
    if (i > 0) {
      reversedSentence += " "; // Menambahkan spasi antara kata
    }
  }

  return reversedSentence;
}

// console.log(reverseWords("Saya Belajar Javascript")); // Output: "Javascript Belajar Saya"
