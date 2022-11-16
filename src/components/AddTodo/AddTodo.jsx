import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// https://www.npmjs.com/package/uuid 자동으로 고유 키값을 생성
import styles from './AddTodo.module.css'
const AddTodo = ({onAdd}) => {
	const [text, setText] = useState('');
	const handleChange = (e)=>{setText(e.target.value)}
  const handleSubmit = (e)=>{ //form 고유의 submit 기능이 작동되면
    e.preventDefault();   //페이지가 리프레시 되지 않도록
    
    if(text.trim().length === 0){return; }
    // 입력된게 없을 때는 handleSubmit함수 빠져나감(!text -   스페이스 여백은 못 걸러냄)
    // trim() - 빈부분을 잘라줌

    onAdd({id: uuidv4(), text: text.trim(), status:'active'});  //onAdd 함수 실행
    setText('') //버튼 클릭 후 input창 초기화 
  } 
  return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input type='text' className={styles.input} placeholder='할일을 입력해주세요' value={text} onChange={handleChange} />
			<button className={styles.button}>Add</button>
		</form>
	);
};

export default AddTodo;
