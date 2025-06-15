// import { Icon } from "@iconify/react";
// import styles from "./TeamCard.module.scss";

// const TeamCard = (props) => {
//   return (
//     <div className={styles.Card}>
//       <div className={styles.image}>
//         <img
//           src={
//             props.imageUrl
//               ? props.imageUrl
//               : "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=1024x1024&w=is&k=20&c=er-yFBCv5wYO_curZ-MILgW0ECSjt0DDg5OlwpsAgZM="
//           }
//           alt="team-profile"
//         />
//       </div>
//       <h3> {props.designation} </h3>
//       <div className={styles.info}>
//         <div>{props.name}</div>
//         <div className={styles.socials}>
//           {props.facebook && (
//             <a target="blank" href={props.facebook}>
//               <Icon icon="logos:facebook" />
//             </a>
//           )}
//           {props.instagram && (
//             <a target="blank" href={props.instagram}>
//               <Icon icon="skill-icons:instagram" />
//             </a>
//           )}
//           {props.linkedin && (
//             <a target="blank" href={props.linkedin}>
//               <Icon icon="skill-icons:linkedin" />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamCard;
   



import { Icon } from "@iconify/react";
import styles from "./TeamCard.module.scss";

const TeamCard = (props) => {
  // ✅ Transform Cloudinary image URL to auto-crop around the face
  const transformCloudinaryUrl = (url) => {
  if (!url.includes("cloudinary.com")) return url;
  return url.replace(
    "/upload/",
    "/upload/c_fill,g_face,f_auto,q_auto,w_500,h_500/"
  );
};


  return (
    <div className={styles.Card}>
      <div className={styles.image}>
        <img
          src={
            props.imageUrl
              ? transformCloudinaryUrl(props.imageUrl)
              : "https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg"
          }
          alt="team-profile"
        />
      </div>
      <h3>{props.designation}</h3>
      <div className={styles.info}>
        <div>{props.name}</div>
        <div className={styles.socials}>
          {props.facebook && (
            <a target="_blank" href={props.facebook} rel="noopener noreferrer">
              <Icon icon="logos:facebook" />
            </a>
          )}
          {props.instagram && (
            <a target="_blank" href={props.instagram} rel="noopener noreferrer">
              <Icon icon="skill-icons:instagram" />
            </a>
          )}
          {props.linkedin && (
            <a target="_blank" href={props.linkedin} rel="noopener noreferrer">
              <Icon icon="skill-icons:linkedin" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
