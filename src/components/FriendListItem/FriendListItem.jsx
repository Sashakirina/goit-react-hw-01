import style from './FriendListItem.module.css';

function FriendListItem({avatar, userName, isOnline}) {
  return (
    <li className={style.card}>
  <img className={style.petImage} src={avatar} alt={userName} width="48" />
<p className={style.petName}>{userName}</p>
  {isOnline ? <p className={style.online}>isOnline</p> : <p className={style.offline}>isOffline</p>}
  </li>

  )
}

export default FriendListItem