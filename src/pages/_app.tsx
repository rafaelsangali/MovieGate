import { Fuego, FuegoProvider } from '@nandorojo/swr-firestore'

import '../styles/global.css'

const firebaseConfig = {
  apiKey: 'AIzaSyAwiVjWzuNvc9_19fP38JoPOpazGIpGWfM',
  authDomain: 'spendtracker-35933.firebaseapp.com',
  projectId: 'spendtracker-35933',
  storageBucket: 'spendtracker-35933.appspot.com',
  messagingSenderId: '884810205879',
  appId: '1:884810205879:web:744b8e09f71a4f25309b32',
  measurementId: 'G-MGRE5THZC7',
}

const fuego = new Fuego(firebaseConfig)
function MyApp({ Component, pageProps }) {
  return (
    <FuegoProvider fuego={fuego}>
      {/* <AuthProvider> */}
      <Component {...pageProps} />
      {/* </AuthProvider> */}
    </FuegoProvider>
  )
}

export default MyApp
