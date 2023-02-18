import React from 'react'
import { useTheme } from "next-themes";
import * as S from './style'
import { Sun, Moon } from 'phosphor-react'



export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()


  const ChangeTheme = () => {
    setTheme(!theme)
  }

  return (
    <>
      {
        theme === 'light' ?
          (
            <div>
              <S.StyledButton onClick={() => setTheme('dark')}> <Moon color='#000' size={15} /></S.StyledButton>
            </div>
          ) :
          (
            <div>
              <S.StyledButton onClick={() => setTheme('light')}><Sun color='#fff' size={15} /></S.StyledButton>
            </div>
          )
      }
    </>
  )
}
