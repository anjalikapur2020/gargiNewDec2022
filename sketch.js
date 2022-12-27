var waitimg

var gameState = "wait"
var r1x, r1y, r2x, r2y, r3x, r3y, r4x, r4y, r5x, r5y, r6x, r6y
var collect1 = 0
var collect2 = 0
var collect3 = 0
var collect4 = 0
var collect5 = 0

var cat


function preload() {
    waitimg = loadImage("assets/SplashScreen.gif")
    beginimg = loadImage("assets/splashbg.jpg")
    level1startimg = loadImage("assets/buttons/level1start.jpg")
    //poplevel1img=loadImage("assets/poplevel1.gif")
    maleplayerimg = loadImage("assets/buttons/male.png")
    // femaleplayerimg = loadImage("assets/buttons/female.png")

    maleleftplayerimg = loadImage("assets/buttons/maleleft.png")
    femaleleftplayerimg = loadImage("assets/buttons/femaleleft.png")

    femalepopup = loadImage("assets/buttons/girlpopup.gif")
    malepopup = loadImage("assets/buttons/boypopup.gif")
    forest1Img = loadImage("assets/forest1.png")

    //Maze Images
    a1Img = loadImage("assets/maze/A1.png")
    b1Img = loadImage("assets/maze/B1.png")
    c1Img = loadImage("assets/maze/C1.png")
    d1Img = loadImage("assets/maze/D1.png")
    e1Img = loadImage("assets/maze/E1.png")
    f1Img = loadImage("assets/maze/F1.png")
    g1Img = loadImage("assets/maze/entrance.png")

    lifeBarImage = loadImage("assets/maze/lifeBar.png")
    level1end = loadImage("assets/wizard.png")
    level2popup1 = loadImage("assets/popuplevel2.gif")
doorimage=loadImage("assets/door.png")

    // find level bgs
    find1img = loadImage("assets/level2Assets/background/find1bg.jpg")
    find2img = loadImage("assets/level2Assets/background/candlelevel.jpg")
    find3img = loadImage("assets/level2Assets/background/findcrystalbg.jpeg")
    find4img = loadImage("assets/level2Assets/background/portionslevel.jpg")
    find5img = loadImage("assets/level2Assets/background/level6bg.jpg")



    // load sounds

    // start music
   introMusic = loadSound("assets/level2Assets/sounds/intro.mp3")
   introMusic.setVolume(0.1)


    backgroundMusic = loadSound("assets/level2Assets/sounds/footsteps.mp3")
    // backgroundMusic.play()

    buttonSounds = loadSound("assets/level2Assets/sounds/button.wav")
    buttonSounds.setVolume(0.1)

    levelupsound = loadSound("assets/level2Assets/sounds/smb_powerup.wav")
    levelupsound.setVolume(0.1)

    gotitem = loadSound("assets/level2Assets/sounds/levelupshort.mp3")
    gotitem.setVolume(0.7)

}


function setup() {
    createCanvas(windowWidth, windowHeight)

    // random x and y positions for books
    r1x = Math.round(random(20, width - 20))
    r1y = Math.round(random(height / 2, height - 50))

    r2x = Math.round(random(20, width - 20))
    r2y = Math.round(random(height / 2, height - 50))

    r3x = Math.round(random(20, width - 20))
    r3y = Math.round(random(height / 2, height - 50))

    r4x = Math.round(random(20, width - 20))
    r4y = Math.round(random(height / 2, height - 50))

    r5x = Math.round(random(20, width - 20))
    r5y = Math.round(random(height / 2, height - 50))

    r6x = Math.round(random(20, width - 20))
    r6y = Math.round(random(height / 2, height - 50))



    // Maze Game
    a1sprite = createSprite(width / 2, height / 2)
    a1sprite.addImage(a1Img)
    a1sprite.scale = 1.43
    a1sprite.visible = false

    b1sprite = createSprite(width / 2 + 570, height / 2)
    b1sprite.addImage(b1Img)
    b1sprite.scale = 0.9
    b1sprite.visible = false

    c1sprite = createSprite(width / 2 + 570, height / 2)
    c1sprite.addImage(c1Img)
    c1sprite.scale = 0.9
    c1sprite.visible = false

    d1sprite = createSprite(width / 2 + 570, height / 2)
    d1sprite.addImage(d1Img)
    d1sprite.scale = 0.9
    d1sprite.visible = false

    e1sprite = createSprite(width / 2, height / 2)
    e1sprite.addImage(e1Img)
    e1sprite.scale = 1.43
    e1sprite.visible = false

    f1sprite = createSprite(width / 2, height / 2)
    f1sprite.addImage(f1Img)
    f1sprite.scale = 1.1
    f1sprite.visible = false

    g1sprite = createSprite(width / 2 + 570, height / 2)
    g1sprite.addImage(g1Img)
    g1sprite.scale = 0.9
    g1sprite.visible = false

    entrance = createImg("assets/maze/entrance.png")
    entrance.position(0, 0)
    entrance.size(windowWidth, windowHeight)
    entrance.hide()

    entrance2 = createImg("assets/maze/entrance2.png")
    entrance2.position(0, 0)
    entrance2.size(windowWidth, windowHeight)
    entrance2.hide()

    enterlevel2 = createImg("assets/buttons/next.gif")
    enterlevel2.position(0, 0)
    enterlevel2.size(200, 200)
    enterlevel2.hide()

    canvasSprite1 = createSprite(102 * 2, 102 * 2, 200 * 2, 200 * 2)
    canvasSprite1.shapeColor = "black"

    cardboard1 = createSprite(50, 30, 10, 60);
    cardboard1.shapeColor = "white";

    cardboard2 = createSprite(100, 100, 100, 10);
    cardboard2.shapeColor = "white";

    cardboard3 = createSprite(100, 65, 10, 50);
    cardboard3.shapeColor = "white";

    cardboard4 = createSprite(250, 100, 100, 10);
    cardboard4.shapeColor = "white";

    cardboard5 = createSprite(52, 150, 95, 10);
    cardboard5.shapeColor = "white";

    cardboard6 = createSprite(50, 250, 10, 100);
    cardboard6.shapeColor = "white";

    cardboard7 = createSprite(120, 200, 150, 10);
    cardboard7.shapeColor = "white";

    cardboard8 = createSprite(200, 150, 10, 100);
    cardboard8.shapeColor = "white";

    cardboard9 = createSprite(150, 125, 10, 152);
    cardboard9.shapeColor = "white";

    cardboard10 = createSprite(250, 50, 100, 10);
    cardboard10.shapeColor = "white";

    cardboard11 = createSprite(320, 150, 50, 10);
    cardboard11.shapeColor = "white";

    cardboard12 = createSprite(300, 100, 10, 100);
    cardboard12.shapeColor = "white";

    cardboard13 = createSprite(175, 250, 150, 10);
    cardboard13.shapeColor = "white";

    cardboard14 = createSprite(250, 200, 10, 100);
    cardboard14.shapeColor = "white";

    cardboard15 = createSprite(250, 380, 10, 50);
    cardboard15.shapeColor = "white";

    cardboard16 = createSprite(380, 250, 55, 10);
    cardboard16.shapeColor = "white";

    cardboard17 = createSprite(350, 175, 10, 250);
    cardboard17.shapeColor = "white";

    cardboard18 = createSprite(50, 350, 100, 10);
    cardboard18.shapeColor = "white";

    cardboard19 = createSprite(100, 350, 10, 100);
    cardboard19.shapeColor = "white";

    cardboard20 = createSprite(250, 350, 200, 10);
    cardboard20.shapeColor = "white";

    cardboard21 = createSprite(180, 300, 150, 10);
    cardboard21.shapeColor = "white";

    cardboard22 = createSprite(300, 270, 10, 150);
    cardboard22.shapeColor = "white";

    cardboard23 = createSprite(53 * 2, 112.5 * 2, 5 * 2, 20 * 2);
    cardboard23.shapeColor = "white";

    cardboardLeft = createSprite(5 * 2, 110 * 2, 5 * 2, 180 * 2)
    cardboardLeft.shapeColor = "white";
    cardboardRight = createSprite(200 * 2, 95 * 2, 5 * 2, 180 * 2)
    cardboardRight.shapeColor = "white";
    cardboardTop = createSprite(90 * 2, 200 * 2, 180 * 2, 5 * 2)
    cardboardTop.shapeColor = "white";
    cardboardBottom = createSprite(112 * 2, 4 * 2, 180 * 2, 5 * 2)
    cardboardBottom.shapeColor = "white";

    mazeEdge1 = createSprite(200 * 2, 100 * 2, 5 * 2, 200 * 2)
    mazeEdge1.visible = false
    mazeEdge2 = createSprite(2 * 2, 100 * 2, 5 * 2, 200 * 2)
    mazeEdge2.visible = false
    mazeEdge3 = createSprite(100 * 2, 2 * 2, 200 * 2, 5 * 2)
    mazeEdge3.visible = false
    mazeEdge4 = createSprite(100 * 2, 200 * 2, 200 * 2, 5 * 2)
    mazeEdge4.visible = false

    wall1 = createSprite(15 * 2, 25 * 2, 15 * 2, 16 * 2)
    wall2 = createSprite(15 * 2, 45 * 2, 15 * 2, 25 * 2)
    wall4 = createSprite(15 * 2, 65 * 2, 15 * 2, 16 * 2)
    wall5A = createSprite(24 * 2, 63 * 2, 5 * 2, 18 * 2)
    wall5 = createSprite(49 * 2, 63 * 2, 44 * 2, 18 * 2)
    wall17 = createSprite(15 * 2, 87 * 2, 17 * 2, 17 * 2)
    wall18 = createSprite(61 * 2, 85 * 2, 20 * 2, 26 * 2)
    wall19 = createSprite(38 * 2, 87 * 2, 26 * 2, 19 * 2)
    wall20 = createSprite(15 * 2, 116 * 2, 17 * 2, 40 * 2)
    wall20A = createSprite(15 * 2, 144 * 2, 17 * 2, 15 * 2)
    wall21 = createSprite(18 * 2, 161 * 2, 19 * 2, 17 * 2)
    wall22 = createSprite(37 * 2, 139 * 2, 17 * 2, 68 * 2)
    wall23 = createSprite(83 * 2, 137 * 2, 62 * 2, 17 * 2)
    wall24 = createSprite(85 * 2, 113 * 2, 55 * 2, 17 * 2)
    wall24A = createSprite(49 * 2, 137 * 2, 4 * 2, 20 * 2)
    wall28 = createSprite(136 * 2, 124 * 2, 19 * 2, 49 * 2)
    wall35 = createSprite(163 * 2, 125 * 2, 18 * 2, 53 * 2)
    wall36 = createSprite(160 * 2, 88 * 2, 26 * 2, 18 * 2)
    wall37 = createSprite(120 * 2, 138 * 2, 10 * 2, 15 * 2)
    wall38 = createSprite(175 * 2, 162 * 2, 40 * 2, 18 * 2)
    // wall42 = createSprite()
    wall43 = createSprite(137 * 2, 88 * 2, 18 * 2, 18 * 2)

    wall3 = createSprite(35 * 2, 40 * 2, 25 * 2, 15 * 2)
    wall6 = createSprite(37.5 * 2, 26 * 2, 16 * 2, 13 * 2)
    wall7 = createSprite(63 * 2, 34 * 2, 16 * 2, 23 * 2)
    wall8 = createSprite(55 * 2, 14 * 2, 50 * 2, 13 * 2)
    wall9 = createSprite(87.5 * 2, 15.5 * 2, 15 * 2, 15 * 2)
    wall9A = createSprite(87.5 * 2, 26 * 2, 18 * 2, 5 * 2)
    wall10 = createSprite(87.5 * 2, 38 * 2, 18 * 2, 18 * 2)
    wall11 = createSprite(87.5 * 2, 72.5 * 2, 18 * 2, 50 * 2)
    wall12 = createSprite(122 * 2, 37.5 * 2, 50 * 2, 18 * 2)
    wall13 = createSprite(122 * 2, 15.5 * 2, 50 * 2, 16 * 2)
    wall14 = createSprite(172 * 2, 15.5 * 2, 48 * 2, 16 * 2)
    wall15 = createSprite(162 * 2, 48 * 2, 16 * 2, 48 * 2)
    wall16 = createSprite(188 * 2, 74 * 2, 16 * 2, 100 * 2)
    wall25 = createSprite(112 * 2, 112 * 2, 19 * 2, 19 * 2)
    wall26 = createSprite(87 * 2, 187 * 2, 69 * 2, 19 * 2)
    wall27 = createSprite(112 * 2, 87 * 2, 19 * 2, 29 * 2)
    wall29 = createSprite(113 * 2, 63 * 2, 17 * 2, 20 * 2)
    wall30 = createSprite(135 * 2, 63 * 2, 25 * 2, 20 * 2)
    wall31 = createSprite(137 * 2, 78 * 2, 18 * 2, 10 * 2)
    wall32 = createSprite(136 * 2, 162 * 2, 18 * 2, 18 * 2)
    wall33 = createSprite(100 * 2, 162 * 2, 52 * 2, 18 * 2)
    wall34 = createSprite(63.5 * 2, 165 * 2, 20 * 2, 23 * 2)
    wall39 = createSprite(188 * 2, 140 * 2, 18 * 2, 23 * 2)
    wall40 = createSprite(150 * 2, 187 * 2, 45 * 2, 18 * 2)
    wall41 = createSprite(176 * 2, 187 * 2, 6 * 2, 18 * 2)

 
    // maze end sprite
    wizard = createSprite(width - 200, height - 200)
    wizard.addImage(level1end)
    wizard.visible = false

    level1endpop = createSprite(width / 2, height / 2)
    level1endpop.addImage(level2popup1)
    level1endpop.visible = false
    level1endpop.scale = 1.5

    //   make walls invisible

    cardboard1.visible = false
    cardboard2.visible = false
    cardboard3.visible = false
    cardboard4.visible = false
    cardboard5.visible = false
    cardboard6.visible = false
    cardboard7.visible = false
    cardboard8.visible = false
    cardboard9.visible = false
    cardboard10.visible = false
    cardboard11.visible = false
    cardboard12.visible = false
    cardboard13.visible = false
    cardboard14.visible = false;
    cardboard15.visible = false
    cardboard16.visible = false
    cardboard17.visible = false
    cardboard18.visible = false
    cardboard19.visible = false
    cardboard20.visible = false
    cardboard21.visible = false
    cardboard22.visible = false
    cardboard23.visible = false

    cardboardLeft.visible = false
    cardboardRight.visible = false
    cardboardTop.visible = false
    cardboardBottom.visible = false
    canvasSprite1.visible = false

    wall20A.visible = false
    wall24A.visible = false
    wall5A.visible = false
    wall9A.visible = false

    wall1.visible = false
    wall2.visible = false
    wall3.visible = false
    wall4.visible = false
    wall5.visible = false
    wall6.visible = false
    wall7.visible = false
    wall8.visible = false
    wall9.visible = false
    wall10.visible = false
    wall11.visible = false
    wall12.visible = false
    wall13.visible = false
    wall14.visible = false
    wall15.visible = false
    wall16.visible = false
    wall17.visible = false
    wall18.visible = false
    wall19.visible = false
    wall20.visible = false
    wall21.visible = false
    wall22.visible = false
    wall23.visible = false
    wall24.visible = false
    wall25.visible = false
    wall26.visible = false
    wall27.visible = false
    wall28.visible = false
    wall29.visible = false
    wall30.visible = false
    wall31.visible = false
    wall32.visible = false
    wall33.visible = false
    wall34.visible = false
    wall35.visible = false
    wall36.visible = false
    wall37.visible = false
    wall38.visible = false
    wall39.visible = false
    wall40.visible = false
    wall41.visible = false
    // wall42.visible = false
    wall43.visible = false


    player1 = createSprite(15 * 2, 20, 15, 15)
    player1.shapeColor = "red"
    player1.visible = false

    lifeBarA = createSprite(windowWidth - 150, 50, 150, 40)
    lifeBarA.shapeColor = "white"
    lifeBarB = createSprite(windowWidth - 150, 50, 150, 40)
    lifeBarB.shapeColor = "#E0115F"
    lifeBarA.visible = false
    lifeBarB.visible = false


    lifeBar = createSprite(windowWidth - 280, 50)
    lifeBar.addImage(lifeBarImage)
    lifeBar.scale = 0.1
    lifeBar.visible = false

    // play=createImg(name of the image file)
    play = createImg("assets/buttons/begin.gif")
    play.position(width / 2 - 150, height - height / 2.75)
    play.size(310, 310)


    sound = createImg("assets/buttons/soundwithtext.gif")
    sound.position(width / 2 + width / 4 - 100, height - height / 3.15)
    sound.size(290, 290)

    sound.hide()


    home = createImg("assets/buttons/homewithtext.gif")
    home.position(width / 2 - 150, height - height / 3)
    home.size(300, 300)
    home.hide()


    selectplayer = createImg("assets/buttons/selectplayer.gif")
    selectplayer.position(width / 2 - 250, height / 4)
    selectplayer.size(500, 500)
    selectplayer.style('z-index', 10)
    selectplayer.hide()
    // selectplayer.style("background-color","cyan")

    selectplayerboy = createImg("assets/buttons/male.png")
    selectplayerboy.position(width / 10, height / 3.5)
    selectplayerboy.hide()

    selectplayergirl = createImg("assets/buttons/femaleleft.png")
    selectplayergirl.position(width / 2 + width / 4, height / 3.5)
    // selectplayergirl.style("background-color","cyan")
    selectplayergirl.hide()

    popgirl = createSprite(width / 2, height / 2)
    popgirl.addImage(femalepopup)
    popgirl.scale = 3
    popgirl.visible = false

    popboy = createSprite(width / 2, height / 2)
    popboy.addImage(malepopup)
    popboy.scale = 3
    popboy.visible = false

    ticketbutton = createImg("assets/buttons/ticketbutton.png")
    ticketbutton.position(50, 50)
    ticketbutton.hide()

    player = createSprite(width / 6, height / 2)
    player.visible = false


    startgamebutton = createImg("assets/buttons/startgame.gif")
    startgamebutton.position(50, 0)
    // startgamebutton.style("translate","0,0")

    // startgamebutton.style("transform","-50%,50%")
    startgamebutton.size(width / 1.05, height)
    startgamebutton.hide()

    // booklevel book buttons
    book1 = createImg("assets/level2Assets/searchobjectImg/book1.png")
    book1.position(r1x, r1y)
    book1.size(50, 50)
    book1.hide()


    book2 = createImg("assets/level2Assets/searchobjectImg/book2.png")
    book2.position(r2x, r2y)
    book2.size(50, 50)
    book2.hide()



    // levelup pop up

    bookfind = createImg("assets/find/findbooks.gif")
    bookfind.position(0, 1)
    bookfind.size(width, height)
    bookfind.hide()

    candlesfind = createImg("assets/find/findcandles.gif")
    candlesfind.position(0, 1)
    candlesfind.size(width, height)
    candlesfind.hide()

    crystalsfind = createImg("assets/find/findcrystals.gif")
    crystalsfind.position(0, 1)
    crystalsfind.size(width, height)
    crystalsfind.hide()

    potionsfind = createImg("assets/find/findpotions.gif")
    potionsfind.position(0, 1)
    potionsfind.size(width, height)
    potionsfind.hide()

    levelup = createImg("assets/popup.gif")
    levelup.position(0, 1)
    levelup.size(width, height)
    levelup.hide()



    // candlelevel book buttons
    candle1 = createImg("assets/level2Assets/searchobjectImg/candle1.png")
    candle1.position(r1x, r1y)
    candle1.size(50, 50)
    candle1.hide()


    candle2 = createImg("assets/level2Assets/searchobjectImg/candle2.png")
    candle2.position(r2x, r2y)
    candle2.size(50, 50)
    candle2.hide()

    candle3 = createImg("assets/level2Assets/searchobjectImg/candle3.png")
    candle3.position(r3x, r3y)
    candle3.size(50, 50)
    candle3.hide()




    crystal1 = createImg("assets/level2Assets/searchobjectImg/gemBlue.png")
    crystal1.position(r1x, r1y)
    crystal1.size(50, 50)
    crystal1.hide()


    crystal2 = createImg("assets/level2Assets/searchobjectImg/gemGreen.png")
    crystal2.position(r2x, r2y)
    crystal2.size(50, 50)
    crystal2.hide()

    crystal3 = createImg("assets/level2Assets/searchobjectImg/gemPurple.png")
    crystal3.position(r3x, r3y)
    crystal3.size(50, 50)
    crystal3.hide()

    crystal4 = createImg("assets/level2Assets/searchobjectImg/gemRed.png")
    crystal4.position(r4x, r4y)
    crystal4.size(50, 50)
    crystal4.hide()


    crystal5 = createImg("assets/level2Assets/searchobjectImg/gemWhite.png")
    crystal5.position(r5x, r5y)
    crystal5.size(50, 50)
    crystal5.hide()

    crystal6 = createImg("assets/level2Assets/searchobjectImg/gemYellow.png")
    crystal6.position(r6x, r6y)
    crystal6.size(50, 50)
    crystal6.hide()



    // portions level buttons

    portion1 = createImg("assets/level2Assets/searchobjectImg/potionBlue.png")
    portion1.position(r1x, r1y)
    portion1.size(50, 50)
    portion1.hide()


    portion2 = createImg("assets/level2Assets/searchobjectImg/potionGreen.png")
    portion2.position(r2x, r2y)
    portion2.size(50, 50)
    portion2.hide()

    portion3 = createImg("assets/level2Assets/searchobjectImg/potionPink.png")
    portion3.position(r3x, r3y)
    portion3.size(50, 50)
    portion3.hide()

    portion4 = createImg("assets/level2Assets/searchobjectImg/potionRed.png")
    portion4.position(r4x, r4y)
    portion4.size(50, 50)
    portion4.hide()

    // final level door
    doorbutton = createImg("assets/door.png")
    doorx = Math.round(random(100, width - 150))
    doory = Math.round(random(100, height - 150))
    doorbutton.position(doorx, doory)
    doorbutton.size(250, 250)
    doorbutton.hide()


    // key
    keybutton = createImg("assets/level2Assets/searchobjectImg/key.gif")
    keyx = Math.round(random(100, width - 150))
    keyy = Math.round(random(100, height - 150))
    keybutton.position(keyx, keyy)
    keybutton.size(250, 250)
    keybutton.hide()

    // unlock
    unlockbutton = createImg("assets/openlock.gif")
    unlockbuttonx = Math.round(random(100, width - 150))
    unlockbuttony = Math.round(random(100, height - 150))
    unlockbutton.position(width / 2, height / 2)
    unlockbutton.size(350, 350)
    unlockbutton.hide()

    // treasure and free friend
    treasurebutton = createImg("assets/treasureunlocked.gif")
    // treasurebuttonx=Math.round(random(200,width-250))
    // treasurebuttony=Math.round(random(200,height-250))
    treasurebutton.position(width - 500, height - 500)
    treasurebutton.size(500, 500)
    treasurebutton.hide()

    cat = createImg("assets/cat.gif")
    // catx=Math.round(random(200,width-250))
    // caty=Math.round(random(200,height-250))
    cat.position(width - 300, height/4)
    cat.size(300, 300)
    cat.hide()

   // maze end sprite
   endsprite = createSprite(187 * 2.05, 175 * 2.25, 18 * 2, 6 * 2)
   endsprite.addImage(doorimage)
   endsprite.scale=0.075
   // endsprite.debug=true
   endsprite.visible=false


}



function draw() {

    if (!introMusic.isPlaying()) {
        introMusic.play()
        introMusic.setVolume(0.2)
    }

    if (gameState == "wait") {
        background(waitimg)
        home.hide()
        // about.show()
        play.show()
        // sound.show()
        // poplevel1.hide()
        selectplayer.hide()
        selectplayergirl.hide()
        popgirl.visible = false
        ticketbutton.hide()
        popboy.visible = false
        startgamebutton.hide()



    }

    if (selectplayerboy.mousePressed(() => {
        buttonSounds.play()
        selectplayergirl.remove()
        popboy.visible = true
        popgirl.visible = false
        selectplayer.hide()
        ticketbutton.show()
        startgamebutton.hide()


    }))

        if (selectplayergirl.mousePressed(() => {
            buttonSounds.play()
            popgirl.visible = true
            selectplayer.hide()
            popboy.visible = false
            selectplayerboy.remove()
            ticketbutton.show()
            startgamebutton.hide()

        }))

            // selectplayerboy

            if (play.mousePressed(() => {
                gameState = "begin"
                buttonSounds.play()

            }))

                if (enterlevel2.mousePressed(() => {
                    gameState = "level2Info"
                    buttonSounds.play()

                }))

                    if (ticketbutton.mousePressed(() => {
                        gameState = "level1"
                        buttonSounds.play()


                    }))

                        if (startgamebutton.mousePressed(() => {
                            gameState = "mazegame"
                            buttonSounds.play()


                        }))

                            if (selectplayer.mousePressed(() => {
                                gameState = "playerselect"
                                buttonSounds.play()


                            }))

                                if (home.mousePressed(() => {
                                    gameState = "wait"
                                    buttonSounds.play()


                                }))



                                    if (gameState === "begin") {
                                        background(beginimg)

                                        play.hide()
                                        // home.show()
                                        // about.hide()
                                        sound.hide()
                                        // poplevel1.show()
                                        selectplayer.show()


                                    }


    if (gameState === "level1") {
        background(a1Img)

        play.hide()

        sound.hide()
        selectplayer.hide()
        popgirl.visible = false
        selectplayer.hide()
        popboy.visible = false
        selectplayerboy.remove()
        selectplayergirl.remove()
        ticketbutton.hide()
        startgamebutton.show()


    }

    if (gameState === "playerselect") {
        selectplayergirl.show()
        selectplayerboy.show()
        startgamebutton.hide()


    }

    // MAZE GAME STARTS HERE

    if (gameState === "mazegame") {
        introMusic.stop()
        if (!backgroundMusic.isPlaying()) {
            backgroundMusic.play()
            backgroundMusic.setVolume(0.4)
        }


        mazeGameCode()
        // background("yellow")
        play.hide()
        sound.hide()
        selectplayer.hide()
        popgirl.visible = false
        selectplayer.hide()
        popboy.visible = false
        selectplayerboy.remove()
        selectplayergirl.remove()
        ticketbutton.hide()
        startgamebutton.hide()


    }

    if (gameState === "level2Info") {
        if (!levelupsound.isPlaying()) {
            levelupsound.play()
backgroundMusic.stop()
        }



        level2()
    }


    drawSprites()
    

    if (gameState === "booklevelcleared" && collect1 == 2) {
        // levelup=createImg("assets/level2Assets/level-up-unscreen.gif")
        // levelup.position(width/9,1)
        // levelup.size(800,800)

        candlesfind.show()
        if (!levelupsound.isPlaying()) {
            levelupsound.play()

        }


        if (candlesfind.mousePressed(() => {
            gameState = "level3"
            console.log(gameState)

        })) { }
    }

    if (gameState === "candlelevelcleared" && collect2 == 3) {
        // levelup=createImg("assets/level2Assets/level-up-unscreen.gif")
        // levelup.position(width/9,1)
        // levelup.size(800,800)
        crystalsfind.show()
        if (!levelupsound.isPlaying()) {
            levelupsound.play()

        }


        if (crystalsfind.mousePressed(() => {
            gameState = "level4"
            console.log(gameState)

        })) { }
    }

    if (gameState === "crystallevelcleared" && collect3 == 6) {
        // levelup=createImg("assets/level2Assets/level-up-unscreen.gif")
        // levelup.position(width/9,1)
        // levelup.size(800,800)
        potionsfind.show()
        if (!levelupsound.isPlaying()) {
            levelupsound.play()

        }


        if (potionsfind.mousePressed(() => {
            gameState = "level5"
            console.log(gameState)

        })) { }
    }

    if (gameState === "portionlevelcleared" && collect4 == 4) {
        // levelup=createImg("assets/level2Assets/level-up-unscreen.gif")
        // levelup.position(width/9,1)
        // levelup.size(800,800)
        levelup.show()
        if (!levelupsound.isPlaying()) {
            levelupsound.play()

        }
        cat.show()


        if (levelup.mousePressed(() => {
            gameState = "level6"
            console.log(gameState)

        })) { }
    }



    if (gameState === "level3") {
        background(find2img)
        // levelup.hide()
        candlesfind.hide()
        level3()

    }

    if (gameState === "level4") {
        background(find3img)
        crystalsfind.hide()
        level4()

    }

    if (gameState === "level5") {
        background(find4img)
        potionsfind.hide()
        level5()

    }

    if (gameState === "level6") {
        background(find5img)
        levelup.hide()
        cat.hide()
        level6()

    }

    if (gameState === "getkey") {
        // background(find5img)
        // levelup.hide()
        // level6()

        keybutton.show()
        doorbutton.hide()

        keybutton.mousePressed(() => {
            gameState = "unlock"
        })

    }


    if (gameState === "unlock") {
        keybutton.hide()
        unlockbutton.show()
        level7()
    }

}

// if (gameState==="over"){
// unlockbutton.hide()
// // // treasurebutton.show()
// // console.log("gameover")
// //  gameOver()

// }



function mazeGameCode() {


    // make sprites visible
endsprite.visible=true
    player1.visible = true
    lifeBarA.visible = true
    lifeBarB.visible = true
    lifeBar.visible = true

    cardboard1.visible = true

    cardboard2.visible = true

    cardboard3.visible = true

    cardboard4.visible = true

    cardboard5.visible = true

    cardboard6.visible = true

    cardboard7.visible = true

    cardboard8.visible = true

    cardboard9.visible = true

    cardboard10.visible = true

    cardboard11.visible = true

    cardboard12.visible = true

    cardboard13.visible = true

    cardboard14.visible = true;

    cardboard15.visible = true

    cardboard16.visible = true

    cardboard17.visible = true

    cardboard18.visible = true

    cardboard19.visible = true

    cardboard20.visible = true

    cardboard21.visible = true

    cardboard22.visible = true

    cardboard23.visible = true

    cardboardLeft.visible = true
    cardboardRight.visible = true
    cardboardTop.visible = true
    cardboardBottom.visible = true
    canvasSprite1.visible = true



    wall20A.visible = false
    wall24A.visible = false
    wall5A.visible = false
    wall9A.visible = false

    wall1.visible = false
    wall2.visible = false
    wall3.visible = false
    wall4.visible = false
    wall5.visible = false
    wall6.visible = false
    wall7.visible = false
    wall8.visible = false
    wall9.visible = false
    wall10.visible = false
    wall11.visible = false
    wall12.visible = false
    wall13.visible = false
    wall14.visible = false
    wall15.visible = false
    wall16.visible = false
    wall17.visible = false
    wall18.visible = false
    wall19.visible = false
    wall20.visible = false
    wall21.visible = false
    wall22.visible = false
    wall23.visible = false
    wall24.visible = false
    wall25.visible = false
    wall26.visible = false
    wall27.visible = false
    wall28.visible = false
    wall29.visible = false
    wall30.visible = false
    wall31.visible = false
    wall32.visible = false
    wall33.visible = false
    wall34.visible = false
    wall35.visible = false
    wall36.visible = false
    wall37.visible = false
    wall38.visible = false
    wall39.visible = false
    wall40.visible = false
    wall41.visible = false

    // wall42.visible = true
    wall43.visible = false



    // making sprites visible ends here

    if (wall1.isTouching(player1)) {
        a1sprite.scale = a1sprite.scale + 0.005
        a1Execpt()
    }
    /*   if (wall2.isTouching(player1)) {
           c1sprite.x = c1sprite.x - 4
           c1Execpt()
       }
   
       */
    if (wall4.isTouching(player1) || (wall5).isTouching(player1) || (wall5A).isTouching(player1)) {
        b1sprite.x = b1sprite.x - 4
        b1Execpt()
    }
    if (wall18.isTouching(player1) || wall19.isTouching(player1)) {
        c1sprite.x = c1sprite.x - 4
        c1Execpt()
    }
    if (wall17.isTouching(player1) || wall20.isTouching(player1)) {
        d1sprite.x = d1sprite.x - 4
        d1Execpt()
    }
    if (wall20A.isTouching(player1) || wall21.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall22.isTouching(player1)) {
        f1sprite.scale = f1sprite.scale + 0.003
        f1sprite.x = f1sprite.x - 2
        f1Execpt()
    }
    if (wall24A.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall24.isTouching(player1) || wall23.isTouching(player1)) {
        b1sprite.x = b1sprite.x - 4
        b1Execpt()
    }
    if (wall24A.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall37.isTouching(player1)) {
        a1sprite.scale = a1sprite.scale + 0.005
        a1Execpt()
    }
    if (wall28.isTouching(player1)) {
        d1sprite.x = d1sprite.x - 4
        d1Execpt()
    }
    if (wall43.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall36.isTouching(player1)) {
        f1sprite.scale = f1sprite.scale + 0.003
        f1sprite.x = f1sprite.x - 2
        f1Execpt()
    }
    if (wall35.isTouching(player1)) {
        c1sprite.x = c1sprite.x - 4
        c1Execpt()
    }
    if (wall38.isTouching(player1)) {
        a1sprite.scale = a1sprite.scale + 0.005
        a1Execpt()
    }





    if (wall3.isTouching(player1)) {
        a1sprite.scale = a1sprite.scale + 0.005
        a1Execpt()
    }
    if (wall6.isTouching(player1)) {
        c1sprite.x = c1sprite.x - 4
        c1Execpt()
    }
    if (wall7.isTouching(player1)) {
        b1sprite.x = b1sprite.x - 4
        b1Execpt()
    }
    if (wall8.isTouching(player1)) {
        c1sprite.x = c1sprite.x - 4
        c1Execpt()
    }
    if (wall9.isTouching(player1)) {
        d1sprite.x = d1sprite.x - 4
        d1Execpt()
    }
    if (wall9A.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall10.isTouching(player1)) {
        f1sprite.scale = f1sprite.scale + 0.003
        f1sprite.x = f1sprite.x - 2
        f1Execpt()
    }
    if (wall11.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall12.isTouching(player1)) {
        b1sprite.x = b1sprite.x - 4
        b1Execpt()
    }
    if (wall13.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall14.isTouching(player1)) {
        a1sprite.scale = a1sprite.scale + 0.005
        a1Execpt()
    }
    if (wall15.isTouching(player1)) {
        d1sprite.x = d1sprite.x - 4
        d1Execpt()
    }
    if (wall16.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall25.isTouching(player1)) {
        f1sprite.scale = f1sprite.scale + 0.003
        f1sprite.x = f1sprite.x - 2
        f1Execpt()
    }
    if (wall26.isTouching(player1)) {
        c1sprite.x = c1sprite.x - 4
        c1Execpt()
    }
    if (wall27.isTouching(player1)) {
        a1sprite.scale = a1sprite.scale + 0.005
        a1Execpt()
    }
    if (wall29.isTouching(player1)) {
        a1sprite.scale = a1sprite.scale + 0.005
        a1Execpt()
    }
    if (wall30.isTouching(player1)) {
        c1sprite.x = c1sprite.x - 4
        c1Execpt()
    }
    if (wall31.isTouching(player1)) {
        b1sprite.x = b1sprite.x - 4
        b1Execpt()
    }
    if (wall32.isTouching(player1)) {
        c1sprite.x = c1sprite.x - 4
        c1Execpt()
    }
    if (wall33.isTouching(player1)) {
        d1sprite.x = d1sprite.x - 4
        d1Execpt()
    }
    if (wall34.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall39.isTouching(player1)) {
        f1sprite.scale = f1sprite.scale + 0.003
        f1sprite.x = f1sprite.x - 2
        f1Execpt()
    }
    if (wall40.isTouching(player1)) {
        e1sprite.scale = e1sprite.scale + 0.005
        e1Execpt()
    }
    if (wall41.isTouching(player1)) {
        b1sprite.x = b1sprite.x - 4
        b1Execpt()
    }

    if (player1.isTouching(mazeEdge1)) {
        player1.bounceOff(mazeEdge1)
    } if (player1.isTouching(mazeEdge2)) {
        player1.bounceOff(mazeEdge2)
    } if (player1.isTouching(mazeEdge3)) {
        player1.bounceOff(mazeEdge3)
    } if (player1.isTouching(mazeEdge4)) {
        player1.bounceOff(mazeEdge4)
    }
    if (player1.isTouching(cardboard1) || player1.isTouching(cardboard2) || player1.isTouching(cardboard3) || player1.isTouching(cardboard4) || player1.isTouching(cardboard5) || player1.isTouching(cardboard6) || player1.isTouching(cardboard7) || player1.isTouching(cardboard8) || player1.isTouching(cardboard9) || player1.isTouching(cardboard10) ||
        player1.isTouching(cardboard11) || player1.isTouching(cardboard12) || player1.isTouching(cardboard13) || player1.isTouching(cardboard14) || player1.isTouching(cardboard15) || player1.isTouching(cardboard16) || player1.isTouching(cardboard17) || player1.isTouching(cardboard18) || player1.isTouching(cardboard19) || player1.isTouching(cardboard20) ||
        player1.isTouching(cardboard21) || player1.isTouching(cardboard22) || player1.isTouching(cardboardRight) || player1.isTouching(cardboardLeft) || player1.isTouching(cardboardBottom) || player1.isTouching(cardboardTop)) {
        lifeBarB.width = lifeBarB.width - 30
        lifeBarB.x = lifeBarB.x + 15
        player1.velocityX = 0
        player1.velocityY = 0
        player1.x = 15
        player1.y = 10
        a1sprite.scale = 1.43
        b1sprite.scale = 0.9
        c1sprite.scale = 0.9
        d1sprite.scale = 0.9
        e1sprite.scale = 1.43
        f1sprite.scale = 1.1
        a1sprite.visible = false
        b1sprite.visible = false
        c1sprite.visible = false
        d1sprite.visible = false
        e1sprite.visible = false
        f1sprite.visible = false
    }

    console.log(b1sprite.x)


    if (endsprite.isTouching(player1)) {
        player.destroy()
        endsprite.visible = false
        wizard.visible = true
        level1endpop.visible = true
        enterlevel2.show()
        player1.velocityX = 0
        player1.velocityY = 0
        cardboard1.destroy()
        cardboard2.destroy()
        cardboard3.destroy()
        cardboard4.destroy()
        cardboard5.destroy()
        cardboard6.destroy()
        cardboard7.destroy()
        cardboard8.destroy()
        cardboard9.destroy()
        cardboard10.destroy()
        cardboard11.destroy()
        cardboard12.destroy()
        cardboard13.destroy()
        cardboard14.destroy()
        cardboard15.destroy()
        cardboard16.destroy()
        cardboard17.destroy()
        cardboard18.destroy()
        cardboard19.destroy()
        cardboard20.destroy()
        cardboard21.destroy()
        cardboard22.destroy()
        cardboard23.destroy()
        a1sprite.destroy()
        b1sprite.destroy()
        c1sprite.destroy()
        d1sprite.destroy()
        e1sprite.destroy()
        f1sprite.destroy()
        cardboardLeft.destroy()
        cardboardRight.destroy()
        cardboardTop.destroy()
        cardboardBottom.destroy()
        canvasSprite1.destroy()
        lifeBar.destroy()
        lifeBarA.destroy()
        lifeBarB.destroy()

        background(forest1Img)
    }

}

function a1Execpt() {
    b1sprite.scale = 0.9
    c1sprite.scale = 0.9
    d1sprite.scale = 0.9
    e1sprite.scale = 1.43
    g1sprite.scale = 0.9
    f1sprite.scale = 1.1
    b1sprite.visible = false
    c1sprite.visible = false
    d1sprite.visible = false
    e1sprite.visible = false
    f1sprite.visible = false
    a1sprite.visible = true
    b1sprite.x = width / 2 + 570
    c1sprite.x = width / 2 + 570
    d1sprite.x = width / 2 + 570
    f1sprite.x = width / 2
}
function b1Execpt() {
    a1sprite.scale = 1.43
    c1sprite.scale = 0.9
    d1sprite.scale = 0.9
    e1sprite.scale = 1.43
    g1sprite.scale = 0.9
    f1sprite.scale = 1.1
    a1sprite.visible = false
    b1sprite.visible = true
    c1sprite.visible = false
    d1sprite.visible = false
    e1sprite.visible = false
    f1sprite.visible = false
    c1sprite.x = width / 2 + 570
    d1sprite.x = width / 2 + 570
    f1sprite.x = width / 2
}
function c1Execpt() {
    a1sprite.scale = 1.43
    b1sprite.scale = 0.9
    d1sprite.scale = 0.9
    e1sprite.scale = 1.43
    g1sprite.scale = 0.9
    f1sprite.scale = 1.1
    a1sprite.visible = false
    b1sprite.visible = false
    c1sprite.visible = true
    d1sprite.visible = false
    e1sprite.visible = false
    f1sprite.visible = false
    b1sprite.x = width / 2 + 570
    f1sprite.x = width / 2
    d1sprite.x = width / 2 + 570
}
function d1Execpt() {
    a1sprite.scale = 1.43
    b1sprite.scale = 0.9
    c1sprite.scale = 0.9
    e1sprite.scale = 1.43
    g1sprite.scale = 0.9
    f1sprite.scale = 1.1
    a1sprite.visible = false
    b1sprite.visible = false
    c1sprite.visible = false
    d1sprite.visible = true
    e1sprite.visible = false
    f1sprite.visible = false
    b1sprite.x = width / 2 + 570
    f1sprite.x = width / 2
    c1sprite.x = width / 2 + 570
}
function e1Execpt() {
    a1sprite.scale = 1.43
    b1sprite.scale = 0.9
    c1sprite.scale = 0.9
    d1sprite.scale = 0.9
    g1sprite.scale = 0.9
    f1sprite.scale = 1.1
    a1sprite.visible = false
    b1sprite.visible = false
    c1sprite.visible = false
    d1sprite.visible = false
    e1sprite.visible = true
    f1sprite.visible = false
    b1sprite.x = width / 2 + 570
    c1sprite.x = width / 2 + 570
    f1sprite.x = width / 2
    d1sprite.x = width / 2 + 570
}
function f1Execpt() {
    a1sprite.scale = 1.43
    b1sprite.scale = 0.9
    c1sprite.scale = 0.9
    d1sprite.scale = 0.9
    g1sprite.scale = 0.9
    e1sprite.scale = 1.43
    a1sprite.visible = false
    b1sprite.visible = false
    c1sprite.visible = false
    d1sprite.visible = false
    e1sprite.visible = false
    f1sprite.visible = true
    b1sprite.x = width / 2 + 570
    c1sprite.x = width / 2 + 570
    d1sprite.x = width / 2 + 570
}
function g1Execpt() {
    a1sprite.scale = 1.43
    b1sprite.scale = 0.9
    c1sprite.scale = 0.9
    d1sprite.scale = 0.9
    e1sprite.scale = 1.43
    f1sprite.scale = 1.1
    a1sprite.visible = false
    b1sprite.visible = false
    c1sprite.visible = false
    d1sprite.visible = false
    e1sprite.visible = false
    f1sprite.visible = false
    g1sprite.visible = true
}

function keyPressed() {
    if (keyCode === DOWN_ARROW) {
        player1.velocityX = 0
        player1.velocityY = 1

    }
    if (keyCode === UP_ARROW) {
        player1.velocityX = 0
        player1.velocityY = -1

    }
    if (keyCode === RIGHT_ARROW) {
        player1.velocityX = 1
        player1.velocityY = 0

    }
    if (keyCode === LEFT_ARROW) {
        player1.velocityX = -1
        player1.velocityY = 0

    }

}

function keyReleased() {
    if (keyCode === DOWN_ARROW) {
        player1.velocityX = 0
        player1.velocityY = 0
        b1sprite.x = width / 2 + 570
        c1sprite.x = width / 2 + 570
        d1sprite.x = width / 2 + 570
        f1sprite.x = width / 2
        a1sprite.scale = 1.43
        b1sprite.scale = 0.9
        c1sprite.scale = 0.9
        d1sprite.scale = 0.9
        e1sprite.scale = 1.43
        f1sprite.scale = 1.1
    }

    if (keyCode === LEFT_ARROW) {
        player1.velocityX = 0
        player1.velocityY = 0
        b1sprite.x = width / 2 + 570
        c1sprite.x = width / 2 + 570
        d1sprite.x = width / 2 + 570
        f1sprite.x = width / 2
        a1sprite.scale = 1.43
        b1sprite.scale = 0.9
        c1sprite.scale = 0.9
        d1sprite.scale = 0.9
        e1sprite.scale = 1.43
        f1sprite.scale = 1.1
    }
    if (keyCode === RIGHT_ARROW) {
        player1.velocityX = 0
        player1.velocityY = 0
        b1sprite.x = width / 2 + 570
        c1sprite.x = width / 2 + 570
        d1sprite.x = width / 2 + 570
        f1sprite.x = width / 2
        a1sprite.scale = 1.43
        b1sprite.scale = 0.9
        c1sprite.scale = 0.9
        d1sprite.scale = 0.9
        e1sprite.scale = 1.43
        f1sprite.scale = 1.1
    }

    if (keyCode === UP_ARROW) {
        player1.velocityX = 0
        player1.velocityY = -0
        b1sprite.x = width / 2 + 570
        c1sprite.x = width / 2 + 570
        d1sprite.x = width / 2 + 570
        f1sprite.x = width / 2
        a1sprite.scale = 1.43
        b1sprite.scale = 0.9
        c1sprite.scale = 0.9
        d1sprite.scale = 0.9
        e1sprite.scale = 1.43
        f1sprite.scale = 1.1
    }
}




function level2() {

    background(find1img)
    wizard.visible = false
    level1endpop.visible = false
    enterlevel2.hide()
    endsprite.visible = false
    player1.destroy()


    book1.show()
    book2.show()



    if (book1.mousePressed(() => {
        gotitem.play()
        collect1 += 1
        console.log(collect1)
        book1.hide()
        gameState = "booklevelcleared"
    })) {

    }

    if (book2.mousePressed(() => {
        gotitem.play()

        collect1 += 1
        console.log(collect1)
        book2.hide()
        gameState = "booklevelcleared"

    })) {

    }

    if (collect1 == 2) {
        gameState = "booklevelcleared"
    }

}


function level3() {
    candle1.show()
    candle2.show()
    candle3.show()


    if (candle1.mousePressed(() => {
        gotitem.play()
        collect2 += 1
        console.log(collect1)
        candle1.hide()
        gameState = "candlelevelcleared"
    })) {

    }

    if (candle2.mousePressed(() => {
        gotitem.play()
        collect2 += 1
        console.log(collect1)
        candle2.hide()
        gameState = "candlelevelcleared"

    })) {

    }
    if (candle3.mousePressed(() => {
        gotitem.play()
        collect2 += 1
        console.log(collect1)
        candle3.hide()
        gameState = "candlelevelcleared"

    })) {

    }

    if (collect2 == 3) {
        gameState = "candlelevelcleared"
    }
}


function level4() {
    crystal1.show()
    crystal2.show()
    crystal3.show()
    crystal4.show()
    crystal5.show()
    crystal6.show()


    if (crystal1.mousePressed(() => {
        gotitem.play()
        collect3 += 1
        console.log(collect3)
        crystal1.hide()
        gameState = "crystallevelcleared"
    })) {

    }


    if (crystal2.mousePressed(() => {
        gotitem.play()
        collect3 += 1
        console.log(collect3)
        crystal2.hide()
        gameState = "crystallevelcleared"
    })) {

    }

    if (crystal3.mousePressed(() => {
        gotitem.play()
        collect3 += 1
        console.log(collect3)
        crystal3.hide()
        gameState = "crystallevelcleared"
    })) {

    }

    if (crystal4.mousePressed(() => {
        gotitem.play()
        collect3 += 1
        console.log(collect3)
        crystal4.hide()
        gameState = "crystallevelcleared"
    })) {

    }


    if (crystal5.mousePressed(() => {
        gotitem.play()
        collect3 += 1
        console.log(collect3)
        crystal5.hide()
        gameState = "crystallevelcleared"
    })) {

    }

    if (crystal6.mousePressed(() => {
        gotitem.play()
        collect3 += 1
        console.log(collect3)
        crystal6.hide()
        gameState = "crystallevelcleared"
    })) {

    }

    if (collect3 == 6) {
        gameState = "crystallevelcleared"
    }
}




function level5() {
    portion1.show()
    portion2.show()
    portion3.show()
    portion4.show()



    if (portion1.mousePressed(() => {
        gotitem.play()
        collect4 += 1
        console.log(collect3)
        portion1.hide()
        gameState = "portionlevelcleared"
    })) {

    }


    if (portion2.mousePressed(() => {
        gotitem.play()
        collect4 += 1
        console.log(collect3)
        portion2.hide()
        gameState = "portionlevelcleared"
    })) {

    }

    if (portion3.mousePressed(() => {
        gotitem.play()
        collect4 += 1
        console.log(collect3)
        portion3.hide()
        gameState = "portionlevelcleared"
    })) {

    }

    if (portion4.mousePressed(() => {
        gotitem.play()
        collect4 += 1
        console.log(collect3)
        portion4.hide()
        gameState = "portionlevelcleared"
    })) {

    }

    if (collect4 == 4) {
        gameState = "portionlevelcleared"
    }


}

function level6() {
    doorbutton.show()

    if (doorbutton.mousePressed(() => {
        if (!levelupsound.isPlaying()) {
            levelupsound.play()

        }

        // keybutton.show()
        // doorbutton.hide()
        gameState = "getkey"
    })) {

    }

}


function level7() {

    unlockbutton.mousePressed(() => {
        if (!levelupsound.isPlaying()) {
            levelupsound.play()

        }
        treasurebutton.show()
        unlockbutton.hide()
        // cat.show()
        // gameState="over"

        gameOver()
    })

}


// //gameover function
function gameOver() {

    unlockbutton.hide()
    swal(
        {

            title: `Game Over!!!`,
            text: "\n\t\t KUDOS !!! \nYou Found the Treasure and Saved your friend too... ",
            imageUrl: "assets/gift.gif",
            imageSize: "250x250",
            confirmButtonText: "Restart",
            confirmButtonColor: "cyan"
        },
        function (isConfirm) {
            if (isConfirm) {
                location.reload();
            }
        }
    )
}
