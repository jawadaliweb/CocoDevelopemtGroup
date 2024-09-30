import { Box, Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import "@fontsource/poppins"; // Import Poppins font
import PropertiesImage from "../../assets/Icons/Properties-in-Operation.webp"; // Import the image

export const HomeSecondSection = () => {
  return (
    <Box width="60%" margin="auto" mt="80px">
      <Grid templateColumns="repeat(2, 1fr)" gap={10} alignItems="center">
        <GridItem>
          <VStack align="start">
            <Heading as="h2" fontSize="38px" color="#4E4E4E" fontWeight="700">
              What we do
            </Heading>
            <Box borderBottom="1px solid" borderColor="black">
              <Grid templateColumns="2fr 10fr" alignItems="center">
                <Image src={PropertiesImage}  width={'60px'} alt="Properties in Operation" />
                <Box marginTop={4}>
                  <Heading as="h4" fontSize="18px" color="#4E4E4E" fontWeight="700">
                    Build
                  </Heading>
                  <Text fontSize="16px" fontWeight={400}>
                    We build villas as well as resorts on behalf of our clients.
                  </Text>
                </Box>
              </Grid>
            </Box>

            <Box borderBottom="1px solid" borderColor="black">
              <Grid templateColumns="2fr 10fr" alignItems="center">
                <Image src={PropertiesImage} width={'60px'} alt="Properties in Operation" />
                <Box marginTop={4}>
                  <Heading as="h4" fontSize="18px" color="#4E4E4E" fontWeight="700">
                    Manage
                  </Heading>
                  <Text fontSize="16px" fontWeight={400}>
                    We take in-house fully care of every aspect of the management.
                  </Text>
                </Box>
              </Grid>
            </Box>

            <Box>
              <Grid templateColumns="2fr 10fr" alignItems="center">
                <Image src={PropertiesImage} width={'60px'} alt="Properties in Operation" />
                <Box marginTop={4}>
                  <Heading as="h4" fontSize="18px" color="#4E4E4E" fontWeight="700">
                    Rental Income
                  </Heading>
                  <Text fontSize="16px" fontWeight={400}>
                    We payout the rental income quarterly, to the bank account of your desire.
                  </Text>
                </Box>
              </Grid>
            </Box>
          </VStack>
        </GridItem>

        <GridItem>
          <Box>
            <iframe
              width="100%"
              height="300px"
              style={{ borderRadius: "20px" }}
              src="https://www.youtube.com/embed/pXJftoC4p4g"
              title="Invest in Bali with Coco Development Group: Guaranteed 12% ROI"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default HomeSecondSection;
