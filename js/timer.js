let countdown;

function startTimer() {
  clearInterval(countdown); // 前のタイマーを停止

  const minutes = document.getElementById("timer-input").value;
  let totalSeconds = minutes * 60;

  if (isNaN(minutes) || minutes <= 0) {
    alert("1以上の有効な分数を入力してください");
    return;
  }

  function updateDisplay() {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    document.getElementById("timer").textContent =
      (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;

    if (totalSeconds <= 0) {
      clearInterval(countdown);
      document.getElementById("timer").textContent = "時間切れ！";
    } else {
      totalSeconds--;
    }
  }

  updateDisplay(); // すぐに表示を更新
  countdown = setInterval(updateDisplay, 1000); // 1秒ごとに更新
}
