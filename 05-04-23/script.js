images=["img1.jpg","img2.jpg","img3.jpg","img4.jpg"]
let count = 0
setInterval(function(){
    document.getElementById("current").src=images[count]
    if(count<images.length-1)
    count++
    else
    count = 0
},1000)