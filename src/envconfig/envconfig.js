/**
 * 全局配置文件
 */
let baseURL; 
if(process.env.NODE_ENV === 'development'){
  baseURL = 'localhost:3000/';
}else{
  baseURL = '';
}


export default {baseURL}