const searchInput = document.getElementById("searchInput");
const catFilter = document.getElementById("catFilter");
const dateFilter = document.getElementById("dateFilter");
const locFilter = document.getElementById("locFilter");
const clearBtn = document.getElementById("clearFilters");

function filterEvents() {
  const keyword = searchInput.value.toLowerCase().trim();
  const category = catFilter.value;
  const dateValue = dateFilter.value;
  const location = locFilter.value.toLowerCase().trim();

  const filtered = allEvents.filter(event => {
    const matchesKeyword =
      event.title.toLowerCase().includes(keyword) ||
      event.description.toLowerCase().includes(keyword);

    const matchesCategory = category === "" || event.category === category;

    const matchesLocation =
      location === "" || event.location.toLowerCase().includes(location);

    const eventDateStr = event.date.match(/\b\w+\s\d{1,2},\s\d{4}/);
    let matchesDate = true;
    if (dateValue && eventDateStr) {
      const eventDate = new Date(eventDateStr[0]);
      const selectedDate = new Date(dateValue);
      matchesDate = eventDate.toDateString() === selectedDate.toDateString();
    }

    return matchesKeyword && matchesCategory && matchesLocation && matchesDate;
  });

  renderEvents(filtered);
}

searchInput.addEventListener("input", filterEvents);
catFilter.addEventListener("change", filterEvents);
dateFilter.addEventListener("change", filterEvents);
locFilter.addEventListener("input", filterEvents);

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  catFilter.value = "";
  dateFilter.value = "";
  locFilter.value = "";
  renderEvents(allEvents);
});


  
document.addEventListener("DOMContentLoaded", () => {
      const scrollBtn = document.getElementById("scrollTopBtn");

      if (!scrollBtn) return;

      scrollBtn.style.display = "flex";

      scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
});