import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

function App() {

  return (
    <>
      <Header/>

      <Post
        author="João Pedro"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quaerat fuga nostrum quas adipisci explicabo, voluptas pariatur non sequi consequatur tempora consequuntur cum aut dolorem obcaecati voluptates illo facere in!"
      />

      <Post
        author="Carlos Eduardo"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quaerat fuga nostrum quas adipisci explicabo, voluptas pariatur non sequi consequatur tempora consequuntur cum aut dolorem obcaecati voluptates illo facere in!"
      />
    </>
  )
}

export default App

