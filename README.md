run this app with: npm run start / node app.js

endpoints:
    - POST /register (Adding a user to the users database): 
        body: { username, password }
        response: new id of the new user
    - POST /login (validate user and login)
        body: { username, password }
        response: success or failure
    - POST /messages (Adding a message to the messages database)
        body: { username, password }
        response: new id of the new message
    - GET /messages (fetch all messages from the messages database)
        body: { username, password }
        response: array of all messages from the messages database
    - GET /messages/user/:userId (fetch all of the messages from the logged in user are sorted by `created_at`)
        body: { username, password }
        params: userId = id of the logged in user
        response: array of all messages from the user 
    - PUT /messages/:id (update value in 'content' field by a message if message.userId from the logged in user)
        body: { username, password }
        params: id = id of the message
        response: 'message updated' + result object 
    - DELETE /messages/:id (delete message if message.userId from the logged in user)
        body: { username, password }
        params: id = id of the message
        response: 'message deleted' + result object 

link: 
