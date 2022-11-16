import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import styles from './Todo.module.css';

const Todo = ({ todo, onUpdate, onDelete }) => {
	const { id, text, status } = todo; //간편한 사용을 위해 todo에서 할당
	const handleChange = (e) => {
		// 받아오는게 아니라 이 컴포넌트 안에서만 사용
		const status = e.target.checked ? 'completed' : 'active';
		onUpdate({ ...todo, status }); //브라우저 Components에서 status 변하는 거 확인
	};
	const handleDelete = () => onDelete(todo);
	return (
		<li className={styles.todo}>
			<input type='checkbox' id={id} className={styles.checkbox} checked={status == 'completed'} onChange={handleChange} />
			<label htmlFor={id} className={styles.text}>{text}</label>
			<span className={styles.icon}>
				<button onClick={handleDelete} className={styles.button}>
					<RiDeleteBin5Line />
				</button>
			</span>
		</li>
	);
};

export default Todo;
