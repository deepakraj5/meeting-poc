import './style.css'
import MeetSVG from '../../assets/meet/meet.svg'
import MeetSignup from '../../assets/meet/meet-signup.jpg'
import { useState } from 'react'
import { SignupRequest } from '../../_dto/SignupRequest'
import { AuthService } from '../../service/AuthService'
import { HttpStatusCode } from 'axios'
import { toast, ToastContainer } from 'react-toastify'

export const Signup = () => {

    const [signupInput, setSignupInput] = useState<SignupRequest>({
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    })

    const handleSignup = async () => {
        try {
            const response = await AuthService.signup(signupInput)

            if(response.status === HttpStatusCode.Created) {
                
                toast("Account created, please login!", {
                    position: 'top-left',
                    hideProgressBar: true
                })

                setSignupInput({
                    email: '',
                    firstName: '',
                    lastName: '',
                    password: ''
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='signup-container'>

            <div className='signup-details-container'>
                <div>
                    <div className='signup-details-title'>
                        <img src={MeetSVG} height={30} width={30} />
                        <h3>Meeting POC</h3>
                    </div>
                    <h3>Welcome To Meeting POC</h3>

                    <div className='signup-details'>

                        <div>
                            <div className='signup-details-input'>
                                <p>Enter your email</p>
                                <input 
                                    placeholder='Your email is' 
                                    value={signupInput.email} 
                                    onChange={e => setSignupInput({ ...signupInput, email: e.target.value })}
                                    type='email' 
                                />
                            </div>
                            <div className='signup-details-input'>
                                <p>Enter your first name</p>
                                <input 
                                    placeholder='Your first name is' 
                                    value={signupInput.firstName} 
                                    onChange={e => setSignupInput({ ...signupInput, firstName: e.target.value })} 
                                />
                            </div>
                            <div className='signup-details-input'>
                                <p>Enter your last name</p>
                                <input 
                                    placeholder='Your last name is' 
                                    value={signupInput.lastName} 
                                    onChange={e => setSignupInput({ ...signupInput, lastName: e.target.value })} 
                                />
                            </div>
                            <div className='signup-details-input'>
                                <p>Enter your password</p>
                                <input 
                                    placeholder='Your password is' 
                                    value={signupInput.password} 
                                    onChange={e => setSignupInput({ ...signupInput, password: e.target.value })} 
                                    type='password' 
                                />
                            </div>
                        </div>

                    </div>

                    <div className='signup-btn'>
                        <button onClick={handleSignup}>Signup</button>
                    </div>

                </div>
            </div>

            <div className='signup-image-container'>
                <img src={MeetSignup} alt='meet signup' />
            </div>

            <ToastContainer />

        </div>
    );
}
