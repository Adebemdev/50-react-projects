import { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    title: 'Software Engineer',
    name: 'Adeola',
    age: 25,
  });

  return (
    <div>
      <input
        type="text"
        name="text"
        value={profile.name}
        onChange={(e) => {
          setProfile({
            ...profile,
            name: e.target.value,
          });
        }}
      />
      <input
        type="number"
        name="number"
        value={profile.age}
        onChange={(e) => {
          setProfile({
            ...profile,
            age: e.target.value,
          });
        }}
      />
      <div>
        <h1>{profile.title}</h1>
        <h1>{profile.name}</h1>
        <h3>{profile.age}</h3>
      </div>
    </div>
  );
};

export default Profile;
