import React from 'react'
import Layout from './layout/Layout'
import { Route, Router, Routes } from 'react-router-dom'
import {routes} from './routes/router'
const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          {
            routes.map((route,index) => (
              <Route path={route.path} key={index} index={route.extract} element={route.element}/>
            ))
          }
        </Routes>
      </Layout>
    </>
  )
}

export default App