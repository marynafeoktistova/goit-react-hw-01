import s from './Profile.module.css';
const Profile = props => {
  console.log(props);
  return (
    <div className={s.card}>
      <div>
        <img className={s.image} src={props.image} alt='User avatar' width='200' />
        <p className={s.name}>{props.name}</p>
        <p className={s.tag}>@{props.tag}</p> <p className={s.location}>{props.location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.span}>Followers</span> <span className={s.value}>{props.stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.span}>Views</span> <span className={s.value}>{props.stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.span}>Likes</span> <span className={s.value}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
