
deg=0;

function spin(){
    wheel = document.getElementById("wheel").style.transform;
    deg+= Math.random()*360 + 2160;
    document.getElementById("wheel").style.transform = `rotate(${deg}deg)`;
    if(deg%360<=30){
        console.log("red")
        setTimeout(function(){
            document.body.style.background = "url(http://drive.google.com/uc?export=view&id=1K176BhTTs3Ex_vSJCjsjJTTtkTU66vVl)";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize =  'auto 100%';
        document.body.style.backgroundPosition= ' center';
        },2500)
    }else if(deg%360<=90){
        console.log("voilet")
        setTimeout(function(){
            document.body.style.background = "url(http://drive.google.com/uc?export=view&id=1LzeApZrT_lDw2Aq7rsvUmR3aVAq_EOJM)";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize =  'auto 100%';
        document.body.style.backgroundPosition= 'bottom center';
        },2500)
    }else if(deg%360<=150){
        console.log("blue")
        setTimeout(function(){
            document.body.style.background = "url(http://drive.google.com/uc?export=view&id=1mDky5cnuNWfvuy2opB1MqKMtn6pl95Hx)";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize =  'auto 100%';
        document.body.style.backgroundPosition= 'center';
        },2500)
    }else if(deg%360<=210){
        console.log("green")
        setTimeout(function(){
            document.body.style.background = "url(http://drive.google.com/uc?export=view&id=1VxlG-1UChoh-lYWTMKO9n1AZay_ZBUhH)";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize =  'auto 100%';
        document.body.style.backgroundPosition= 'center';
        },2500)
    }else if(deg%360<=270){
        console.log("yellow")
        setTimeout(function(){
            document.body.style.background = "url(http://drive.google.com/uc?export=view&id=1186DUJ2GH_qDCQwA3Gdalb3cNZSVRgeg)";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize =  'auto 100%';
        document.body.style.backgroundPosition= 'center';
        },2500)
    }else if(deg%360<=330){
        console.log("orange")
        setTimeout(function(){
            document.body.style.background = "url(http://drive.google.com/uc?export=view&id=1O4XgIwAvuLAN6KCydhVb9niClfeGVmss)";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize =  'auto 100%';
        document.body.style.backgroundPosition= 'center';
        },2500)
    }else{
        console.log("red")
        setTimeout(function(){
            document.body.style.background = "url(http://drive.google.com/uc?export=view&id=1K176BhTTs3Ex_vSJCjsjJTTtkTU66vVl)";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize =  'auto 100%';
        document.body.style.backgroundPosition= 'center';
        },2500)
    }
}

