# Hop Centricity

Hop Centricity is a quirky beer reviewing web app dedicated to the complex world of IPA beers. Users may search for any beer in existence, but may review only IPA's. 
  
## Motivation
  
There are great beer rating apps out there already, however none of them are dedicated to IPA's. In addition, Hop Centricity was created with the idea that web apps should have a simple and orginized layout, without too much clutter. 

# ![ScreenShot](/src/Pictures/ScreenShot.png)

## Tech Used

### Built With

- React.js
- React Router
- Semantic UI
- React-Pose
- React CSS Transition Group
- Google OAuth
- react-h5-audio-player

## Features

Hop Centricity is focused on the user experience. Once the user authenticates with Google, the site is entered by dragging a hop into a beer glass, where it belongs. During a beer search, if a beer has already been reviewed by the user, the search card renders a small pop-up indicating the user has already reviewed that beer. 

On the profile page, a Hop-o-meter displays the difference between average global beer rating and average user rating for the beers he or she has reviewed already. The rating is also dependent on whether the user has reviewed 50 beers. The rating is fractionally related to 50 beers until the user hits 50 reviews. After 50 beers, the rating will only be dependent on the difference in average ratings, with a 50% rating representing that the user has rated all beers virtually the same as the global average. 

As a quirky dedication to the movie Grandma's Boy, there is an audio feature which may be enabled that plays audio from the character JP. Navigation links play a robotic sound of him making a robotic movement and logging out plays a sample of his signature phrase "Adios Turd Nuggets". 

## Usage

Hop Centricity is deployed on Heroku and may be accessed at: https://mysterious-reaches-84669.herokuapp.com/login

- Login is with Google. Please allow for a few moments during login as the server comes out of idle. 
- Once logged in, users may enter the site via the 'easy route' by clicking "mobile login" or the fun way by dragging the hop into the beer glass on the right side of the page. 
- The user is directed to the menu, where he or she may click links to search for beers or view his or her profile. 
- Users may search by beer name, IPA type or brewery. If the user finds a beer he or she would like to review, the user can click the beer card and submit. On successful submission, the review will appear on the profile page and the Hop-O-Meter will be on its way up. 
- Reviews can be edited or deleted once they have been made.  

## Installation

If you would like to play with the code yourself follow these steps:
- Fork and clone the repo onto your local machine
- run 'npm install' in your terminal to install dependencies
- run 'npm start' in your terminal to run the front end on local host

Please note that any reviews that are submitted in this way will be persisted to the Heroku backend. Thus, if you plan on persisting lots of information, it would be preferred that you fork and clone the backend yourself and change the fetch URLs to local host. 

## API Reference

Hop Centricity utilizes a rails backend serving as an API. This can be found at: https://github.com/ConditionalStatementLifestyle/HopCentricity-Rails

Please reference the repo for more information on how the backend is pulling beer data.

## Credits

This App was inspired by the wonderful work that Untappd has done with their beer app. All of the beers in the database originated from them. 

The Navbar was inspired by this post: https://itnext.io/how-to-build-a-responsive-navbar-using-flexbox-and-javascript-eb0af24f19bf

Hop Icon In Nav Bar: <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

Hop Icon In Menu: <div>Icons made by <a href="https://www.freepik.com/?__hstc=57440181.b7dd6c098b16a0f1b6aa07dbb03e7523.1560196277027.1560198610411.1560202625999.3&__hssc=57440181.4.1560202625999&__hsfp=2153447817" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

Pineapple Icon (used for beer that have no image): <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

## License

This application was built simply as a proof of concept and in it's current form is not meant handle large amounts of web traffic, primarily due to the fact that on occassion data comes from Untappd servers.  
