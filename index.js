async function getUsers() {
  const parent = document.querySelector(".parent");
  const pTag = document.createElement("p");
  const proxyUrl = "https://cors-anywhere.herokuapp.com/corsdemo";
  const apiUrl =
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    console.log({ data });
  } catch (error) {
    console.log(error);
  }
  pTag.innerHTML = "hellok";
  parent.appendChild(pTag);
}

getUsers();
