import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./News.module.css";

const NewsItem = (props) => {
  let path = "#";
  return (
    <div className={styles.newsItem}>
      <NavLink to={path}>{props.data} || {props.newsText}</NavLink>
    </div>
  )
};

const News = (props) => {

  let newNewsElement = React.createRef();

  let newsToWall = props.newsFromApp.map(newsItem => <NewsItem
    data={newsItem.data} newsText={newsItem.newsText} key={newsItem.id} />);

  let addNews = () => {
    let action = {type: 'ADD-NEWS'};
    props.dispatch(action);
  };

  let onNewsChange = () => {
    let news = newNewsElement.current.value;
    let action = {type: 'UPDATE-NEW-NEWS-TEXT', newNewsTextProps: news};
    props.dispatch(action);
    console.log(news, 'news')
  };

  return (
    <div className={styles.newsWrapper}>
      {newsToWall}
      <div className={styles.addNewsWrapper}>
        <textarea ref={newNewsElement}
          onChange={onNewsChange}
          value={props.newNewsDataElement} />
        <button onClick={addNews}>Add news</button>
      </div>
    </div>
  )
}

export default News;