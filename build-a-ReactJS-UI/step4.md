# Javascript - Make it work with multiple objects

Let's add more Cat data, making the mock more realistic. Our front-end needs to be able to handle lots of cats.

Replace the declaration of the `cat` variable with an array of cats - see the code below.

After you make the change the web page will see an error, because we changed the variable name `cat` to `cats`. We will fix this in the next step.

``` 
const cats = [
    { "name": "Luna", "age": 5, "breed": "Persian", "likes": "Chicken", "url":"https://cdn2.thecatapi.com/images/e4f.jpg" }, 
    { "name": "Milo", "age": 3, "breed": "Bengal", "likes": "Chicken, Fish", "url":"https://cdn2.thecatapi.com/images/U3G5VhSBE.jpg" }, 
    { "name": "Oliver", "age": 7, "breed": "Persian", "likes": "Fish, Chips", "url":"https://cdn2.thecatapi.com/images/5pp.jpg" }, 
    { "name": "Bella", "age": 12, "breed": "Siamese", "likes": "Fish, Dogs", "url":"https://cdn2.thecatapi.com/images/MTU4NjA5NA.jpg" }, 
    { "name": "Willow", "age": 1, "breed": "Savannah", "likes": "None", "url":"https://cdn2.thecatapi.com/images/VsxceZVop.jpg" }
]; 
```{{copy}}