# Assignment - Transfer money, transaction history demo for Backbase
### About
I choose React framework to build this single page application, because it is well known UI library that is simple enough and well documentated and I've been currently working with it last 3 years.
Its simple and gives you the flexibility to choose the way you structure your app.
I choose to create the `Redux` store with the helping npm package `redux-toolkit`. That gives you the data layer so you can control all the business logic inside the layer and dont bring that logic into UI components.
`Toolkit` helps you to manage different parts of data layer in more elegant way.

I wrote everything in `Typescript`, you should always consider that in a big applications. You can easily find some problems in future when Backend models change also it helps to maintain the Application, working within the team.
The App has Error Boundaries.

### Styling
There are different ways to style your components, i choose to create my own grid through `SCSS` just to show my skill.
This is not the best way to style shared components in a big modern apps, in that case i would prefer `Styled Components` or CSSinJS or CSS modules to incapsulate styles.
  
### Internalization
I choose 2 languages to choose from, En and Ru, and created the switch lang buttons into the header
for that single page application i choose to keep translations in file `i18n.js`

### Accessibility
I spend some time to work in the way of accessibility, i think there is still way to improve it, just needed more time...

### Structure
- `public` - you can find manifest, logom favicon and basic html template there
inside src folder you can find: 
- `assets` - Custom font, icons and basic styles such as mixins variables and global styling
- `components` - Here i store all the components, i chose not to divide them on shared/controlled/container types due to the SPA. Each of the component has its own folder with `tsx` files and styling
- `mock` - fake data of transactions provided
- `slices` - consists of the Data Layers - different parts of the global store
- `utils` - folder that has some helpful functions that can be shared throughout project, its shouldn't be components itself. 

### Testing
Unfortunately i didn't manage to create tests, need more time for that. I tries to focus on the more priority goals.

### Issues
- I should choose the account "To" from some list, that i didnt have
- How to get the Category color of transaction?
- The icons provided was not in the .png format with transparent bg 

### To do
Some things i didnt have time to do: 
- should sync data(like transactions) with localstorage
- store language in cookies
- if thinking about accessibility, I would consider making text more readable, increase the font size and respect the contrast
- consider moving some data like Account name and Money to the separate file, anyway that data will be provided from the Backend
- provide `index.ts` files, rearrange the typings
- Testing


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
