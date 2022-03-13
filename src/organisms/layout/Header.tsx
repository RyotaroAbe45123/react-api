import { GiHorseHead } from "react-icons/gi";
import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { useCallback } from "react";
import { useHistory } from "react-router";

export const Header = () => {
  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), []);

  return (
    <>
      <Flex
        bg="blue.800"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <IconButton
            aria-label="home icon"
            icon={<GiHorseHead />}
            size="lg"
            variant="unstyled"
            display="flex"
          />
          <Heading as="h1" size="lg">
            MyApp
          </Heading>
        </Flex>
      </Flex>
    </>
  );
};
