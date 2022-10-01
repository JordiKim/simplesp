import React from "react";
import { MainLayout } from "../layouts";
import data from "../mockup/news";

export const NewsPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-wrap gap-y-5 justify-around">
        {data.map((item) => (
          <a key={item.id} href={item.url}>
            <div className="daisy-card w-96 bg-base-100 shadow-xl">
              <div>{item.publishedAt}</div>
              <figure className=" bg-[#3c3c3c]">
                <img src={item.urlToImage} alt="Shoes" className="bg-contain bg-center h-[270px]" />
              </figure>
              <div className="daisy-card-body">
                <h2 className="daisy-card-title line-clamp-2">{item.title}</h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </MainLayout>
  );
};
