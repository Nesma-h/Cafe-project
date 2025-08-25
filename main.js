// السهم وحواليه الكلام بيدور
document.querySelector('.circle .text').innerHTML=document.querySelector('.circle .text').innerText.split("").map((ch, idx) => `<span style="transform:rotate(${idx * 9.5}deg)"> ${ch} </span>`).join('')
new WOW().init();

//  scroll 

document.querySelector('.about .logo').addEventListener("wheel", function(e) {
    const scro = document.querySelector('.about .details');

    const scrollHeight = scro.scrollHeight;
    const clientHeight = scro.clientHeight;
    const scrollTop = scro.scrollTop;   
    if (scrollHeight <= clientHeight) {
        return;
    }

    const isScrollingDown = e.deltaY > 0;
    const isScrollingUp = e.deltaY < 0;
    
    const atBottom = scrollTop + clientHeight >= scrollHeight -1 ;
    const atTop = scrollTop === 0;

    if (isScrollingDown && !atBottom) {
        e.preventDefault();
        scro.scrollTop += 150;
        return; 
    }

    if (isScrollingUp && !atTop) {
        e.preventDefault(); 
        scro.scrollTop -= 150; 
        return; 
    }

    });
    // menue

    $('.menucard').even().addClass('not-active')

    $('.menucards').slideUp(0)
    $('.one').addClass('menuLiActive')
    $('.menu-one').slideDown()


    $('.menu .logo li').click(function(){
        if ($(`.menu-${$(this).attr('class')}` .split(' ')[0]).is(':visible')) {
        return;
    }
        // console.log($(this).attr('class'))
        $('.menucards').slideUp(200)
        $(`.menu-${$(this).attr('class')}`).slideDown(1000)
        $('.menu .logo li').removeClass('menuLiActive')
        $(this).addClass('menuLiActive')
    })

    // gallary zoom photos
    let selectedIdx
    let divs=document.querySelectorAll('.gallary .gallary-photo > div')
    $('.zoom-photo').hide(0)
    for(let i=0; i<divs.length; i++){
        divs[i].onclick=function(){
            let src=$(this).children('img').attr('src')
            $('.zoom-photo img').attr('src',src)
            $('.zoom-photo').show(20)
            // console.log(imgs[i].getAttribute('src'))
            selectedIdx = i
            updateButtons()
        }
    }
    $('.next').click(function(){
        if(selectedIdx == divs.length -1) return
        selectedIdx++;
        let src = $(divs[selectedIdx]).children('img').attr('src')
        $('.zoom-photo img').attr('src',src)
        updateButtons()
    })
    $('.back').click(function(){
        if(selectedIdx == 0) return
        selectedIdx--;
        let src = $(divs[selectedIdx]).children('img').attr('src')
        $('.zoom-photo img').attr('src',src)
        updateButtons()
    })
    function updateButtons(){
    if(selectedIdx <= 0){
        $('.back').addClass('disable')
    } else {
        $('.back').removeClass('disable')
    }

    if(selectedIdx >= divs.length-1 ){
        $('.next').addClass('disable')
    } else {
        $('.next').removeClass('disable')
    }
    }

    $('.shadow').click(function(){
        $('.zoom-photo').hide(50)
    })
    $('.fa-circle-xmark').click(function(){
        $('.zoom-photo').hide(50)
    })

    //slider
    $(document).ready(function(){
    $('.clientCards').slick({
    autoplay: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility: true,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 950, 
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1
            }
        }
    ]
    });
});


//scroll 
document.querySelector('.circle').addEventListener('click', function(e) {
e.preventDefault();
document.querySelector('#en').scrollIntoView({
    behavior: 'smooth'
});
});

let sec=document.querySelectorAll('section')
let li=document.querySelectorAll('nav ul li')
let current=''
document.addEventListener('scroll',function(e){
    // console.log(e)
    if(window.scrollY>=500)$('nav').css({
        position:'sticky',
        top:0, left:0, background:'#090a0a',
    })
    else{
        $('nav').css({position:'relative'})
    }

    for(let i=0; i<4; i++){
        let secTop = sec[i].offsetTop ;
        let secHeight = sec[i].clientHeight;
    if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
    current = sec[i].getAttribute("class");
    }
    }
    for(let i=0; i<4; i++){
        if('#'+current==$(li[i]).children('a').attr('href')){
            $(li[i]).children('a').addClass('nav-active')
        }
        else{
            $(li[i]).children('a').removeClass('nav-active')
        }
    }
})
$('nav .fa-bars').click(function(){
    $('nav ul').toggleClass('show')
    $('nav div').toggleClass('show')
    $('nav .fa-bars').toggleClass('active-bar')
})

$('nav div i').first().click(function(){
    $('*').toggleClass('light')
    // $('p').toggleClass('light')
    // $('span').toggleClass('light')
    $('.menucard').even().toggleClass('not-active')
    $('.menucard').even().toggleClass('active')
    
})

let data=[]
$('.fa-cart-shopping').click(function(){
    let found= data.find(a => a.name == $(this).parent().prev().children('span').text())
    if(found){
        found.amount++;
    }
    else{
    let x={
        name:  $(this).parent().prev().children('span').text(),
        price: parseFloat( $(this).parent().prev().children('p').text().slice(2)),
        amount: 1
    }
    data.push(x)
    }
    show()
    console.log(data)
    $('.invoice-alert').addClass('show')
})
$('.invoice-alert .inv').click(function(){
    $('.invoice-alert').removeClass('show')
    $('.invoice').addClass('show')
})
$('.invoice-alert .cancel').click(function(){
    $('.invoice-alert').removeClass('show')
})
$('.fa-file-invoice').click(function(){
    $('.invoice').addClass('show')
})
$('.fa-xmark').click(function(){
    console.log(11)
    $('.invoice').removeClass('show')
})
function show(){
    let total=0;
    document.querySelector('tbody').innerHTML=''
    for(let i=0; i<data.length; i++){
        document.querySelector('tbody').innerHTML+=`
        <tr>
        <td>${data[i].name}</td>
        <td>${data[i].price}</td>
        <td>${data[i].amount}</td>
        </tr>
        `
        total+=data[i].price * data[i].amount
    }
    $('.total').text(`$ ${total}`)
}
$('.logIn').click(function(){
    window.location.href='login.html'
})
$('.signUp').click(function(){
    window.location.href='signUp.html'
})