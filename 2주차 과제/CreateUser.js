import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>

      {/* 계정명 입력 버튼 */}
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />

      {/* 이메일 입력 버튼 */}
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />

      {/* 등록 버튼 */}
      <button onClick={onCreate}>등록</button>

    </div>
  );
}

export default CreateUser;