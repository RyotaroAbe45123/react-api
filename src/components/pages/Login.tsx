import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useHistory } from "react-router";

export const Login = () => {
  const history = useHistory();

  const onClickLogin = () => {
    history.push("/home");
  };

  return (
    // <Flex p={4} align="center" justify="center">
    //   <Stack>
    //     <Button
    //       size="md"
    //       height="48px"
    //       width="200px"
    //       border="2px"
    //       borderColor="green.500"
    //       onClick={onClickLogin}
    //     >
    //       Login
    //     </Button>
    //   </Stack>
    // </Flex>
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          MyApp
        </Heading>
        <Divider my={3} />
        <Stack spacing={6} py={4} px={10}>
          {/* <Input placeholder="ID" value={userId} onChange={onChangeUserId} /> */}
          <Button
            // disabled={userId === ""}
            // loading=false
            onClick={onClickLogin}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};
