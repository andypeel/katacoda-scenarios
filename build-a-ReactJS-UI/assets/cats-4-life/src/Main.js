import React, {useEffect, useState} from "react";
import {Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, SimpleGrid, Text} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiChat, BiShare } from "react-icons/bi";

export const Main = () => {

    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
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

        </SimpleGrid>);
}
