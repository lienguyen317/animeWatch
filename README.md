# Capstone project: AnimeWatch
___

AnimeWatch is an animes review app that users can leave their reviews and ratings for a specific anime. This app will help other users see the rating of the anime and read other users' reviews to help deciding on what anime to add to their future watch list.

## Motivation 
___

As a anime fan, I often feel overwhelmed with the amount of animes out there. I wanted to create this app so that anime fans can narrow down some good anime to commit their time to. 

## Tech & FrameWork 
___

+ Ruby on rails with react webpacker
+ React styled-component
+ Font Awesome
+ Google font



### Back-end

Using Ruby on rails. With 2 models: anime and review. Set up relationhip for the 2 models where Anime has many reviews and each review belongs to a specific anime.

### Front-end 

Using Webpacker-React to build out front-end components of the app. Setup front-end at the sametime as ruby on rails. 

[Front-end React components](https://docs.google.com/drawings/d/1g5MycW-da1UwAeZUuobdrVT635bCnSMDW3jJOT8H5ZY/edit?usp=sharing)

[Desktop Wireframe](https://docs.google.com/drawings/d/1zBWD3091EiPeuK1xYwIuiDv6vXzZxcJsXZ04RFSro7I/edit?usp=sharing)

[Mobile wireframe](https://docs.google.com/drawings/d/1sCUhKsTYtLXRfCV0GP1JAngvN7epWOepfY6i4qmRmhA/edit?usp=sharing) 

## MVP/PostMVP
___

### MVP

+ Set up Ruby on rails with react-webpacker
+ Anime model & controller (backend)
+ Review model & controller (backend)
+ Fetch api from the backend API using axios
+ Set up front-end components with react
+ Index route implemented in React to show all animes
+ Show Route implemented in React to show individual anime
+ Review component
+ ReviewForm Component 
+ Style using style-component from react


### PostMVP

+ Motion framers
+ Add animations
+ Add another model to the backend for anime info
+ Responsive Css

## Time Matrix  
___

### MPV

| Component | Priority | Estimated Time | Actual Time |
| --------- | -------- | -------------- | ----------- |
| Ruby setup | H | .5hr | .5hr |
| Anime Model | H | .5hr | .5hr |
| Anime Controller | H | 1hr | 2hr |
| Review Model | H | .5hr | .5hr |
| Review Controller | H | 1hr | .5hr |
| Setup Webpacker-react | H | .5hr | .5hr |
| NavBar Component| H | 1hr | 1hr |
| About Component | M | 1hr | 1hr |
| Animes Component | H | 1hr | .5 hr|
| Anime(Card) Component | H | 2hr | 3hr |
| Rating Component | H | 2hr | 1.5hr |
| Anime(page) Component| H | 3hr | 4hr |
| Header Component | M | .5hr | .5hr |
| Review Component | H | .5hr | 1hr |
| ReviewForm Component| H | 3hr | 2.5hr |
| Stars Rating for ReviewForm| H | 1hr | .5hr |
| styling using styled-component | M | 5hr | 4hr |
| Font-Awsome Icon | M | 1hr | 1.5hr |
| Testing and bug fix | M | 5hr | 3.5hr | 
| Total hours |  | 30hr | 29hr |

### PostMPV

| Component | Priority | Estimated Time | Actual Time |
| --------- | -------- | -------------- | ----------- |
| Motion Framer | L | 4hr | |
| Animation | L | 3hr | |
| 3rd model for backend | L | 2hr | |
| Responsive CSS | M | 3hr |  |
| Total hours | | 12hr| |

## Challenges
___

+ It was challengng to get styled-component to be responsive. I've read several [documents](https://jsramblings.com/how-to-use-media-queries-with-styled-components/) and still no luck. I will look in to this in the the future. 
+ Deployment was also challenging since I use react webpacker. I tried to deploy on heroku and it didn't work. 



