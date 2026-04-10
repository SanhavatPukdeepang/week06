
const url = "https://api.api-ninjas.com/v1/animals?name=cheetah"
const options = {
    method: "GET",
    headers:{
        "X-Api-Key": "nEUABbjatdACNheqAnxOjbeqjEiiFgvfN6tgLngY",
        "content-type": "application/json",

    }
}

fetch(url, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Something went wrong!", error);
  });