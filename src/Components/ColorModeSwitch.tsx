import { HStack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      {/* MoonIcon and SunIcon can be used instead of Switch */}
      {colorMode === "dark" ? (
        <MoonIcon
          boxSize={6}
          color="light"
          onClick={toggleColorMode}
          cursor={"pointer"}
        />
      ) : (
        <SunIcon
          boxSize={6}
          color="yellow.500"
          onClick={toggleColorMode}
          cursor={"pointer"}
        />
      )}
      {/* <Text whiteSpace={"nowrap"}>
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Text> */}
    </HStack>
  );
};
