import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div className="overflow-x-auto">
      <table className="table my-8">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Website</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <User key={user.id} user={user}></User>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Website</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Users;
