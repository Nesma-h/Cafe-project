$('nav div i').first().click(function(){
    $('*').toggleClass('light')
    // $('p').toggleClass('light')
    // $('span').toggleClass('light')
    $('.menucard').even().toggleClass('not-active')
    $('.menucard').even().toggleClass('active')
    
})

$('.signUp').click(function(){
    window.location.href='SignUp.html'
})
let info=(JSON.parse(localStorage.getItem('info')) || [])
$('form').on('submit',function(e){
        e.preventDefault()
        if(info.find( a => a.username==$('input').eq(0).val())  && info.find( a => a.pass==$('input').eq(1).val()) ){
            $('.succes').addClass('show')
            setTimeout ( ()=>{
            document.location.href='index.html'
        },4000)
        }
        else{
            $('.fail').addClass('show');
        setTimeout ( ()=>{
            $('.fail').removeClass('show');
        },4000)


            
        }
    })