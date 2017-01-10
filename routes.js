/**
 * Main application routes
 */

'use strict';


module.exports = function(app) {
    app.use('/api/news', require('./apps/news'));

    // All other routes should redirect to the index.html
    app.route('/*')
        .get((req, res) => {
            res.sendFile(path.resolve(`${app.get('appPath')}/public/index.html`));
        });
}
