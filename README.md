# Property Lister #

A simple web app that lists properties with search functionality. Built with AngularJS on the frontend and the Laravel framework on the backend ([see the backend repository](https://github.com/laviealon/PayQuad-Applet-Backend)).

## Low-Level Implementation of Features ##

### Filter Functionality ###

Filter functionality is implemented by calling ```HomeComponent.filterResults()``` on the value of the filter (tagged ```#filter```) when the search button (id ```apply-filter```) is clicked; this updates
```HomeComponent.filteredLocationList``` to only include properties matching the filter values. This implementation takes advantage of template-referencing variables.

