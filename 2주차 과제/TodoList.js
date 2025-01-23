import React from 'react';

function Todo({ todo_info, onRemove, onToggle }) {
  return (
    <div>
      
      {/* 스타일이 적용된 유저 네임 */}
      <b
        style={{
          cursor: 'pointer',
          // 미완료시 black 완료시 green
          color: todo_info.active ? 'black' : 'green'
        }}
      >
      {todo_info.todo}
      </b>

      &nbsp;
      
      {/* 유저명 화면 렌더링  */}

      {/* 클릭시 onRemove 함수를 호출하는 삭제 버튼 화면 렌더링  */}
      <button onClick={() => onRemove(todo_info.id)}>삭제</button>

      <button onClick={() => onToggle(todo_info.id)}>완료</button>

    </div>
  );
}


// 투두 리스트 출력
function TodoList({ todo_list, onRemove, onToggle }) {
  return (
    <div>
      {todo_list.map(todo_info => (
        <Todo
          todo_info={todo_info}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
  
  // 컴포넌트 XML 형식 값 반환 (JSX)
  export default TodoList;