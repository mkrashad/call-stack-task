# Callstack's recruitment app

## Getting started

### Install npm dependencies

```bash
yarn/npm install
```

### Run the app

```bash
yarn start/npm start
```

### Test the app

```bash
yarn test/npm run test
```

### Test lint

```bash
yarn lint/npm run lint
```

## Implementation

1. [x] Add pagination to the existing list
   - First, I have defined a state and named it `repoPerPage`, and initialize it with a value of 20 after I created a pagination component. Inside this component, I used the for loop, which divides total repositories by `repoPerPage` state and pushes the index to `pageNumbers` array.
     In the end, I'm mapping the list and calling the paginate function, which sets the number variable as a current variable by page.
   - For styling, I used bootstrap pagination styles.
1. [x] Remove "Search" button and implement a mechanism to fetch data when user finishes typing.

   - In this task, I have removed the search button and replaced it with the `handleKeyPress` function, which fires when the user fills in the input form and press `Enter` button.
     > **Note**
     > I have used the ''on keypress'' event that checks whether the `Enter` key is press to trigger API fetch. I came up with this decision because I think this is common user behavior. However, there is another way to do that which does not involve the user to press `Enter` with wrapping the API fetch function out with a debouncer to limit request rate.

1. [x] Store the results of every search (or have a limit) - do not make an API request with the same keywords, use data you've previously fetched.

   - In the search component, I defined an empty object with a `cache` name. I wrote a statement that checks if the repository is not in the `cache` object. If text is not in the `cache`, it simply stores a repository with the same text in the `cache` object.
     If the text in `cache` it doesn't make an API request and takes, repositories from the object.

1. [x] Some main features of the app are not implemented in idiomatic React/JS way.

   - My suggestion for improving this project is to add some state management such as (Context API or Redux) also, I want to mention that we can use ES6 syntax more, for example, changing function to arrow functions. I noticed that the component with repositories doesn't have a unique id which, is very important for every react project, for that reason, I used the UUID library to make every repository component with a unique id.

1. [x] Make the app responsive.

   - To make the app responsive, I could use the media query instead, but since the task was more about react, I choose to make it in the react way.
     In the `App.js` file, I have defined `orientations` and `modes` objects
     which has keys and values 0 and 1.
     I created the `detect orientation` function, which detects the width of the device, whether the device in portrait or landscape mode.

     ```javascript
     function detectOrientation() {
       return window.innerWidth > window.innerHeight
         ? orientations.landscape
         : orientations.portrait;
     }
     ```

     After I created two new states `orientation` with the initial value of the return value of the function `detectOrientation` and `mode` with the initial value of `mode.list`.
     It detects the width of the device simply but conditions and sets the mode to list view or detail view.

1) [x] Make all tests "green".

   - First test involkes `App.test.js` file which passes, when regular expression finds "learn react" text in `App.js` file.
     In order to pass this test I have included a hyperlink to react documentation website with the text "learn react".

   - The second test `Sort.test.js` file was more about sorting the repositories and stars by ascending and descending order.
     In the first version of the project repositories and stars could not sort from descending to ascending order.
     I have included a condition where it checks if the key is `currentKey` and in the body, I just change order and `currentOrder` when the user toggles the button.
     ```javascript
     if (key === currentKey) {
       order = currentOrder === 1 ? -1 : 1;
     }
     ```

1) [x] Make all lint checks "green"

   - In this task I simply used the prettier extension, it helped me to format all files.
