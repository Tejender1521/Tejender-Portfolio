import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";

import "./Profiles.scss";
import { urlFor, client } from "../../client";

const Profile = () => {
  const [profile, setProfiles] = useState([]);
  
  useEffect(() => {
    const query = '*[_type == "profile"]';

    client.fetch(query).then((data) => {
      setProfiles(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>Coding Profiles</span>
      </h2>

      <div className="app__profiles">
        {profile.map((profile, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 1.2 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            className="app__profile-item"
            key={profile.title + index}
          >
            <a href={profile.profilelink} target="_blank" rel="noreferrer">
              <img src={urlFor(profile.imgUrl)} alt={profile.title} />
            </a>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {profile.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {profile.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Profile, "app__about"),
  "profile",
  "app__whitebg"
);
