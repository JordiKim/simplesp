import React, { useEffect } from "react";
import { getBi } from "../redux/Bi/slice";
import { useSelector, useAppDispatch } from "../redux/hooks";
import { MainLayout } from "../layouts";
import { Loading } from "../components";

export const BiPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const bi = useSelector((s) => s.bi.data);
  const isLoading = useSelector((s) => s.bi.loading);
  useEffect(() => {
    dispatch(getBi());
    console.log(bi);
    console.log(bi.length);
    console.log(bi);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MainLayout>
      <div>123</div>
      {bi.map((item) => (
        <div key={item.UID} className=" p-2">
          <h2>{item.title}</h2>
          <h2>{item.showInfo.locationName}</h2>
        </div>
      ))}
    </MainLayout>
  );
};
