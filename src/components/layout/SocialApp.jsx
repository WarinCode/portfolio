// * import react
import { useState, useEffect } from "react";

// * import libs
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsStackOverflow, BsSpotify } from "react-icons/bs";

// * import style
// import "/src/style/css/icon.css";
import "/src/style/scss/_icon.scss";

function SocialApp({ PropSocial }) {
  const [link, setLink] = useState({});

  useEffect(() => {
    (async function () {
      setLink(await PropSocial);
    })();
  }, []);

  return (
    <span className="social-icons">
      <ul className="social-list">
        <li className="social-items">
          <a href={PropSocial?.social_links?.ig} target="_blank" rel="noreferrer">
            <AiFillInstagram />
          </a>
        </li>
        <li className="social-items">
          <a href={PropSocial?.social_links?.facebook} target="_blank" rel="noreferrer">
            <BsFacebook />
          </a>
        </li>
        <li className="social-items">
          <a href={PropSocial?.social_links?.github} target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
        </li>
        <li className="social-items">
          <a href={PropSocial?.social_links?.stackoverflow} target="_blank" rel="noreferrer">
            <BsStackOverflow />
          </a>
        </li>
        <li className="social-items">
          <a href={PropSocial?.social_links?.spotify} target="_blank" rel="noreferrer">
            <BsSpotify />
          </a>
        </li>
      </ul>
    </span>
  );
}

export default SocialApp;
