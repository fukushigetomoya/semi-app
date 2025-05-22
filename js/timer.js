let countdown;

function startTimer() {
  clearInterval(countdown);

  const minutes = document.getElementById("timer-input").value;

  let totalTime = minutes * 60;

  if (minutes <= 0) {
    alert("1以上の有効な分数を入力してください");
    return;
  }

  function updateDisplay() {
    const min = Math.floor(totalTime / 60);
    const sec = totalTime % 60;
    document.getElementById("timer").textContent =
      (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;

    if (totalTime <= 0) {
      clearInterval(countdown);
      document.getElementById("timer").textContent = "時間切れ！";
    } else {
      totalTime--;
    }
  }

  updateDisplay(); // すぐに表示を更新
  countdown = setInterval(updateDisplay, 1000); // 1秒ごとに更新
}
