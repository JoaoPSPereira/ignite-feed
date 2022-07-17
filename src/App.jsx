import { Header } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'

import './global.css'

function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
          <Post
            author="João Pedro"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quaerat fuga nostrum quas adipisci explicabo, voluptas pariatur non sequi consequatur tempora consequuntur cum aut dolorem obcaecati voluptates illo facere in!"
          />

          <Post
            author="Carlos Eduardo"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quaerat fuga nostrum quas adipisci explicabo, voluptas pariatur non sequi consequatur tempora consequuntur cum aut dolorem obcaecati voluptates illo facere in!"
          />
        </main>
      </div>
    </>
  )
}

export default App

