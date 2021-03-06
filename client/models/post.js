// /models/post.js
'use strict';

angular.module('kolohelios')
.factory('Post', ['$rootScope', '$firebaseArray', function($rootScope, $firebaseArray){

  var fbPosts;
  var afPosts;

  function init(){
    fbPosts = $rootScope.fbRoot.child('posts/');
    afPosts = $firebaseArray(fbPosts);
    return afPosts;
  }

  function save(post){
    return afPosts.$add(post);
  }

  return {init: init, save: save};
}]);
