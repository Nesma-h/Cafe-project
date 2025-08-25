$('nav div i').first().click(function(){
    $('*').toggleClass('light')
    // $('p').toggleClass('light')
    // $('span').toggleClass('light')
    $('.menucard').even().toggleClass('not-active')
    $('.menucard').even().toggleClass('active')
    
})

$('.logIn').click(function(){
    window.location.href='login.html'
})

$('form span').hide(0)
UserNamerx=/[A-Za-z0-9_]+$/
Emailrx=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
Passwordrx=/.*[!@#$%^&*(),.?":{}|<>]/
let info=(JSON.parse(localStorage.getItem('info')) || [])
    $('input').on('keyup',function(){
    
    let rx=window[$(this).attr('placeholder')+'rx']
    if($(this).attr('placeholder') == 'UserName'){
    if(rx.test($(this).val())){
        
        if(info.find( a =>a.username==$(this).val())){
            $(this).addClass('error')
            $(this).next('span').show(300)
            $(this).removeClass('correct')
        }
        else{
        $(this).removeClass('error')
        $(this).next('span').hide(300)
        $(this).addClass('correct')
        }
    }
        else{
        $(this).addClass('error')
        $(this).next('span').show(300)
        $(this).removeClass('correct')
    }
    }
    else{
    if(rx.test($(this).val())){
        $(this).removeClass('error')
        $(this).next('span').hide(300)
        $(this).addClass('correct')
    }
    else{
        $(this).addClass('error')
        $(this).next('span').show(300)
        $(this).removeClass('correct')
    }
}
    let valid=0
    $('input').each(function(){
            let y=window[$(this).attr('placeholder')+'rx']
            if(y.test($(this).val())){
                valid++;
            }
    })
    if(valid==3){
        $('form button').removeClass('disable')
    }
    else{
        $('form button').addClass('disable')
    }

    })

    $('form').on('submit',function(e){
        e.preventDefault()
        if(info.find( a => a.email==$('input').eq(1).val())){
        $('.fail').addClass('show');
        setTimeout ( ()=>{
            $('.fail').removeClass('show');
        },4000)

        }
        else{
            info.push({
                username:$('input').eq(0).val(),
                email:$('input').eq(1).val(),
                pass:$('input').eq(2).val()
            })
            localStorage.setItem('info',JSON.stringify(info))
            $('.succes').addClass('show')
            setTimeout ( ()=>{
            document.location.href='login.html'
        },4000)
        }
    })
