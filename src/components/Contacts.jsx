import { useEffect, useState } from "react";
import { getData } from "../utils/gateway";
import Loading from "./Loading";

function Contacts() {
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

  return <div>Date is {data.date}</div>;
}
export default Contacts;
