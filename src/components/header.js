import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Header({ title, isVisible, navigateTo }) {
    const Navigate = useNavigate();

    return (
        <div className=" absolute top-0 flex gap-2 items-center  w-full py-3 px-2 ">
            {isVisible && (
                <span
                    className=" text-light-green text-xl"
                    onClick={() => Navigate(navigateTo)}
                >
                    {" "}
                    <IoMdArrowBack />{" "}
                </span>
            )}
            <h1 className=" text-xl text-light-green uppercase "> {title} </h1>
        </div>
    );
}

export default Header;
