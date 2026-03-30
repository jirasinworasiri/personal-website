document.addEventListener('DOMContentLoaded', () => {
    // --- Countdown Logic ---
    if (document.getElementById('days')) {
        const target = new Date("March 31, 2027 00:00:00").getTime();
        const update = () => {
            const now = new Date().getTime();
            const diff = target - now;
            if (diff > 0) {
                document.getElementById('days').innerText = Math.floor(diff / 86400000);
                document.getElementById('hours').innerText = Math.floor((diff % 86400000) / 3600000);
                document.getElementById('minutes').innerText = Math.floor((diff % 3600000) / 60000);
                document.getElementById('seconds').innerText = Math.floor((diff % 60000) / 1000);
            }
        };
        setInterval(update, 1000); update();
    }

    // --- Game Logic ---
    if (document.getElementById('btnGuess')) {
        let secret = Math.floor(Math.random() * 100) + 1;
        let count = 0;
        const input = document.getElementById('guessInput'), btn = document.getElementById('btnGuess');
        const fb = document.getElementById('feedback'), log = document.getElementById('logList');

        btn.addEventListener('click', () => {
            const val = parseInt(input.value);
            if (isNaN(val) || val < 1 || val > 100) { fb.innerText = "ใส่เลข 1-100 ดิ๊!"; return; }
            count++;
            if (val === secret) {
                fb.innerText = `ถูก! เลขคือ ${secret} (${count} ครั้ง)`;
                fb.style.color = "#00ff88"; btn.disabled = true;
            } else {
                fb.innerText = val > secret ? "มากไป!" : "น้อยไป!";
                fb.style.color = "#ffcc00";
            }
            const li = document.createElement('li'); li.innerText = `ครั้งที่ ${count}: ${val}`;
            log.prepend(li); input.value = ""; input.focus();
        });
        document.getElementById('btnReset').addEventListener('click', () => location.reload());
    }
});