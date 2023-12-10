import {Box, Flex, Spacer, Image} from "@chakra-ui/react";
import React from "react";
import './Toolbar.css';


export const Header = () => {

    return (
        <>
            <Flex background={"white"} display='flex' alignItems='center    '>

                <Box flex='1' className="App-logo">
                    <img src="star.png" alt={"star"} />
                </Box>

                <Spacer/>

                <Box>
                    <Image src="logo.png" alt="Cats4Life" />
                </Box>

                <Spacer/>

                <Box flex='1' className="App-logo">
                    <img src="star.png" alt={"star"}/>
                </Box>
            </Flex>
        </>

    );
}
