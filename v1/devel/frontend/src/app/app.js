import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Layout } from './layout'
import * as Page from './pages'

const App = () => {

    return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Page.Home />} />
            <Route path="presentations" element={<Page.Presentations/>} />
            <Route path="contacts" element={<Page.Contacts/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
    )
}

export { App } 
