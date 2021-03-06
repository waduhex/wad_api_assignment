# Assignment 2 - Web API.

Name: Zhiling Chen

## Features.
 
 + Feature 1 - Get the movies by page for the react app's pagination functionality. 
 + Feature 2 - Get the upcoming movies by page for the react app's pagination functionality.
 + Feature 3 - Get the now playing movies by page for the react app's pagination functionality.
 + Feature 4 - Get the popular movies by page for the react app's pagination functionality.
 + Feature 5 - Get the top rated movies by page for the react app's pagination functionality.
 + Feature 6 - Get the trending movies by page for the react app's pagination functionality.
 + Feature 7 - Get the recommended movies of a particular movie.
 + Feature 8 - Search movies with keywords.
 + Feature 9 - Get the today's TVs by page for the react app's pagination functionality.
 + Feature 10 - Get the popular TVs by page for the react app's pagination functionality.
 + Feature 11 - Get the top rated TVs by page for the react app's pagination functionality.
 + Feature 12 - Get the hot TVs by page for the react app's pagination functionality.
 + Feature 13 - Get the today's TVs by page for the react app's pagination functionality.
 + Feature 14 - Get the similar TVs of a particular tv.
 + Feature 15 - Search TVs with keywords.
 + Feature 16 - Delete the user.
## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

- Need to be run on the node 12, latest npm version, and cloud mongdb. 

Describe getting/installing the software, perhaps:

```bat
git clone https://github.com/waduhex/wad_api_assignment.git
```

followed by installation

```bat
npm install
npm start -- start for the app with port 8080
```

## API Configuration
```bat
NODE_ENV=development
PORT=8080
HOST=
TMDB_KEY=
mongoDB=YourCloudMongoURL
seedDb=true
secret=YourJWTSecret
```


## API Design
| Name                             | GET                                            | POST                          | PUT                           | DELETE                  |
| -------------------------------- | ---------------------------------------------- | ----------------------------- | ----------------------------- | ----------------------- |
| /api/movies                      | Gets a list of movies                          | N/A                           | N/A                           | N/A                     |
| /api/movies/page/:page           | Get movies by page                             | N/A                           | N/A                           | N/A                     |
| /api/movies/:id                  | Get specific movie by id                       | N/A                           | N/A                           | N/A                     |
| /api/movies/upcoming/:page       | Get upcoming movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/nowplaying/:page       | Get nowplaying movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/popular/:page       | Get popular movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/toprated/:page       | Get top rated movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/trending/:page       | Get trending movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/:id/recommend      | Get recommend movies of a particular movie                   | N/A                           | N/A                           | N/A                     |
| /api/movies/search/:query        | Search the movies by query parameter           | N/A                           | N/A                           | N/A                     |
| /api/users                       | Get all the users                              | Login the system  | N/A                           | N/A                     |
| /api/users/:username             | N/A                                            | N/A                           | N/A                           | Delete user by username |
| /api/users/:id                   | N/A                                            | N/A                           | Update user information by id | N/A                     |
| /api/users/:userName/favorites   | Get users' favorites movies                    | Add favorite movies to user   | N/A                           | N/A                     |
| /api/tvs/todaytv/page/:page      | Get today tvs by page                          | N/A                           | N/A                           | N/A                     |
| /api/tvs/populartv/page/:page    | Get popular tvs by page                        | N/A                           | N/A                           | N/A                     |
| /api/tvs/topratedtv/page/:page   | Get toprated tvs by page                       | N/A                           | N/A                           | N/A                     |
| /api/tvs/hottv                   | Get hot tvs by page                            | N/A                           | N/A                           | N/A                     |
| /api/tvs/:id                     | Get the detailed tv information                | N/A                           | N/A                           | N/A                     |
| /api/tvs/:id/similar             | Get the similar TVs          | N/A                           | N/A                           | N/A                     |
| /api/tvs/search/:page            | Search the tvs with keywords | N/A                           | N/A                           | N/A                     |
| /api/genres                      | Get all the genres                             | N/A                           | N/A                           | N/A                     |

swagger

![][swagger1]

![][swagger2]

![][swagger3]

Link: https://app.swaggerhub.com/apis-docs/waduhex/wad-api-assignment/1.0.0#/

## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

**protect routes:**

- /api/users/:username/favourites POST
- /api/users/:username/favourites GET

## Integrating with React App

I used to use Antd UI to implement the login part, and now I use my own API router to implement the login method .

```js
export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};
```

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

~~~

The moviesApp url is shown below:

https://github.com/waduhex/wad2-moviesApp

## Independent learning.

- swagger ui

I build the swagger documentation in the swaggerhub. I implement it with swagger.json.

- helmet

I used the third-party package helmet to help secure my Express app by setting various HTTP headers.

```js
const helmet = require('helmet')
app.use(helmet())
```

# Assignment 2 - Agile Software Practice.

Name: Zhiling Chen

## Explanation

Because I am in China now, many tools like tmdb's api, gitlab, and heroku are not accessible in China, which caused me to fail due to network problems when using these tools. I'm sorry I couldn't complete some parts of the assignment. The picture below is the reason for the failure of CI/CD in my gitlab:

![][error]
## Target Web API.

| Name                             | GET                                            | POST                          | PUT                           | DELETE                  |
| -------------------------------- | ---------------------------------------------- | ----------------------------- | ----------------------------- | ----------------------- |
| /api/movies                      | Gets a list of movies                          | N/A                           | N/A                           | N/A                     |
| /api/movies/page/:page           | Get movies by page                             | N/A                           | N/A                           | N/A                     |
| /api/movies/:id                  | Get specific movie by id                       | N/A                           | N/A                           | N/A                     |
| /api/movies/upcoming/:page       | Get upcoming movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/nowplaying/:page       | Get nowplaying movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/popular/:page       | Get popular movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/toprated/:page       | Get top rated movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/trending/:page       | Get trending movies by page                    | N/A                           | N/A                           | N/A                     |
| /api/movies/:id/recommend      | Get recommend movies of a particular movie                   | N/A                           | N/A                           | N/A                     |
| /api/movies/search/:query        | Search the movies by query parameter           | N/A                           | N/A                           | N/A                     |
| /api/users                       | Get all the users                              | Login the system  | N/A                           | N/A                     |
| /api/users/:username             | N/A                                            | N/A                           | N/A                           | Delete user by username |
| /api/users/:id                   | N/A                                            | N/A                           | Update user information by id | N/A                     |
| /api/users/:userName/favorites   | Get users' favorites movies                    | Add favorite movies to user   | N/A                           | N/A                     |
| /api/tvs/todaytv/page/:page      | Get today tvs by page                          | N/A                           | N/A                           | N/A                     |
| /api/tvs/populartv/page/:page    | Get popular tvs by page                        | N/A                           | N/A                           | N/A                     |
| /api/tvs/topratedtv/page/:page   | Get toprated tvs by page                       | N/A                           | N/A                           | N/A                     |
| /api/tvs/hottv                   | Get hot tvs by page                            | N/A                           | N/A                           | N/A                     |
| /api/tvs/:id                     | Get the detailed tv information                | N/A                           | N/A                           | N/A                     |
| /api/tvs/:id/similar             | Get the similar TVs          | N/A                           | N/A                           | N/A                     |
| /api/tvs/search/:page            | Search the tvs with keywords | N/A                           | N/A                           | N/A                     |
| /api/genres                      | Get all the genres                             | N/A                           | N/A                           | N/A                     |

swagger

![][swagger1]

![][swagger2]

![][swagger3]

Link: https://app.swaggerhub.com/apis-docs/waduhex/wad-api-assignment/1.0.0#/
## Error/Exception Testing.

+ GET /movies/upcoming/:page - test when the page is not valid, and it will return 500. See tests/functional/api/movies/index.js 

```js
it('should return the 500 error', () => {
        return request(api)
          .get('/api/movies/upcoming/xx')
          .set("Accept", "application/json")
          .set("Authorization", "Bearer " + token)
          .expect(500);
      })
```

+ GET /movies/:id - test when the movie id is not valid, and it will return not found message. See tests/functional/api/movies/index.js 

```js
it("should return the NOT found message", () => {
        return request(api)
          .get("/api/movies/xxx")
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect({
            success: false,
            status_code: 34,
            status_message: "The resource you requested could not be found.",
          });
      });
```

+ POST /:username/favourites - test when the movie was added twice. See /tests/functional/api/users/index.js

```js
it('should return a 401 status with error message when the movie was added twice', () => {
      request(api)
        .post('/api/users/user1/favourites')
        .send({
          "id": 337041
        })
        .expect(401)
    })
```

+ GET todaytv/page/:page - test when the page is invalid. See /tests/functional/api/tvs/index.js

```js
it('should return the 500 status when page is invalid', () => {
        return request(api)
          .get('/api/tvs/todaytv/page/xx')
          .set('Accept', 'application/json')
          .expect(500)
      })
```

## Continuous Delivery/Deployment.

+ https://movies-api-assignment2.herokuapp.com - Staging deployment
+ https://assignment2-deploy1.herokuapp.com - Production
+ https://app.swaggerhub.com/apis-docs/waduhex/wad-api-assignment/1.0.0#/ -swagger ducumentation

+ Staging app overview 

![][stagingapp]

+ Production app overview 

![][productionapp]

**Swagger overview**

![][swagger1]

![][swagger2]

![][swagger3]


[swagger1]: ./public/swagger1.png
[swagger2]: ./public/swagger2.png
[swagger3]: ./public/swagger3.png
[stagingapp]: ./public/stagingapp.png
[productionapp]: ./public/productionapp.png
[error]: ./public/error.png