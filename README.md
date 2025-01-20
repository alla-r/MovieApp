# MovieApp - Initial release
Movie app based on TMDb API

## Table of contents

- [Overview](#overview)
- [Installation](#installation)
- [Technologies](#Technologies)

## Overview

Movie app based on the TMDb API. 
The app provides a UI interface for listing data from the TMDb API. It also has a server-side feature that allows users to authorize and save media items to lists (Favorites, Watchlist) or rate the media (Rating list).
The app provides internalization logic. So far it supports 2 languages: English (by default) and Ukrainian

The app has the following pages:
- Home page with trending media.
- Media page with the possibility to filter by media type (movie, tv show). Each media type allows users to filter by genre and load more with the pagination button.
- Details page with additional information about a selected media item.
- Person page with additional information about a selected person.
- Search page with a list of results based on the search query divided by media type (movie, tv show, person).
- List page with a list of saved media
- Login/Register page to authorize

## Installation

To run client-side:
```bash
cd frontend
npm install
npm run dev
```

To run server-side:
```bash
cd backend
npm install
npm start
```

### Technologies
Client-side
- [React](https://reactjs.org/) - JS library
- [Redux](https://redux.js.org/) - global state management
- [Redux-thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for Redux.
- [Formik](https://formik.org/) - Form library for React and React Native
- [Yup](https://www.npmjs.com/package/yup) - JS schema builder
- [react-i18next](https://react.i18next.com/) - internalization
- [axios](https://axios-http.com/) - Promise-based HTTP client
- [Vite](https://vitejs.dev/) - FE build tool
- [Vitest](https://vitest.dev/) - testing framework
- [React Testing Library](https://testing-library.com/) - testing library
- [ESlint](https://eslint.org/) - static code analysis tool for identifying problematic patterns found in JS code
- [Prettier](https://prettier.io/) - code formatter
UI libraries:
- [react-toastify](https://www.npmjs.com/package/react-toastify)
- [Material UI](https://mui.com/)
- [styled-components](https://styled-components.com/)
- [react-circular-progressbar](https://www.npmjs.com/package/react-circular-progressbar)
- [react-burger-menu](https://www.npmjs.com/package/react-burger-menu)

Server-side
- [express](https://expressjs.com/) - web framework for [Node.js](https://nodejs.org/en/)
- [mongoose](https://mongoosejs.com/) - a MongoDB object modeling tool
- [bcrypt](https://www.npmjs.com/package/bcrypt) - a library for hashing passwords
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
