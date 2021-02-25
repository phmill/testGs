function testGs() {
  const url = "https://script.google.com/macros/s/AKfycbw6gpxX6HnYyNrtq1mF0o4CPpBN6N1sJ4UqNDM_/exec";

  fetch(url)
    .then(d => d.json())
    .then(d => {
      console.log(d);
      document.getElementById("app").textContent = d[0].status;
    });
}

document.getElementById("btn").addEventListener("click", testGs);

