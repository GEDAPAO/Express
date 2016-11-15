/**
 * Created by lanou on 16/11/14.
 */
var li=document.querySelectorAll("ul li")
for (var i=0;i<li.length;i++){
    li[i].index=i
    li[i].onclick=function () {
       for (var i=0;i<li.length;i++){
           li[i].id='';
       }
       li[this.index].id='taken';
    }
}