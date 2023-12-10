import React, {useEffect, useState} from "react";
import {Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, SimpleGrid, Text} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiChat, BiShare } from "react-icons/bi";

export const Main = () => {

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

    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
            {cats.map((cat) => (
                <Card key={cat.name} >
                    <CardHeader>
                        <Flex spacing='4'>
                            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name={cat.name} />

                                <Box>
                                    <Heading size='sm'>{cat.name}</Heading>
                                    <Text>Age: {cat.age}</Text>
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
                            Breed: {cat.breed}
                        </Text>
                        <Text>
                            Likes: {cat.likes}
                        </Text>
                    </CardBody>
                    <Image
                        objectFit='cover'
                        src={cat.url}
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
                </Card>))}

        </SimpleGrid>);
}
