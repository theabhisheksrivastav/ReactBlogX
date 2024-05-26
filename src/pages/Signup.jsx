import { Button, Card, Label, TextInput} from "flowbite-react";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login as authLogin } from '../store/authSlice'
import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth.service';
import {useState} from 'react'


function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <>
    <div className="grid gap-6 md:grid-cols-2 md:justify-center dark:bg-gray-800 mt-10 mb-10">
    <div className="flex justify-center">
            <Card className="flex grow max-w-sm dark:border-green-500">
                <h1 className="text-center text-2xl font-semibold dark:text-green-500">Sign Up</h1>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your Name"  />
                        </div>
                        <TextInput id="name2" type="name" placeholder="Full Name" required  {...register("name2", {
                            required: true,
                        })} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="Your email" />
                        </div>
                        <TextInput id="email2" type="email" placeholder="name@reactblogx.com" required {...register("email2", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="Your password" />
                        </div>
                        <TextInput id="password2" type="password" required {...register("password2", {
                            required: true,})} />
                    </div>
                    <Button onClick={handleSubmit(create)} gradientMonochrome="success" type="submit">Sign Up</Button>
                </form>
            </Card>
            </div>

    </div>
    </>
  )
}

export default Signup