import React from "react";
import styled, {css} from "styled-components";

const categories = [
  {
    name: "all",
    text: "All",
  },
  {
    name: "business",
    text: "Business",
  },
  {
    name: "entertainment",
    text: "Entertainment",
  },
  {
    name: "health",
    text: "Health",
  },
  {
    name: "science",
    text: "Science",
  },
  {
    name: "sports",
    text: "Sports",
  },
  {
    name: "technology",
    text: "Technology",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  /* 현재 선택된 카테고리라면 활성화 상태로 변경 */
  ${(props) =>
    props.active &&
    css`
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
        color: #3bc9db;
        }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category 
            key={c.name}
            // 현재 선택된 카테고리라면 활성화 상태로 변경
            active = {category === c.name}
            // 클릭 된다면 onSelect를 통해서 현재 카테코리를 변경
            onClick={() => onSelect(c.name)}
        >
            {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;