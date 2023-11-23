const https = require('https');

module.exports = (req, res) => {
    const options = {
        hostname: 'raw.githubusercontent.com',
        port: 443,
        path: '/CHINAupup/proxy-go-merge/main/sub/merged_proxies_new.yaml',
        method: 'GET'
    };

    const request = https.request(options, response => {
        let data = '';

        response.on('data', chunk => {
            data += chunk;
        });

        response.on('end', () => {
            res.setHeader('Content-Type', 'text/plain');
            res.status(200).send(data);
        });
    });

    request.on('error', error => {
        console.error(error);
        res.status(500).send('An error occurred.');
    });

    request.end();
};
