function createArticle() {


    let url=`https://reqres.in/api/users`;
    console.log(url);

    let h2=document.createElement('h2');
    let p=document.createElement('p');

         let btnData=document.getElementById('f2');
         let btnCreate=document.getElementById('f1');
         
        
           let btnClear=document.getElementById('btn');

    let createTitle=document.getElementById('createTitle');
    let createText=document.getElementById('createContent');

    let section=document.getElementById('articles');



           btnData.addEventListener('click',function () {

               fetch(url,{method:'POST',headers:{'Content-type':'application/json'},
                   body:JSON.stringify({
                       "name":"morpheus",
                       "job":"leader"
                   })}).then(res=>res.json())
                   .then(data=>{

                       console.log(data);
                       section.innerHTML=`<h1>${data.name}</h1> <p> The characteristics is ${data.job},${data.id},${data.createdAt}</p>`


                   })
                 });


           btnCreate.addEventListener('click',function () {

               h2.textContent=`${createTitle.value}`;
               p.textContent=`${createText.value}`;

               section.append(h2,p);

           });

           function deleteArticle() {
               btnClear.addEventListener('click',function () {
                   section.remove(h2);
                   section.remove(p);
               });
           }



           deleteArticle();

}
createArticle()





