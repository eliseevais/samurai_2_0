import { NavLink } from "react-router-dom";
import styles from "./Music.module.css";

const MusicItem = (props) => {
  let path = "#";

  return (
    <div>
      <NavLink to={path}>{props.athor} {props.songName}</NavLink>
    </div>
  )
}

const Music = (props) => {
  let musicListNew = props.musicFromApp.map(song => <MusicItem
    athor={song.athor} songName={song.songName} key={song.id} />);

  return (
    <div className={styles.musicItem}>
      {musicListNew}
    </div>
  )
}

export default Music;