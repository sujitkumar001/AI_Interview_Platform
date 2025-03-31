import React, {ReactNode} from 'react'
import AuthForm from "@/components/AuthForm";

const AuthLayout = ({children}:{children: ReactNode}) => {
    return (
        <div className="auth-layout">{children}</div>
    )
}
export default AuthLayout
