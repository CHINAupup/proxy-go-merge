module.exports = (req, res) => {
    res.writeHead(302, {
        'Location': 'https://raw.githubusercontent.com/CHINAupup/proxy-go-merge/main/sub/merged_proxies.yaml'
    });
    res.end();
};
