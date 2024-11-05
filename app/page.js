// Main page

import LikeButton from './LikeButton';
import Head from './Head'

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
          <Head title='Develop. Preview. Ship.'/>
          <ul>
              {names.map((name) => (
                  <li key={name}>{name}</li>
              ))}
          </ul>
          <LikeButton />
        </div>
    );
}
