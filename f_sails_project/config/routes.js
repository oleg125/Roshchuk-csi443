/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/contact': { view: 'pages/contact'},
  '/about': { view: 'pages/about'},
  '/vegetables_green': {view: 'pages/vegetables_green'},
  '/vegetables_red': {view: 'pages/vegetables_red'},
  '/vegetables_orange': {view: 'pages/vegetables_orange'},
  '/vegetables_white': {view: 'pages/vegetables_white'},
  '/vegetables_purple': {view: 'pages/vegetables_purple'},
  '/berries': {view: 'pages/berries'},
  '/nuts': {view: 'pages/nuts'},
  '/seeds': {view: 'pages/seeds'},
  '/fruits': {view: 'pages/fruits'},





  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
