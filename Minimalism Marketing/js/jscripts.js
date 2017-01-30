
document.getElementById('hider').onclick = function() {
        document.getElementById('text').style.display = 'none';
        document.getElementById('bl-hidden_btn').style.display = 'block';
        

      }
      document.getElementById('hidden_btn').onclick = function() {
        document.getElementById('text').style.display = 'flex';
        document.getElementById('hider').style.display = 'hider';
        document.getElementById('bl-hidden_btn').style.display = 'none';
      }
  

document.getElementById('btn_see-text').onclick = function() {
        document.getElementById('coment-text_hide').style.display = 'block';
        document.getElementById('btn_see-text').style.display = 'none'
        
     }

document.getElementById('coment-answer_btn-more').onclick = function() {
       document.getElementById('hidden-coment').style.display = 'block';
       document.getElementById('coment-answer_btn-more').style.display = 'none';
       document.getElementById('coment-answer_btn-hide').style.display = 'block';
    }

document.getElementById('coment-answer_btn-hide').onclick = function(){
      document.getElementById('hidden-coment').style.display = 'none';
      document.getElementById('coment-answer_btn-hide').style.display = 'none';
      document.getElementById('coment-answer_btn-more').style.display = 'block';

    }
document.getElementById('load-message').onclick = function() {
        document.getElementById('hidden-section').style.display = 'block';
        document.getElementById('load-message').style.display = 'none';
     }
