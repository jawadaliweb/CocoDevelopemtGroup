// NavBar.tsx
import {
  Box,
  HStack,
  Icon,
  Image,
  Button,
  useColorMode,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  IconButton,
  Menu,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaWhatsapp, FaEnvelope, FaBars } from "react-icons/fa";
import logoDark from "../assets/cocoLogoDark.webp";
import logoLight from "../assets/cocoLogoDark.webp"; // Ensure this points to the correct light logo
import { ColorModeSwitch } from "./ColorModeSwitch";
import { NavLinks } from "./NavLinks";
import MobileMenu from "./MobileMenu";
import TranslationDropdown from "./TranslationDropdown";

export const NavBar = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const widthValue = useBreakpointValue({ base: "100%", md: "70%" });
  const logoSize = useBreakpointValue({ base: "120px", md: "120px" });
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isLessThan1124px] = useMediaQuery("(max-width: 1080px)");

  const logo = colorMode === "dark" ? logoDark : logoLight;

  return (
    <Box
      bg={useColorModeValue("#F5F0EB", "gray.700")}
      height="80px"
      width={widthValue}
      zIndex={12}
      position="fixed"
      top={8}
      left="50%"
      transform="translateX(-50%)"
      borderRadius="20px"
      boxShadow="md"
      px={14}
    >
      <HStack
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        spacing={4}
        py={2}
        marginTop={-7}
      >
        {/* Logo */}
        <Image
          src={logo}
          width={logoSize}
          height={logoSize}
          objectFit="contain"
          alt="COCO Logo"
        />

        {/* Navigation Links and Actions */}
        <HStack
          spacing={4}
          alignItems="center"
          flex={1}
          justifyContent="center"
        >
          {!isMobile && <NavLinks />}
        </HStack>

        {/* Action Buttons and Language Selector (Desktop) */}
        {!isMobile && !isLessThan1124px && (
          <HStack spacing={4} alignItems="center">
            {/* WhatsApp Button */}
            <Button
              leftIcon={<Icon as={FaWhatsapp} />}
              variant="outline"
              bg={useColorModeValue("#FFFFFE47", "gray.700")}
              rounded="full"
              size="md"
              onClick={() => {
                window.open("https://wa.me/your-number", "_blank");
              }}
              style={{ fontWeight: "500" }} // Reduced font weight for WhatsApp
            >
              WhatsApp
            </Button>

            <Button
              leftIcon={<Icon as={FaEnvelope} />}
              variant="outline"
              bg={useColorModeValue("#FFFFFE47", "gray.700")}
              rounded="full"
              size="md"
              onClick={() => {
                window.location.href = "mailto:your-email@example.com";
              }}
              style={{ fontWeight: "500" }} // Reduced font weight for Email
            >
              Email
            </Button>

            {/* Language Selector */}
            <Menu>
              {/* Render the translation dropdown here */}
              <TranslationDropdown />
            </Menu>
          </HStack>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton
            icon={<FaBars />}
            onClick={onOpen}
            variant="ghost"
            aria-label="Open menu"
            size="lg"
          />
        )}

        {/* Color Mode Switch */}
        <ColorModeSwitch />
      </HStack>

      {/* Drawer for mobile navigation */}
      <MobileMenu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
