# Property Lister #

A simple Angular web app that retrieves a list of properties from the RESTful API backend and displays them. Built with Angular on the frontend and Laravel on the backend. The docs for the backend are in the repo hosting the backend, titled "PayQuad-Applet-Backend".

## Implementation of Frontend Features ##

### Search Functionality ###

Search functionality is achieved with Angular filtering, by calling ```HomeComponent.filterResults()``` on the value of the filter (tagged ```#filter```) when the search button (id ```apply-filter```) is clicked; this updates
```HomeComponent.filteredLocationList``` to only include properties which have an attribute that is a superstring of the searched string. This implementation takes advantage of Angular's template-referencing variables.

### Page Navigation ###

Page navigation is achieved using Angular's router service. 

### Dynamic Data Repitition ###

### Form Submission ###

The form in the property details pages makes use of Angular's `FormGroup` and `FormControl` to handle input validation and management, with the `submitApplication()` function handling submission logic (in this small app, we simply log the input to the console - see *Future Enhancments*).

### Backend Communication ###

## Deployment ##

The app is deployed to Heroku @ https://payquad-applet-88a344739165.herokuapp.com. Two important features were necessary for this deployment:

- The `server.js` script uses ExpressJS to serve the app's static files in a production evironment.

- The  `"heroku-postbuild"` script specified in the `package.json` file is used during deployment on the Heroku platform to build the Angular app. It configures the Angular CLI to create a production-ready bundle with optimizations like minification and Ahead-of-Time (AOT) compilation, ensuring the application is fully optimized for efficient delivery.
  

## Future Enhancments ##

