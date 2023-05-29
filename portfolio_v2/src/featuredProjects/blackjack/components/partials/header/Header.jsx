import { useState } from "react";

// *Design Imports*
import { chakra, Heading, VStack, Box, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import fadeInAnimations from "../../../utils/animations/fadeIn";

// *Component Imports*
import GetBalance from "../../GetBalance";
import Dropdown from "./Dropdown";

const Header = (props) => {
  const [showDropdown, setShowDropdown] = useState(false),
    [clicked, setClicked] = useState(false),
    [isSmallerThan491] = useMediaQuery("(max-width: 491px)"),
    [isSmallerThan481] = useMediaQuery("(max-width: 481px)"),
    { fadeInVar1, fadeInVar2 } = fadeInAnimations(0.8);

  return (
    <chakra.header
      aria-label="Header"
      display="flex"
      justifyContent={isSmallerThan491 ? "flex-end" : "space-between"}
      alignItems="center"
      mb="1.5rem"
    >
      <Heading
        as={motion.h1}
        variants={fadeInVar1}
        initial="hidden"
        animate="visible"
        variant="blackjack"
        display={isSmallerThan491 ? "none" : "initial"}
        fontSize={{ base: "34px", md: "40px", xl: "40px" }}
        fontFamily="heading"
        lineHeight="1.2"
      >
        Davy Blackjack
      </Heading>

      <chakra.nav
        aria-label="Navigation"
        display="flex"
        alignItems="center"
        gap="1rem"
        mr={{ base: "1.5rem", md: 0, xl: 0 }}
      >
        {props.gameType === "Match" && <GetBalance fontSize="20px" />}

        {/* Hamburger and Dropdown */}
        <VStack position="relative" w="max-content">
          <VStack
            aria-label="Menu Icon"
            as={motion.div}
            variants={fadeInVar2}
            initial="hidden"
            animate="visible"
            onClick={() => {
              setShowDropdown(!showDropdown);
              props.show.options &&
                props.setShow({
                  ...props.show,
                  options: false,
                });
            }}
            gap={!showDropdown && "6.5px"}
            cursor="pointer"
            w="2rem"
          >
            <Box
              as={motion.div}
              animate={{
                rotate: showDropdown ? "40deg" : 0,
                translateY: showDropdown ? 4 : 0,
                transition: {
                  type: "spring",
                  duration: 0.5,
                  stiffness: 260,
                  damping: 20,
                },
              }}
              w="100%"
              h="4px"
              bgColor="wMain"
              borderRadius="1rem"
            />
            <Box
              as={motion.div}
              animate={{
                opacity: showDropdown ? 0 : 1,
                scale: showDropdown ? 0.2 : 1,
                transition: { type: "spring", stiffness: 260, damping: 20 },
              }}
              w="100%"
              h="4px"
              mt="0 !important"
              bgColor="wMain"
              borderRadius="1rem"
            />
            <Box
              as={motion.div}
              animate={{
                rotate: showDropdown ? "-40deg" : 0,
                translateY: showDropdown ? -4 : 0,
                transition: {
                  type: "spring",
                  duration: 0.38,
                  stiffness: 260,
                  damping: 20,
                },
              }}
              w="100%"
              h="4px"
              mt="0 !important"
              bgColor="wMain"
              borderRadius="1rem"
            />
          </VStack>
          <Dropdown
            showDropdown={showDropdown}
            show={props.show}
            setShow={props.setShow}
            toggleMute={props.toggleMute}
            clicked={clicked}
            setClicked={setClicked}
            isSmallerThan481={isSmallerThan481}
          />
        </VStack>
      </chakra.nav>
    </chakra.header>
  );
};

export default Header;
