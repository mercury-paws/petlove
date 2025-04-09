import AddPetPage from '../pages/AddPetPage/AddPetPage'
import FindPetPage from '../pages/FindPetPage/FindPetPage'
import FriendsPage from '../pages/FriendsPage/FriendsPage'
import HomePage from '../pages/HomePage/HomePage'
import LogInPage from '../pages/LogInPage/LogInPage'
import NewsPage from '../pages/NewsPage/NewsPage'
import NotFound from '../pages/NotFound/NotFound'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import UserPage from '../pages/UserPage/UserPage'
import Layout from './Layout/Layout'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Layout>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addpet" element={<AddPetPage />} />
        <Route path="/findpet" element={<FindPetPage />} />
        <Route path="/ourfriends" element={<FriendsPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/registration" element={<RegisterPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Layout>
    </>
  )
}

export default App
