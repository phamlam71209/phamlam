let balance = 1000;

function playGame(bet) {
    if (balance < 100) {
        alert("Bạn không đủ coin!");
        return;
    }

    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const dice3 = Math.floor(Math.random() * 6) + 1;
    const total = dice1 + dice2 + dice3;

    const isTai = total >= 11 && total <= 17;
    const isXiu = total >= 4 && total <= 10;

    let resultText = `Kết quả: ${dice1}, ${dice2}, ${dice3} – Tổng: ${total} – `;
    let win = false;

    if ((bet === "tai" && isTai) || (bet === "xiu" && isXiu)) {
        balance += 100;
        resultText += "Bạn thắng! +100 coin";
        win = true;
    } else {
        balance -= 100;
        resultText += "Bạn thua! -100 coin";
    }

    document.getElementById("money").textContent = balance;
    document.getElementById("result").textContent = resultText;
}
