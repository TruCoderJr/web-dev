const { log } = require("console");

let target = [100, 200, 150];

let team = [
    {
    name: "Rahul",
    taget: target[0],
    sold: 85,
  },{
    name: "Priya",
    taget: target[1],
    sold: 180,
  },
  {
    name: "Rahul",
    taget: target[2],
    sold: 120,
  },
];

// using object of object

/* 
let team = {
    rahul: {
      name: "Rahul",
      target: target[0],
      sold: 85,
    },
    priya: {
      name: "Priya",
      target: target[1],
      sold: 180,
    },
    amit: {
      name: "Amit",
      target: target[2],
      sold: 120,
    },
  };

function generateReport(obj) {
    for (let key in obj) {
      let teamMember = obj[key];
      let percentage = sales(teamMember.target, teamMember.sold);
  
      console.log(`\nName: ${teamMember.name}`);
      console.log(`Sales Target: ${teamMember.target} units`);
      console.log(`Units Sold: ${teamMember.sold} units`);
      console.log(`Sales Percentage: ${percentage.toFixed(2)}%`);
      console.log(`Performance: ${performance(percentage)}`);
      console.log(`Bonus: ${bonus(percentage, teamMember.sold)}`);
    }
}
*/


function sales(target, sold) {
    return (sold/target) * 100;
}

function perfomance(percentage) {
    if (percentage >= 90) {
        return "high performer";
    }else if (percentage >= 70 && percentage < 90) {
        return "Avg performer";
    }else{
        return "Low performer"
    }
}

function bonus(percentage, sold) {
    if (percentage >= 90) {
        return `${(20/100)*sold} units`;
    }else if (percentage >= 70 && percentage < 90) {
        return `${(10/100)*sold} units`;
    }else{
        return "No Bonus"
    }
}

function generateReport(obj){
    console.log("------------------------");
    console.log("Sales Performance Report");
    console.log("------------------------");
    for (team of obj) {

        let per = sales(team.taget, team.sold)
        console.log(`${team.name}`);
        console.log(`Sales Target: ${team.target} units`);
        console.log(`Unitss Sold: ${team.sold} units`);
        console.log(`Sales Percentage: ${per}%`);
        console.log(`Perfomance: ${perfomance(per)}`);
        console.log(`Perfomance: ${bonus(per, team.sold)}\n`);
    }
}

generateReport(team);