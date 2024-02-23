"use client"
import { useLayoutEffect, useEffect } from "react"
import { redirect, useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { changeUserMode } from "@/redux/features/config/configSlice"
import { CircularProgress, Box } from "@mui/material";

// This HOC is used to wrap any component that requires authentication
function isAuth(Component) {
  return function IsAuth(props) {
    const dispatch = useDispatch()
    const router = useRouter()
    const accessToken = useSelector((state) => state.auth.accessToken)
    console.log('accessToken:', accessToken)
    useLayoutEffect(() => {
      if (!accessToken) {
        dispatch(changeUserMode('tenant'))
        // redirect('/')
        console.log('redirect to /')
        router.replace('/')
        // redirect to login and add returnURL=landlord
      }
    }, [])

    if (!accessToken) return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )

    return <Component {...props} />
  }
}

export default isAuth

