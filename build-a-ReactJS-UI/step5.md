# Javascript - Use an Iterator

Now there are multiple cats, we need to iterate over the array of cats, creating a `<Card>` for each cat.

After the opening `<SimpleGrid>` tag, insert this:

```
  {cats.map((cat) => (
```{{copy}}

The page will still show an error, because the parentheses don't match. This is because the HTML code block is now
inside a JavaScript iterator. React allows us to nicely mix JavaScript and HTML in this way.

So change this:

```
    </Card>
```

to this:

```
    </Card>))}
```{{copy}}

Check the page, and you should see 5 cat Cards.