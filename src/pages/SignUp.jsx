import { Button, Card, Label } from "flowbite-react";
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login as authsignup } from '../store/authSlice'
import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth.service';
import Input from '../components/Input';

function Signup() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const signup = async(data) => {
        try {
            const session = await authService.createAccount(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authsignup(userData));
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

  return authStatus ? (
    navigate("/")
  ) : (
    <>
        <div className=" md:justify-center dark:bg-gray-800 mt-10 mb-10">
            <div className="flex justify-center">
            <Card className="flex grow max-w-sm dark:border-green-500 ">
                <h1 className="text-center text-2xl font-semibold dark:text-green-500">Sign Up</h1>
                <form className="flex flex-col gap-4">
                    <div>
                    <div className="mb-2 block">
                            <Label htmlFor="name" value="Your name" />
                        </div>
                        <Input
                label="Name: "
                placeholder="Enter your Full name"
                type="Name"
                {...register("Name", {
                    required: true
                })}
                />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
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
                        <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                    </div>
                    {/* <div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <div>
                            <Tooltip content="You need to login to post">
                                <Button className='flex justify-end' outline gradientDuoTone="cyanToBlue" href="/signup">Sign Up</Button>
                            </Tooltip>
                        </div> 
                    </div> */}
                    <div className="mt-2 block mb-2">
                    <Button onClick={handleSubmit(signup)} gradientMonochrome="success" type="submit">Sign Up</Button>
                    </div>
                </form>
            </Card>
            </div>
            
        </div>
    </>
  )
}

export default Signup