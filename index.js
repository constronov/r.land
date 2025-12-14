function realClick(el) {
    // Simuliert echte Maus-Events
    el.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
    el.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
    el.dispatchEvent(new MouseEvent("click", { bubbles: true }));
}

let busy = false; // verhindert Klick-Spam

const observer = new MutationObserver(() => {
    if (busy) return; // noch in Wartezeit

    // START-Button erkennen
    const startP = document.querySelector("#scrollArea button.bg-emerald-400 p");
    if (!startP) return;

    // Ziel-DIV (StartAllSessions)
    const startAllSessions = document.querySelector(
        "body > div:nth-child(1) > main > section.mt-24.sm\\:mt-\\[6\\.5rem\\].mb-12.sm\\:mb-14 > section > section > div.w-full.flex.items-center.justify-center.sm\\:mb-8.mb-5.gap-x-8.gap-y-2.sm\\:flex-row.flex-col > div"
    );

    if (!startAllSessions) return;

    const clickable = startAllSessions.querySelector("*") || startAllSessions;

    // Klick ausführen
    realClick(clickable);
    console.log("🔥 StartAllSessions geklickt, warte 2 Sekunden...");

    // 2 Sekunden Sperre
    busy = true;
    setTimeout(() => { busy = false; }, 2000);
});

observer.observe(document.body, { childList: true, subtree: true });
