const url = "https://api.api-ninjas.com/v1/convertcurrency?have=GBP&want=AUD&amount=5000";
const options ={
    method: "GET",
    headers:{
        "X-Api-Key" : "nEUABbjatdACNheqAnxOjbeqjEiiFgvfN6tgLngY",
        "content-type": "application/json",
    }
}


  fetch(url, options)
  .then((response) =>{
    return response.json()
    .then((data) =>{
        console.log(data);
    }) 
    .catch((error) =>{
        console.log("Somthing went wrong!" , error)
    })
  })

  // fetch(url, options)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Something went wrong!", error);
//   });
  