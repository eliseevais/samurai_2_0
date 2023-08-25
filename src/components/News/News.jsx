import { NavLink } from "react-router-dom";
import styles from "./News.module.css";

const NewsItem = (props) => {
  let path="#";
  return (
    <div className={styles.newsItem}>
      <NavLink to={path}>{props.data} || {props.newsText}</NavLink>
    </div>
  )
}

const News = (props) => {

  let newsToWall = props.newsFromApp.map(newsItem => <NewsItem 
    data={newsItem.data} newsText={newsItem.newsText}  key={newsItem.id} />)

  console.log(newsToWall, "news")

  return (
    <div className={styles.newsWrapper}>
      {newsToWall}
    </div>
  )
}

export default News;