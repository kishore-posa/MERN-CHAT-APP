import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        bg={"white"}
        display="flex"
        justifyContent="center"
        p={3}
        m="40px 0 15px 0"
        borderRadius={"lg"}
        borderWidth={"1px"}
        w={"100%"}
        centerContent
      >
        <Text fontSize={"4xl"} fontFamily="Work sans" color={"black"}>
          Type To Talk
        </Text>
      </Box>
      <Box bg="white" w="100%" borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
