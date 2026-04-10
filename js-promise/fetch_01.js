fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);เรั 
  })
  .catch((error) => {
    console.error("Something went wrong!", error);
  });