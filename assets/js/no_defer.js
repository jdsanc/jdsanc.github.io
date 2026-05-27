document.addEventListener("DOMContentLoaded", function () {
  const isDark = typeof determineComputedTheme === "function" && determineComputedTheme() === "dark";

  document.querySelectorAll("table").forEach(function (table) {
    table.classList.toggle("table-dark", isDark);

    if (table.closest('[class*="news"], [class*="card"], [class*="archive"], code')) {
      return;
    }

    table.classList.add("table-hover");
  });
});
