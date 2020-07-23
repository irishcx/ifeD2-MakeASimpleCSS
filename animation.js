function changeCSS(){
   if(document.getElementById('change').className=='after')
   {
    document.getElementById('change').className='before';
    document.getElementById('line').className='beforeL';
   }
   else
   {
    document.getElementById('change').className='after'
    document.getElementById('line').className='afterL';
    // console.log(document.getElementById('line').className);
   }
}
//比较赘余，勉强接受一下下呗