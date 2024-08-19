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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {profiles.map((profile, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
          <img src={profile.pic} alt={`${profile.name}'s profile`} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-800">{profile.name}, {profile.age}</h3>
          <p className="text-gray-600">{profile.distance} miles away</p>
        </div>
      ))}
    </div>
  );
};

export default Profiles;