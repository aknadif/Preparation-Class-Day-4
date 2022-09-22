const convertNilai = (nilai) => {
  if (nilai >= 90) {
    console.log("Input: " + nilai);
    console.log("Output: A");
  } else if (nilai >= 80 && nilai <= 89) {
    console.log("Input: " + nilai);
    console.log("Output: B");
  } else if (nilai >= 70 && nilai <= 79) {
    console.log("Input: " + nilai);
    console.log("Output: C");
  } else if (nilai >= 60 && nilai <= 69) {
    console.log("Input: " + nilai);
    console.log("Output: D");
  } else if (nilai <= 59) {
    console.log("Input: " + nilai);
    console.log("Output: E");
  }
};
convertNilai(90);
