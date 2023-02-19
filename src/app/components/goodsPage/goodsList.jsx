import React, { useState, useEffect } from "react";
import api from "../../api/goods.api/goods";
import Preloader from "../preloader/preloader";
import GoodCard from "../goodsPage/goodsCard";

const GoodsList = () => {
  const [loading, setLoading] = useState(true);
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      setGoods(api);
      setLoading(false);
    }, 2000);
  }, []);
  // console.log("goods", goods);

  if (loading) return <Preloader />;

  return (
    <div className="row">
      {goods.map((good) => (
        <div key={good.id} className="col-md-4">
          <GoodCard good={good} />
        </div>
      ))}
    </div>
  );
};

export default GoodsList;
