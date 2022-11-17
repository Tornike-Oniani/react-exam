import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';
import FullUser from './components/full-user/full-user.component';
import FullPost from './components/full-post/full-post.component';
import HomePage from './pages/homepage/homepage.component';
import UsersPage from './pages/userspage/userspage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import Footer from './components/footer/footer.component';

import './App.scss';
import './styles/_typography.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/users" element={<UsersPage />} />
          <Route exact path="/users/:id" element={<FullUser />} />
          <Route exact path="/posts/:id" element={<FullPost />} />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
