function qSort(arr){
    if(!arr.length){
        return [];
    }

    let less = [];
    let greater = [];

    let pivot = arr[0];

    for(let i=0;i<arr.length;i++){
        if(arr[i]>pivot){
            greater.push(arr[i]);
        }else{
            less.push(arr[i]);
        }
    }

    return qSort(less).concat(pivot,qSort(greater));


}


// 归并排序
