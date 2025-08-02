document.addEventListener('DOMContentLoaded', () => {
    // 27 de septiembre de 2025 7:00 p.m. local time
    const targetDate = new Date("2025-09-27T19:00:00");
    const countdown = () => {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            document.getElementById("countdown-wrapper").innerHTML = "<h3>¡Ya comenzó la fiesta! 🎉</h3>";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        document.getElementById("days").textContent = String(d).padStart(2, "0");
        document.getElementById("hours").textContent = String(h).padStart(2, "0");
        document.getElementById("minutes").textContent = String(m).padStart(2, "0");
        document.getElementById("seconds").textContent = String(s).padStart(2, "0");
    };
    setInterval(countdown, 1000);
    countdown();
    const urlParams = new URLSearchParams(window.location.search)

    try {

        const guestsNumber = Number(urlParams.get('guests'))
        const guestsNumberSpan = document.querySelector('#guests h3 span')
        const guestsDiv = document.querySelector('#guests')

        if (guestsNumber != undefined && guestsNumber > 0 && guestsNumber <= 5) {
            guestsNumberSpan.textContent = guestsNumber
            guestsDiv.toggleAttribute('hidden')
        }
    } catch (error) {
        guestsDiv.setAttribute('hidden')
    }
})