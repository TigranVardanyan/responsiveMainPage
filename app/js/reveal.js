const text = baffle('.reveal');
function loop() {
    text.set({
        characters: "▒░▓░ ▓▒<▒/ ░▓░█ █>/ /▓▒░ ░▒█▒",
        speed: 120
    });
    text.start();
    text.reveal(2500);
}
setTimeout(loop, 2500)
setInterval(loop , 8000)

