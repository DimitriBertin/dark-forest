import React from 'react'

type UserType = {
  uid: string | null
  displayName: string | null
  email: string | null
  phone?: string | null
  isConnected: boolean
}

type ContextType = {
  state: UserType
  dispatch: React.Dispatch<Action>
}

// type Action = | { type: 'IS_CONNECTED' }
type Action = {
  type: 'IS_CONNECTED'
  payload: Partial<UserType>
}

const defaultTheme: UserType = {
  uid: null,
  displayName: null,
  email: null,
  phone: null,
  isConnected: false,
}

export const UserContext = React.createContext<ContextType>({ state: defaultTheme, dispatch: () => undefined })

function updateUser(state: UserType, action: Action): UserType {
  const { type, payload } = action
  console.log('payload', payload)
  switch (type) {
    case 'IS_CONNECTED':
      return {
        ...state,
        ...payload,
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
