// Version 3

/*
1.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following URL: https://randomuser.me/api?results=5
- Makes use of async/await syntax
- Display the "name", "email" and "city" of the first person inside an unordered list.
*/

async function displayInfo() {
    try {
        const url = 'https://randomuser.me/api?results=5';
        await fetch(url).then(response => response.json())
            .then(data => {
                const body = document.querySelector('body');
                const ulElement = document.createElement('ul');
                const liElement = document.createElement('li');
                const fullName = `${data.results[0].name.first} ${data.results[0].name.last}`;
                const email = `${data.results[0].email}`;
                const city = `${data.results[0].location.city}`;
                liElement.innerText = `${fullName} -- ${email} -- ${city}`;
                body.appendChild(ulElement);
                ulElement.appendChild(liElement);
            });
    } catch (error) {
        console.log(error);
    }
}
displayInfo();


/*
2. 
a) Implement the following JavaScript library: https://www.chartjs.org/
- Get a Bar chart working
- You may use the example data from the docs

b) Explain in 100 words or less your approach for implementing the library
*/

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

/*
First we have to download the library, or use the CDN, and because it is a chart, we can make use 
of canvas in HTML5 for rendering 2d charts, shapes and images. So we start with the canvas tag in the html file,
and give it an id to use it in the JavaScript file, and then we look for example in the documentation, 
like the one above  
*/

/*
3.
a) Create a class, called Car, that includes:
- A constructor method
- "model", "color", "seats" properties
- 1 additional method, called "getModel", which returns the model

b) Instantiate the class, and give it the name and attributes of a random animal

c) Explain how this class relates Object-Oriented Programming (OOP) in 100 words or less
*/

class Car {
    constructor(model, color, seats) {
        this.model = model;
        this.color = color;
        this.seats = seats;
    }
    getModel() {
        return this.model;
    }
}

const tesla = new Car('tesla', 'red', 6);
console.log(tesla.getModel());

/*
We use classes as a blueprint to describe a set of instructions or functions,
like providing properties and methods, and when we need to call that class,
we Instantiate that class multiple times with different properties like above.  
*/

/*
4.
Write a function that:
- Takes in an array of strings as an argument
- Sorts the array alphabetically
- Adds

Example: ["Zebra", "Cookie", "Flower"]
Expected output: ["Cookies", "Flowers", "Zebras"]

Make use of the following array:
*/
function sortNames(arr) {
    return arr.sort();
}
const fruits = ['Strawberry', 'Apple', 'Tangerine', 'Banana', 'Melon', 'Pear'];
console.log(sortNames(fruits));

/*
5.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Creates a button element (with text "click me!")
- Creates an empty <img> and add it to the document.
- When the button is clicked, inserts an image URL into the <img> tag and remove the button
- Uses the following image URL: https://avatars3.githubusercontent.com/u/20858568?s=200&v=4
*/

const body = document.querySelector('body');
const button = document.createElement('button');
button.innerHTML = 'click me';
body.append(button);
button.addEventListener('click', () => {
    const image = document.createElement('img');
    image.src = 'https://avatars3.githubusercontent.com/u/20858568?s=200&v=4';
    body.append(image);
    button.style.display = 'none';
});

/* 
6. 
Answer the following questions:
- What is an Application Programming Interface (API)? 
- How does this relate to your HackYourRepo project?

Explain each in 200 words or less. 
*/

/*
API is a way to retrieve data from different sources, whether it is public or private,
It asks the server for information and gives it back to user  in different formats, like Json, xml, text, ect...
in the HackYourRepo project we had to fetch the data from the HackYourFuture repository and
display that data to the screen, like the name of that repository, forks, updates and when updated.
after that we have to change the format of data from text to Json, so we can easily work the data.
and then we had to access another endpoint to retrieve the data for the contributors of that 
repository and display them besides its information.
*/