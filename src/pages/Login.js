import MyTextField from "../components/inputs/MyTextField";
import MyButton from "../components/MyButton";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
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
                <form className="flex flex-col gap-6">
                    <div>
                        <MyTextField label="email address:" type="text" />
                    </div>
                    <div>
                        <MyTextField label="password:" />
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
