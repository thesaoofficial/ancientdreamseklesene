document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklendiğinde çalışacak kodlar buraya
    createDrops();
});

function createDrops() {
    const numberOfDrops = 100; // İstenilen damla sayısı

    for (let i = 0; i < numberOfDrops; i++) {
        createDrop();
    }
}

function createDrop() {
    const drop = document.createElement("div");
    drop.classList.add("drop");
    document.querySelector(".rain").appendChild(drop);

    const animationDuration = Math.random() * 2 + 1; // Rastgele animasyon süresi
    drop.style.animation = `fall ${animationDuration}s linear infinite`;

    const initialDelay = Math.random() * 2; // Rastgele başlangıç gecikmesi
    drop.style.animationDelay = `-${initialDelay}s`;

    const randomX = Math.random() * window.innerWidth; // Rastgele X konumu
    drop.style.left = `${randomX}px`;
}
