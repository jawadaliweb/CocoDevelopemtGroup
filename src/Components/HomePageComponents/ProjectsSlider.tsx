import React, { useRef } from "react";
import projectsData from "../Data/ProjectsData";
import { Link } from "react-router-dom";
import "./ProjectsSlider.css"; // Import CSS file for styling
import {
  Box,
  Image,
  Text,
  VStack,
  Button,
  Heading,
  Badge,
  Flex,
  IconButton,
  HStack,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import Slider from "react-slick"; // Import Slider component
import {
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

// Import required CSS for slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectsSlider: React.FC = () => {
  const sliderRef = useRef<Slider>(null); // Create a ref for the slider

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three projects at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2, // Show two projects on tablet
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1, // Show one project on mobile
        },
      },
    ],
  };

  return (
    <>
      <br></br>
      <br></br>
      <VStack spacing={2} align="stretch">
        <Flex justify="space-between" align="center" width="60%" margin="auto">
          <Heading size="lg">Our Projects</Heading>
          <HStack>
            <IconButton
              aria-label="Previous"
              icon={<ChevronLeftIcon />}
              variant="outline"
              onClick={() => sliderRef.current?.slickPrev()} // Navigate to previous slide
            />
            <IconButton
              aria-label="Next"
              icon={<ChevronRightIcon />}
              variant="outline"
              onClick={() => sliderRef.current?.slickNext()} // Navigate to next slide
            />
          </HStack>
        </Flex>
        <Flex justify="center" width="62%" margin="auto">
          <Slider {...settings} ref={sliderRef} className="SliderMain">
            {projectsData.map((project) => (
              <Box
                key={project.id}
                borderWidth="1px"
                borderRadius="10px"
                overflow="hidden"
                boxShadow="md"
                padding={0}
                backgroundColor="transparent"
                backgroundImage={useColorModeValue(
                  " linear-gradient(180deg, #F5F0EB 0%, #FFFFFF 100%)",
                  "gray.700"
                )}
                position="relative"
                transition="transform 0.2s"
                style={{ height: "400px" }} // Adjust margin for spacing
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  borderRadius="10px, 0px"
                  width="100%"
                  height="250px"
                  objectFit="cover"
                />
                <Badge
                  colorScheme="red"
                  borderRadius="full"
                  position="absolute"
                  top={2}
                  left={2}
                  display={project.soldOut ? "block" : "none"}
                >
                  SOLD OUT
                </Badge>

                <VStack align="start" spacing={2} padding={4}>
                  <Text
                    fontWeight="700"
                    textTransform={"uppercase"}
                    fontStyle={"normal"}
                    margin={"auto"}
                    textAlign={"center"}
                    fontSize="21px"
                    color={useColorModeValue("#4E4E4E", "white")}
                  >
                    {project.title}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    ROI {project.roi}% - Annual ROI Estimated
                  </Text>

                  <List padding={0} spacing={1}>
                    {project.details.map((feature, index) => (
                      <ListItem key={index}>
                        <ListIcon as={CheckCircleIcon} color="gray.500" />{" "}
                        {/* Tick mark icon */}
                        {feature}
                      </ListItem>
                    ))}
                  </List>
                  <HStack>
                    <Text
                      fontSize="19px"
                      fontWeight="600"
                      transform={"uppercase"}
                      color={useColorModeValue("#4E4E4E", "white")}
                    >
                      PRICE FROM:{" "}
                      <span color={useColorModeValue("#4E4E4E", "white")}>
                        {project.price}
                      </span>
                    </Text>
                    <Link to={`/projects/${project.id}`}>
                      <Button
                        size="sm"
                        fontSize={"sm"}
                        background="#F5F0EB"
                        width="full"
                        _hover={{ background: "#F5F0EB" }}
                        color={"#4E4E4E"}
                        fontWeight={400}
                        fontStyle={"italic"}
                      >
                        See Details
                      </Button>
                    </Link>
                  </HStack>
                </VStack>
              </Box>
            ))}
          </Slider>
        </Flex>
      </VStack>
    </>
  );
};

export default ProjectsSlider;
