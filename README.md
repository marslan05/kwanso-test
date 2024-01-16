### Kwanso Test Project

A brief description of what this project does and who it's for.

### Installation

Clone the repo

```After clonning
   - cd project-folder
   - npm install
   - npm start
   - visit http://localhost:3000
```

### npm test

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### npm run build

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Project Explination

```Home Page
    Home Page Includes
     - Header Component
     - Hero Section
     - Blog Grid Showing Verticall Cards
     - Blog Grid Showing Horizontal Cards
     - Desination Slider
```

```Listing Page
    Listing Page Includes
      - Header
      - Table Component showing results fetched from [https://randomuser.me/api]
      - Table includes features like:
        - Search
        - Gender Filter
        - Pagination showing 10 records on each page
        - onClick function to go into public Profile Page
```

```Profile Page
    Profile Page Includes
      - Header
      - Profile Card showing all information regarding current user.
```

### Project Structure

```Foldrs
    The project includes these folders
      - Components Folder (including all components being used in project)
      - Page Folder (including routing components)
      - Json Folder (including json files for destinations and blog posts)
      - Types Folder (including user type for data being returned through the api)
      - Utils Folder (including functions for fetching information from the api)
```

### Home Page

    Home page is a static ui from the Tailwind css components, only thing dynamic is the blog post and destination Cards.

### Listing Page

    Listing page consits of tailwind css table component, a search bar and pagination. The page fetches information from the api (10 records at first). It has a filter on Gender column, on clicking it first filters out for `male` and then filters out for `female`. Once you are done checking results, we have a button to reset the filters. Search bar searches the data from all columns. Pagination fetches 10 records and shows them in page.

### Profile Page

    Profile page uses useLocation from react router dom and fetches the state and shows the information into a tailwind css component.
