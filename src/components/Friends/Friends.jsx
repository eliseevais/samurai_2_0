import { NavLink } from "react-router-dom";
import styles from "./Friends.module.css";

const FriendsItem = (props) => {

  let path="#";

  return (
    <div className={styles.friendsItem}>
      <NavLink to={path}>{props.name} {props.surname}</NavLink>
    </div>
  )
}

const Friends = (props) => {

  let friendsListNew = props.friendsList.map(friend => <FriendsItem name={friend.name}
    surname={friend.surname} key={friend.id} />)

  return (
    <div className={styles.friendsListWrapper}>
      <div>
        {friendsListNew}
      </div>
    </div>
  )
}

export default Friends;