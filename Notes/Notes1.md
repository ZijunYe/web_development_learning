## Section23 Node.js 
- Enable to run application on the local machine 
- check the node version ```node -v```
- start the node ```node``` 
- Node Package Manager(npm): a place that contains the tools package 
	- initialise NPM ```npm init``` 
		- It will generate a package.json(act as configuration file)
		- inside of package.json, there is a attribute called 'type', you are able to choose commonJS or Module 
		- CommonJs: using ```require``` keyword 
		- Module: using ```import``` keyword
	- install NPM package ```npm install <something> ```

- run the node project ```node project-Name.js```
	
- Node is a runtime environment that enable Javascript to run in a computer instead browser

## Section24 Express JS 
- is a javascript framework
- How to creating express sever
  1. Create directory, create index.js file
  2. initialise NPM ```npm init```
  3. install the express package ```npm i express```
  4. write server application in index.js
  5. start server ```node fileName.js```

### HTTP (Client-side communicate to server-side) 
- Hypertext transfer protocol(language that computer communicate each other)
- Request vocab
  1. GET: request resources from the server 
  2. POST: sending the resource to the server 
  3. PUT: replace resources completely  
  4. PATCH: patch up resources (just some attribute change) 
  5. DELETE: Delete resource
- Endpoints: forward slash and with destination, "/" --> homepage
- HTTP response status Code (example: 404)
  - 1** Hold one
  - 2** Here you go
  - 3** Go away (redirect)
  - 4** You fucked up
  - 5** I fucked up 
  
Server-Side(Backend) --> 1. server contains application(index.js) and 2. it also with database
- what is Localhost: your computer
- What is port: lots door on your server, each of door have an address
- Check the port listening to ```sudo lsof -i -P -n | grep LISTEN

Middleware 
- Pre-process the request 
- logging the request 
- authentication 
- process and handle error earlier 
- NPM module 
  - ```Body parser``` able to get request body 
  - ```morgan``` log the request come to your server 


  ## API 
  - Structure of API
    - Base URL / endpoint ? optional parameter 
  - What is API: Enable to different application interact each other 
	 A: Application 
	 P: Programming 
	 I: Interface 
	
	- Type of API
    - REST:API	
    - GraphQL	
    - gRPC	
    - SOAP

  - JSON( JavaScript Object Notation )
    - They way of formating data that send through internet in readable 
    - JSON Visuializer (JSON stack view)
  - JS Object --> JSON ```const jsonData = JSON.stringify(data)```
  - JSON --> JS object ```const data = JSON.parse(jsonData)```




  - Access external API 
    - using ```axios``` package 

  - API authentication 
    0: No authentication 
      - Rate limit 
    1: Basic Authentication 
      - Username and Password (Base64 encoding to the url)
      - ```username:password``` --> authorization header 
    2: API key authorisation 
      - The different authorization & authentication 
        - Authorization - that enable u use api 
        - Authentication - allow u to identify yourself 
    3: Token Based Authentication 
      - based on the username + password to generate a token that able to interact with api 


  - {REST:API}
    - GET: axios.get(url,config)
    - POST: axios.post("URL", body, config)
    - PUT: axios.put("URL", body, config)
    - PATCH: axios.patch("URL", body, config)
    - DELETE: axios.post("URL", body, config)








