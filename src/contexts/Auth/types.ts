interface IAuthContext {
  signInWithGoogle: () => void
  logOut: () => void
  loggedAccount: IUser
  showLoading: boolean
  authLoaded: boolean
}

interface IUser {
  displayName: string
  photoURL: string
  uid: string
}

export type { IAuthContext, IUser }
