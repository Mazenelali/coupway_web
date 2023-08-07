import React, { useState } from "react";
import InputsOfProfile from "../../../components/inputs/InputsOfProfile";
import MyButton from "../../../components/MyButton";

function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState(null);
    const [newPassword, setNewPassword] = useState("");

    const isMinLengthValid = newPassword.length >= 6;
    const isNumberPresent = /\d/.test(newPassword);

    const handleCurrentPasswordChange = (e) => setCurrentPassword(e);

    const handleNewPasswordChange = (e) => setNewPassword(e);

    return (
        <>
        <form className="w-full h-[calc(100vh-32px)] p-3 pt-16  flex flex-col gap-6">
            <div className="flex flex-col items-center gap-6">
                <InputsOfProfile
                    placeholder="CURRENT PASSWORD"
                    onChange={handleCurrentPasswordChange}
                    type="password"
                    value={currentPassword}
                />
                <InputsOfProfile
                    placeholder="NEW PASSWORD"
                    onChange={handleNewPasswordChange}
                    type="password"
                    value={newPassword}
                />
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <ValidationBullet valid={isMinLengthValid} text="6 characters minimum" />
                    <ValidationBullet valid={isNumberPresent} text="1 number required" />
                </div>
                <MyButton name="SAVE PASSWORD" color={`${currentPassword === newPassword  ? "bg-light-green" : "bg-dark-gray"}`} />
            </div>
        </form>
        </>
    );
}

function ValidationBullet({ valid, text }) {
    return (
        <span className="flex gap-3 items-center">
            <p className={`w-3 h-3 rounded-3xl ${valid ? "bg-light-green" : "bg-transparent"}`} />
            {text}
        </span>
    );
}

export default ChangePassword;
