import React from 'react'

type UserType = {
  displayName: string | null
  email: string | null
  phone?: string | null
  isConnected: boolean
  date_last: number | null
}

type ContextType = {
  state: UserType
  dispatch: React.Dispatch<Action>
}

// type Action = | { type: 'IS_CONNECTED' }
type Action = { type: 'IS_CONNECTED' }

const defaultTheme: UserType = {
  displayName: null,
  email: null,
  phone: null,
  isConnected: false,
  date_last: null,
}

export const UserContext = React.createContext<ContextType>({ state: defaultTheme, dispatch: () => undefined })

function updateUser(state: UserType, action: Action): UserType {
  const { type } = action
  switch (type) {
    case 'IS_CONNECTED':
      return {
        ...state,
        date_last: Date.now(),
        isConnected: true,
      }
    default:
      return state
  }
}

export function UserProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [state, dispatch] = React.useReducer(updateUser, defaultTheme)

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>
}
