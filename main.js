$(document).ready(function(){
	
	var  m_top = $(".all_info").offset().top;//Расстояние от верха документа до эллемента
	var h_content = m_top;//высота блока с добавляемыми эллементами
	var since = 10;//с какого эллемента выбираем данные из БД
	var k = 10;//по сколько статей
	
							function load_content(){
							
									$("#upBlock").css('display','block');
									h_content = m_top + $(".all_info").height();
									$.get(base_url+"main/ajax_refresh/"+since+"/"+k, function(data) {
										$('.all_info').append(data);
										since = since+k;
										$("#upBlock").css('display','none');
									});
							
							}
			
		
			$(window).scroll(function (){
				if ($(this).scrollTop() > h_content){
				load_content();
				
				} 
			
			});



});//конец ready