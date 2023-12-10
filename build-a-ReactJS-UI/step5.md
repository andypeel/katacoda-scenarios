# Javascript - Use an Iterator

Now there are multiple cats, we need to iterate over the array of cats, creating a `<Card>` for each cat.

After the opening `<SimpleGrid>` tag, insert this:

```
  {cats.map((cat) => (
```

The page will still show an error, because the parentheses don't match. So change this:

```
    </Card>
```

to this:

```
    </Card>))}
```

Check the page, and you should see 5 cat Cards.