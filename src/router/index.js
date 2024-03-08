import React from 'react'
import { Routes, Route, Navigate} from "react-router-dom";
import { ScrollToTop } from '../components';

// News pages
import NewsList from '../pages/news/NewsList';
import AddNew from '../pages/news/AddNew';

// auths pages

function Router() {
  return (
    <ScrollToTop>
      <Routes>
          <Route path="/" element={<Navigate replace to="/news/list" />} />
          <Route path="/news/list" element={<NewsList />} />
          <Route path="/news/add" element={<AddNew />} />
      </Routes>
    </ScrollToTop>
    
  )
}

export default Router;
