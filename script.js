// Exercise #1
const calPayment = payment => payment + (payment * 0.001) + 3 ;
console.log(calPayment(1000) + "$")

// Exercise #2
// Part 1

const name1 = 'Joey';
const name2 = 'Rose';
const name3 = 'Monica';

const nameFriend = () => console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
nameFriend();
// Part 2

const age = birthYear => 2023-birthYear;

const age1 = age(1991);
const age2 = age(1992);
const age3 = age(1987);

// Part 3
const welcome = () => console.log(`Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`);

// Challenge Yourself

const grageRubric = grade => {
    if(grade >= 5 && grade <= 11){
        console.log('Pass Status:',true);
    }else if (grade > 0 && grade < 5){
     console.log('Pass Status:', false);
    }

    if(grade === 11){
        console.log('Perfect');
    }else if (grade > 8 && grade < 11){
     console.log('Excellent');
    }
    
}

gradeRubric(9);
