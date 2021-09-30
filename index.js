var models = [
    {
        name:'Samsung A50',
        image:'img/slider1.webp',
        link:'www.google.com'
    },
    {
        name:'huaweiTel',
        image:'img/slider2.jpg',
        link:'www.google.com'
    },
    {
        name:'lenovoPc',
        image:'img/slider3.jpg',
        link:'www.google.com'
    },
    {
        name:'nikonFotoKamera',
        image:'img/slider4.jpg',
        link:'www.google.com'
    }
];

var index = 0;
var slaytCount = models.length;
var ayarlar = {
    sure:'2000',
    rastgele:true
};
var interval;


// showSlide(index); //sıralı şekilde açılan slider
init(ayarlar);


var sol = document.querySelector('.bi-arrow-left-circle-fill');
sol.style.cursor='pointer';
sol.addEventListener('click',function(){
    index--;
    showSlide(index);
});

var sag = document.querySelector('.bi-arrow-right-circle-fill');
sag.style.cursor='pointer';
sag.addEventListener('click',function(){
    index++;
    showSlide(index);
});

function init(ayar){
    var prev;
    interval = setInterval(function(){
        if(ayar.rastgele){
            //random foto acilimi

            do{
                index = Math.floor(Math.random()*slaytCount);
            }while(index == prev);

            prev = index;
            showSlide(index);

        }
        else{
            //artan index
            if(slaytCount == index){
                index = 0;
            }
            showSlide(index);
            index++;
        }
      
    },ayar.sure);
};

function clearinterval(){
    clearInterval(interval);
}

function startinterval(){
    init(ayarlar);
}

sol.addEventListener('mouseenter',clearinterval);
sag.addEventListener('mouseenter',clearinterval);

sol.addEventListener('mouseleave',startinterval);
sag.addEventListener('mouseleave',startinterval);

function showSlide(i){

    index = i;

    if(i<0){
        index = slaytCount - 1;
    }else if(i>=slaytCount){
        index = 0;
    }

    document.querySelector('.card-title').textContent=models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    
    document.querySelector('.btn').setAttribute('href',models[index].link);
};