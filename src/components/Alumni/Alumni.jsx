import styles from "./Team.module.scss";
import Heading from "../shared/Heading/Heading";
import SectionTeam from "./Team-comp/Info-section/Section";
import data from "../../db/team";
// import focus from "../../db/team-focus";
import Alum24 from "../../db/Alumni24.json"
import Alumpre from "../../db/Aumni-team";
import TeamCard from "./Team-comp/Card/TeamCard";
import Header from "../shared/Title-page/Header";

const Team = () => {
  return (
    <div className={styles.Team}>
      <Header
        title="ALUMNI"
        backgroundImage={
          "https://res.cloudinary.com/sahincloudinary/image/upload/f_auto,q_auto/v1/nss_events/team/iqydnjgf00cynldupcic"
        }
      />
  
      <Heading title="BATCH 2024" />
      <div className="AlumniPresident">
      {Alumpre.map((item) => {
        return (
          <SectionTeam
            key={item.id}
            designation={item.designation}
            name={item.name}
            imageUrl={item.imageUrl}
            facebook={item.facebook}
            instagram={item.instagram}
            linkedin={item.linkedin}
           
          />
        );
      })}
      </div>
      <div className={styles.CardContainer}>
        {Alum24.map((item) => {
          return (
            <TeamCard
              key={item.id}
              designation={item.designation}
              name={item.name}
              imageUrl={item.image}
              facebook={item.facebook_profile_link}
              instagram={item.instagram_profile_link}
              linkedin={item.linkedIn_profile_link}
            />
          );
        })}
      </div>
     
    </div>
  );
};
export default Team;
