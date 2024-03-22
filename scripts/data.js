$(function () {
    $.each(alphaGames, function (index, data) {
  
      $("#gameRowAlpha").append(
        '<div class="col-md-4"> <div class="card m-3 text-black" style="background-color:#9ebaf5">' + '<img class="card-img-top" src="https://i.pinimg.com/474x/94/4f/ee/944fee753e59ac050438bfdf65989132.jpg" alt="Gamer Icon">' +
          '<div class="card-body"> <div class="offset-md-2 col-md-8 mx-auto text-center">' +
          '<h4 class="card-title">' +data.gameName+ '</h4>' +
          '<p class="card-text">Creator: '+  data.name +'</p>' +
          '<a href="' +
          data.url +
          '" target="_blank" class="btn text-white" style="background-color:#152238">Click here to play!</a></div> '
      );
    });

    $.each(charlieGames, function (index, data) {
  
      $("#gameRowCharlie").append(
        '<div class="col-md-4"> <div class="card m-3 text-black" style="background-color:#9ebaf5">' + '<img class="card-img-top" src="https://i.pinimg.com/474x/94/4f/ee/944fee753e59ac050438bfdf65989132.jpg" alt="Gamer Icon">' +
          '<div class="card-body"> <div class="offset-md-2 col-md-8 mx-auto text-center">' +
          '<h4 class="card-title">' +data.gameName+ '</h4>' +
          '<p class="card-text">Creator: '+  data.name +'</p>' +
          '<a href="' +
          data.url +
          '" target="_blank" class="btn text-white" style="background-color:#152238">Click here to play!</a></div> '
      );
    });
    $.each(deltaGames, function (index, data) {
  
      $("#gameRowDelta").append(
        '<div class="col-md-4"> <div class="card m-3 text-black" style="background-color:#9ebaf5">' + '<img class="card-img-top" src="https://i.pinimg.com/474x/94/4f/ee/944fee753e59ac050438bfdf65989132.jpg" alt="Gamer Icon">' +
          '<div class="card-body"> <div class="offset-md-2 col-md-8 mx-auto text-center">' +
          '<h4 class="card-title">' +data.gameName+ '</h4>' +
          '<p class="card-text">Creator: '+  data.name +'</p>' +
          '<a href="' +
          data.url +
          '" target="_blank" class="btn text-white" style="background-color:#152238">Click here to play!</a></div> '
      );
    });
    $.each(echoGames, function (index, data) {
  
      $("#gameRowEcho").append(
        '<div class="col-md-4"> <div class="card m-3 text-black" style="background-color:#9ebaf5">' + '<img class="card-img-top" src="https://i.pinimg.com/474x/94/4f/ee/944fee753e59ac050438bfdf65989132.jpg" alt="Gamer Icon">' +
          '<div class="card-body"> <div class="offset-md-2 col-md-8 mx-auto text-center">' +
          '<h4 class="card-title">' +data.gameName+ '</h4>' +
          '<p class="card-text">Creator: '+  data.name +'</p>' +
          '<a href="' +
          data.url +
          '" target="_blank" class="btn text-white" style="background-color:#152238">Click here to play!</a></div> '
      );
    });
  });