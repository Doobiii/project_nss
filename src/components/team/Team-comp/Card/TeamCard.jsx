import { Icon } from "@iconify/react";
import styles from "./TeamCard.module.scss";

const TeamCard = (props) => {
  return (
    <div className={styles.Card}>
      <div className={styles.image}>
        <img
          src={
            props.imageUrl
              ? props.imageUrl
              : "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=1024x1024&w=is&k=20&c=er-yFBCv5wYO_curZ-MILgW0ECSjt0DDg5OlwpsAgZM="
          }
          alt="team-profile"
        />
      </div>
      <h3> {props.designation} </h3>
      <div className={styles.info}>
        <div>{props.name}</div>
        <div className={styles.socials}>
          <a target="blank" href={props.facebook}>
            <Icon icon="logos:facebook" />
          </a>
          <a target="blank" href={props.instagram}>
            <Icon icon="skill-icons:instagram" />
          </a>
          <a target="blank" href={props.linkedin}>
            <Icon icon="skill-icons:linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
