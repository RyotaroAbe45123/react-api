import { Button } from "@chakra-ui/react";
import { useCallback } from "react";
import { useHistory } from "react-router";
import { Header } from "../../organisms/layout/Header";

export const Home = () => {
  const history = useHistory();

  const onClickUser = useCallback(() => history.push("/api"), []);
  return (
    <>
      <Header />
      <h1>Home</h1>
      <Button onClick={onClickUser}>User</Button>
    </>
  );
};
