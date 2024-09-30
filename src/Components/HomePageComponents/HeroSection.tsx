import { Box, Text, Button, useColorModeValue } from "@chakra-ui/react";
// Import other weights if necessary
import "./HeroSection.css";

export const HeroSection = () => {
  
  return (
    <Box position="relative" overflow="hidden" height="100vh">
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="90vh"
        zIndex="-1"
        borderRadius="0px 0px 90px 90px"
        overflow="hidden"
      >
        <video
          autoPlay
          loop
          muted
          style={{
            objectFit: "cover",
            width: "100%",
            height: "90vh",
            borderRadius:"0px 0px 90px 90px"

          }}
        >
          <source src="src/assets/Coco-Home-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      <Box
        className="hero-content"
        position="relative"
        height="90vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
        zIndex="1"
        background="rgba(0, 0, 0, 0.5)"
        paddingTop={{ base: "20px", md: "0px" }}
        borderRadius="0px 0px 90px 90px"

      >
        <Text
          fontWeight="800" // Correct weight based on import
          fontFamily="Poppins, sans-serif"
          fontSize={{ base: "40px", md: "55px" }}
        >
          INVEST WITH
        </Text>
        <Text 
          fontWeight="800" 
          className="storkerhero" 
          fontSize={{ base: "48px", md: "55px" }}
            fontFamily="Poppins, sans-serif"
          lineHeight="100px"
    >
          #1
        </Text>
        <Text
          fontWeight="800"
          fontFamily="Poppins, sans-serif"
          fontSize={{ base: "40px", md: "55px" }}
          textShadow="0px 0px 20px rgba(0, 0, 0, 0.7)"
          lineHeight="60px"
        >
          LIFESTYLE <br />
          PROPERTY BRAND
        </Text>
        <Text
          fontFamily="Poppins, sans-serif"
          fontSize={{ base: "30px", md: "55px" }}
          fontWeight="800" // Correct weight based on import
          textShadow="0px 0px 20px rgba(0, 0, 0, 0.7)"
          lineHeight="40px"
        >
          IN BALI
        </Text>
        <Text
          fontSize={{ base: "sm", md: "lg" }}
          mt={4}
          lineHeight="30px"
          fontWeight="600"
        >
          Join the community & start your journey today 👇
        </Text>
        <Button
          mt={4}
          size={{ base: "md", md: "lg" }}
          borderRadius={20}
          bg={useColorModeValue("#F5F0EB", "gray.700")}
        >
          Get the Full Catalog
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
