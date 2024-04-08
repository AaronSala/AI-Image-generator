const pages = document.querySelectorAll(".page");

pages.forEach((pageActive) => {
  pageActive.addEventListener("click", () => {
    pages.forEach(page => {
      if (page !== pageActive) {
        page.classList.remove("active");
        // pages.classList.add("active");
      }
    });
    pageActive.classList.add("active");
  });
});
