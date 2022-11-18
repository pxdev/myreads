# MyReads Project

This Project is built from scratch for Udacity's React Fundamentals course, 

## Installation

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Project Structure

```bash
── Assets
── Scss
── Components
    ├── Ui # for general layout component.
       ├── Page Header.js # Part of layout structire contain the main navigation links.
       ├── Loading.js # loading when neded.
       ├── NoData.js # The default state if no data.

    ├── App.js # parent component for the project.
    ├── BooksComponent.js # Will show each books in the categories.
    ├── CategoriesComponent.js # Will show each Category.
    ├── Search.js # Will show the search results.

```


## Backend Server

the back end server Built by Udacity for this project 

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Credits

Javascript framework
[React.JS](https://reactjs.org/)

Icons Library
[Remixicon](https://remixicon.com/)