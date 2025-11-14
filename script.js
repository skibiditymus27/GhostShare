const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const toast = document.querySelector(".toast");

let toastTimer;

const toggleNav = () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
};

const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2500);
};

const copyToClipboard = async (value) => {
  if (!navigator.clipboard) {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      showToast("Copied to clipboard");
    } catch (err) {
      console.error("Copy failed", err);
      showToast("Unable to copy. Try manually.");
    } finally {
      document.body.removeChild(textarea);
    }
    return;
  }

  try {
    await navigator.clipboard.writeText(value);
    showToast("Copied to clipboard");
  } catch (err) {
    console.error("Clipboard error", err);
    showToast("Unable to copy. Try manually.");
  }
};

navToggle?.addEventListener("click", toggleNav);

window.addEventListener("click", (event) => {
  if (!navLinks.classList.contains("open")) return;
  if (event.target === navToggle || navToggle.contains(event.target)) return;
  if (navLinks.contains(event.target)) return;
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
});

const copyButtons = document.querySelectorAll("[data-copy]");
copyButtons.forEach((button) => {
  const value = button.getAttribute("data-copy");
  button.addEventListener("click", () => {
    if (value) {
      copyToClipboard(value);
    }
  });
});
