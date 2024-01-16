import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { USER } from "../types/user.types";

interface TableProps {
  data?: USER[];
  handleGenderFilter?: () => void;
}
const Table: React.FC<TableProps> = ({ data, handleGenderFilter }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 "
                  >
                    <span className="group inline-flex cursor-pointer w-full text-gray-600 font-semibold text-sm">
                      Sr.
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 "
                  >
                    <span className="group inline-flex cursor-pointer w-full text-gray-600 font-semibold text-sm">
                      Name
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 "
                  >
                    <span className="group inline-flex cursor-pointer w-full text-gray-600 font-semibold text-sm">
                      Email
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 "
                  >
                    <span className="group inline-flex cursor-pointer w-full text-gray-600 font-semibold text-sm">
                      Gender
                      <span
                        onClick={handleGenderFilter}
                        className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                      >
                        <ChevronDownIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 "
                  >
                    <span className="group inline-flex cursor-pointer w-full text-gray-600 font-semibold text-sm">
                      Location
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    <span className="group inline-flex cursor-pointer w-full text-gray-600 font-semibold text-sm">
                      Dob
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    <span className="group inline-flex cursor-pointer w-full text-gray-600 font-semibold text-sm">
                      Age
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    <span className="group inline-flex cursor-pointer w-full text-gray-600 font-semibold text-sm">
                      Phone / Cell
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data?.map((user, index) => {
                  return (
                    <tr
                      onClick={() => {
                        navigate(`/profile/${user?.login?.uuid}`, {
                          state: user,
                        });
                      }}
                      key={index}
                    >
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold cursor-pointer">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold cursor-pointer">
                        {`${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold cursor-pointer">
                        {user?.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold cursor-pointer">
                        {user?.gender}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold cursor-pointer">
                        {`${user?.location?.street?.number} ${user?.location?.street?.name}, ${user?.location?.city}, ${user?.location?.state}, ${user?.location?.country} ${user?.location?.postcode}`}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold cursor-pointer">
                        {new Date(user?.dob?.date).toDateString()}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold cursor-pointer">
                        {user?.dob?.age}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-600 font-semibold cursor-pointer">
                        <a
                          className="cursor-pointer"
                          href={`tel:${user?.phone}`}
                        >
                          {user?.phone}
                        </a>{" "}
                        /{" "}
                        <a
                          className="cursor-pointer"
                          href={`tel:${user?.cell}`}
                        >
                          {user?.cell}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
