  let loadBtn = document.getElementById("loadButton");
  
function list() {
  fetch ("http://jsonplaceholder.typicode.com/todos")
.then((response) => {
    return response.json();
})
.then((users) => {
    users.forEach(element => {
         document.body.innerHTML += `<h2>${element.title}</h2>`;
         document.body.innerHTML += `<p>${element.completed}</p>`;
    });
})

.catch((err) => {
    console.log(err);
})
}
loadBtn.onclick=list;