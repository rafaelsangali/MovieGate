import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import { auth, provider, signInWithPopup } from '../../libs/firebase'
import { IAuthContext, IUser } from './types'

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<IUser | null>(null)
  const [showLoading, setShowLoading] = useState(false)
  const [authLoaded, setAuthLoaded] = useState(false)
  const route = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentState => {
      setUser(currentState)
      setAuthLoaded(true)
    })
    return () => unsubscribe()
  }, [])

  const logOut = () => {
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
        setUser(res.user)
        route.push('/')
      })
      .catch(() => alert('Deu algo de errado. Por favor tente novamente'))
  }
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider
      value={{
        signInWithGoogle,
        loggedAccount: user,
        showLoading,
        logOut,
        authLoaded,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
