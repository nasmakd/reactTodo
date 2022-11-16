import { createContext, useContext, useEffect, useState } from "react";
const DarkModeContext = createContext(); //아래 훅을 만들었기 때문에 export 필요 없음

export function DarkModeProvider({children}){
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode( !darkMode );
    updateDarkMode( !darkMode );
  };

  // https://tailwindcss.com/docs/dark-mode 
  // 제일 처음 마운트(로딩) 될때 최종 상태가 다크모드 인지 아닌지 판단하고 그대로 초기값 설정
  useEffect(()=>{
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);  //다크모드 상태를 로컬에서 검사 후 변수 isDark에 넣어줌
    setDarkMode(isDark);  //다크모드인지 아닌지 내부상태 업데이트
    updateDarkMode(isDark);
  }, [])  //처음 로딩될때만 작동함

  return(
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => useContext(DarkModeContext); 

// 다크모드가 true였을 때 제일 상위 엘리먼트에 dark 클래스를 넣어준다
function updateDarkMode(darkMode){
  if(darkMode){
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';  // 업데이트 될때 마다 localStorage에 저장
  }else{
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}



