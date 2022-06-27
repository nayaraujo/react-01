import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Nayara Araujo"
            content="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellat iste at ipsum perferendis facere blanditiis aut optio, eveniet cupiditate perspiciatis similique, fugit totam corrupti earum recusandae, tempore numquam fuga."
          />
          <Post
            author="Nayara Gomes"
            content="UAU."
          />
        </main>

      </div>

    </div>
  )
}