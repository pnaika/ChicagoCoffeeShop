/**
 * Created by Prashanth on 5/14/2015.
 */

    var slideimages = new Array() // create new array to preload images

    slideimages[5] = new Image() // create new instance of image object
    slideimages[5].src = "images/miscphotos/5468002282_5cd8fc06c4_b.jpg" // set image object src property to an image's src, preloading that image in the process
    slideimages[1] = new Image()
    slideimages[1].src = "images/miscphotos/hotcoffee.jpg"
    slideimages[0] = new Image()
    slideimages[0].src = "images/miscphotos/beans1.jpg"
    slideimages[6] = new Image()
    slideimages[6].src = "images/miscphotos/5484208335_7281e9fffd_b.jpg"
    slideimages[4] = new Image()
    slideimages[4].src = "images/miscphotos/5970884485_e5ee84b84a_b.jpg"
    slideimages[3] = new Image()
    slideimages[3].src = "images/miscphotos/4180675282_54f8a4c1a5_b.jpg"
    slideimages[2] = new Image()
    slideimages[2].src = "images/miscphotos/8808069436_6324fea6bb_b.jpg"
    slideimages[7] = new Image()
    slideimages[7].src = "images/grid-cell-1256-1405413576-0.jpg"

    var step=0
    function slideit(){
        //if browser does not support the image object, exit.
        if (!document.images)
            return
        document.getElementById('slide').src = slideimages[step].src
        if (step<7)
            step++
        else
            step=0
        //call function "slideit()" every 2.5 seconds
        setTimeout("slideit()",2000)
    };