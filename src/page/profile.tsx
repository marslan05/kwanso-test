import { useLocation } from "react-router-dom";
import Header from "../components/header";

const Profile: React.FC = () => {
  const location = useLocation();
  let user = location.state;

  return (
    <>
      <div className="App h-full min-h-screen bg-gray-900 w-full">
        <Header />

        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 pt-10">
          <div
            // key={selectedUser?.login?.uuid}
            className="rounded-2xl w-2/3 mx-auto bg-gray-800 px-8 py-10"
          >
            <img
              src={user?.picture.large}
              className="mx-auto h-36 w-36 rounded-full "
              alt=""
            />
            <ul className="flex divide-y flex-col ">
              <li className="flex py-3 align-middle items-center justify-between gap-5 w-full">
                <span className="text-white text-xs font-normal">Name:</span>
                <span className="text-white text-xs font-normal text-right">
                  {user?.name?.title} {user?.name?.first} {user?.name?.last}
                </span>
              </li>
              <li className="flex py-3 align-middle items-center justify-between gap-5 w-full">
                <span className="text-white text-xs font-normal">Email:</span>
                <span className="text-white text-xs font-normal text-right">
                  {user?.email}
                </span>
              </li>
              <li className="flex py-3 align-middle items-center justify-between gap-5 w-full">
                <span className="text-white text-xs font-normal">Gender:</span>
                <span className="text-white text-xs font-normal text-right">
                  {user?.gender}
                </span>
              </li>
              <li className="flex py-3 align-middle items-center justify-between gap-5 w-full">
                <span className="text-white text-xs font-normal">
                  Location:
                </span>
                <span className="text-white text-xs font-normal text-right">
                  {`${user?.location?.street?.number} ${user?.location?.street?.name}, ${user?.location?.city}, ${user?.location?.state}, ${user?.location?.country} ${user?.location?.postcode}`}
                </span>
              </li>
              <li className="flex py-3 align-middle items-center justify-between gap-5 w-full">
                <span className="text-white text-xs font-normal">Dob:</span>
                <span className="text-white text-xs font-normal text-right">
                  {new Date(user?.dob?.date).toDateString()}
                </span>
              </li>
              <li className="flex py-3 align-middle items-center justify-between gap-5 w-full">
                <span className="text-white text-xs font-normal">Age:</span>
                <span className="text-white text-xs font-normal text-right">
                  {user?.dob?.age}
                </span>
              </li>
              <li className="flex py-3 align-middle items-center justify-between gap-5 w-full">
                <span className="text-white text-xs font-normal">
                  Phone/Cell:
                </span>
                <span className="text-white text-xs font-normal text-right">
                  {user?.phone} / {user?.cell}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
