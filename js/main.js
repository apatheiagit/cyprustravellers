$(function(){	
	getWeather("Limassol");
  	$('.current-city').click(function(){
  		$('.city-list').toggle();
  		$('.opener').toggleClass('open');
  	});
  	$('.city-list span').click(function(){
  		$('.current-city').children('.name').text($(this).text());
  		getWeather($(this).attr('data-city'));
  		$('.city-list').toggle();
  		$('.opener').toggleClass('open');
  	})
})
function getWeather(city){		
	$.ajax({
	  url: "http://api.openweathermap.org/data/2.5/weather",
	  data: "q="+city+"&units=metric",
	  success: function(data, status, xhr){
	    weatherCallBack(data);		  
	  }
	})		
}
function weatherCallBack(data){
    $('.weather-icon img').attr('src', 'http://openweathermap.org/img/w/'+ data.weather[0].icon +'.png');
    $('.weather-degree').text(data.main.temp);
}
