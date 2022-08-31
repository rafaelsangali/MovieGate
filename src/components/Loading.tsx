import { Grid } from 'react-loader-spinner'

export default function Loading() {
  return (
    <Grid
      height="80"
      width="80"
      color="#E83F5B"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperClass="h-screen flex items-center justify-center"
    />
  )
}
