import Inferno from 'inferno';
import Component from 'inferno-component';

export default function({index, item}) {
  if (!item) return null;

  const {url, title, points, user, time_ago, id, comments_count} = item;
  return (
    <article>
      <span>{index}</span>
      <div>
        <h2><a href={url}>{title}</a></h2>
        <p>
            {points} points
            by <a href={`/user/${user}`}>{user}</a>
            {time_ago}
            | <a href={`/item/?id=${id}`}>{comments_count > 0 ? (comments_count + ' comments') : 'discuss'}</a>
        </p>
      </div>
    </article>
  );
}
