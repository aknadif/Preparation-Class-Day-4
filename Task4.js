const usiaVal = (val) => {
  if (val >= 21) {
    console.log("Input    : " + val + "\nOutput   : Dewasa");
  } else if (val >= 13 && val <= 20) {
    console.log("Input    : " + val + "\nOutput   : Remaja");
  } else if (val >= 9 && val <= 12) {
    console.log("Input    : " + val + "\nOutput   : Bimbingan Orang Tua");
  } else if (val <= 8) {
    console.log("Input    : " + val + "\nOutput   : Semua Usia");
  }
};
usiaVal(20);
