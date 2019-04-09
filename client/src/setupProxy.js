const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }))
    app.use(proxy('/auth/instagram', { target: 'http://localhost:5000' }))
    app.use(proxy('/auth/facebook', { target: 'http://localhost:5000' }))
    app.use(proxy('/jwt', { target: 'http://localhost:5000' }))
    app.use(proxy('/api/*', { target: 'http://localhost:5000' }))
    app.use(proxy('/api/current_user', { target: 'http://localhost:5000' }))
    app.use(proxy('/api/properties/*', {target: 'http://localhost:5000'}))
    app.use(proxy('/api/properties/near/*', {target: 'http://localhost:5000'}))
    app.use(proxy('/api/propertiespopular', {target: 'http://localhost:5000'}))
    app.use(proxy('/api/uploadproperty', {target: 'http://localhost:5000'}))
    app.use(proxy('/api/removeproperty', {target: 'http://localhost:5000'}))
    app.use(proxy('/api/mylist/*', {target: 'http://localhost:5000'}))
    app.use(proxy('/socket.io', {target: 'http://localhost:5000'}))
    app.use(proxy('/socket.io/?', {target: 'http://localhost:5000'}))
    // app.use(proxy('/socket.io/*/*', {target: 'http://localhost:5000'}))
    
}
