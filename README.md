#DEV NOTES
  - This is the consumer side application

  - Page routes are declared in Layout.js

  - Auth (registration/sign-in modal) shows conditionally through Layout.js if user is not logged in

  - Each page is wrapped in a higher order component, requireAuth, that makes the page
    available on user sign in.

  - Files in the pages folder are functional components.  Declare class components under the
    containers folder and export them to the page.

  - UI folder contains a Modal component that accepts a child.
    Default backdrop color for the Modal is light blue.
    For a transparent backdrop: ```<Modal transparent=true/>```

  - Styles are in Sass because it's easy to read and uses variables.
    how2car colors and some mixins are in style-guide.sass
    All styles are globally available - take advantage of Sass nesting!
    Make sure to add new Sass files to app.sass

  - Flexbox classes are in flex.sass with instructions

#IMPORTANT THINGS TO REMEMBER

  - Decouple functionality! The presentation layer will change, the underlying functionality will be more       stable.

  - Keep things simple and straightforward . Don’t try to pack in too much at a time. Make code movable.         Make code deletable. Keep parts separate. It will be much easier to edit later on.

  - Your code will need to be reviewed in order to merge with master. Only an admin will be able to do this.




To run the build:

1. git clone https://github.com/how2car/app-redesign.git

2. npm install

3. npm start
