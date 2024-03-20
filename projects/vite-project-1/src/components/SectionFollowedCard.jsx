import { useState, useEffect } from "react";
import resApiJson from "../helpers/apiResFun";
import FollowebCard from "./FollowedCard";

const URL_USERS_TW = "https://randomuser.me/api/?results=15";

function SectionCardFollowed() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    resApiJson(URL_USERS_TW).then((data) => setDatos(data.results));
  }, []);

  console.log(datos);

  return (
    <section>
      {datos.map((user) => {
        const { name, picture } = user;

        return (
          <FollowebCard
            name={name.first}
            username={name.last}
            photo={picture.thumbnail}
            key={Math.random() * 100}
          />
        );
      })}
    </section>
  );
}

export default SectionCardFollowed;
