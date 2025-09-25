import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  const { name: fullname } = user;
  return (
    <div className="w-gull p-4 bg-blue-700 text-white rounded-lg hover:scale-110 shadow-lg/20 hover:shadow-xl/30 ">
      <h1 className="font-extrabold size-4">{user.username}</h1>
      <div className="flex place-content-between mt-2">
        <h2>{fullname}</h2>
        <span>{user.id}</span>
      </div>
      <p>Email address: {user.email}</p>
      <div>
        <span>Phone: {user.phone}</span>
        <span>Website: {user.website}</span>
      </div>
      <div>
        <span>
          Address: {user.address.street} {user.address.suite}{" "}
          {user.address.city}
        </span>
        <div>
          <span>
            Geo: {user.address.geo.lat}, {user.address.geo.lng}
          </span>
          <span>Zipcode: {user.address.zipcode}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
