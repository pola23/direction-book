// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import NavLayout from './layouts/NavLayout/NavLayout'
const Routes = () => {
  return (
    <Router>
      <Set wrap={NavLayout}>
        <Private unauthenticated="home">
          <Route path="/add-direction" page={AddDirectionPage} name="addDirection" />
          <Route path="/" page={HomePage} name="home" />
        </Private>
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
