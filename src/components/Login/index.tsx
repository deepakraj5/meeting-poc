import './style.css'
import { toast, ToastContainer } from 'react-toastify'
import MeetSVG from '../../assets/meet/meet.svg'
import MeetSignup from '../../assets/meet/meet-signup.jpg'
import { useState } from 'react'
import { AuthService } from '../../service/AuthService'
import { HttpStatusCode } from 'axios'
import { LoginRequest } from '../../_dto/LoginRequest'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [loginInput, setLoginInput] = useState<LoginRequest>({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const response = await AuthService.login(loginInput)

            if(response.status === HttpStatusCode.Ok) {
                localStorage.setItem('accessToken', response.data.data.jwtToken)

                navigate('/meet', { replace: true })

                setLoginInput({
                    email: '',
                    password: ''
                })
            }

        } catch (error: any) {
            toast.error(error.response.data.message, {
                position: 'top-left',
                hideProgressBar: true
            })
        }
    }

    return (
        <div className='login-container'>

            <div className='login-details-container'>
                <div>
                    <div className='login-details-title'>
                        <img src={MeetSVG} height={30} width={30} />
                        <h3>Meeting POC</h3>
                    </div>
                    <h3>Welcome To Meeting POC</h3>

                    <div className='login-details'>

                        <div>
                            <div className='login-details-input'>
                                <p>Enter your email</p>
                                <input 
                                    placeholder='Your email is' 
                                    value={loginInput.email} 
                                    onChange={e => setLoginInput({ ...loginInput, email: e.target.value })}
                                    type='email' 
                                />
                            </div>
                            <div className='login-details-input'>
                                <p>Enter your password</p>
                                <input 
                                    placeholder='Your password is' 
                                    value={loginInput.password} 
                                    onChange={e => setLoginInput({ ...loginInput, password: e.target.value })} 
                                    type='password' 
                                />
                            </div>
                        </div>

                    </div>

                    <div className='login-btn'>
                        <button onClick={handleLogin}>Login</button>
                    </div>

                    <p className='create-account'>Create an account? <span onClick={() => navigate('/signup', { replace: true })}>Signup</span></p>

                </div>
            </div>

            <div className='login-image-container'>
                <img src={MeetSignup} alt='meet login' />
            </div>

            <ToastContainer />

        </div>
    );
}
