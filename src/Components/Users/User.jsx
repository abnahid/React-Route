/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, company, website } = user;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12 bg-slate-400">
              <img src="/public/th.jpeg" alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {company?.name}
        <br />
        <span className="badge badge-ghost badge-sm">
          {company?.catchPhrase}
        </span>
      </td>
      <td>{website}</td>
      <th>
        <Link className="btn btn-ghost btn-xs" to={`/user/${id}`}>
          details
        </Link>
      </th>
    </tr>
  );
};

export default User;
