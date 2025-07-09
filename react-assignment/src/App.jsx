import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Demo from './components/ans_1/Demo'
import Like from './components/ans_2/Like'
import Email from './components/ans_3/Email'
import Day from './components/ans_4/Day'
import TeamMember from './components/ans_5/TeamMember'
import Item from './components/ans_6/Item'
import StylingWithCSS from './components/ans_7/StylingWithCSS'
import Post from './components/ans_8/Post'
import Home from './components/ans_9/Home';
import About from './components/ans_9/About';
import { useFetch } from './components/ans_10/useFetch';

function App() {

  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <hr />
      <Demo />
      <hr />
      <Like />
      <hr />
      <Email />
      <hr />
      <Day />
      <hr />
      <div>
        <TeamMember name={"Bob"} />
        <TeamMember name={"Xiao yan"} />
        <TeamMember name={"Tommy"} />
      </div>
      <hr />
      <Item />
      <hr />
      <StylingWithCSS />
      <hr />
      <Post />
      <hr />
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <hr />
      <ul>
        {data.map((user) => (<li key={user.id}>{user.name}</li>))}
      </ul>
      <hr />
    </>
  )
}

export default App
