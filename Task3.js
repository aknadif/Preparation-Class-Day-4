const findKabisat = (value) => {
  if (0 == value % 400 || (0 == value % 4 && 0 != value % 100)) {
    console.log("Input   : " + value + "\nOutput  : Tahun Kabisat");
  } else {
    console.log("Input   : " + value + "\nOutput  : Bukan Tahun Kabisat");
  }
};
findKabisat(2016);
