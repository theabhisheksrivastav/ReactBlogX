import React from 'react'
import { Button, Card, Checkbox, Label, TextInput, Tooltip } from "flowbite-react";

function Login() {
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
                        <TextInput id="email1" type="email" placeholder="name@reactblogx.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password" required />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        {/* <div>
                            <Tooltip content="You need to login to post">
                                <Button className='flex justify-end' outline gradientDuoTone="cyanToBlue" href="/signup">Sign Up</Button>
                            </Tooltip>
                        </div> */}
                    </div>
                    <Button gradientMonochrome="success" type="submit">Login</Button>
                </form>
            </Card>
            </div>
            <div className="flex justify-center">
            <Card className="flex grow max-w-sm dark:border-green-500">
                <h1 className="text-center text-2xl font-semibold dark:text-green-500">Sign Up</h1>
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your Name" />
                        </div>
                        <TextInput id="name" type="name" placeholder="Full Name" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" placeholder="name@reactblogx.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password" required />
                    </div>
                    {/* <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                    </div> */}
                    <Button gradientMonochrome="success" type="submit">Sign Up</Button>
                </form>
            </Card>
            </div>
        </div>
    </>
  )
}

export default Login