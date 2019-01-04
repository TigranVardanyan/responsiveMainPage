<aside>
	<div class="switch" id="switch">
		<i class="fas fa-cog cogRot2"></i>
	</div>
	<div class="page_color page_color_hide">
		<span>Main Color</span>
		<div class="colors">
			<div class="color color1" id="#7e6df6"></div>
			<div class="color color2" id="#F44336"></div>
			<div class="color color3" id="#2196F3"><i class="fas fa-check"></i></div>
			<div class="color color4" id="#FF5722"></div>
			<div class="color color5" id="#2eca7f"></div>
			<div class="color color6" id="#29B6F6"></div>
			<div class="color color7" id="#E91E63"></div>
			<div class="color color8" id="#A0F"></div>
			<div class="color color9" id="#FF9800"></div>
			<div class="color color10" id="#FBC02D"></div>
			<div class="color color11" id="#9dd100"></div>
			<div class="color color12" id="#26d9ac"></div>
		</div>
	</div>
    <script>
        var toolbarColor = document.querySelectorAll('.page_color .colors .color');
        var cChange = document.querySelectorAll('.cChange');

        //вывод цвета с локалсторидж
        document.addEventListener("DOMContentLoaded", () => {
            if(localStorage.getItem('targetColor')) {

            } else {
                localStorage.setItem('targetColor' , "#2196F3");
            }
            for(var i = 0; i < toolbarColor.length; i++) {
                toolbarColor[i].innerHTML = "";   //удаляет все "птички" с цветов
            }
            console.log(localStorage.getItem('targetColor'));
            document.getElementById(localStorage.getItem('targetColor')).innerHTML = '<i class="fas fa-check"></i>';
            for(var i = 0; i < cChange.length; i++) {  // всем элементам с классом cChange устанавливает css переменной
                cChange[i].style.setProperty('--primary-color', localStorage.getItem('targetColor')); // --primary-color значение k(выбранный цвет)
            }
        });
    </script>
</aside>