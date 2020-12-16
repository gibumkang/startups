const Hello = (name) => {
    return `
        <!DOCTYPE html>
            <head><title>Hello</title></head>
            <body style="margin: 0; padding: 0;">
                <br/>
                <br/>
                <div>Hello World and hello to you, ${name}!</div>
                <br/>
                <br/>
            </body>
        </html>
    `;
};

module.exports = { Hello };
