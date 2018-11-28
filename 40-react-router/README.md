## [React Router Docs](https://reacttraining.com/react-router/web/guides/quick-start)

### Goal:
/ will be the about page
/paintings will be an index page
/paintings/59bd5a519c18db5297a32479 will be a show page
Add navigation links so that our user won't have to manually edit the URL

### Set Up
- `npm install --save react-router-dom`

### BrowserRouter
- Will use 1 place in our application (and one place only) at the very top level
- Sometimes aliased

### Route
- Conditionally render a certain component based on if the path of the url matches the path prop
- What if we leave out the path prop?

### Nested Routes `/:id`

### Link
- Changes the url we see in the browser without a reload, must have a 'to' prop
- Shows components based on new url

### Switch
- Pick one of the following routes (the first that matches) and load that component
- Don't look at the others (like an if/ else if/ else if)
- Takes in no props
