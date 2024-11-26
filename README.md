iTunes Search App


This is a simple iTunes search application that allows users to search for media items on iTunes. It has both a front-end (React) and a back-end (Express) component.


Instructions for Installation and Usage:


1\. Clone the repository from GitHub:


`   `$ git clone https://github.com/Phathutshedzo97/itunes-search


2\. Navigate to the project directory:


`   `$ cd itunes-search-app


3\. Install dependencies for both the client and server:


`   `$ cd frontend


`   `$ npm install


`   `$ cd ../itunes_background


`   `$ npm install


4\. Run the application:


`   `$ cd frontend


`   `$ npm start


`   `Open another terminal window/tab:


`   `$ cd itunes_backend


`   `$ npm start


5\. Access the application in your browser at: http://localhost:3000/


Security Measures:


\- The application uses the Helmet middleware to enhance security by setting various HTTP headers.


\- API keys or sensitive data are not directly exposed in the client-side code.


\- The server has error handling in place for any potential issues while fetching data from the iTunes API.


\- The application uses Express middleware to handle CORS and prevent unauthorized cross-origin requests.


Please Note:


\- The iTunes Search API may have rate limits. If you encounter any issues, try limiting the number of requests or use your own API key.


\- The application is for educational purposes and may require further improvements for production use.


If you have any questions or need further assistance, feel free to reach out.


Happy searching!
