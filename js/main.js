// ! ----------------------------switch mode functions-------------------------------
document
  .getElementById("theme-toggle-button")
  .addEventListener("click", switchMode);

loadMOde();

setTimeout(() => {
  // alert("All data is not real \n If you want to know more about me ; Just go to my GitHub page in the page footer")
}, 5000);

function loadMOde() {
  if (localStorage.getItem("mode") == "dark") {
    console.log("dark mode");
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  } else if (localStorage.getItem("mode") == "light") {
    console.log("light mode");
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }
}
function setMode() {
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else if (document.documentElement.classList.contains("light")) {
    localStorage.setItem("mode", "light");
  }
}
function switchMode() {
  document.documentElement.classList.toggle("dark");
  document.documentElement.classList.toggle("light");
  setMode();
}

// ! ----------------------------nav Link scrollspy -------------------------------
let activeSections = document.querySelectorAll("section");
let activeLinks = document.querySelectorAll(".nav-links a");
let myActiveLink;
window.addEventListener("scroll", activeLink);
activeLink();
function activeLink() {
  activeSections.forEach((section) => {
    if (scrollY + 350 >= section.offsetTop) {
      for (let i = 0; i < activeLinks.length; i++) {
        if (activeLinks[i].getAttribute("href") == `#${section.id}`) {
          activeLinks[i];
          activeLinks[i].classList.add("active");
        } else {
          activeLinks[i].classList.remove("active");
        }
      }
    }
  });
}

// ! ---------------------------- aside nav toggler -------------------------------
let settingsToggle = document.getElementById("settings-toggle");
let settingsSidebar = document.getElementById("settings-sidebar");

settingsToggle.addEventListener("click", toggleAside);
document
  .getElementById("close-settings")
  .addEventListener("click", toggleAside);

function toggleAside() {
  settingsSidebar.classList.toggle("translate-x-full");
  settingsToggle.classList.toggle("sideBtn");
}
// ? ----------------------------font in aside nav ----------------------------
document.body.classList.add(localStorage.getItem("font") ?? "font-alexandria");
let currentFont = localStorage.getItem("font");
let fontBtns = document.querySelectorAll("Button.font-option");

for (let r = 0; r < fontBtns.length; r++) {
  fontBtns[r].addEventListener("click", function () {
    let myFont = fontBtns[r].getAttribute("data-font");
    switch (myFont) {
      case "alexandria":
        document.body.classList.remove("font-tajawal", "font-cairo");
        document.body.classList.add("font-alexandria");
        localStorage.setItem("font", "font-alexandria");
        break;
      case "cairo":
        document.body.classList.remove("font-tajawal", "font-alexandria");
        document.body.classList.add("font-cairo");
        localStorage.setItem("font", "font-cairo");
        break;
      case "tajawal":
        document.body.classList.remove("font-alexandria", "font-cairo");
        document.body.classList.add("font-tajawal");
        localStorage.setItem("font", "font-tajawal");
        break;
    }

    fontBtns.forEach((element) => {
      element.classList.remove(
        "active",
        "border-primary",
        "bg-slate-50",
        "dark:bg-slate-800"
      );
      element.classList.add("border-slate-200", "dark:border-slate-700");
    });
    fontBtns[r].classList.remove("border-slate-200", "dark:border-slate-700");
    fontBtns[r].classList.add(
      "active",
      "border-primary",
      "bg-slate-50",
      "dark:bg-slate-800"
    );
  });
}
switch (currentFont) {
  case "font-alexandria":
    console.log("font-alexandria");
    fontBtns[0].classList.remove("border-slate-200", "dark:border-slate-700");
    fontBtns[0].classList.add(
      "active",
      "border-primary",
      "bg-slate-50",
      "dark:bg-slate-800"
    );

    break;
  case "font-tajawal":
    console.log("font-tajawal");
    fontBtns[1].classList.remove("border-slate-200", "dark:border-slate-700");
    fontBtns[1].classList.add(
      "active",
      "border-primary",
      "bg-slate-50",
      "dark:bg-slate-800"
    );

    break;
  case "font-cairo":
    console.log("font-cairo");
    fontBtns[2].classList.remove("border-slate-200", "dark:border-slate-700");
    fontBtns[2].classList.add(
      "active",
      "border-primary",
      "bg-slate-50",
      "dark:bg-slate-800"
    );

    break;
}

// ! ---------------------------- scroll to top btn -------------------------------
let scrollTop = document.getElementById("scroll-to-top");
window.addEventListener("scroll", scrollTopFunc);
scrollTop.addEventListener("click", function () {
  window.scroll(0, 0);
});
function scrollTopFunc() {
  if (scrollY > 500) {
    scrollTop.classList.add("visible", "opacity-100");
    scrollTop.classList.remove("invisible", "opacity-0");
  } else {
    scrollTop.classList.remove("visible", "opacity-100");
    scrollTop.classList.add("invisible", "opacity-0");
  }
}
// ! ---------------------------- navs and tabs -------------------------------

let tabBtns = document.querySelectorAll(".portfolio-filter");
let tabItems = document.querySelectorAll(".portfolio-item");

for (let t = 0; t < tabBtns.length; t++) {
  tabBtns[t].addEventListener("click", function () {
    tabBtns.forEach((element) => {
      element.classList.remove(
        "active",
        "bg-linear-to-r",
        "from-primary",
        "to-secondary",
        "text-white",
        "shadow-lg",
        "shadow-primary/50"
      );
    });
    tabBtns[t].classList.add(
      "active",
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white",
      "shadow-lg",
      "shadow-primary/50"
    );
    // tabBtns[t].classList.remove(
    // "dark:bg-slate-800",
    // "text-slate-600",
    // "dark:text-slate-300",
    // "border",
    // "border-slate-300",
    // "dark:border-slate-700",
    // "bg-white"
    // );

    tabItems.forEach((ele) => {
      hideTab(ele);
    });
    let currentFilter = tabBtns[t].getAttribute("data-filter");
    tabItems.forEach((ele) => {
      if (ele.getAttribute("data-category") == currentFilter) {
        displayTab(ele);
      } else if (currentFilter == "all") {
        tabItems.forEach((ele) => {
          displayTab(ele);
        });
      } else {
        hideTab(ele);
      }
    });
  });
}

function displayTab(ele) {
setTimeout(() => {
    ele.style.display = "block";
}, 300);
  setTimeout(() => {
    ele.style.opacity = "1";
    ele.style.transform = "scale(1)";
  }, 600);
}
function hideTab(ele) {
  ele.style.transform = "scale(0.7)";
  ele.style.opacity = "0";
  setTimeout(() => {
    ele.style.display = "none";
  }, 300);
}

// ! ---------------------------- carousel -------------------------------

const carousel = document.getElementById("testimonials-carousel");
const prevBtn = document.getElementById("prev-testimonial");
const nextBtn = document.getElementById("next-testimonial");
let carIndicat = document.querySelectorAll(".carousel-indicator");
let carouselCardWidth = document.querySelector(".testimonial-card").offsetWidth;

function removeIndicate() {
  carIndicat.forEach((indicat) => {
    indicat.classList.remove("active", "bg-accent", "scale-125");
    indicat.classList.add("bg-slate-400", "dark:bg-slate-600");
  });
}

function activeIndicate(f) {
  switch (f) {
    case 0:
      carIndicat[0].classList.add("active", "bg-accent", "scale-125");
      carIndicat[0].classList.remove("bg-slate-400", "dark:bg-slate-600");

      break;
    case 1:
      carIndicat[1].classList.add("active", "bg-accent", "scale-125");
      carIndicat[1].classList.remove("bg-slate-400", "dark:bg-slate-600");
      break;
    case 2:
      carIndicat[2].classList.add("active", "bg-accent", "scale-125");
      carIndicat[2].classList.remove("bg-slate-400", "dark:bg-slate-600");
      break;
    case 3:
      carIndicat[3].classList.add("active", "bg-accent", "scale-125");
      carIndicat[3].classList.remove("bg-slate-400", "dark:bg-slate-600");
      break;
  }
}
carIndicat.forEach((indicator) => {
  indicator.addEventListener("click", function () {
    removeIndicate();

    var indicatorIndex = Array.prototype.indexOf.call(carIndicat, indicator);
    carousel.style.transform = `translateX(${
      carouselCardWidth * indicatorIndex
    }px)`;
    activeIndicate(indicatorIndex);
  });
});

var f = 0;
prevBtn.addEventListener("click", function () {
  removeIndicate();
  f--;
  f < 0 ? (f = 3) : null;
  console.log("f : ", f);
  carousel.style.transform = `translateX(${carouselCardWidth * f}px)`;
  activeIndicate(f);
});

nextBtn.addEventListener("click", function () {
  removeIndicate();
  f++;
  f > 3 ? (f = 0) : null;
  console.log("f : ", f);
  carousel.style.transform = `translateX(${carouselCardWidth * f}px)`;
  activeIndicate(f);
});

// ! ---------------------------- theme code  -------------------------------

let themeParent = document.getElementById("theme-colors-grid");

let themes = [
  {
    title: "PurpleBlue",
    primary: "#6366f1",
    secondary: "#8b5cf6",
    accent :"#a855f7" ,
    background: " rgb(99, 102, 241), rgb(139, 92, 246)",
  },
  {
    title: "PinkOrange",
    primary: "#ec4899",
    secondary: "#f97316",
    accent : "#fb923c",
    background: " rgb(236, 72, 153), rgb(249, 115, 22)",
  },
  {
    title: "GreenEmerald",
    primary: "#10b981",
    secondary: "#059669",
    accent : "#34d399",
    background: " rgb(16, 185, 129), rgb(5, 150, 105)",
  },
  {
    title: "BlueCyan",
    primary: "#3b82f6",
    secondary: "#06b6d4",
    accent : "#22d3ee",
    background: "rgb(59, 130, 246), rgb(6, 182, 212)",
  },
  {
    title: "RedRose",
    primary: "#ef4444",
    secondary: "#f43f5e",
    accent : "#fb7185",
    background: "rgb(239, 68, 68), rgb(244, 63, 94)",
  },
  {
    title: "AmberOrange",
    primary: "#f59e0b",
    secondary: "#ea580c",
    accent : "#fbbf24",
    background: "rgb(245, 158, 11), rgb(234, 88, 12)",
  },
];

for (let the = 0; the < themes.length; the++) {
  createBtn(themes[the]);
}

function changeTheme(btn) {
  document.documentElement.style.cssText = `--color-primary: ${btn.primary}; --color-secondary: ${btn.secondary}; --color-accent: ${btn.accent};`;
}

var newBtn;
var newDiv;
function createBtn(btn) {
  newDiv = document.createElement("div");
  newDiv.classList.add(
    "inline",
    `${btn.title}`,
    "p-0",
    "flex",
    "justify-center",
    "items-center",
    "py-0",
    "center",
    "luffy",
    "h-fit"
  );
  newBtn = document.createElement("button");
  newBtn.classList.add(
    "w-12",
    "pb-0",
    "m-0",
    "my-0",
    "mx-0",
    "h-12",
    "rounded-full",
    "cursor-pointer",
    "transition-transform",
    "hover:scale-110",
    "border-2",
    "border-slate-200",
    "dark:border-slate-700",
    "hover:border-primary",
    "shadow-sm"
  );
  newBtn.setAttribute("title", `${btn.title}`);
  newBtn.setAttribute("data-primary", `${btn.primary}`);
  newBtn.setAttribute("data-secondary", `${btn.secondary}`);
  newBtn.setAttribute(
    "style",
    `background: linear-gradient(135deg, ${btn.background});`
  );
  newDiv.append(newBtn);
  themeParent.append(newDiv);
  newDiv.style.height = getComputedStyle(newDiv).width;
  newDiv.addEventListener("click", function () {
    document.querySelectorAll(".luffy").forEach((element) => {
      element.classList.remove("border-4", "border-primary");
    });
    document
      .querySelector(`.${btn.title}`)
      .classList.add("border-4", "border-primary", "rounded-full");
    newBtn.classList.add(
      "ring-2",
      "ring-primary",
      "ring-offset-2",
      "ring-offset-white",
      "dark:ring-offset-slate-900"
    );
    changeTheme(btn);
    localStorage.setItem("theme", `${btn.title}`);
  });
  getTheme(btn);
}

function getTheme(btn) {
  currentTheme = localStorage.getItem("theme");
  if (currentTheme == btn.title) {
    document
      .querySelector(`.${btn.title}`)
      .classList.add("border-4", "border-primary", "rounded-full");
    changeTheme(btn);
   
  } else if (!currentTheme) {
    document
      .querySelector(`.PurpleBlue`)
      .classList.add("border-4", "border-primary", "rounded-full");
    changeTheme(btn);
  }
}


// !--------------------------------------back circles background -------------------------------------------

let circles = document.querySelectorAll(".myGradientBcc")
circles.forEach(circle => {
  circle.style.cssText = `background: radial-gradient(var(--color-primary) 10%  ,var(--color-secondary) 20% ,transparent  70% ) !important ;opacity: 0.2; `;

});