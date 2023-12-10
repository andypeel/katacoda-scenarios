# Javascript

Let's change the code to work with more Cat data.

Let's create a new variable that will mock what a backend response will be like. Add the below before the `return` keyword in `Main.js`

The web page will update, but you won't see a visual difference, as all we've done is add the variable.

``` 
const cats = [
    { "name": "Luna", "age": 5, "breed": "Persian", "likes": "Chicken", "url":"https://cdn2.thecatapi.com/images/e4f.jpg" }, 
    { "name": "Milo", "age": 3, "breed": "Bengal", "likes": "Chicken, Fish", "url":"https://cdn2.thecatapi.com/images/U3G5VhSBE.jpg" }, 
    { "name": "Oliver", "age": 7, "breed": "Persian", "likes": "Fish, Chips", "url":"https://cdn2.thecatapi.com/images/5pp.jpg" }, 
    { "name": "Bella", "age": 12, "breed": "Siamese", "likes": "Fish, Dogs", "url":"https://cdn2.thecatapi.com/images/MTU4NjA5NA.jpg" }, 
    { "name": "Willow", "age": 1, "breed": "Savannah", "likes": "None", "url":"https://cdn2.thecatapi.com/images/VsxceZVop.jpg" }
]; 
```{{copy}}