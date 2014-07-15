$(function(){

	var character_array = [
	 {pinyin:'Wo',chinese:'我',tone:'third_tone',
	  url:'http://www.learnchineseez.com/read-write/traditional/view.php?code=6211&last=1'},
	 {pinyin:'Ni',chinese:'你',tone:'third_tone',
	  url:'http://www.learnchineseez.com/read-write/traditional/view.php?code=4f60&last=1'},
	 {pinyin:'Ta',chinese:'他',tone:'first_tone',
	  url:'http://www.learnchineseez.com/read-write/traditional/view.php?code=4ed6&last=1'},
	 {pinyin:'De',chinese:'的',tone:'neutral_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=7684&last=1'},
	 {pinyin:'Shi',chinese:'是',tone:'fourth_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=662f&last=1'},
	 {pinyin:'Da',chinese:'大',tone:'fourth_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=5927&last=1'},
	 {pinyin:'Zai',chinese:'在',tone:'fourth_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=5728&last=1'},
	 {pinyin:'Ren',chinese:'人',tone:'second_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=4eba&last=1'},
	 {pinyin:'Zhong',chinese:'中',tone:'first_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=4e2d&last=1'},
	 {pinyin:'Guo',chinese:'国',tone:'second_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=56fd&last=1'},
	 {pinyin:'Bu',chinese:'不',tone:'second_tone',
	  url:'http://www.learnchineseez.com/read-write/traditional/view.php?code=4e0d&last=1'},
	 {pinyin:'Hen',chinese:'很',tone:'third_tone',
	  url:'http://www.learnchineseez.com/read-write/traditional/view.php?code=5f88&last=1'},
	 {pinyin:'Cuo',chinese:'错',tone:'fourth_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=9519&last=2'},
	 {pinyin:'Na',chinese:'哪',tone:'third_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=54ea&last=2'},
	 {pinyin:'Chan',chinese:'产',tone:'third_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=4ea7&last=3'},
	 {pinyin:'Pin',chinese:'品',tone:'third_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=54c1&last=3'},
	 {pinyin:'Yan',chinese:'研',tone:'second_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=7814&last=2'},
	 {pinyin:'Fa',chinese:'发',tone:'first_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=53d1&last=1'},
	 {pinyin:'Wu',chinese:'午',tone:'third_tone',
	  url:'#'}
	 {pinyin:'Can',chinese:'餐',tone:'first_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=9910&last=5'},
	 {pinyin:'Chi',chinese:'吃',tone:'first_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=5403&last=3'},
	 {pinyin:'Dong',chinese:'东',tone:'first_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=4e1c&last=2'},
	 {pinyin:'Xi',chinese:'西',tone:'first_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=897f&last=2'},
	 {pinyin:'Xie',chinese:'谢',tone:'fourth_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=8c22&last=1'},
	 {pinyin:'Gong',chinese:'工',tone:'first_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=5de5&last=1'},
	 {pinyin:'Cheng',chinese:'程',tone:'second_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=7a0b&last=1'},
	 {pinyin:'Shi',chinese:'师',tone:'first_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=5e08&last=2'},
	 {pinyin:'Ji',chinese:'机',tone:'first_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=673a&last=1'},
	 {pinyin:'Xie',chinese:'械',tone:'fourth_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=68b0&last=7'},
	 {pinyin:'Ying',chinese:'硬',tone:'fourth_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=786c&last=3'},
	 {pinyin:'Ti',chinese:'体',tone:'third_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=4f53&last=2'},
	 {pinyin:'Ye',chinese:'业',tone:'fourth_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=4e1a&last=2'},
	 {pinyin:'Wu',chinese:'务',tone:'fourth_tone',
	  url:'http://www.learnchineseez.com/read-write/simplified/view.php?code=52a1&last=3'},          
	];

	var current_index = 0;

$('.tone_button').on('click',function(){
	// did the user click on the correct answer?
	console.log(this);
	$this = $(this);
	console.log($this);

	// the correct answer
	//var correct_answer = tone_array[current_index];
    var correct_answer = character_array[current_index].tone;

	first_p = $this.find('p');
	user_answer = first_p.attr('id');

//	var user_answer = this;
		console.log('ass3', user_answer);

	if( user_answer == correct_answer ){
		console.log('ass5');
		ok_icon = $this.find('.glyphicon-ok');
		ok_icon.show();
	}
	else{
		remove_icon = $this.find('.glyphicon-remove');
		remove_icon.show();
	}
});

function clearicon () {
    console.log('clear was called');
    ok_icons = $('.glyphicon-ok');
    ok_icons.each(function () {
    	ok_icon = $(this);
    	ok_icon.hide(); 
    });
    remove_icons = $('.glyphicon-remove');
    remove_icons.each(function(){
    	remove_icon = $(this);
    	remove_icon.hide();
    });
}

function updatechar (){
	$('#characterb').text(character_array[current_index].pinyin);
	$('#characters').text(character_array[current_index].chinese);
	$('#chstroke').attr("src",character_array[current_index].url);
}

$('#next_page').on('click', function(){
	if(current_index == character_array.length){
		return;
	}
	clearicon();
	current_index = current_index + 1;
	updatechar();
});

$('#previous_page').on('click', function(){
	if(current_index == 0){
		return;
	}
	clearicon();
	current_index = current_index - 1;
	updatechar();
});



$(document).ready(function(){
	current_index = 0;
	updatechar();
});





});