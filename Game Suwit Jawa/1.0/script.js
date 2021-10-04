function play() {
  const userChoise = prompt("silahkan pilih gajah, semut, atau orang");
  const char = ["gajah", "semut", "orang"];
  const random = Math.floor(Math.random() * 3);
  const comChoise = char[random];

  if (userChoise === comChoise) {
    alert(`you --> ${userChoise} vs com --> ${comChoise} \n = DRAW`);
    playAgain();
  }
  if (
    (userChoise === "gajah" && comChoise === "semut") ||
    (userChoise === "semut" && comChoise === "orang") ||
    (userChoise === "orang" && comChoise === "gajah")
  ) {
    alert(`you --> ${userChoise} vs com --> ${comChoise} \n = COM WIN`);
    playAgain();
  }
  if (
    (userChoise === "gajah" && comChoise === "orang") ||
    (userChoise === "semut" && comChoise === "gajah") ||
    (userChoise === "orang" && comChoise === "semut")
  ) {
    alert(`you --> ${userChoise} vs com --> ${comChoise} \n = YOU WIN`);
    playAgain();
  }
}
function playAgain() {
  const confirmation = confirm("main lagi?");
  if (confirmation === true) {
    play();
  } else {
    alert("Terima kasih sudah bermain");
  }
}
play();
