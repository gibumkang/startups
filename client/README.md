### Nodemailer Setup

1. Define the routes. For this example, I have the send API on app.js:

```node
app.post('/api/send', (req, res) => {
    //...
});
```

2. Create a separate mail.js model that handles the mail functionality. Within that file, make sure to create your schema and templates.

3. Create your email template separately in a html file. Once completed and tested, insert your email template in files such as 'hello_template', 'thanks_template', etc.

4. Finally, make sure to send the payload correctly by initializing sendEmail when the api/send endpoint receives a valid payload.

5. If you're running cross-browser issues, make sure to use the cors package to handle errors. You should always have body-parser initialized before receiving your payload so the backend can read the data flowing in.

6. To add more variables in your code, make sure to expand your Hello(), Thanks(), and other templates by passing in arguments ie. name, response, birthday, etc. The possibilities are endless!
