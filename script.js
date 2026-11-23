document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  menuButton?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

  const toast = document.querySelector(".toast");
  document.querySelectorAll(".notify-form").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      toast.textContent = "Thanks! You're on the list for the next FinalLap auction.";
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 3200);
    });
  });

  if (window.gsap && window.ScrollTrigger && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".hero-visual", { opacity: 0, y: 24, duration: 1, ease: "power3.out" });
    gsap.from(".hero-copy h1", { opacity: 0, y: 28, duration: .9, delay: .2, ease: "power3.out" });
    gsap.utils.toArray(".reveal").forEach((element) => {
      gsap.from(element, {
        opacity: 0, y: 45, duration: .8, ease: "power2.out",
        scrollTrigger: { trigger: element, start: "top 86%", once: true }
      });
    });
    gsap.from(".brand-track span", {
      opacity: 0, y: 10, stagger: .08, duration: .5,
      scrollTrigger: { trigger: ".brand-strip", start: "top 90%", once: true }
    });
    gsap.from(".show-title", {
      opacity: 0, scale: .94, duration: 1,
      scrollTrigger: { trigger: ".show-art", start: "top 75%", once: true }
    });
  }
});