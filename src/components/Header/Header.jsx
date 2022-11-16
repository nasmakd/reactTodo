// 다크모드 context 연결 
import React from 'react';
import styles from './Header.module.css';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useDarkMode } from '../context/DarkModeContext';


export default function Header({ filters, filter, onFilterChange }) {
	const {darkMode, toggleDarkMode} = useDarkMode();
	return (
		<header className={styles.header}>
			<button className={styles.toggle} onClick={toggleDarkMode} >
				{!darkMode && <BsMoon />}
				{darkMode && <BsSun /> }
			</button>
			<ul className={styles.filters}>
				{filters.map((value, index) => (
					<li key={index}>
						<button 
            onClick={() => onFilterChange(value)} 
            className={`${styles.filter} ${filter === value && styles.selected}`}
            >
							{value}
						</button>
					</li>
				))}
			</ul>
		</header>
	);
}
