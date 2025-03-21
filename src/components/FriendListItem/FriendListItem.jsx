import clsx from 'clsx';
import s from './FriendListItem.module.css';

const FriendListItem = ({ friend }) => {
  return (
    <div className={s.card}>
      <img src={friend.avatar} alt='Avatar' width='48' />
      <p className={s.text}>{friend.name}</p>
      <p className={clsx(friend.isOnline ? s.green : s.red)}>{friend.isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;
