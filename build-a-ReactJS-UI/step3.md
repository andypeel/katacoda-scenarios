# Javascript - Use a Mock

Let's change the code to work with dynamic Cat data.

Let's create a new variable that will mock what a backend response will be like. Add the below before the `return` keyword in `Main.js`

``` 
const cat = { "name": "Luna", "age": 5, "breed": "Persian", "likes": "Chicken", "url":"https://cdn2.thecatapi.com/images/e4f.jpg" };
```{{copy}}


Before you can see any change in the web page, you'll need to change the HTML to read from the variable.

You can reference properties by their name. You can see the property names in this Cat (i.e. name, age, breed, etc.):

```
{
    "name": "Milo",
    "age": 3,
    "breed": "Bengal",
    "likes": "Chicken, Fish",
    "url":"https://cdn2.thecatapi.com/images/U3G5VhSBE.jpg"
}
```

Go through the HTML and replace all the concrete values for cat (like "Milo") with code to read them from the cat Object (e.g. `{cat.name}`).
You should see Milo's details change to be Luna's details. Note some fields are used more than once.

As you make code changes, notice in the terminal window that React is picking up your changes and pushing them to the web page. 
You are "live editing" the page.

Here's a longer example:

```
<Box>
    <Heading size='sm'>{cat.name}</Heading>
    <Text>Age: {cat.age}</Text>
</Box>
``````

Go and check the web page, and observe the data is coming from the data held in the `cat` variable.

Make sure you've changed every single field and you can see it reflected in the Card on the web page.