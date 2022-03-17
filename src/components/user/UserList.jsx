import { fetchUsers, userDeleted } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";


import { Link } from "react-router-dom";

export function UserList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.users);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(userDeleted({ id }));
  };



  return (
    <div className="container">


      <div className="flex">
        <button
          onClick={() => dispatch(fetchUsers())}
          className="bg-transparent hover:bg-lime-500 text-lime-700 font-semibold hover:text-white py-2 px-4 border border-lime-500 hover:border-transparent rounded mr-4"
        >
          Load users
        </button>
        <Link to="/add-user">
          <button className="bg-transparent hover:bg-lime-500 text-lime-700 font-semibold hover:text-white py-2 px-4 border border-lime-500 hover:border-transparent rounded">Add user</button>
        </Link>
      </div>


      
        {loading ? (
          "Loading..."
        ) : (


         
            <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
              <tbody className="flex-1 sm:flex-none">
                <tr>
                  <td className="p-3 font-bold uppercase bg-lime-500 text-white border border-gray-300 hidden lg:table-cell">
                    ID
                  </td>
                  <td className="p-3 font-bold uppercase bg-lime-500 text-white border border-gray-300 hidden lg:table-cell">
                    Name
                  </td>
                  <td className="p-3 font-bold uppercase bg-lime-500 text-white border border-gray-300 hidden lg:table-cell">
                    Email
                  </td>
                  <td className="p-3 font-bold uppercase bg-lime-500 text-white border border-gray-300 hidden lg:table-cell">
                    action
                  </td>
                </tr>
                {entities.length &&
                  entities.map(({ id, name, email }, i) => (
                    <tr key={i} className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                      <td className="border-grey-light border hover:bg-gray-100 p-3">{id}</td>
                      <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{name}</td>
                      <td className="border-grey-light border hover:bg-gray-100 p-3 text-black-400 hover:text-black-600 hover:font-medium cursor-pointer">{email}</td>
                      <td className="border-grey-light border hover:bg-gray-100 p-3 text-black-400 hover:text-black-600 hover:font-medium cursor-pointer">
                        <button onClick={() => handleDelete(id)} className="mr-9"><svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />  <line x1="9" y1="9" x2="15" y2="15" />  <line x1="15" y1="9" x2="9" y2="15" /></svg></button>
                        <Link to={`/edit-user/${id}`}>
                          <button><svg className="h-8 w-8 text-black" width="10" height="10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M12 20h9" />  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg></button>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
         



        )}
      
    </div>
  );
}
