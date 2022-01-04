const nexto = document.getElementById('nexto');
const backo = document.getElementById('backo');
const demoon = document.getElementById('demo');
const creatVideo = document.createElement('video');



let obj = {
    name: 'tikTok',
    num: 0,

    nextVideo(){
        if(this.num < 14){
            this.num+= 1;
        demoon.innerHTML = `<video class="video" autoplay>
       <source src="videos/taithefivefooter/tai-${this.num}.mp4" type="video/mp4">
        </video>`;
        backo.style.display = 'block';
        }else{
            backo.style.display = 'none';
        }
    },
    removideo(){
        if(this.num > 0){
            this.num-= 1;
        demoon.innerHTML = `<video class="video" controls>
       <source src="videos/taithefivefooter/tai-${this.num}.mp4" type="video/mp4">
        </video>`;
        nexto.style.display = 'block';
        }else{
            nexto.style.display = 'none';
        }
    }

}



backo.addEventListener('click', function(){
   obj.nextVideo()
})

nexto.addEventListener('click', function(){
    obj.removideo()
 })


