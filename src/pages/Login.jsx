import { Button, Card, Label, TextInput} from "flowbite-react";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login as authLogin } from '../store/authSlice'
import { Link, useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth.service';

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const login = async(data) => {
        try {
            const session = await authService.loginAccount(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
        <div className="grid gap-6 md:grid-cols-2 md:justify-center dark:bg-gray-800 mt-10 mb-10">
            <div className="flex justify-center">
            <Card className="flex grow max-w-sm dark:border-green-500 ">
                <h1 className="text-center text-2xl font-semibold dark:text-green-500">Login</h1>
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="name@reactblogx.com" {...register("email1", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })} 
                />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password" {...register("password1", {
                    required: true,
                })} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <Link to="/sign-up"><Label htmlFor="signup"> Don&apos;t have any account?&nbsp;</Label></Link>
                        </div>
                        {/* <div>
                            <Tooltip content="You need to login to post">
                                <Button className='flex justify-end' outline gradientDuoTone="cyanToBlue" href="/signup">Sign Up</Button>
                            </Tooltip>
                        </div> */}
                    </div>
                    <Button onClick={handleSubmit(login)} gradientMonochrome="success" type="submit">Login</Button>
                </form>
            </Card>
            </div>
            
        </div>
    </>
  )
}

export default Login