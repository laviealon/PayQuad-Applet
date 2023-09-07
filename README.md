# Property Lister #

A simple Angular web app that retrieves a list of properties from the RESTful API backend and displays them. Built with Angular on the frontend and Laravel on the backend. The docs for the backend are written here.

## Low-Level Implementation of Features ##

### Search Functionality ###

Search functionality is achieved with Angular filtering, by calling ```HomeComponent.filterResults()``` on the value of the filter (tagged ```#filter```) when the search button (id ```apply-filter```) is clicked; this updates
```HomeComponent.filteredLocationList``` to only include properties which have an attribute that is a superstring of the searched string. This implementation takes advantage of Angular's template-referencing variables.

