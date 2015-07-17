$(document).ready(function(){ 
  
  function makeSammich(ingredients){
    
    if($.inArray("pb", ingredients) !== -1 && $.inArray("jelly", ingredients) !== -1){
      $("#makeIt").text("Go make yourself a PB&J (c) Sammie you skrublord");
    };
    if($.inArray("no_carbs", ingredients) !== -1 && $.inArray("turkey", ingredients) !== -1 && $.inArray("ham", ingredients) !== -1){
      $("#makeIt").text("A lettuce wrap is definitely the way to go!");
    };
    
    if(($.inArray("white", ingredients) !== -1 || $.inArray("wheat", ingredients) !== -1) && $.inArray("American", ingredients) !== -1){
      $("#makeIt").text("Go make yourself a fabulous Grilled Cheese :)");
    };
    
   
    if(($.inArray("white", ingredients)  !== -1  || $.inArray("wheat", ingredients) !== -1) && $.inArray("ham", ingredients) !== -1){
      $("#makeIt").text("Ham and Cheese's the way to go.");
      };
    
    if(($.inArray("white", ingredients)  !== -1  || $.inArray("wheat", ingredients) !== -1) && $.inArray("turkey", ingredients) !== -1){
      $("#makeIt").text("Go make yourself a Turkey Sammich, you deserve it.");
      };
    if(($.inArray("burger", ingredients) !== -1 && $.inArray("burger_patty", ingredients) !== -1) || $.inArray("American", ingredients) !== -1){
      $("#makeIt").text("Go make yourself a Bodacious Burger, buddy");
    }
    console.log("in makeSammich function.");
    console.log(ingredients);
    if (ingredients === []){
      $("#makeIt").text("Our limited sammich list cannot give you a suggestion. :( this makes us sad");
    }
    
  };
// Change size of the different sections on next or 
  $("p.next#bread").click(function(){
		$("div.meat_types").slideDown(1000);
    $("div.bread_types").slideUp(1000);
	});
  $("p.previous#meat_previous").click(function(){
    $("div.bread_types").slideDown(1000);
    $("div.meat_types").slideUp(1000);
  });
  $("p.next#meat_next").click(function(){
    $("div.cheese_types").slideDown(1000);
    $("div.meat_types").slideUp(1000);
  });
  $("p.previous#cheese_previous").click(function(){
    $("div.meat_types").slideDown(1000);
    $("div.cheese_types").slideUp(1000);
  });
  
 $("p.next#cheese_next").click(function(){
    $("div.condiment_types").slideDown(1000);
    $("div.cheese_types").slideUp(1000);
  });
  
  $("p.previous#condiments_previous").click(function(){
    $("div.cheese_types").slideDown(1000);
    $("div.condiment_types").slideUp(1000);
  });
  
  $("p.next#condiments_next").click(function(){
    $("div.topping_types").slideDown(1000);
    $("div.condiment_types").slideUp(1000);
  });
  
  $("p.previous#toppings_previous").click(function(){
    $("div.condiment_types").slideDown(1000);
    $("div.topping_types").slideUp(1000);
  });
  
  $("p.next#toppings_next").click(function(){
    $("div.extras_types").slideDown(1000);
    $("div.topping_types").slideUp(1000);
  });
  $("p.previous#extras_previous").click(function(){
    $("div.topping_types").slideDown(1000);
    $("div.extras_types").slideUp(1000);
  });
    

      var y = $(window).scrollTop();  //your current y position on the page
  
  $("input[type='submit']").click(function(e){
      e.preventDefault();
   var ingredients = [];
      $("div.together#end").slideDown(1000, function(){
        $(window).scrollTop(y+1000);
      });
    
      $("input:checkbox[name=bread]:checked").each(function(){
      ingredients.push($(this).val());
        
    
  });
  makeSammich(ingredients);
});
//  $("input[type=submit]").click(function(){
//    $("div.suggestion").text
//  });




});
