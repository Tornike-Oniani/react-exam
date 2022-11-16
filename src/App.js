import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Sidebar from './components/sidebar/sidebar.component';
import FullUser from './components/full-user/full-user.component';
import HomePage from './pages/homepage/homepage.component';
import UsersPage from './pages/userspage/userspage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';

import './App.scss';

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
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
