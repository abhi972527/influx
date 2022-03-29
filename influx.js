
let abhijeet = [];

// function createGroup(a) {
//     if (db.a !== undefined) {
//         db.a = [];
//     } else {
//         console.log("already created");
//     }
//     // db.a = [];
// }

// // console.log(db);

// createGroup(abhijeet);
// console.log(db);

function addMember(a) {
    // b.forEach((val)=> {
    //     if (a === val) {
    //         console.log("Users already present");
    //     } else {
    //         b.push(a)
    //     }
    // })
    // if (b.length == 0) {
    //     b.push(a)
    // } else {
    //     for (let i = 0; i < b.length; i++) {
    //         if (b[i] == a) {
    //             console.log("User already present");
    //         } else {
    //             b.push(a);
    //         }
    //     }
    // }
    abhijeet.push([a]);
    // console.log(abhijeet);
}


// console.log(abhijeet);

addMember("abhi");
addMember("Ravi")
addMember("Raj")

console.log(abhijeet);


function addExpenses(a, b) {
    for (let i = 0; i < a.length-1; i++) {
        if (abhijeet[i][0] == a) {
            abhijeet[i][1] = b;
        }
        // console.log(abhijeet);
    }
}

addExpenses("abhi", 30)
addExpenses("Ravi", 30)
addExpenses("Raj", 30)

// console.log(abhijeet);

function splitExpenses(a, b, c) {
    
}

