var port = 1337;

module.exports = {
    'port' : port,
    'facebookAuth' : {
        'clientID'      : '159610833979-0t3arkf5dpvsq34rfrvbbv2slpk33lf5.apps.googleusercontent.com',
        'clientSecret'  : 'X_ZFHS8AWnQFioRQxE3Rr8Sk',
        'callbackURL'   : 'http://localhost:' + port + '/auth/facebook/callback'
    },
    'twitterAuth' : {
        'consumerKey'   : '159610833979-0t3arkf5dpvsq34rfrvbbv2slpk33lf5.apps.googleusercontent.com',
        'consumerSecret': 'X_ZFHS8AWnQFioRQxE3Rr8Sk',
        'callbackURL'   : 'http://localhost:' + port + '/auth/twitter/callback'
    },
    'googleAuth' : {
        'clientID'      : '159610833979-0t3arkf5dpvsq34rfrvbbv2slpk33lf5.apps.googleusercontent.com',
        'clientSecret'  : 'X_ZFHS8AWnQFioRQxE3Rr8Sk',
        'callbackURL'   : 'http://localhost:' + port + '/auth/google/callback'
    }
};