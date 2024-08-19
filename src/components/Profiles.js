import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const profilesCollection = collection(db, 'profiles');
      const profileSnapshot = await getDocs(profilesCollection);
      const profileList = profileSnapshot.docs.map(doc => doc.data());
      setProfiles(profileList);
    };

    fetchProfiles();
  }, []);

  return (
    <div className="profile-grid">
      {profiles.map((profile, index) => (
        <div key={index} className="profile-card">
          <img src={profile.pic} alt={`${profile.name}'s profile`} className="profile-pic" />
          <h3>{profile.name}, {profile.age}</h3>
          <p>{profile.distance} miles away</p>
        </div>
      ))}
    </div>
  );
};

export default Profiles;