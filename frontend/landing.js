window.onload = () => {
  const video = document.getElementById("intro-video");
  const videoContainer = document.getElementById("video-container");
  const mainContent = document.getElementById("main-content");

  // Hide content initially
  mainContent.style.display = "none";

  // Wait for video to finish
  video.onended = () => {
      videoContainer.style.display = "none"; // Remove video
      mainContent.style.display = "block";  // Show content with animation

      // GSAP Animations
      gsap.to(".logo", { opacity: 1, scale: 1, duration: 0.5 });
      gsap.to(".title", { opacity: 1, y: 0, duration: 0.5, delay: 0.2 });
      gsap.to(".description", { opacity: 1, y: 0, duration: 0.5, delay: 0.4 });

      document.querySelectorAll(".role").forEach((role, index) => {
          gsap.to(role, { opacity: 1, scale: 1, duration: 0.4, delay: 0.6 + index * 0.1 });
      });
  };
};

document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    ".logo",
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  );

  gsap.fromTo(
    ".title",
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.2 }
  );

  gsap.fromTo(
    ".description",
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.4 }
  );

  gsap.to(".card", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2, // Stagger effect (each card appears one after another)
    delay: 0.6,
  });
});

