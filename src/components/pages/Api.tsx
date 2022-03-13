import axios from "axios";
import { Header } from "../../organisms/layout/Header";
export const Api = () => {
  console.log("start");
  axios
    .get("https://t28syozwla.execute-api.us-west-2.amazonaws.com/dev/api?api=1")
    .then((response) => {
      if (response.data) {
        console.log(response.data);
      } else {
        console.log("failed");
      }
    });

  return (
    <>
      <Header />
      <div>
        <h1>API</h1>
      </div>
    </>
  );
};
