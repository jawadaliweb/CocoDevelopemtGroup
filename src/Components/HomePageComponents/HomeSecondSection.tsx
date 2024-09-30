import {
  Box,
  Text,
  SimpleGrid,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaChartLine, FaPercentage, FaHome, FaUserTie } from "react-icons/fa";

export const HomeSecondSection = () => {
  const widthValue = useBreakpointValue({ base: "100%", md: "70%" });

  return (
    <Box
      bg={useColorModeValue("#FFFFFF", "#4E4E4E")}
      px="40px"
      py="25px"
      borderRadius="20px"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      width={widthValue}
      margin="auto"
      marginTop="-193px"
      zIndex={1}
      position="relative"
    >
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
        {/* First Stat */}
        <HStack
          spacing={4}
          align="center"
          borderRight={{ base: "none", md: "1px solid #E2E8F0" }}
          pr={4}
        >
          <Box
            bg="#EFEFEF"
            p={5}
            borderRadius="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={FaChartLine} boxSize={8} color="#4E4E4E" />
          </Box>
          <VStack align="start" spacing={0}> {/* Removed all spacing */}
            <Text fontSize="30px" style={{ fontWeight: "700" }} color={useColorModeValue("#4E4E4E", "gray.800")} mb="-1px">
              45000$
            </Text>
            <Text  fontSize="15px" color="gray.500" mt="0">
              Investments Starting From
            </Text>
          </VStack>
        </HStack>

        {/* Second Stat */}
        <HStack
          spacing={4}
          align="center"
          borderRight={{ base: "none", md: "1px solid #E2E8F0" }}
          pr={6}
        >
          <Box
            bg="#EFEFEF"
            p={6}
            borderRadius="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={FaPercentage} boxSize={8} color="#4E4E4E" />
          </Box>
          <VStack align="start" spacing={0}> {/* Removed all spacing */}
            <Text fontSize="30px" style={{ fontWeight: "700" }} color={useColorModeValue("#4E4E4E", "gray.200")} mb="-1px">
              17–22%
            </Text>
            <Text fontSize="15px" color="gray.500" mt="0">
              Average Return on Investment
            </Text>
          </VStack>
        </HStack>

        {/* Third Stat */}
        <HStack
          spacing={4}
          align="center"
          borderRight={{ base: "none", md: "1px solid #E2E8F0" }}
          pr={6}
        >
          <Box
            bg="#EFEFEF"
            p={6}
            borderRadius="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={FaHome} boxSize={8} color="#4E4E4E" />
          </Box>
          <VStack align="start" spacing={0}> {/* Removed all spacing */}
            <Text fontSize="30px" style={{ fontWeight: "700" }} color={useColorModeValue("#4E4E4E", "gray.200")} mb="-1px">
              125+
            </Text>
            <Text fontSize="15px" color="gray.500" mt="0">
              Properties in Operation
            </Text>
          </VStack>
        </HStack>

        {/* Fourth Stat */}
        <HStack spacing={4} align="center">
          <Box
            bg="#EFEFEF"
            p={6}
            borderRadius="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={FaUserTie} boxSize={8} color="#4E4E4E" />
          </Box>
          <VStack align="start" spacing={0}> {/* Removed all spacing */}
            <Text fontSize="30px" style={{ fontWeight: "700" }} color={useColorModeValue("#4E4E4E", "gray.200")} mb="-1px">
              7+
            </Text>
            <Text fontSize="15px" color="gray.500" mt="0">
              Years of Experience
            </Text>
          </VStack>
        </HStack>
      </SimpleGrid>
    </Box>
  );
};

export default HomeSecondSection;
