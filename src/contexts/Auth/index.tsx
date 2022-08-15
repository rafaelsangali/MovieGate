import { useRouter } from "next/router"
import { createContext, useState } from "react"
import { auth, provider, signInWithPopup } from "../../libs/firebase"
import { IAuthContext } from "./types"

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }) {
  const [user, setUser] = useState({})
  const [showLoading, setShowLoading] = useState(false)
  const route = useRouter()

  const signInWithGoogle = () => {
    setShowLoading(!showLoading)
    signInWithPopup(auth, provider)
      .then(res => {
        setShowLoading(false)
        setUser(res)
        route.push("/")
      })
      .catch(() => alert("Deu algo de errado. Por favor tente novamente"))
  }
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ signInWithGoogle, user, showLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
