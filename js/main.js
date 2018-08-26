    $(".para1").text("<p>"+ "LA CASA DE PAPEL season 2 is the binge-worthy Spanish crime drama that has fans tuning into in their millions. The first two seasons are up on Netflix now but will there be a third series? Here’s everything you need to know." +"</p>");
    $(".title").text("<h1>"+ "LA CASA DE PAPEl" + "</h1>");
    $(".para2").text("<p>"+ "This is a paragraph" + "</p>");
    $(".orl").text("<ol> \n"+"<li>"+"item1"+"</li>\n" +"<li>"+"item2"+"</li> \n" +"<li>"+"item3"+"</li> \n"     +"</ol>")
    $(".orl").html($(".orl").html().replace(/\n/g,'<br/>'));
    $(".url").text("<ul> \n"+"<li>"+"item1"+"</li>\n" +"<li>"+"item2"+"</li> \n" +"<li>"+"item3"+"</li> \n"     +"</ul>")
    $(".url").html($(".url").html().replace(/\n/g,'<br/>'));
    $(".img").text("<img src='res/lacasadepapel.jpg'>");
    $(".vid").text("<video src='res/vid.mp4'></video>");
    $(".lien").text("<a href='https://www.youtube.com/watch?v=7sa_rH4oQhM&feature=youtu.be'>Watch It</a>");
    $(".aud").text("<audio> <source src='res/Fart3.mp3'></audio>");
    $(".for").text("<form>\n<label>UserName:</label>\n<input type='text'> \n<label>Password</label> \n<input type='password'>\n</form>");
    $(".for").html($(".for").html().replace(/\n/g,'<br/>'));






    $(".para1").click(function(){
        
       var newText =  prompt("You Just Clicked On A Paragraph. You can change it by entering the new text", "Enter The Text Here");
       $(".para1").text("<p>"+newText+"</p>");
       $(".firstPara").text(newText);
        

    })
    $(".but1").click(function(){
        $(".title").css("display", "block");
        $(".title1").css("display", "block");
    })
    $(".but2").click(function(){
        $(".para2").css("display", "block");
        $(".secondPara").css("display", "block");
    })
    $(".but3").click(function(){
        $(".orl").css("display", "block");
        $(".ol").css("display", "block");
    })
    $(".but4").click(function(){
        $(".url").css("display", "block");
        $(".ul").css("display", "block");
    })
    $(".but5").click(function(){
        $(".img").css("display", "block");
        $(".image").css("display", "block");
    })
    $(".but6").click(function(){
        $(".vid").css("display", "block");
        $(".video").css("display", "block");
    })
    $(".but7").click(function(){
        $(".lien").css("display", "block");
        $(".link").css("display", "block");
    })
    $(".but8").click(function(){
        $(".aud").css("display", "block");
        $(".audio").css("display", "block");
    })
    $(".but9").click(function(){
        $(".for").css("display", "block");
        $(".form").css("display", "block");
    })
    
