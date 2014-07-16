var info = document.getElementById('info')
showInfo('info_start');
var final_transcript = '';
var recognizing = false;
var ignore_onend = false;
var start_timestamp;

function upgrade() {
  start_button.style.visibility = 'hidden';
  showInfo('info_upgrade');
}

function showInfo(s) {
  if (s) {
    for (var child = info.firstChild; child; child = child.nextSibling) {
      if (child.style) {
        child.style.display = child.id == s ? 'inline' : 'none';
      }
    }
    info.style.visibility = 'visible';
  } else {
    info.style.visibility = 'hidden';
  }
}


if (!('webkitSpeechRecognition' in window)) {
  upgrade();
} else {
  start_button.style.display = 'inline-block';
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = function() {
  	console.log('on_start');
    recognizing = true;
    showInfo('info_speak_now');
    start_img.src = 'img/mic-animate.gif';
  };

  recognition.onerror = function(event) {
  	  	console.log('on_error');
    if (event.error == 'no-speech') {
      start_img.src = 'img/mic.gif';
      showInfo('info_no_speech');
      ignore_onend = true;
    }
    if (event.error == 'audio-capture') {
      start_img.src = 'img/mic.gif';
      showInfo('info_no_microphone');
      ignore_onend = true;
    }
    if (event.error == 'not-allowed') {
      if (event.timeStamp - start_timestamp < 100) {
        showInfo('info_blocked');
      } else {
        showInfo('info_denied');
      }
      ignore_onend = true;
    }
  };

  recognition.onend = function() {
  	  	console.log('on_end');
    recognizing = false;
    if (ignore_onend) {
      return;
    }

    start_img.src = 'img/mic.gif';
    if (!final_transcript) {
      console.log('here');
      showInfo('info_start');
      return;
    }

    showInfo('');
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.selectNode(document.getElementById('final_span'));
      window.getSelection().addRange(range);
    }

    var desiredPhrase = phraseArray[current_phrase];
    var new_final_transcript = '';
    for (var stringIndex = 0; stringIndex < desiredPhrase.length; stringIndex += 1){
      console.log('the current letter is ' + desiredPhrase[stringIndex]);
      console.log('the first character of the final transcript is ' + final_transcript[stringIndex]);
      char_a = desiredPhrase[stringIndex];
      char_b = final_transcript[stringIndex];
      if (char_b == undefined){
        break;
      }
      if (char_a != char_b){
        new_final_transcript += '<b style="color:red">' + char_b + '</b>';
      }
      else {
        new_final_transcript += char_b;
      }
    }

    var extraStuff = '';
    if (final_transcript.length > desiredPhrase.length) {
      extraStuff = final_transcript.slice(desiredPhrase.length);
      console.log('final trancsript is ' + final_transcript);
      console.log('extra stuff is ' + extraStuff);
      new_final_transcript += '<b style="color:red">' + extraStuff + '</b>';
    }
      final_span.innerHTML = new_final_transcript;
  };

  recognition.onresult = function(event) {
  	  	console.log('on_result');
    var interim_transcript =  '';
    if (typeof(event.results) == 'undefined') {
      console.log('got an undefined event');	
      recognition.onend = null;
      recognition.stop();
      upgrade();
      return;
    }
    console.log('here - processing');
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
//    final_transcript = final_transcript);

    
    final_span.innerHTML = linebreak(final_transcript);
    interim_span.innerHTML = linebreak(interim_transcript);
    if (final_transcript || interim_transcript) {
      showButtons('inline-block');
    }
  };
}

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

function startButton(event) {
  if (recognizing) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  interim_span.innerHTML = '';
  recognition.lang = 'cmn-Hans-CN';
  recognition.start();
  ignore_onend = false;
  final_span.innerHTML = '';
  //interim_span.innerHTML = '';
  start_img.src = 'img/mic-slash.gif';
  showInfo('info_allow');//error w chrome
  start_timestamp = event.timeStamp;//number after 1970
}

var current_style;
function showButtons(style) {
  if (style == current_style) {
    return;
  }
  current_style = style;
  redo_button.style.display = style;
  next_button.style.display = style;
  standard_button.style.display = style;

  console.log('back');
  if (first_phrase == false){
    back_button.style.display = style;
  }
}

function clearResult(){
  final_span.innerHTML = '';
}

var first_phrase = true;
var current_phrase = 0;
function newPhrase(){
  if(current_phrase == phraseArray.length - 1){
    return;
  }
  first_phrase = false;
  back_button.style.display = 'inline';
  current_phrase = current_phrase + 1;
  phrase.innerHTML = phraseArray[current_phrase];
  pinyin.innerHTML = pinyinArray[current_phrase];
}



function previousPhrase(){
  if (current_phrase == 0){
    return;
  }
  current_phrase = current_phrase - 1;
  phrase.innerHTML = phraseArray[current_phrase];
  pinyin.innerHTML = pinyinArray[current_phrase];
}

var current_standard = 0;
function standardAccent(){
 console.log(standardArray[current_phrase]);
 console.log(current_phrase);
 var myWindow = window.open(standardArray[current_phrase],"width=200,height=100");
 //standard_button.innerHTML = standardArray[]
}

var phraseArray = ['你会说英文吗','我爱啤酒','算你狠','隔行如隔山','情人眼里出西施'];
var pinyinArray = ['nǐ huì shuō yīng wén ma','wǒ ài píjiǔ','suàn nǐ hěn','gé háng rú gé shān','qíng rén yǎn lǐ chū xī shī'];
var standardArray = ["http://api.ispeech.org/api/rest?apikey=7955b90cb40f63db22de72cd2822df49%20&action=convert&text=%E4%BD%A0%E4%BC%9A%E8%AF%B4%E8%8B%B1%E6%96%87%E5%90%97&voice=chchinesefemale&format=mp3&speed=1",
"http://api.ispeech.org/api/rest?apikey=7955b90cb40f63db22de72cd2822df49%20&action=convert&text=%E6%88%91%E7%88%B1%E5%95%A4%E9%85%92&voice=chchinesefemale&format=mp3&speed=1",
"http://api.ispeech.org/api/rest?apikey=7955b90cb40f63db22de72cd2822df49%20&action=convert&text=%E7%AE%97%E4%BD%A0%E7%8B%A0&voice=chchinesefemale&format=mp3&speed=1",
"http://api.ispeech.org/api/rest?apikey=7955b90cb40f63db22de72cd2822df49%20&action=convert&text=%E9%9A%94%E8%A1%8C%E5%A6%82%E9%9A%94%E5%B1%B1&voice=chchinesefemale&format=mp3&speed=1",
"http://api.ispeech.org/api/rest?apikey=7955b90cb40f63db22de72cd2822df49%20&action=convert&text=%E6%83%85%E4%BA%BA%E7%9C%BC%E9%87%8C%E5%87%BA%E8%A5%BF%E6%96%BD&voice=chchinesefemale&format=mp3&speed=1"];


phrase.innerHTML = phraseArray[0];
pinyin.innerHTML = pinyinArray[0];
