import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import MyTextField from "../components/MyTextField";
import MySelect from "../components/MySelect";
import MyCheckbox from "../components/MyCheckbox";
import MyButton from "../components/MyButton";

function Register() {
  const currentYear = new Date().getFullYear();
  const [showPassword, setShowPassword] = useState(false);

  const years = Array.from({ length: 101 }, (_, index) => currentYear - index);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  const handleToggle = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      {console.log(years)}
      <div className="bg-white mx-4">
        <h2 className="text-center tracking-wider mx-2 uppercase font-bold text-lg">
          sign up using your email address
        </h2>
        <form>
          <div className="flex flex-col gap-4 bg-white px-4 py-4 pb-8">
            <div>
              <MyTextField type="email" label="email address" />
            </div>
            <div>
              <MyTextField type="text" label="first name" />
            </div>
            <div>
              <MyTextField type="text" label="last name" />
            </div>
            <div className="relative">
              <MyTextField
                type={showPassword ? "text" : "password"}
                label="password"
              />
              <button
                className="absolute right-2 top-9 uppercase text-md bg-white"
                onClick={handleToggle}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              <div className="text-[12px] text-gray-400 mt-2">
                Must be 6 or more characters and contain at least 1 number
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4 pb-4">
            <div className="w-full">
              <div className="uppercase text-gray-400 font-medium">
                date of birth
                <span className="capitalize text-sm">(Optional: )</span>
              </div>
              <div className="flex gap-x-2 mt-4">
                <MySelect style={{ flexBasis: "25%" }}>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </MySelect>
                <MySelect style={{ flexBasis: "50%" }}>
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </MySelect>
                <MySelect style={{ flexBasis: "25%" }}>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </MySelect>
              </div>
              <div className="text-gray-400 font-medium text-[12px] mt-2">
                Tell us - you'll get a bithday treat if you do
              </div>
            </div>
            <div>
              <div className="text-gray-400 uppercase font-bold">
                Gender{" "}
                <span className="font-medium capitalize text-sm">
                  (Optional):
                </span>
              </div>
              <div className="flex gap-x-10 mt-4">
                <div>
                  <MyCheckbox
                    checkboxStyle={{ borderRadius: "50%" }}
                    label="Girl"
                  />
                </div>
                <div>
                  <MyCheckbox
                    checkboxStyle={{ borderRadius: "50%" }}
                    label="Guy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white px-4 pt-4">
            <div className="uppercase text-gray-400 font-bold mb-4">
              contact preferences:
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <MyCheckbox label="Sign me up for exclusive COUPWAY discounts by email and text" />
              </div>
              <div>
                <MyCheckbox label="Yes, send me updates by email on selective COUPWAY deals" />
              </div>
              <div>
                <MyCheckbox label="Yes, I agree to COUPWAY" />
              </div>
            </div>
            <div className="mt-6">
              <MyButton name="JOIN COUPWAY" />
            </div>
            <div className="mt-2">
              You have an account sign in{" "}
              <a href="#" className="underline">
                here
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
