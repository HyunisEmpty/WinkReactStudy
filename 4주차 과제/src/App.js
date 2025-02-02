import React, { useCallback, useState } from "react";
import NewsList from "./components/NewsList.js";
import Categories from "./components/Categories.js";

function App() {

  const [category, setCategory] = useState('all');
  // 카테코리에서 선택한 키워드로 category변수 변경
  const onSelect = useCallback(category => setCategory(category), []);

  return(
    <>
      <Categories category={category} onSelect={onSelect}/>
      {/* 자식 컴포넌트에 category 인자 전달 */}
      <NewsList category={category}/>;
    </>
  );
}

export default App;