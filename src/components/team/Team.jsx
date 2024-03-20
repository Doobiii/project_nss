import styles from "./Team.module.scss";
import Heading from "../shared/Heading/Heading";
import SectionTeam from "./Team-comp/Info-section/Section";
import data from "../../db/team";
import focus from "../../db/team-focus";
import TeamCard from "./Team-comp/Card/TeamCard";
import Header from "../shared/Title-page/Header";

const Team = () => {
  return (
    <div className={styles.Team}>
      <Header title="Team" />
      <Heading title="Meet Our Team" />
      {focus.map((item) => {
        return (
          <SectionTeam
            key={item.id}
            designation={item.designation}
            name={item.name}
            imageUrl={item.image}
            facebook={item.facebook}
            instagram={item.instagram}
            linkedin={item.linkedin}
            info={item.info}
          />
        );
      })}

      <Heading title="Joint Secretaries" />
      <div className={styles.CardContainer}>
        {data.map((item) => {
          return (
            <TeamCard
              key={item.id}
              designation={item.designation}
              name={item.name}
              imageUrl={item.image}
              facebook={item.facebook}
              instagram={item.instagram}
              linkedin={item.linkedin}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Team;
