import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useStateValue } from "../../context/index";

const CreateUser = () => {
  const { user, setUser } = useStateValue();
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();

  const firstName = useRef("");
  const lastName = useRef("");
  const age = useRef("");
  const email = useRef("");
  const password = useRef("");
  const phone = useRef("");
  const profession = useRef("");

  const location = useLocation();
  const paramsUserId = location.search.split("=")[1];

  useEffect(() => {
    if (paramsUserId) {
      const updatedUser = user.find((item) => item.id === paramsUserId);
      if (updatedUser) {
        firstName.current.value = updatedUser.firstName;
        lastName.current.value = updatedUser.lastName;
        age.current.value = updatedUser.age;
        email.current.value = updatedUser.email;
        password.current.value = updatedUser.password;
        phone.current.value = updatedUser.phone;
        profession.current.value = updatedUser.profession;
        setUpdate(true);
      }
    }
  }, [paramsUserId, user]);

  const registerUser = (event) => {
    event.preventDefault();

    const formUser = {
      id: update ? paramsUserId : uuidv4(),
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      age: age.current.value,
      email: email.current.value,
      password: password.current.value,
      phone: phone.current.value,
      profession: profession.current.value,
    };

    if (update) {
      const updatedUsers = user.map((item) =>
        item.id === paramsUserId ? formUser : item
      );
      setUser(updatedUsers);
    } else {
      setUser([...user, formUser]);
    }

    firstName.current.value = "";
    lastName.current.value = "";
    age.current.value = "";
    email.current.value = "";
    password.current.value = "";
    phone.current.value = "";
    profession.current.value = "";

    navigate("/users");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b  bg-blue-300 ">
      <form
        className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8 relative overflow-hidden"
        onSubmit={registerUser}
      >
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl opacity-50"></div>

        <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">
          {update ? "Yangilash" : "Yangi Foydalanuvchi"}
        </h2>

        <div className="space-y-5">
          {[
            { placeholder: "Ism", ref: firstName, type: "text" },
            { placeholder: "Familiya", ref: lastName, type: "text" },
            { placeholder: "Yosh", ref: age, type: "number" },
            {
              placeholder: "Email",
              ref: email,
              type: "email",
            },
            {
              placeholder: "Parol",
              ref: password,
              type: "password",
            },
            {
              placeholder: "Telefon",
              ref: phone,
              type: "tel",
            },
            {
              placeholder: "Kasb",
              ref: profession,
              type: "text",
            },
          ].map(({ placeholder, ref, type, defaultValue }, index) => (
            <input
              key={index}
              type={type}
              placeholder={placeholder}
              ref={ref}
              defaultValue={defaultValue}
              className="w-full py-3 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-300"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-6  bg-blue-500  text-white font-bold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300"
        >
          {update ? "Yangilash" : "Tastiqlash"}
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
