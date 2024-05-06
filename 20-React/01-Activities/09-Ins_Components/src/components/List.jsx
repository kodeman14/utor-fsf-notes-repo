// This List component accepts props from App.js
// We pluck off the "users" property of the props object using destructuring assignment
// This prevents us from having to type `props.users` each time we want to refer to the users object
export default function List({ users }) {
  const renderUsers = (userList) => {
    return userList.map((user) => (
      // return (
      <li key={user.login.uuid}>
        <p className="list-group-item font-italic">
          {`${user.name.first} ${user.name.last} (${user.login.username})`}
        </p>
        <p className="list-group-item">
          {`${user.location.city} ${user.location.state} (${user.location.country})`}
        </p>
      </li>
    ));
  };

  return (
    <div className="container">
      <h1>Random Users:</h1>
      <ul className="list-group">
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {renderUsers(users)}
      </ul>
    </div>
  );
}
