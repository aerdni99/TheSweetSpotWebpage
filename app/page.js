// Main page

import LikeButton from './like-button';
import Header from './header'

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
      <div>
        <Header title='Develop. Preview. Ship.'/>
        <ul>
            {names.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
        <LikeButton />
        <LikeButton />
        <LikeButton />
        <LikeButton />
        <LikeButton />
      </div>
    );
}
