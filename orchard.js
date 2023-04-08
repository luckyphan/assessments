///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
/* declare the variable totalAcres that will store the sum of all the acres
    Then set the for loop with the condition being the length of the acres array since all
    of the acres are equivalent
    Inside the for loop access the element at index i and add to the sum and update accordingly
*/
let totalAcres =0;
if(fujiAcres.length === pinkAcres.length && pinkAcres.length === galaAcres.length){
    for(let i = 0; i<fujiAcres.length;i++){
        totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
    }   
}
console.log("----------------------------------")
console.log("Total acres are " + totalAcres);


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/
/* the formula for finding the average is the sum/number of elements
    instantiate the averageDailyAcres with this formula but because there 
    are 3 fields for the acres I did 3 * the length of the acres array length
    for the number of elements
*/
// CODE HERE
console.log("----------------------------------")
let averageDailyAcres = totalAcres/(fujiAcres.length*3);
console.log("Average acres are "+ averageDailyAcres)




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/
/* the while loop needs to keep running until there are no acres left -> while(acresleft > 0)
    inside the while loop, for each iteration (times it runs), increment the days var and subtract the
    daily average (averageDailyAcres) from acresLeft
*/

let acresLeft = 174 
let days = 0

// CODE HERE
console.log("----------------------------------")
while(acresLeft > 0){
    days++;
    acresLeft-=averageDailyAcres
}
console.log(days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/
/* The three array will hold the amount of tons each field holds. I used the slice method
    to initialize the array with copies of its corresponding acres array. Then inside the for loop
    upon each iteration, it updates the ith element with the (element * 6.5) to give the field in tons
*/
// CODE HERE
console.log("----------------------------------")
let fujiTons = fujiAcres.slice(0,fujiAcres.length)
let galaTons = galaAcres.slice(0,galaAcres.length)
let pinkTons = pinkAcres.slice(0,pinkAcres.length)

for(let i=0; i<fujiAcres.length; i++){
    fujiTons[i]*=6.5;
    galaTons[i]*=6.5;
    pinkTons[i]*=6.5;
}
console.log(fujiTons+" \n" + galaTons+ " \n"+ pinkTons)



// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/
/* initialized the pounds variable to zero. then will update it in the for loop. upon each iteration, the ith element of the tons
    value will be * by 2000 to convert the element in lbs then will add and update the corresponding pounds variable
*/
// CODE HERE 
console.log("----------------------------------")
let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for(let i=0; i<fujiAcres.length; i++){
    fujiPounds += fujiTons[i] *2000
    galaPounds += galaTons[i] *2000
    pinkPounds += pinkTons[i] *2000
}

console.log("Fuji is "+fujiPounds+"lbs\nGala is " + galaPounds+"lbs\nPink is "+ pinkPounds+"lbs");



// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/
/* First you must find the price by multipluing the pounds to the corresponding price. This will be in cents. Therefore,
    upon conversion to dollars, divide the amount by 100 */
// CODE HERE
console.log("----------------------------------")
let fujiProfit = (fujiPounds*fujiPrice)/100
let galaProfit = (galaPounds*galaPrice)/100
let pinkProfit = (pinkPounds*pinkPrice)/100


console.log("Fuji is $"+fujiProfit+"\nGala is $" + galaProfit+"\nPink is $"+ pinkProfit+"");



// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/
/*totalProfit will store the sum of all the fields profit  */
// CODE HERE
console.log("----------------------------------")
let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(`The total profit in dollars is \$${totalProfit}`);