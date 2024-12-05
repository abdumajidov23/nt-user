import React from "react";
import { useStateValue } from "../../context/index";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const { user, setUser } = useStateValue();
  const navigate = useNavigate();

  const editUser = (userId) => {
    navigate(`/create-user?id=${userId}`);
  };

  const deleteUser = (userId) => {
    if (window.confirm("Foydalanuvchini o'chirishga ishonchingiz komilmi?")) {
      const updatedUsers = user.filter((item) => item.id !== userId);
      setUser(updatedUsers);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  bg-blue-300 flex items-center justify-center">
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Foydalanuvchilar Ro'yxati
        </h2>

        {user?.length === 0 ? (
          <p className="text-center text-gray-700 text-lg">
            Hozircha foydalanuvchi yo'q.{" "}
            <span
              onClick={() => navigate("/create-user")}
              className="text-blue-600 font-semibold underline cursor-pointer"
            >
              Yangi foydalanuvchi qo'shing.
            </span>
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {user?.map((item) => (
              <div
                key={item.id}
                className="relative bg-white shadow-xl rounded-lg p-6 mt-5 flex flex-col items-center  duration-300"
              >

                <div className="text-center mt-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {item.firstName} {item.lastName}
                  </h3>
                  <p className="text-gray-600">
                    <strong>Yosh:</strong> {item.age}
                  </p>
                  <p className="text-gray-600">
                    <strong>Email:</strong> {item.email}
                  </p>
                  <p className="text-gray-600">
                    <strong>Telefon:</strong> {item.phone}
                  </p>
                  <p className="text-gray-600">
                    <strong>Kasb:</strong> {item.profession}
                  </p>
                </div>

                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={() => editUser(item.id)}
                    className="bg-violet-950 text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    Tahrirlash
                  </button>
                  <button
                    onClick={() => deleteUser(item.id)}
                    className="bg-violet-950  text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    O'chirish
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
