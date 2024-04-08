
// const newDiv = document.createElement("div");

// const textnode = document.createTextNode(
//   "this is a dynamiicaly created document"
// );
// newDiv.classList.add("deco");
// newDiv.style.fontSize = "2rem";

// newDiv.appendChild(textnode);

// const containerDiv = document.querySelector(".container");
// const page = document.querySelector(".page");

// containerDiv.insertBefore(newDiv, page);

// let p = `
// <p class="page">
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam facere
//         aliquid, iste modi odio deleniti corrupti laboriosam distinctio nam,
//         debitis, sint ab! Animi quaerat nostrum consectetur non nulla, impedit
//         totam ipsam perspiciatis facere ducimus eius? Sed nulla nobis itaque
//         quaerat natus quos, omnis, distinctio unde, iste iure modi voluptates
//         minima.
//       </p>`;

// containerDiv.insertAdjacentHTML("beforeend", p);
// let employees = {
//   name: "Aaron",
//   secondName: "sala",
//   email: "salaaron@gmial.com",
//   gender:"male",
// }
// console.log(employees.name +" "+ employees.secondName);


// function CreateObj(firstname, secondnme, email, gender) {
  
//     this.firstname = firstname;
//     this.secondnme = secondnme;
//     this.email = email;
//     this.gender = gender;
  
// }
// const employe = new CreateObj("Aaron", "sala", "email", "m");
// const employe1 = new CreateObj("jane", "mwelu", "mwelu@gmail.com", "f");



// function Greeting (name) {
//    this.name=name
//   console.log(this.name)
// }
// new Greeting("alice")

function Person(firstname, lastname, email, address,) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.email = email;
  this.address = address;
  this.fullname= function () {
    return this.firstname+ " " + this.lastname
  }
}
const sala = new Person("aaron", "sala", "sala@gmail.com",{city:"nairobi", code:90130})
console.log(sala.fullname())

for (let key in sala) {
  console.log(key, sala[key]);
}



