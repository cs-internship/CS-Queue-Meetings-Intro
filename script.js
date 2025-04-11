let x = 0,
    y = 0,
    dirX = 1,
    dirY = 1;
const speed = 3;

let dvd = document.querySelector(".dvd-csi");

const dvdWidth = dvd.clientWidth;
const dvdHeight = dvd.clientHeight;

function animate() {
    const screenHeight = document.body.clientHeight;
    const screenWidth = document.body.clientWidth;

    if (y + dvdHeight >= screenHeight || y < 0) {
        dirY *= -1;
    }
    if (x + dvdWidth >= screenWidth || x < 0) {
        dirX *= -1;
    }
    x += dirX * speed;
    y += dirY * speed;
    dvd.style.left = x + "px";
    dvd.style.top = y + "px";
    window.requestAnimationFrame(animate);
}

const specialModeCheckbox = document.querySelector(".special-mode-checkbox");

specialModeCheckbox.addEventListener("change", () => {
    if (specialModeCheckbox.checked) {
        window.requestAnimationFrame(animate);
        dvd.style.display = "block";
    } else {
        dvd.style.display = "none";
    }
});

dvd.style.display = "none";
