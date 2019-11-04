

const pictures = [ 'https://cdn.pixabay.com/photo/2014/10/22/16/38/ingredients-498199__340.jpg','https://cdn.pixabay.com/photo/2015/10/26/07/21/soup-1006694__340.jpg','https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556__340.jpg','https://cdn.pixabay.com/photo/2017/03/17/10/29/breakfast-2151201__340.jpg','https://cdn.pixabay.com/photo/2014/11/15/20/30/kitchen-scale-532651__340.jpg','https://cdn.pixabay.com/photo/2015/07/01/23/03/cocktail-828182__340.jpg','https://cdn.pixabay.com/photo/2018/03/28/20/32/food-3270461__340.jpg','https://cdn.pixabay.com/photo/2016/08/08/16/20/ingredients-1578688__340.jpg','https://cdn.pixabay.com/photo/2019/10/26/11/24/cooking-vegetables-4579207__340.png','https://cdn.pixabay.com/photo/2016/02/09/13/43/cocktail-1189275__340.jpg','https://cdn.pixabay.com/photo/2018/02/05/19/12/strawberry-3132973__340.jpg','https://cdn.pixabay.com/photo/2016/03/28/15/05/chocolate-1285928__340.jpg','https://cdn.pixabay.com/photo/2016/01/14/17/46/eat-1140371__340.jpg','https://cdn.pixabay.com/photo/2017/10/13/19/00/potato-casserole-2848605__340.jpg','https://cdn.pixabay.com/photo/2017/05/07/22/38/breaking-2293848__340.jpg','https://cdn.pixabay.com/photo/2013/03/13/19/15/italian-93237__340.jpg','https://cdn.pixabay.com/photo/2017/10/23/17/59/bread-2881871__340.jpg','https://cdn.pixabay.com/photo/2017/09/08/13/16/recipe-2728726__340.jpg','https://cdn.pixabay.com/photo/2018/03/05/06/26/board-3200054__340.jpg','https://cdn.pixabay.com/photo/2016/06/30/18/54/sardines-1489630__340.jpg','https://cdn.pixabay.com/photo/2017/03/19/18/22/italian-food-2157246__340.jpg','https://cdn.pixabay.com/photo/2016/03/23/16/38/vegetables-1275084__340.jpg','https://cdn.pixabay.com/photo/2016/10/14/14/29/rice-dish-1740298__340.jpg','https://cdn.pixabay.com/photo/2018/01/30/03/49/cooking-3117871__340.jpg'] ;
console.log(pictures.length) ;


compoPic = pictures.map( (items, i) => `<div class='foursixGrid'> <img  alt='food images' src=${pictures[i]} ></div>`) ;
console.log(compoPic) ;

var picGrid = document.getElementById('MainGrid') ;

picGrid.innerHTML = compoPic.join('') ; 
