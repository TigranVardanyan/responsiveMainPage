const text = baffle('.reveal');
function loop() {
    text.set({
        characters: "▒░▓ ░░▒▓▒ █▒░▓░ ▓▒▓ ▓▒<▒/ ░▓░█ █>/ /▓▒░ ░▒█▒",
        speed: 120
    });
    text.start();
    text.reveal(4000);
}
setInterval(loop , 4000)

