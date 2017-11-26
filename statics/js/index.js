const signin = function(){
    let si_user = $('#si_user').val();
    let si_pwd = $('#si_pwd').val();

    $.ajax({
        type:"post",
        url:'/sign/signin',
        data:{
            name:si_user,
            password:si_pwd
        },
        success:function(res){
            console.log(res);
            if(res.success){
                window.location.href = '/apilist';
            }
        },
        error:function(e){
            console.log(e);
        }
    })

}

const tabswitch = function(){
    let index = $(this).index();
    $('.tabs-item').eq(index).addClass('active').siblings().removeClass('active');
    $('.tabs-item-con').eq(index).show().siblings('.tabs-item-con').hide();
}



$('#signin').on('click',signin);
$('#box-tabs').on('click','.tabs-item',tabswitch);

