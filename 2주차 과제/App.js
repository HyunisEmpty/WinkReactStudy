import React, { useRef, useState } from 'react';  
import CreateTodoList from './CreateTodoList';
import TodoList from './TodoList';

function App() {

  // todo 오늘 할 일 저장 
  const [todo, setInputs] = useState('');

  // 오늘 할 일 리스트 로 저장
  const [todo_list, setList] = useState([
    {
      id: 1,
      todo: '운동하기',
      active: true
    }
  ]);

  // 필드값 변경시 변경된 값으로 변경
  const onChange = e => {
    setInputs(e.target.value);  // todo값 변경
  };

  // 컴포넌트 리렌더링되어 유지되는 값 설정 
  const nextId = useRef(2);

  // 새로운 할 일(todo) 정보를 리스트에 추가하는 onCreate 함수
  const onCreate = () => {

    // 리스트에 추가할 새로운 값
    const todo_info ={id: nextId.current, todo : todo, active: true,};

    // 리스트에 값 추가
    setList([...todo_list, todo_info]);
    
    nextId.current += 1;

    setInputs('');
  }

  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setList(todo_list.filter(todo_info => todo_info.id !== id));
  };

  // 완료 버튼 클릭시 호출 되는 함수 => id값에 맞춰 actice값을 변경 시킨다.
  const onToggle = id => {
    setList(
      todo_list.map(todo_info =>
        todo_info.id === id ? { ...todo_info, active: !todo_info.active } : todo_info
      )
    );
  };

  // CreateUser 컴포넌트 호출
  return (
    <>

      {/* CreteUser 컴포넌트를 통한 화면 구성 */}
      <CreateTodoList
        todo={todo}
        onChange={onChange}
        onCreate={onCreate}
      />

      <TodoList todo_list={todo_list} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;