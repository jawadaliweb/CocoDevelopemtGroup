// src/components/NavLinks.tsx
import React from "react";
import { HStack, Link as ChakraLink } from "@chakra-ui/react";
import { NavLink as RouterNavLink } from "react-router-dom";

interface NavLinksProps {
  isMobile?: boolean;
}

// Define the navigation links here directly
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/About" },
  { name: "FAQ", path: "/faq" },
];

export const NavLinks: React.FC<NavLinksProps> = ({ isMobile = false }) => {
  return (
    <HStack
      as="nav"
      spacing={isMobile ? 0 : 8}
      direction={isMobile ? "column" : "row"}
      align={isMobile ? "stretch" : "center"}
      width={isMobile ? "100%" : "auto"}
      listStyleType="none"
      m={0}
      p={0}
    >
      {navLinks.map((link) => (
        <ChakraLink
          key={link.name}
          as={RouterNavLink}
          to={link.path}
          fontWeight="500"
          fontSize={isMobile ? "xl" : "19px"}
          _hover={{ textDecoration: "none", color: "teal.500" }}
          width={isMobile ? "100%" : "auto"}
          textAlign={isMobile ? "center" : "left"}
          py={isMobile ? 2 : 0}
          _activeLink={{ color: "#319795" }}
        >
          {link.name}
        </ChakraLink>
      ))}
    </HStack>
  );
};
