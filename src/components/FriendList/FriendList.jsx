import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(friend => {
        return (
          <li className={s.value} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
