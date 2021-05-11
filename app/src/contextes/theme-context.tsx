import React from 'react'

type ThemeItemType = {
  text: string
  background: string
  type: 'dark' | 'light',
}

type ThemeType = {
  light: ThemeItemType,
  dark: ThemeItemType,
}

type ContextType = {
  state: ThemeItemType
  change: React.Dispatch<ThemeItemType>
}

const defaultTheme:ThemeType = {
  light: {
    text: 'black',
    background: 'white',
    type: 'light',
  },
  dark: {
    text: 'white',
    background: 'black',
    type: 'dark',
  },
}

const initialTheme:ThemeItemType = defaultTheme.light

const ThemeContext = React.createContext<ContextType>({ state: initialTheme, change: () => undefined })

function updateTheme(state: ThemeItemType):ThemeItemType {
  if (state.type === 'light') return defaultTheme.dark
  else return defaultTheme.light
}

export function ThemeProvider({ children }: { children: React.ReactNode}) {
  const [state, change] = React.useReducer(updateTheme, initialTheme)

  return (
    <ThemeContext.Provider value={{ state, change }}>
      {children}
    </ThemeContext.Provider>
  )
} 