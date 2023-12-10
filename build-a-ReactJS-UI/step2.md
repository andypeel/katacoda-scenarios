# HTML
Follow the steps below to create the website content.

1. Navigate to `assets/cats-4-life/src` and open `Main.js` by clicking on it.

2. Insert the Card HTML inbetween the `<SimpleGrid>` tags. Note you can hover over the code and a `copy` tooltip will appear. Click on the code block to copy it:

```
        <Card key="Milo" >
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name="Milo" />
    
                        <Box>
                            <Heading size='sm'>Milo</Heading>
                            <Text>Age: 2</Text>
                        </Box>
                    </Flex>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                        icon={<BsThreeDotsVertical/>}
                    />
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    Breed: Bengal
                </Text>
                <Text>
                    Likes: Favourite food: Chicken, Fish
                </Text>
            </CardBody>
            <Image
                objectFit='cover'
                src="https://cdn2.thecatapi.com/images/U3G5VhSBE.jpg"
                alt='Chakra UI'
                height={250}
            />
    
            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
                <Button flex='1' variant='ghost' leftIcon={<BiLike/>}>
                    Like
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiChat/>}>
                    Comment
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<BiShare/>}>
                    Share
                </Button>
            </CardFooter>
        </Card>
```{{copy}}

3. Go to the tab displaying the app. React normally updates the web page for each change you make to the source code, but this doesn't seem to work
on Killercoda, so you will probably have to refresh the page to see your changes.