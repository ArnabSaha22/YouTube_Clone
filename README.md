----- YouTube Clone project -----
Live link - https://you-tube-clone-iota-two.vercel.app/

1. The project is build on ReactJs with Webpack bundler and below are the other frameworks/libraries used.
    a) State Management libraries used - Context and Redux.
    b) Routing done via React-Router-Dom.
    c) CSS Library used - Tailwind CSS

2. The videos shown on the main page are accessed from dummy apis provided by Google along with google api authentication keys.

3. The search bar api details are also accessed from Google search API which has CORS policy enabled so please enable "Allow CORS" extension on chrome browser to experience that.

4. The options on the side bar of the main page can be toggled on clicking on the hamburger icon on the top.

5. The live chat messages are just dummy names and messages extracted from functions, messages can be typed manually on the input box which gets added on the live chat queue. It is done via API polling which shows messages after 3 sec interval.

6. Hosting is done on vercel.

----Upcoming Features ----

1. The watch page will have the like button with real time video like count updates, video description, channel details below the video title.