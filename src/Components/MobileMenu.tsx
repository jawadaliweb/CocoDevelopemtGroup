// MobileMenu.tsx
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    VStack,
    Button,
    Icon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from "@chakra-ui/react";
  import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
  import { NavLinks } from "./NavLinks";
import { ChevronDownIcon } from "@chakra-ui/icons";
  
  interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    return (
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} align="stretch" mt={4}>
              {/* Navigation Links */}
              <NavLinks isMobile />
  
              {/* Action Buttons and Language Selector */}
              <VStack spacing={4} align="stretch" mt={4}>
                {/* WhatsApp Button */}
                <Button
                  leftIcon={<Icon as={FaWhatsapp} />}
                  colorScheme="whatsapp"
                  variant="outline"
                  rounded="full"
                  size="sm"
                  width="100%"
                  onClick={() => {
                    window.open("https://wa.me/your-number", "_blank");
                  }}
                >
                  WhatsApp
                </Button>
  
                {/* Email Button */}
                <Button
                  leftIcon={<Icon as={FaEnvelope} />}
                  variant="outline"
                  rounded="full"
                  size="sm"
                  width="100%"
                  onClick={() => {
                    window.location.href = "mailto:your-email@example.com";
                  }}
                >
                  Email
                </Button>
  
                {/* Language Selector */}
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    rounded="full"
                    size="sm"
                    width="100%"
                  >
                    English
                  </MenuButton>
                  <MenuList>
                    <MenuItem>English</MenuItem>
                    <MenuItem>Spanish</MenuItem>
                    <MenuItem>French</MenuItem>
                  </MenuList>
                </Menu>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
  };
  
  export default MobileMenu;
  