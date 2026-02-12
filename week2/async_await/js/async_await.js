async function fetchData() {
  const loader = document.getElementById("loader");
  const dataDiv = document.getElementById("data");

  try {
    loader.style.display = "block";

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();

    loader.style.display = "none";
    dataDiv.style.display = "block";

    dataDiv.innerHTML = `
      <h3>Title: ${result.title}</h3>
      <p>${result.body}</p>
    `;
  } catch (error) {
    loader.innerText = "Error loading data";
  }
}

fetchData();
