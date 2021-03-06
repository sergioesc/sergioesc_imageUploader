# sergioesc_imageUploader

# About the project

A simple Image Uploader created in React.JS and Node.JS

# Build width:
* React.JS
* CSS
* Node.JS

# How I created the project?

* First I create a backend folder, where I install express, nodemon and configure the server.
* I create the frontend section where it will consist of the main loading section, the Loading.js component and the final result with the link of the image uploaded in the cloud.
* After working with the frontEnd, I create the route where I used the POST method, to upload the image to the cloud and publish in cloudinary
, using the following dependencies:
  * cloudinary,
  * dotenv, 
  * express,
  * multer,
  * streamifier,
  * cors.
* In App.js I make the request to send a message to the cloudinary server
using axios, and for state control React's Reducer.
* I install a scroller (react-scroll), for aesthetic purposes.
* Public the project in Heroku.com

# Preview 

![image](https://user-images.githubusercontent.com/93834310/160667169-2f910ec5-5b52-4109-907c-d7125368de52.png)

![image](https://user-images.githubusercontent.com/93834310/160667337-2df62c53-4803-4414-a313-a87257f8779d.png)
