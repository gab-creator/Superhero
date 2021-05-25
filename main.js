var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 500;
player_y = 450;
var player_object = "";
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);

    });
}
function new_image(get_image) 
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;
    
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height)
    block_image_object.set ({
        top:player_y,
        left:player_x
    });
    canvas.add(block_image_object);
    
    });

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;

    }
    if(e.shiftKey == true && keyPressed == '77')
    {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
        
    }
    if(keyPressed == '38')
    {
        up();
        console.log("up is pressed")
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down is pressed");
    }

    if(keyPressed == '37')
    {
        left();
        console.log("left is pressed");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right is pressed");
    }
    if(keyPressed == '87')
    {
        new_image('captain_america_left_hand.png');
        console.log("w is pressed");
    }
    if(keyPressed == '71')
    {
        new_image('hulk_face.png');
        console.log("g is pressed");
    }
    if(keyPressed == '76')
    {
        new_image('hulk_left_hand.png');
        console.log("l is pressed");
    }
    if(keyPressed == '84')
    {
        new_image('hulk_legs.png');
        console.log("t is pressed");
    }
    if(keyPressed == '82')
    {
        new_image('hulk_right_hand.png');
        console.log("r is pressed");
    }
    if(keyPressed == '89')
    {
        new_image('hulkd_body.png');
        console.log("y is pressed");
    }
    if(keyPressed == '68')
    {
        new_image('ironman_body.png');
        console.log("d is pressed");
    }
    if(keyPressed == '85')
    {
        new_image('ironman_left_hand.png');
        console.log("u is pressed");
    }
    if(keyPressed == '67')
    {
        new_image('ironman_legs.png');
        console.log("c is pressed");
    }
    if(keyPressed == '66')
    {
        new_image('ironman_right_hand.png');
        console.log("b is pressed");
    }
    if(keyPressed == '70')
    {
        new_image('spiderman_body.png');
        console.log("f is pressed");
    }
    if(keyPressed == '76')
    {
        new_image('spiderman_face.png');
        console.log("l is pressed");
    }
    if(keyPressed == '72')
    {
        new_image('spiderman_left_hand.png');
        console.log("h is pressed");
    }
    if(keyPressed == '88')
    {
        new_image('spiderman_legs.png');
        console.log("x is pressed");
    }
    if(keyPressed == '65')
    {
        new_image('spiderman_right_hand.png');
        console.log("a is pressed");
    }
    if(keyPressed == '83')
    {
        new_image('thor_face.png');
        console.log("s is pressed");
    }
    if(keyPressed == '73')
    {
        new_image('thor_left_hand.png');
        console.log("i is pressed");
    }
    if(keyPressed == '79')
    {
        new_image('thor_right_hand.png');
        console.log("o is pressed");
    }
}
function up()
{
    if(player_y >=0);
    {
    player_y = player_y - block_image_height;
    console.log("block image height = " + block_image_height);
    console.log("When up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_object);
    player_update();
    }
}
function down()
{
    if(player_y <=800);
    {
    player_y = player_y + block_image_height;
    console.log("block image height = " + block_image_height);
    console.log("When down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_object);
    player_update();
    }
}
function left()
{
    if(player_x >0);
    {
    player_x = player_x - block_image_width;
    console.log("block image width = " + block_image_width);
    console.log("When left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_object);
    player_update();
    }
}
function right()
{
    if(player_x <=850);
    {
    player_x = player_x + block_image_width;
    console.log("block image width = " + block_image_width);
    console.log("When right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_object);
    player_update();
    }
}