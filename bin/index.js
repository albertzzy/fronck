#!/usr/bin/env node


const program = require('commander');
const download = require('download-helper');
const path = require('path');

program
    .option('-d --aid [aid]','download a api response')
    .option('-p --pid [pid]','download a project api reponses')
    .parse(process.argv);



let aid = program.aid;

if(!aid){
    return;
}


let options = {
    hostname:'localhost',
    reqUrl:'/apis/getmock/'+aid,
    secure:false,
    filename:'res.json',
    port:'3000',
    // dest:path.resolve('./mock')    
}

download(options).then(()=>{
    console.log('download success!')
}).catch((e)=>{
    console.log(e)
})
