module.exports = {
    dest: 'assets/dist',
      dest_js: 'assets/dist/js',
  dest_css: 'assets/dist/css',
    js: [
        "app/components/**/controller/*.ctrl.js",
        "app/shared/services/**/*.serv.js",
    ],
    sass: ['app/shared/**/*.sass'],
    vendor_js: [
        'bower_components/angular/angular.min.js',
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/angular-material/angular-material.min.js',
        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/angular-aria/angular-aria.min.js',
        'bower_components/angular-messages/angular-messages.min.js',
        'bower_components/firebase/firebase.js',
        'bower_components/angularfire/dist/angularfire.min.js',
        'bower_components/angular-material-icons/angular-material-icons.min.js',
 
    ],
    vendor_styles: [
        'bower_components/material-design-lite/material.min.css',
         'assets/lib/css/ionic/ionic.min.css'
    ],
    js : [
        "app/components/**/controller/*.ctrl.js",
        "app/shared/services/**/*.serv.js",
    ],
    
    scss:[
        "app/components/**/scss/*.scss"    
    ]
};