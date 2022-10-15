import * as React from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Button,
  HStack,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Collapse,
  Text,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

// Local Components
import Brand from "../components/Brand";

const CTA = "SHOP";

export default function Nav({ props }) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex>
      <Flex w="100%" align="center" px="6" py="3">
        <Box as="button">
          <Brand linkto="/" />
        </Box>
        <HStack spacing="20px" ml={20}>
          <Menu>
            <MenuButton>
              Catalogue
              <ChevronDownIcon w={5} h={5} />
            </MenuButton>
            <MenuList>
              <MenuItem>Accessories</MenuItem>
              <MenuItem>
                <Link href="/shirts">Shirts</Link>
              </MenuItem>
              <MenuItem>Outwear</MenuItem>
              <MenuItem>Hat</MenuItem>
            </MenuList>
          </Menu>
          <Box as="button">
            <Link href="/about">About</Link>
          </Box>
          <Box as="button">
            <Link href="/contact">Contact</Link>
          </Box>
        </HStack>
      </Flex>
      <Button
        bgColor="#ffc30c"
        colorScheme="yellow"
        borderRadius={0}
        width="10%"
        py="9"
        textColor="black"
      >
        {CTA}
      </Button>
    </Flex>
  );
}