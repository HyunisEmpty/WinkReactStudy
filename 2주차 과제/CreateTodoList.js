import React from 'react';

function CreateTodoList({ usertodo, onChange, onCreate }){
  return(
    <div>

      {/* 오늘 할 일을 입력하는 리스트 */}
      <input
        usertodo="usertodo"
        placeholder="할 일을 입력하세요"
        onChange={onChange} // onChange 이벤트 핸들러 연결 
        value={usertodo}
      />

      {/* 등록 버튼 */}
      <button onClick={onCreate}>등록</button>

    </div>
  );
}

export default CreateTodoList;