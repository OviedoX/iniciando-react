import { useState, useEffect } from "react";
import resApiJson from "../helpers/apiResFun";
import FollowebCard from "./FollowedCard";
// import randomFollow from "../helpers/cryptoHasingFun";

const URL_USERS_TW = "https://randomuser.me/api/?results=15";

function SectionCardFollowed() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    resApiJson(URL_USERS_TW).then((data) => setDatos(data.results));
  }, []);

  console.log(datos)

  return (
    <section className="tw-section">
      {datos.map((user) => {
        const { login, name, picture, location } = user;

        return (
          <FollowebCard
            name={`${name.first} ${name.last}`}
            username={login.username}
            photo={picture.thumbnail}
            key={login.uuid}
            initIsFollowing={location.street.number < 4000}
          />
        );
      })}
    </section>
  );
}

export default SectionCardFollowed;
