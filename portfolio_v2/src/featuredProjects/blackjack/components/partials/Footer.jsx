// *Design Imports*
import { chakra, Flex, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import fadeInAnimations from "../../utils/animations/fadeIn";

const Footer = (props) => {
  const { fadeInVar1 } = fadeInAnimations();

  return (
    <chakra.footer
      role="banner"
      aria-label="Footer"
      display="flex"
      alignItems="center"
      gap="0.5rem"
      mt="1.5rem"
    >
      <Flex
        aria-label="Game Mode Container"
        as={motion.div}
        variants={fadeInVar1}
        initial="hidden"
        animate="visible"
        align="center"
        gap="0.5rem"
      >
        <Box
          aria-label="Playing"
          borderRadius="50%"
          w="1rem"
          h="1rem"
          bgColor="#FF2D2D"
        />
        <Text aria-label="Game Mode" variant="blackjack">
          {props.gameType === "Fun"
            ? "For " + props.gameType + " Mode"
            : props.gameType + " Mode"}
        </Text>
      </Flex>
    </chakra.footer>
  );
};

export default Footer;
