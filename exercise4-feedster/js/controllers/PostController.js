app.controller('PostController', ['$scope', function($scope) {
  $scope.posts = [
    {
      author: {
        name: 'The Dude',
        avatar: 'img/lebowski.jpg'
      },
      comment: {
        img: 'img/bowling-sucks.jpg',
        text: 'Yeah, well that\'s just your opinion man!',
      }
    },


    {
      author: {
        name: 'Queen',
        avatar: 'img/queen.jpg'
      },
      comment: {
        text: 'Keep calm and say whatevs!',
      }
    }
  ]  
}]);