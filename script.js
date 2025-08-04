let x = 0,
    y = 0,
    dirX = 1,
    dirY = 1;
const speed = 3;

let dvd = document.querySelector(".dvd-csi");

const dvdWidth = dvd.clientWidth;
const dvdHeight = dvd.clientHeight;

const animate = () => {
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

const greeting = document.querySelectorAll(".greeting");
const qaGreeting = document.querySelectorAll(".qa-greeting");

const interviewModeCheckbox = document.querySelector(
    ".interview-mode-checkbox"
);
interviewModeCheckbox.addEventListener("change", () => {
    if (interviewModeCheckbox.checked) {
        qaGreeting.forEach((element) => {
            element.style.display = "none";
        });
        greeting.forEach((element) => {
            element.style.fontSize = "5.5vh";
        });
    } else {
        qaGreeting.forEach((element) => {
            element.style.display = "block";
        });
        greeting.forEach((element) => {
            element.style.fontSize = "3.4vh";
        });
    }
});

const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

const convertENtoFA = (input) => {
    if (input) {
        let output = input.toString().replace(/\d/g, (digit) => {
            return persianNumbers[parseInt(digit, 10)];
        });

        return output;
    } else {
        return "";
    }
};

const timeInput = document.querySelector(".meeting-time-input");
const meetingTime = document.querySelector(".meeting-time");

let hour, minute;

const updateTimeFromInput = () => {
    const timeValue = timeInput.value;
    [hour, minute] = timeValue.split(":");

    meetingTime.innerText = `${convertENtoFA(hour)}:${convertENtoFA(minute)}`;
};

updateTimeFromInput();

timeInput.addEventListener("input", () => {
    updateTimeFromInput();
});

const updateCountdown = () => {
    const now = new Date();
    const target = new Date();
    target.setHours(hour, minute, 0, 0);

    const countdownEl = document.querySelector(".countdown");

    if (now > target) {
        countdownEl.innerText = "🎉🎉🎉🎉🎉";
        return;
    }

    const diff = target - now;

    const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(
        Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(
        2,
        "0"
    );

    countdownEl.innerText = `${hours}:${minutes}:${seconds}`;
};

updateCountdown();
setInterval(updateCountdown, 1000);

let settingClicked = 0;
const settingBtn = document.querySelector(".setting-btn");
const settingModal = document.querySelector(".setting-modal");

const handleOutsideClick = (event) => {
    if (
        !settingModal.contains(event.target) &&
        !settingBtn.contains(event.target)
    ) {
        closeSettingModal();
        settingClicked++;
        settingBtn.style.transform = `rotate(${settingClicked * 90}deg)`;
    }
};

const closeSettingModal = () => {
    settingModal.classList.remove("show");

    setTimeout(() => {
        settingModal.style.display = "none";
    }, 300);
    
    document.removeEventListener("click", handleOutsideClick);
};

settingBtn.addEventListener("click", () => {
    if (settingClicked++ % 2 == 0) {
        settingModal.style.display = "flex";
        setTimeout(() => {
            settingModal.classList.add("show");
        }, 0);

        document.addEventListener("click", handleOutsideClick);
    } else {
        closeSettingModal();
    }

    settingBtn.style.transform = `rotate(${settingClicked * 90}deg)`;
});

const ICARUSs = document.querySelectorAll(".ICARUS");
ICARUSs.forEach((ICARUS) => {
    ICARUS.addEventListener("click", () => {
        if (ICARUS.classList.contains("ICARUS")) {
            console.log("Aloha!");
            ICARUS.setAttribute(
                "href",
                "https://also-ali-sdg90.github.io/ICARUS/"
            );
            ICARUS.classList.remove("ICARUS");
            setTimeout(() => {
                ICARUS.removeAttribute("href");
            }, 0);
        }
    });
});
