import { useState, useLayoutEffect } from "react";

function Dashboard() {
  const [orders, setOrders] = useState<any[]>([]);

  const _getAllOrders = async () => {
    const req = await fetch(
      "https://www.hibi-service.vercel.app/order/getallorder",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await req.json();
    console.log(res);
    setOrders(res);
  };

  useLayoutEffect(() => {
    _getAllOrders();
  }, []);

  return <div>{orders}</div>;
}

export default Dashboard;
