# Property Lister #

A simple Angular web app that retrieves a list of properties from the RESTful API backend and displays them. Built with Angular on the frontend and Laravel on the backend. The docs for the backend are written here.

## Low-Level Implementation of Features ##

### Search Functionality ###

Search functionality is achieved with Angular filtering, by calling ```HomeComponent.filterResults()``` on the value of the filter (tagged ```#filter```) when the search button (id ```apply-filter```) is clicked; this updates
```HomeComponent.filteredLocationList``` to only include properties which have an attribute that is a superstring of the searched string. This implementation takes advantage of Angular's template-referencing variables.

## Deployment ##

The app is deployed to Heroku @ https://payquad-applet-88a344739165.herokuapp.com. Two important features were necessary for this deployment:

- The `server.js` script uses ExpressJS to serve the app's static files in a production evironment.

- The  `"heroku-postbuild"` script specified in the `package.json` file is used during deployment on the Heroku platform to build the Angular app. It configures the Angular CLI to create a production-ready bundle with optimizations like minification and Ahead-of-Time (AOT) compilation, ensuring the application is fully optimized for efficient delivery.
  

## Future Enhancments ##

