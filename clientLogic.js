function incrementVeg() {
  let counterElement = document.getElementById("counter");
  let currentCount = parseInt(counterElement.innerHTML);
  counterElement.innerHTML = currentCount + 1;
}
  
function decrementVeg() {
  let counterElement = document.getElementById("counter");
  let currentCount = parseInt(counterElement.innerHTML);
  counterElement.innerHTML = currentCount - 1;
}



function incrementNonVeg() {
  let counterElement = document.getElementById("lol");
  let currentCount = parseInt(counterElement.innerHTML);
  counterElement.innerHTML = currentCount + 1;
}
  
function decrementNonVeg() {
  let counterElement = document.getElementById("lol");
  let currentCount = parseInt(counterElement.innerHTML);
  counterElement.innerHTML = currentCount - 1;
}



function incrementChappati() {
  let counterElement = document.getElementById("dem");
  let currentCount = parseInt(counterElement.innerHTML);
  counterElement.innerHTML = currentCount + 1;
}
  
function decrementChappati() {
  let counterElement = document.getElementById("dem");
  let currentCount = parseInt(counterElement.innerHTML);
  counterElement.innerHTML = currentCount - 1;
}



function incrementRice() {
  let counterElement = document.getElementById("broo");
  let currentCount = parseInt(counterElement.innerHTML);
  counterElement.innerHTML = currentCount + 1;
}
  
function decrementRice() {
  let counterElement = document.getElementById("broo");
  let currentCount = parseInt(counterElement.innerHTML);
  counterElement.innerHTML = currentCount - 1;
}




function submitData() {
  const phoneNumber = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const vegCount = parseInt(document.getElementById("counter").innerHTML);
  const nonVegCount = parseInt(document.getElementById("lol").innerHTML);
  const chappatiCount = parseInt(document.getElementById("dem").innerHTML);
  const riceCount = parseInt(document.getElementById("broo").innerHTML);

  const data = {
    phoneNumber: phoneNumber,
    address: address,
    vegCount: vegCount,
    nonVegCount: nonVegCount,
    chappatiCount: chappatiCount,
    riceCount: riceCount
  };

  const jsonData = JSON.stringify(data);
  console.log(jsonData);
  // You will need to send this jsonData to a server-side script to save it into a file
}
  