// NewsItem 컴포넌트는 article이라는 객체를 props로 통째로 받아와 사용한다.
import React from "react";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;

  /* 오른쪽 간격 유지, 이미지 크기 고정 */
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 180px;
      object-fit: cover;
    }
  }

  /* 제목과 설명 사이의 여백 생성 */
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  
  /* 뉴스 시가 사이 간격 생성 */
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {

    // article 배열에 들어 있는 정보를 받아온다.
    const { title, description, url, urlToImage } = article;

    return ( 
    
    // NewsItemBlock 스타일 적용
    <NewsItemBlock>
        
        {/* 이미지 섹션 urlToImage값이 존재하는 경우에만 실행 */}
        {urlToImage && (
        <div className="thumbnail">
            {/* 주소, 클릭시 새창 생성, 새창이 열릴시 기존 페이지의 정보를 보호 */}
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={urlToImage} alt="thumbnail" />
            </a>
        </div>
        )}

        {/* 본문 섹션 */}
        <div className="contents">
            <h2>
                {/* 원본 페이지 url, 클릭시 새창 생성, 새창이 열릴시 기존 페이지의 정보를 보호 */}
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {title}
                </a>
            </h2>
            <p>{description}</p>
        </div>
    </NewsItemBlock>
    );
};
  
export default NewsItem;