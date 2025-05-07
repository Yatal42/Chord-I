import React from 'react';

const ProfilePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      <div className="mb-4">
        <h2 className="text-xl">Settings</h2>
        <p>Update your profile settings here.</p>
      </div>
      <div>
        <h2 className="text-xl">Saved Songs</h2>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;