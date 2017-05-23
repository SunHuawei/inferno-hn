import Inferno from 'inferno';
import Component from 'inferno-component';

export default function({index, item}) {
  if (!item) return null;

  const {url, title, time_ago} = item;
  return (
    <article>
      <div>
        <a href={url}>{title}</a>
        <p>
            {time_ago}
        </p>
      </div>
    </article>
  );
}
