import { useState } from "react";
import MyTextField from "../components/inputs/MyTextField";
import MyButton from "../components/MyButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { Toaster, toast } from "react-hot-toast";

function Login() {
    const { REACT_APP_URL } = process.env;

    const [dataLogin, setDatalogin] = useState();

    const signIn = useSignIn();

    const navigate = useNavigate();

    function handelChange(e) {
        const { value, name } = e.target;
        setDatalogin({
            ...dataLogin,
            [name]: value,
        });
    }
    async function handelSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post(
                `${REACT_APP_URL}/registration/accounts/login/`,
                dataLogin
            );
            toast.success(`${res.data.detail.message}`);
            console.log(res);
            signIn({
                token: res.data.detail.extra_data.token,
                expiresIn: 3000,
                tokenType: "Bearer",
                authState: { username: res.data.detail.user_data },
            });
            setTimeout(() => {
                navigate("/home");
            }, 500);
        } catch (error) {
            console.log(error);
            toast.error("User name or password Wrong !");
        }
    }

    return (
        <div>
            <Toaster />
            <div className="mt-10"></div>
            {/* <div className="bg-light-green shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        <h2 className="flex items-center gap-2 text-white font-bold text-xl py-4 px-2">
          <span className="">
            <FaAngleLeft />
          </span>
          SIGN IN
        </h2>
      </div> */}
            <div className="bg-white m-4 p-2">
                <form className="flex flex-col gap-6" onSubmit={handelSubmit}>
                    <div>
                        <MyTextField
                            label="User Name:"
                            name="login"
                            type="text"
                            onChange={handelChange}
                        />
                    </div>
                    <div>
                        <MyTextField
                            label="password:"
                            name="password"
                            type="password"
                            onChange={handelChange}
                        />
                        <a
                            href="#"
                            className="uppercase text-gray-400 text-[12px]"
                        >
                            forget password?
                        </a>
                    </div>
                    <div>
                        <MyButton name="SIGN IN" />
                        <div className="uppercase text-gray-400 text-[12px] mt-4">
                            dont have an account sign up
                            <Link to={"/register"} className="underline px-1">
                                here
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
