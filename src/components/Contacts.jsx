import { useEffect, useState } from "react";
import { getData } from "../utils/gateway";
import Loading from "./Loading";

function Contacts({ dispatch }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
    };
    fetchData();
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <div>Date is {data.date}</div>;
      <button onClick={() => dispatch({ childData: data.date })}>
        send data to parent
      </button>
    </>
  );
}
export default Contacts;
