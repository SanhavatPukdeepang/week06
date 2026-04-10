function getAllAnimalsByLetter(letter) {
  let offset = 0;
  let allResults = [];

  const url = `https://api.api-ninjas.com/v1/animals?name=${letter}&offset=${offset}`;
  return fetch(url, {
    headers: {   "X-Api-Key": "nEUABbjatdACNheqAnxOjbeqjEiiFgvfN6tgLngY",
        "content-type": "application/json", },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        allResults.push(...data);
        offset += 20; // Move to the next "page"
      }

      console.log(
        `Found ${allResults.length} animals containing the letter ${letter}`,
      );
      console.log(allResults);
    });
}

getAllAnimalsByLetter("a");