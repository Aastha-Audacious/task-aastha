// Rest operator/Parameter
const { firstName, lastName, ...otherInfo } = {
    firstName: "Aastha",
    lastName: "Panwar",
    companyName: "Audacious",
    profession: "Backend Developer",
    gender: "Female"
  }
  
  console.log(otherInfo);

//   Output
/* {
    companyName: "CodeSweetly", 
    profession: "Web Developer", 
    gender: "Male"
} */




// Array of Objects
const details = [
    { fname: "Aastha", lname: "Panwar", city: "Indore", salary: 10000 },
    { fname: "Naman", lname: "Panwar", city: "Indore", salary: 30000 },
    { fname: "Anil", lname: "Panwar", city: "Indore", salary: 50000 },
    { fname: "Sangeeta", lname: "Panwar", city: "Indore", salary: 70000 },
    { fname: "Prachi", lname: "Panwar", city: "Indore", salary: 20000 }
];

// Calculation of net salary using function
let totalSalary = (a, b, c, d, e) => {
    let netSalary = a.salary + b.salary + c.salary + d.salary + e.salary
    return netSalary
  }
  
  console.log("Total salary is: "+totalSalary(...details))


  //   Output
/* Total salary is: " 18000*/

// Spread Operator
const a1 = ["Jan", "Feb", "Mar"];
const a2 = ["Apr", "May", "Jun"];
const a3 = ["Jul", "Aug", "Sep"];
const a4 = ["Oct", "Nov", "Dec"];

const month = [...a1, ...a2, ...a3, ...a4];
console.log(month);


