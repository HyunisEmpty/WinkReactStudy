import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text}  />
      <button onClick={onReset} >입력</button>
      <div>
        <b>좋아하는 음식: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;