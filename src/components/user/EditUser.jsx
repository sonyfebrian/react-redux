import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { useState } from "react";
import { userUpdated } from "./usersSlice";

export function EditUser() {
  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace("/edit-user/", ""));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = useSelector((state) =>
    state.users.entities.find((user) => user.id === userId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userUpdated({
          id: userId,
          name,
          email,
        })
      );

      setError(null);
      history.push("/user");
    } else {
      setError("Fill in all fields");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
              <header className="px-5 py-4 border-b border-slate-100">
                <h2 className="font-semibold text-slate-800">Edit User</h2>
              </header>
              <div className="mb-4 mr-9">
                <label className="block text-gray-700 text-sm font-bold  px-2 py-1" for="username">
                  Username
                </label>
                <input className="shadow appearance-none border rounded ml-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"
                  placeholder="test@mailbox.com"
                  id="nameInput"
                  onChange={handleName}
                  value={name} />
              </div>
              <div className="mb-4 mr-10">
                <label className="block text-gray-700 text-sm font-bold  px-2 py-1" for="username">
                  Email
                </label>
                <input className="shadow appearance-none border rounded ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  type="email"
                  placeholder="test@mailbox.com"
                  id="emailInput"
                  onChange={handleEmail}
                  value={email} />
              </div>
              
              <div className="flex items-center justify-between">
              {error && error}
                <button onClick={handleClick} className="bg-transparent hover:bg-lime-500 text-lime-700 font-semibold hover:text-white py-2 px-4 border border-lime-500 hover:border-transparent rounded ml-2 mb-2" type="button">
                  Save User
                </button>
                
              </div>
              
            </div>

          </div>
        </main>


      </div>



    </div>
  );
}
