import Inferno from 'inferno';
import Component from 'inferno-component';

export default function({index, item}) {
  if (!item) return null;

  const {url, title, time_ago} = item;
  return (
    <article>
      <div>
        <h2><a href={url}>{title}</a></h2>
        <p>
            {time_ago}
        </p>
      </div>
    </article>
  );
}
