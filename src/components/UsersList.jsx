// How to render a list of Data
const users = [
  {
    id: 1,
    name: 'Alice',
    age: 25,
  },
  {
    id: 2,
    name: 'Bob',
    age: 30,
  },
  {
    id: 3,
    name: 'Chalie',
    age: 37,
  },
];

const UsersList = () => {
  return (
    <div>
      {users.map(({ name, age, id }) => (
        <div key={id}>
          <h1>{name}</h1>
          <h2>{age}</h2>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
