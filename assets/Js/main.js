const darkSwitchIcon = document.querySelector("#dark-switch-icon");
const darkSwitch = document.querySelector("#dark-switch");
const darkText = document.querySelector("#dark-text");
const darkChangeText = document.querySelector("#dark-text-change");
const html = document.documentElement;
let isDarkMode = false;

// Switch theme function
const toggleTheme = () => {
  isDarkMode = !isDarkMode;
  switchTheme();
};

const toDark = () => {
  darkSwitchIcon.classList.add(
    "translate-x-full",
    "rotate-[360deg]",
    "bg-slate-900"
  );
  darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-100"></i>`;
  // darkChangeText.innerText = 'Dark'
  darkSwitch.classList.remove("bg-slate-800");
  darkSwitch.classList.add("bg-slate-100");
  localStorage.setItem("data-theme", "dark");
  html.classList.add("dark");
  darkText.classList.add("-translate-x-7");
  darkText.innerText = "ON";
};

const toLight = () => {
  darkSwitchIcon.classList.remove("translate-x-full", "bg-slate-900");
  // darkChangeText.innerText = 'Light'
  darkSwitch.classList.remove("bg-slate-100");
  darkSwitch.classList.add("bg-slate-800");
  localStorage.removeItem("data-theme");
  html.classList.remove("dark");
  darkText.classList.remove("-translate-x-7");
  darkText.innerText = "FF";
  darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  setTimeout(() => {
    darkSwitchIcon.classList.remove("rotate-[360deg]");
  }, 200);
};

const switchTheme = () => {
  isDarkMode ? toDark() : toLight();

};

const dataTheme = localStorage.getItem("data-theme");
dataTheme === "dark" ? toDark() : toLight();


// Mobile Menu
const mobileMenu = document.querySelector(".mobile-menu");
const mobileSlide = document.querySelector("#mobile-slide");
const mobileSlideClose = document.querySelector("#mobile-slide-close");

mobileMenu.addEventListener("click", () => {
  mobileSlide.style.right = "0px";
});

mobileSlideClose.addEventListener("click", () => {
  mobileSlide.style.right = "-100%";
});

// Wayponit
const navControl = document.querySelector(".nav-control");
var waypoint = new Waypoint({
  element: document.getElementById("chat"),
  handler: function (direction) {
    if (direction === "down") {
      navControl.classList.add(
        "z-10",
        "fixed",
        "w-full",
        "shadow",
        "animate__fadeInDown"
      );
    } else {
      navControl.classList.remove(
        "z-10",
        "fixed",
        "w-full",
        "shadow",
        "animate__fadeInDown"
      );
    }
  },
  // offset: "10%",
});

//   Mobile-Slide-Closed
let mobileSlideClosed = document.querySelectorAll(".mobile-slide-closed");
for (let i = 0; i < mobileSlideClosed.length; i++) {
  // console.log(mobileSlideClosed[i])
  mobileSlideClosed[i].addEventListener("click", () => {
    mobileSlide.style.right = "-100%";
  });
}

// Nav Scroll Active link
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;

sections.forEach((current) => {
    const sectionHeight = current.offsetHeight, 
    sectionTop = current.offsetTop - 58, 
    sectionId = current.getAttribute("id"); 
    console.log(sectionId);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector("a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector("a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// ScrollReveal
ScrollReveal().reveal('.headline', { 
  
  delay: 300,
  origin: 'bottom',
  distance: '50px',
  interval: 300,
  scale: 0.85,
  reset: true

});





