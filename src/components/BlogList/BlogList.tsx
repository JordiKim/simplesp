import React from "react";
import { useEffect } from "react";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { getBlogList } from "../../redux/BlogList/slice";
import { Loading } from "../Loading/Loading";

export const BlogList: React.FC = () => {
  const dispatch = useAppDispatch();

  const data = useSelector((s) => s.blogList.data);
  const error = useSelector((s) => s.blogList.error);
  const loading = useSelector((s) => s.blogList.loading);

  useEffect(() => {
    dispatch(getBlogList({ page: 1, size: 10 }));
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (error) {
    return <h1>網站出錯{error}</h1>;
  }

  return (
    <ul className="w-full flex flex-col bg-secondary divide-y-2 divide-[#4e4f4eab]">
      {data.map((item) => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
          {/* <div>{item.content}</div> 無法正確顯示 */}
        </li>
      ))}
    </ul>
  );
};
