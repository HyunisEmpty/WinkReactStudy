import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({category}) =>{
  const [articles, setArticles] = useState(null);   // 기사를 저장하는 변수 artcles 선언 
  const [loading, setLoading] = useState(false);    // 로딩 정보를 저장하는 변수 setLoading 선언

  useEffect(() => {
    // async를 사용하는 함수는 따로 선언
    const fetchData = async () => {
      setLoading(true);
      
      // API 호출 시도 
      try{

        let query = ''; // 기본값 설정
        if (category !== 'all') {
          query = `&category=${category}`;
        }

        const response = await axios.get(
          // 백틱이 제대로 동작하지 않아서 + 사용
          "https://newsapi.org/v2/top-headlines?country=us" + query + "&apiKey=b1937e4174e744358a4e218f2394283a"
        );

        // API 중에서 articles 배열 내부 데이터를 받아와 articles 변수에 저장
        setArticles(response.data.articles);
      }catch(e){  // API 호출시 오류 발생시 실행
        console.log(e);
      }
      // 데이터를 불러왔으니 loading 상태 해제
      setLoading(false);
    }
    fetchData();
  }, [category]);

  // 대기 중일 때때
  if (loading){
    return<NewsListBlock>대기 중...</NewsListBlock>
  }

  // 아직 articles 값이 설정되지 않았을 때
  if (!articles){
    return null; // map 함수를 사용하기 전에는 해당 값이 null 인지 확인해야 한다. articles이 null인경우 null에는 map함수가 없어 렌더링시 오류가 발생한다.
  }

  // articles 값이 유효할 때
  return(
    <NewsListBlock>
      {/* articles 배열 내부 article을 받아 온다. */}
      {articles.map((article) => (
        // key를 통해서 url로 고유값을 부요하여 렌더링시 효율성을 높인다. 
        // 구조 분해 할당(destructuring)을 사용하여 article 내부의 title, description, url, urlToImage를 각각의 변수로 추출
        <NewsItem key = {article.url} article={article} />
      ))}
    </NewsListBlock>
  )
}

export default NewsList;