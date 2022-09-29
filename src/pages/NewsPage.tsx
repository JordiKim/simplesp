import React, { useEffect } from "react";
import { MainLayout } from "../layouts";
import { getNews } from "../redux/News/slice";
import { useSelector, useAppDispatch } from "../redux/hooks";

export const NewsPage: React.FC = () => {
  const data = useSelector((s) => s.news.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNews());
    console.log(data);
  }, []);

  return (
    <MainLayout>
      <div className="flex flex-wrap gap-y-5 justify-around">
        {data.map((item) => (
          <a key={item.source.id} href={item.url}>
            <div className="daisy-card w-96 bg-base-100 shadow-xl">
              <div>{item.publishedAt}</div>
              <figure className=" bg-[#3c3c3c]">
                <img src={item.urlToImage} alt="Shoes" className="bg-contain bg-center h-[270px]" />
              </figure>
              <div className="daisy-card-body">
                <h2 className="daisy-card-title maple-ellipsis2">{item.title}</h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </MainLayout>
  );
};
