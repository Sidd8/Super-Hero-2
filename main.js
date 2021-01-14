canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_img_width=40;
block_img_height=30;
var player_object="";
var block_img_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(160);
    player_object.set({
    top:player_y,
    left:player_x,
    });
    });
    }
    function new_Img(get_img){
        fabric.Image.fromURL(get_img, function(Img){
            block_img_object=Img;
            block_img_object.scaleToWidth(block_img_width);
            block_img_object.scaleToHeight(block_img_height);
            block_img_object.set({
        top:player_y,
        left:player_x,
        });
        canvas.add(block_img_object);
        });
        }
        window.addEventListener("keydown",my_keydown);
        function my_keydown(e){
            keyPressed=e.keyCode;
            console.log(keyPressed);
            if (e.shiftKey==true && keyPressed=='80'){
                console.log('p and shift pressed together');
                block_img_width= block_img_width + 10;
                block_img_height= block_img_height + 10;
                document.getElementById("current_width").innerHTML=block_img_width;
                document.getElementById("current_height").innerHTML=block_img_height;
            }
            if (e.shiftKey==true && keyPressed=='77'){
                console.log('m and shift pressed together');
                block_img_width= block_img_width - 10;
                block_img_height= block_img_height - 10;
                document.getElementById("current_width").innerHTML=block_img_width;
                document.getElementById("current_height").innerHTML=block_img_height;
            }
            if (keyPressed=='38'){
                console.log("up");
                up();
            }
            if (keyPressed=='40'){
                console.log("down");
                down();
            }
            if (keyPressed=='37'){
                console.log("left");
                left();
            }
            if (keyPressed=='39'){
                console.log("right");
                right();
            }
            if (keyPressed=='70'){
                console.log("f");
                new_Img("ironman_face.png")
            }
            if (keyPressed=='66'){
                console.log("b");
                new_Img("spiderman_body.png")
            }
            if (keyPressed=='76'){
                console.log("l");
                new_Img("hulk_legs.png")
            }
            if (keyPressed=='82'){
                console.log("r");
                new_Img("thor_right_hand.png")
            }
            if (keyPressed=='72'){
                console.log("h");
                new_Img("captain_america_left_hand.png")
            }
        }