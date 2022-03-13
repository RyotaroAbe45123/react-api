import { Box, Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export const DisplayedImage = () => {
  const [image, setImage] = useState();

  useEffect(() => {
    axios
      .get(
        "https://t28syozwla.execute-api.us-west-2.amazonaws.com/dev/image?image=2"
      )
      .then((response) => {
        setImage(response.data.body);
      });
  }, []);

  return (
    <Box>
      <Image src={`data:image/jpeg;base64,${image}`} boxSize="200px" />
    </Box>
  );
};
