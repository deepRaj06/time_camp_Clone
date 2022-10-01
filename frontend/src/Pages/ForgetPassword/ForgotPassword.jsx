import { Box, Button, Divider, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
  return (
    <Box>
      <Image
        w="140px"
        h="40px"
        marginLeft="30%"
        marginTop="80px"
        src="https://cdn.timecamp.com/res/css/images/greenbranding/TC-logo.1661423136.svg"
        alt="timecampLogo"
      />

      <Box
        width="41%"
        boxShadow="lg"
        marginTop="10px"
        marginLeft="30%"
        border="1px solid silver"
        borderRadius="10px"
        paddingLeft="2%"
        paddingBottom="20px"
      >
        <Text fontWeight="700" fontSize="18px" marginTop="30px">
          Forgotten Password?
        </Text>

        <Divider width="96%" marginTop="20px" />

        <Box display="flex" alignItems="center" marginTop="25px" gap="7%">
          <Text>E-mail</Text>
          <Input
            type="email"
            focusBorderColor="#25cf60"
            width="80%"
            color="black"
            backgroundColor="#f8f8f8"
            fontSize="14px"
            height="35px"
            placeholder="Enter Your Email"
          />
        </Box>

        <Button
          fontSize="14px"
          marginTop="15px"
          marginLeft="16.5%"
          color="white"
          bg="#4bb063"
          padding="5px 35px 5px 35px"
        >
          Submit
        </Button>

        <Divider width="96%" marginTop="40px" />

        <Link to="/login">
          <Text fontWeight="500" fontSize="14px" color="blue" marginTop="20px">
            Return to Login
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default Forgotpassword;
