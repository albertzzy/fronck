let apimodalShow = false;

const showModal = function(){
    if(!apimodalShow){
        $('.newapi').show();
        apimodalShow = true;
    }else{
        $('.newapi').hide();
        apimodalShow = false;
    }
}


const createapi = function(){
    let apiurl = $('#api_url').val();
    let apimethod = $('.api_method').filter( (i,e) => $(e).prop('checked')).val();
    let arg = $('#api_ok_args').val();
    let sucres = $('#api_ok_res').val();
    let errres = $('#api_error_res').val();

    $.ajax({
        type:'post',
        url:'/apis/save',
        data:{
            url:apiurl,
            method:apimethod,
            params:arg,
            response:sucres,
            error:errres
        },
        success:function(res){
            if(res.success){
                $('.newapi').hide();
            }
        },
        error:function(e){
            console.log(e);
        }
    })

}



$('#createapi').on('click',showModal);
$('#apisubmit').on('click',createapi);