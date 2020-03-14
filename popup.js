$('document').ready(function(){
				$('#pop-bg').show();
				$('#popWindow').show();
				
				   
   
  		  $('#close-pop').click(function(){
				$('#pop-bg').hide();
				$('#popWindow').hide();
			});

				popalign();
			});		
			
	
		$(window).resize(function(){
			popalign();
		});
		function popalign(){
			var winH = $(window).height();
			var winW = $(window).width();
			//Set the popup window to center
			$("#popWindow").css('top',  winH/2-$("#popWindow").height()/2);
			$("#popWindow").css('left', winW/2-$("#popWindow").width()/2);
		}
		const textarea = document.querySelector('#divModalInstruction');
		const log = document.getElementById('log');

		textarea.onscroll = logScroll;

		function logScroll(e) {
  		log.textContent = `Scroll position: ${e.target.scrollTop}`;
		}