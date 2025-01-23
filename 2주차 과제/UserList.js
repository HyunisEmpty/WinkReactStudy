import React from 'react';

function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      
      {/* 유저명 화면 렌더링  */}
      <span>({user.email})</span>

      {/* 클릭시 onRemove 함수를 호출하는 삭제 버튼 화면 렌더링  */}
      <button onClick={() => onRemove(user.id)}>삭제</button>

    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

// 컴포넌트 XML 형식 값 반환 (JSX)
export default UserList;