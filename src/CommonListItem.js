import Inferno from 'inferno';
import Component from 'inferno-component';
import { Link } from 'inferno-router';
import styles from './CommonListItem.css'

export default function({index, item}) {
  if (!item) return null;

  const {url, title, points, user, time_ago, id, comments_count} = item;
  return (
    <div className={styles.item}>
        <div className={styles.title}>
            <span className={styles.index}>{index}.</span>
            <Link className={styles.link} to={url}>{title}</Link>
        </div>
        <div className={styles.subtext}>
            {points} points
            by <Link to={`/user/${user}`}>{user}</Link>
            {' '}{time_ago}
            | <Link to={`/item/?id=${id}`}>{comments_count > 0 ? (comments_count + ' comments') : 'discuss'}</Link>
        </div>
    </div>
  );
}
