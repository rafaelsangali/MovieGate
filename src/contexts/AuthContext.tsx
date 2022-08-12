import { useRouter } from 'next/router'
import { createContext, useState } from 'react'
import { auth, provider, signInWithPopup } from '../libs/firebase'
import { IAuthContext } from './types'

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }) {
  const [user, setUser] = useState({})
  const route = useRouter()

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(res => {
        setUser(res)
        route.push('/')
        console.log(res)
      })
      .catch(error => console.log(error))
  }
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ signInWithGoogle, user }}>
      {children}
    </AuthContext.Provider>
  )
}
