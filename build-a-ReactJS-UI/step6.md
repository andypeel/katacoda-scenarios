# Javascript - Call an API to get the cat data

Somewhere out there on the internet is an API that returns cat data.

Click this link to take a peek at it: https://aim.incubation.tech/cats

The next step is to call this API endpoint to get a list of cats, and update our fron-end to use that data, instead of the mocked data. 

The mocked data helped us build out the front-end without needing the API. Now it's time to plug in the API.

Replace this block of code:

```
    const cats = [
        { "name": "Luna", "age": 5, "breed": "Persian", "likes": "Chicken", "url":"https://cdn2.thecatapi.com/images/e4f.jpg" },
        { "name": "Milo", "age": 3, "breed": "Bengal", "likes": "Chicken, Fish", "url":"https://cdn2.thecatapi.com/images/U3G5VhSBE.jpg" },
        { "name": "Oliver", "age": 7, "breed": "Persian", "likes": "Fish, Chips", "url":"https://cdn2.thecatapi.com/images/5pp.jpg" },
        { "name": "Bella", "age": 12, "breed": "Siamese", "likes": "Fish, Dogs", "url":"https://cdn2.thecatapi.com/images/MTU4NjA5NA.jpg" },
        { "name": "Willow", "age": 1, "breed": "Savannah", "likes": "None", "url":"https://cdn2.thecatapi.com/images/VsxceZVop.jpg" }
    ];
```

with this code:

```
    const [cats, setCats] = useState(null);

    useEffect(() => {
        fetch("https://aim.incubation.tech/cats", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCats(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    if (cats === null) {
        return;
    }
```