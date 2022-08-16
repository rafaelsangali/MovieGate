import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import { createContext, useState } from 'react'
import { auth, provider, signInWithPopup } from '../../libs/firebase'
import { IAuthContext, IUser } from './types'

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }) {
  const [loggedAccount, setLoggedAccount] = useState<IUser | null>(null)
  const [showLoading, setShowLoading] = useState(false)
  const route = useRouter()

  const logOut = () => {
    getAuth()
    signOut(auth)
      .then(() => {
        route.push('/login')
      })
      .catch(error => {
        console.log(error)
      })
  }

  const signInWithGoogle = () => {
    setShowLoading(!showLoading)
    signInWithPopup(auth, provider)
      .then(res => {
        setShowLoading(false)
        setLoggedAccount(res.user)
        route.push('/')
      })
      .catch(() => alert('Deu algo de errado. Por favor tente novamente'))
  }
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider
      value={{ signInWithGoogle, loggedAccount, showLoading, logOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}
