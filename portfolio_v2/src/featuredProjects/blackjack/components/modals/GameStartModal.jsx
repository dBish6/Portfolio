import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// *Design Imports*
import {
  VStack,
  Button,
  ButtonGroup,
  Text,
  Link,
  chakra,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// *Custom Hooks Imports*
import useDisableScroll from "../../../../hooks/useDisableScroll";

// *Component Imports*
import ModalTemplate from "./ModalTemplate";
import MyHeading from "../MyHeading";
import CashInForm from "./cashInModal/CashInForm";

// *Redux Imports*
import { useDispatch } from "react-redux";
import { GAME_TYPE, START_GAME, SET_WALLET } from "../../redux/blackjackSlice";

const GameStartModal = (props) => {
  const [needToFinish, setNeedToFinish] = useState({
    state: false,
    clicked: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  useDisableScroll(props.show.gameStart, 510);

  const ifNoBalance = props.gameType === "Match" && props.wallet === null;

  useEffect(() => {
    console.log("needToFinish", needToFinish);
  }, [needToFinish]);

  return (
    <ModalTemplate
      show={props.show.gameStart}
      setShow={props.setShow}
      objName="gameStart"
      noExit={true}
      animation={{ type: "up", y: "200%" }}
      p={ifNoBalance ? "1rem 1.5rem 1.5rem 1.5rem" : "1.5rem 2rem 1rem 2rem"}
      maxW={ifNoBalance ? "298px" : "281.133"}
    >
      {props.show.canCancel && (
        <Button
          onClick={() =>
            props.wallet !== null &&
            props.setShow({ ...props.show, gameStart: false })
          }
          variant="exit"
          position="absolute"
          top="-10px"
          right="-10px"
        >
          &#10005;
        </Button>
      )}
      <MyHeading
        fontSize="32px"
        mb={ifNoBalance ? "0.5rem" : "1.5rem"}
        text={ifNoBalance ? "Cash In" : "Select Game Type"}
      />
      {ifNoBalance ? (
        <>
          <Text fontSize="14px" textAlign="center" mb="1rem">
            To play <chakra.span fontWeight="600">Matches</chakra.span> you need
            to first deposit some fake cash!
          </Text>
          <CashInForm
            dispatch={dispatch}
            SET_WALLET={SET_WALLET}
            show={props.show}
            setShow={props.setShow}
          />
        </>
      ) : (
        <>
          <VStack>
            <ButtonGroup>
              <Button
                onClick={() => {
                  props.gameType === "Fun" &&
                    props.playerCards.length > 0 &&
                    dispatch(START_GAME());

                  dispatch(GAME_TYPE("match"));
                  props.wallet !== null &&
                    props.setShow({ ...props.show, gameStart: false });
                }}
                variant="primary"
              >
                Matches
              </Button>
              <Button
                as={motion.button}
                onClick={() => {
                  if (
                    props.gameType === "Match" &&
                    props.winner === null &&
                    props.playerCards.length > 0
                  ) {
                    setNeedToFinish({ state: true, clicked: true });
                    toast({
                      description:
                        "Please complete you game before changing the mode.",
                      status: "error",
                      duration: 6000,
                      isClosable: true,
                      position: "top",
                      variant: "solid",
                    });
                    setTimeout(() => {
                      setNeedToFinish({ ...needToFinish, clicked: false });
                    }, 601);
                  } else {
                    props.playerCards.length > 0 && dispatch(START_GAME());
                    dispatch(GAME_TYPE("fun"));
                    props.setShow({ ...props.show, gameStart: false });
                  }
                }}
                animate={{
                  x: needToFinish.clicked
                    ? [0, -18, 18, -18, 18, -18, 18, 0]
                    : 0,
                  transition: {
                    type: "spring",
                    damping: 6,
                    stiffness: 50,
                    duration: 0.6,
                  },
                }}
                key={needToFinish.state ? "animation-on" : "animation-off"}
                variant="secondary"
                bgColor={needToFinish.state ? "r500" : "transparent"}
                _active={{ bgColor: needToFinish.state ? "r500" : "g500" }}
                ml="1rem !important"
              >
                For Fun
              </Button>
            </ButtonGroup>
            <Text as="small" textAlign="center">
              This game is a part of my{" "}
              <chakra.span fontWeight="600">"Quest Casino"</chakra.span>{" "}
              full-stack app;{" "}
              <Link
                href="https://github.com/dBish6/Quest_Casino_Full-Stack_App"
                isExternal
                opacity="0.9"
                _hover={{
                  opacity: "1",
                  textDecoration: "underline",
                  textDecorationColor: "p500",
                }}
              >
                check it out
              </Link>
              .
            </Text>

            {!props.show.canCancel && (
              <Link onClick={() => navigate("/home")} variant="simple">
                Go Back
              </Link>
            )}
          </VStack>
        </>
      )}
    </ModalTemplate>
  );
};

export default GameStartModal;
