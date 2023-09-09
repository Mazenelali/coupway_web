import { BiCommentDetail } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { Toaster, toast } from "react-hot-toast";


function Feedbacks({ feedbacks, getFeedback }) {
    const params = useParams();
    const auth = useAuthUser();

    const [feedback, setFeedback] = useState({
        user_id: auth().username.id,
        feedback_content: "",
        offer_id: params.id,
    });

    function addFeedback(e) {
        if (feedback.feedback_content === "") { 
            e.preventDefault();
            toast.error('Comment is empty')
        } else {
            e.preventDefault();
            axios
                .post(
                    `${process.env.REACT_APP_URL}/getalloffers/${params.id}/provide-feedback`,
                    feedback
                )
                .then((res) => {
                    getFeedback();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
    useEffect(() => {
        getFeedback();
    }, []);

    return (
        <div className="w-full flex flex-col gap-2 ">
            {feedbacks.map((feedback, index) => (
                <div
                    key={index}
                    className="w-full p-y-2 flex items-center gap-3 border-b-[1px]  border-b-gray-300"
                >
                    <div className=" rounded-full w-8 h-8 flex justify-center items-center bg-light-green">
                        <BsFillPersonFill className=" text-2xl text-white" />
                    </div>
                    <div className="flex flex-col w-[80%] p-2">
                        <p className=" text-black text-base">
                            {feedback.user.username}
                        </p>
                        <span className=" text-sm">
                            {" "}
                            {feedback.feedback_content}
                        </span>
                    </div>
                </div>
            ))}
            <div className="w-full h-10 bg-gray-300 flex gap-2 justify-center items-center ">
                <form onSubmit={addFeedback} className=" w-full flex gap-2 justify-center items-center">
                    <input
                        type="text"
                        placeholder="Write a comment ..."
                        className="p-[1px]"
                        onChange={(e) => {
                            e.preventDefault();
                            setFeedback({
                                ...feedback,
                                feedback_content: e.target.value,
                            });
                        }}
                    />
                    <button className="p-1 bg-light-green">
                        <BiCommentDetail className=" text-white" />
                    </button>
                </form>
            </div>
            <Toaster/>
        </div>
    );
}

export default Feedbacks;
