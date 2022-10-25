// const items=document.getElementsByClassName('item')
//                 for(let item of items){
//                     item.addEventListener('click',function(){
//                         document.getElementById('item-container').removeChild(item)
//                     })
//                 }
 
//event-----------
const item1 = document.getElementById('item1');
const list = document.getElementById('list');  
const parent = document.getElementById('parent');  


item1.addEventListener('click', function () {
    console.log('item1')
})
list.addEventListener('click', function () {
    console.log('list')
})
parent.addEventListener('click', function () {
    console.log('parent')
})









// const btn = document.getElementById('btn');
// const heading = document.getElementById('heading'); 
// btn.addEventListener('click', function (e) {
//     console.log(e)
//     let headingStatus = heading.style.display;
//     if (headingStatus === 'none') {
//         heading.style.display='block'
//     }
//     else if (headingStatus === 'blobk') {
//         heading.style.display='none'
//     } else {
//         heading.style.display='none'
//     }
// })             