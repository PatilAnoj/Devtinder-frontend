const UserCard = ({user}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={user.photoUrl}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{user.firstName+ " " + user.lastName}</h2>
        <p>
          {user.about}
        </p>
        <div className="card-actions justify-end">
          <button className="btn bg-red-600 text-white text-bold ">ignore</button>
          <button className="btn bg-green-400 text-white">interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
