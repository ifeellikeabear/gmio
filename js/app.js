var routerApp = angular.module('routerApp', ['ui.router', 'ngAnimate']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'views/partial-home.html',
            controller: 'HomeController',
            controllerAs: 'home',
            onEnter: function (ApplicationState, NavBarService) {
                ApplicationState.navBar = NavBarService.home();
            }
        })
        .state('system', {
            url: '/rule-sets',
            templateUrl: 'views/systems.html'
        })
        .state('settings', {
            url: '/settings',
            template: 'This page has not been set up yet, thanks.'
        })
        .state('archetype', {
            url: '/archetypes',
            controller: 'ArchetypeController',
            controllerAs: 'vm',
            views: {
                '': {
                    templateUrl: 'views/archetypes/archetypes.html',
                },
                'new@archetype': {
                    templateUrl: 'views/archetypes/archetypes-new.html',
                    controller: 'ArchetypeNewController',
                    controllerAs: 'vm'
                },
                'one@archetype': {
                    templateUrl: 'views/archetypes/archetypes-one.html',
                    controller: 'ArchetypeOneController',
                    controllerAs: 'vm'
                }
            }
        })

    ;

}); // closes $routerApp.config()