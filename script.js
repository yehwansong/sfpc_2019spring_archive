$(document).ready(function(){

var isMobile = false;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
if(isMobile){
	window.location.replace("index_mobile.html");
}	

var ro = 0
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var post_contents_artist= [
		"AlexanderMiller",
		"ArielUzal",
		"BomaniOseniMcClendon",
		"GregSadetsky",
		"JavierdeAzkue",
		"JosephWilk",
		"JuanMiguelMarin",
		"LuisaFabrizi",
		"MarG.Mcmahon",
		"MelissaHolmes",
		"SaraKhan",
		"SheldonChang",
		'StefanPelikan',
		"StefanieSchirmer",
		"VivienneLa",
		"YehwanSong"
		]
var post_contents_artwork= [
		"TheEmergenceandDecayofComputation",
		"porsiseguísahí(incaseyou’restillthere)",
		"InformedConsent",
		"Anticipation",
		"Themoreyouconnectthelessyouconnect",
		"Howtobeseen",
		"DrawingUndertheInfluenceofSFPC",
		"Weweregiven",
		"HomopolarCicadas",
		"I’llshowyouwhenI’mfinished",
		"Yee-Haw",
		"2^7",
		'Over',
		"Reality®",
		"21stCenturyGhost",
		"AntiUser-friendly"
		]
var post_amount = 16
var sq_amount
var timeout_counter = 0
var rot_counter = 16

var sq_w

var w = window.innerWidth
var h = window.innerHeight
var inner_wid = 0.016*h

var in_w = $("#bs").outerWidth() / 12
var in_h = $("#bs").outerHeight() / 12
var in_mar_t = 0
var in_mar_l = 0

var b_2_w = in_h*12
var b_2_h = in_h*2
var b_2_l = (in_w-in_h)*6
var b_2_t = in_h*0

var b_3_w = in_h*12
var b_3_h = in_h*2
var b_3_l = (in_w-in_h)*6
var b_3_t = in_h*2

var b_2_xbound_1 = b_2_l;
var b_2_xbound_2 = b_2_l + b_2_w;
var b_2_ybound_1 = b_2_t;
var b_2_ybound_2 = b_2_t + b_2_h;
var b_3_xbound_1 = b_3_l;
var b_3_xbound_2 = b_3_l + b_3_w;
var b_3_ybound_1 = b_3_t;
var b_3_ybound_2 = b_3_t + b_3_h;

$(window).resize(function(){
    location.reload();
});

// `b_1_3_text` needs to be called first, as it modifies the #b_1_3 and #b_1_4
// DOM elements. calling `screen_size` first leads to `rotate_whole` being
// called, which will modify the classes of the DOM elements from index.html.
// This is wrong -- `rotate_whole` should change classnames of the DOM elements
// virtually created by `b_1_3_text`. [gs]
b_1_3_text()
screen_size()
            

function b_1_3_text(){
	if(w/h>1610/900){
		$('#b_1_3').html('<a>16 artists : </a><a href="details.html#1" class="post1artist_lined artist_lined">Alexander Miller,</a> <a href="details.html#2" class="post2artist_lined artist_lined">Ariel Uzal, </a><a href="details.html#3" class="post3artist_lined artist_lined">Bomani Oseni McClendon, </a><a href="details.html#4" class="post4artist_lined artist_lined">Greg Sadetsky, </a><a href="details.html#5" class="post5artist_lined artist_lined">Javier de Azkue, </a><a href="details.html#6" class="post6artist_lined artist_lined">Joseph Wilk, </a><a href="details.html#7" class="post7artist_lined artist_lined">Juan Miguel Marin, </a><a href="details.html#8" class="post8artist_lined artist_lined">Luisa Fabrizi, </a><a href="details.html#9" class="post9artist_lined artist_lined">Mar G.Mcmahon, </a><a href="details.html#10" class="post10artist_lined artist_lined">Melissa Holmes, </a><a href="details.html#11" class="post11artist_lined artist_lined">Sara Khan, </a><a href="details.html#12" class="post12artist_lined artist_lined">Sheldon Chang,</a><a href="details.html#13" class="post13artist_lined artist_lined">Stefan Pelikan,</a>');

		$('#b_1_4').html('<a href="details.html#14" class="post14artist_lined artist_lined">Stefanie Schirmer, </a><a href="details.html#15" class="post15artist_lined artist_lined">Vivienne La,</a><a href="details.html#16" class="post16artist_lined artist_lined">Yehwan Song</a>');
	}      
            
	else if(w/h>1500/900){
		$('#b_1_3').html('<a>16 artists : </a><a href="details.html#1" class="post1artist_lined artist_lined">Alexander Miller,</a> <a href="details.html#2" class="post2artist_lined artist_lined">Ariel Uzal, </a><a href="details.html#3" class="post3artist_lined artist_lined">Bomani Oseni McClendon, </a><a href="details.html#4" class="post4artist_lined artist_lined">Greg Sadetsky, </a><a href="details.html#5" class="post5artist_lined artist_lined">Javier de Azkue, </a><a href="details.html#6" class="post6artist_lined artist_lined">Joseph Wilk, </a><a href="details.html#7" class="post7artist_lined artist_lined">Juan Miguel Marin, </a><a href="details.html#8" class="post8artist_lined artist_lined">Luisa Fabrizi, </a><a href="details.html#9" class="post9artist_lined artist_lined">Mar G.Mcmahon, </a><a href="details.html#10" class="post10artist_lined artist_lined">Melissa Holmes, </a><a href="details.html#11" class="post11artist_lined artist_lined">Sara Khan, </a><a href="details.html#12" class="post12artist_lined artist_lined">Sheldon Chang,</a>');
		$('#b_1_4').html('<a href="details.html#13" class="post13artist_lined artist_lined">Stefan Pelikan,</a><a href="details.html#14" class="post14artist_lined artist_lined">Stefanie Schirmer, </a><a href="details.html#15" class="post15artist_lined artist_lined">Vivienne La,</a><a href="details.html#16" class="post16artist_lined artist_lined">Yehwan Song</a>');
	}

	else if(w/h>1390/900){
		$('#b_1_3').html('<a>16 artists : </a><a href="details.html#1" class="post1artist_lined artist_lined">Alexander Miller,</a> <a href="details.html#2" class="post2artist_lined artist_lined">Ariel Uzal, </a><a href="details.html#3" class="post3artist_lined artist_lined">Bomani Oseni McClendon, </a><a href="details.html#4" class="post4artist_lined artist_lined">Greg Sadetsky, </a><a href="details.html#5" class="post5artist_lined artist_lined">Javier de Azkue, </a><a href="details.html#6" class="post6artist_lined artist_lined">Joseph Wilk, </a><a href="details.html#7" class="post7artist_lined artist_lined">Juan Miguel Marin, </a><a href="details.html#8" class="post8artist_lined artist_lined">Luisa Fabrizi, </a><a href="details.html#9" class="post9artist_lined artist_lined">Mar G.Mcmahon, </a><a href="details.html#10" class="post10artist_lined artist_lined">Melissa Holmes, </a><a href="details.html#11" class="post11artist_lined artist_lined">Sara Khan, </a>');

		$('#b_1_4').html('<a href="details.html#12" class="post12artist_lined artist_lined">Sheldon Chang,</a><a href="details.html#13" class="post13artist_lined artist_lined">Stefan Pelikan,</a><a href="details.html#14" class="post14artist_lined artist_lined">Stefanie Schirmer, </a><a href="details.html#15" class="post15artist_lined artist_lined">Vivienne La,</a><a href="details.html#16" class="post16artist_lined artist_lined">Yehwan Song</a>');
	}

	else if(w/h>1305/900){
		$('#b_1_3').html('<a>16 artists : </a><a href="details.html#1" class="post1artist_lined artist_lined">Alexander Miller,</a> <a href="details.html#2" class="post2artist_lined artist_lined">Ariel Uzal, </a><a href="details.html#3" class="post3artist_lined artist_lined">Bomani Oseni McClendon, </a><a href="details.html#4" class="post4artist_lined artist_lined">Greg Sadetsky, </a><a href="details.html#5" class="post5artist_lined artist_lined">Javier de Azkue, </a><a href="details.html#6" class="post6artist_lined artist_lined">Joseph Wilk, </a><a href="details.html#7" class="post7artist_lined artist_lined">Juan Miguel Marin, </a><a href="details.html#8" class="post8artist_lined artist_lined">Luisa Fabrizi, </a><a href="details.html#9" class="post9artist_lined artist_lined">Mar G.Mcmahon, </a><a href="details.html#10" class="post10artist_lined artist_lined">Melissa Holmes, </a>');
		$('#b_1_4').html('<a href="details.html#11" class="post11artist_lined artist_lined">Sara Khan, </a><a href="details.html#12" class="post12artist_lined artist_lined">Sheldon Chang,</a><a href="details.html#13" class="post13artist_lined artist_lined">Stefan Pelikan,</a><a href="details.html#14" class="post14artist_lined artist_lined">Stefanie Schirmer, </a><a href="details.html#15" class="post15artist_lined artist_lined">Vivienne La,</a><a href="details.html#16" class="post16artist_lined artist_lined">Yehwan Song</a>');
	}
	else{
		$('#b_1_3').html('<a>16 artists : </a><a href="details.html#1" class="post1artist_lined artist_lined">Alexander Miller,</a> <a href="details.html#2" class="post2artist_lined artist_lined">Ariel Uzal, </a><a href="details.html#3" class="post3artist_lined artist_lined">Bomani Oseni McClendon, </a><a href="details.html#4" class="post4artist_lined artist_lined">Greg Sadetsky, </a><a href="details.html#5" class="post5artist_lined artist_lined">Javier de Azkue, </a><a href="details.html#6" class="post6artist_lined artist_lined">Joseph Wilk, </a><a href="details.html#7" class="post7artist_lined artist_lined">Juan Miguel Marin, </a><a href="details.html#8" class="post8artist_lined artist_lined">Luisa Fabrizi, </a><a href="details.html#9" class="post9artist_lined artist_lined">Mar G.Mcmahon, </a>');
		$('#b_1_4').html('<a href="details.html#10" class="post10artist_lined artist_lined">Melissa Holmes, </a><a href="details.html#11" class="post11artist_lined artist_lined">Sara Khan, </a><a href="details.html#12" class="post12artist_lined artist_lined">Sheldon Chang,</a><a href="details.html#13" class="post13artist_lined artist_lined">Stefan Pelikan,</a><a href="details.html#14" class="post14artist_lined artist_lined">Stefanie Schirmer, </a><a href="details.html#15" class="post15artist_lined artist_lined">Vivienne La,</a><a href="details.html#16" class="post16artist_lined artist_lined">Yehwan Song</a>');
	}
}

// screensize
function screen_size() {
	if(w>h){
		sq_w = h
		$('#whole').css({'left':-1*(h-w)/2})
	}else{
		sq_w = w
		$('#whole').css({'top':-1*(w-h)/2})
	}


		$('#whole').css({'width':sq_w})
		$('#whole').css({'height':sq_w})

	set_size() 
}

function set_size() {
		$('#b_2').css({'width': b_2_w })
		$('#b_2').css({'height': b_2_h })
		$('#b_2').css({'left':  b_2_l })
		$('#b_2').css({'top': b_2_t })

		$('#b_1_2').css({'width': b_2_h + b_3_h })
		$('#b_1_2').css({'left': b_3_l+b_3_w })
		$('#b_1_2').css({'top': b_2_h+b_3_t })

		$('#b_1_5').css({'width': b_2_h + b_3_h })
		$('#b_1_5').css({'top': b_2_h + b_3_h })

		$('#b_3').css({'width': b_3_w })
		$('#b_3').css({'height': b_3_h})
		$('#b_3').css({'left':  b_3_l })
		$('#b_3').css({'top': b_3_t }) 

		$('#b_4').css({'top': b_3_t + b_3_h +2 })
		$('#b_4').css({'width': in_w*12 })
		$('#b_4').css({'left': '0' })
		$('#b_5').css({'top': b_3_t + b_3_h +2 })


		$('#b_1_1').css({'top': b_3_t + b_3_h +2 })
		$('#b_1_1').css({'right':  b_3_l })




		$('#b_7').css({'width':b_2_l})
		$('#b_8').css({'width':b_2_l})
		$('#b_8').css({'left':b_3_l + b_3_w})
		$('#b_7').css({'height':b_3_h+b_2_h})
		$('#b_8').css({'height':b_3_h+b_2_h})
		$('#b_7').css({'top':b_2_t})
		$('#b_8').css({'top':b_2_t})


		for (var i = 16; i > 0; i--) {
			$('#photo_'+i +' img').css({'height': h - (b_3_t + b_3_h + $('#contents_'+i).outerHeight()) })
			$('#photo_'+i +' img').css({'marginTop': $('#contents_'+i).outerHeight() - 2 })
		}

	create_div()
}







// create_div
function create_div() {
	sq_amount = Math.floor(sq_w / inner_wid)
		$('#whole').remove( "#sample" );
	for (var i = sq_amount*sq_amount - 1; i >= 0; i--) {
		$('#whole').append('<div class="inner post'+Math.floor(Math.random() * 16) +'"></div>');
	}
	for (var i = post_amount; i >= 1; i--) {
		insert_content(i)
	}
}









// insert content
	function insert_content(timeout_counter) {
		var inner = document.getElementsByClassName('inner')
		$('.inner').css({ 'width' : inner_wid })
		$('.inner').css({ 'height' : inner_wid })

			var k =(22.5*timeout_counter)
			var inv_k =-1*(22.5*timeout_counter)
			$('#whole').css({'transform':'rotate('+ inv_k +'deg)'})
			$('.post'+(timeout_counter)).css({'transform':'rotate('+ k +'deg)'})

			var selected = document.getElementsByClassName('post'+(timeout_counter))
			var chars_artist = post_contents_artist[timeout_counter-1].split('');

			var  pos_array_artist = []
			for (var i = selected.length - 1; i >= 0; i--) {
				if(Math.sqrt(((selected[i].getBoundingClientRect().left+inner_wid/2)-w/2)*((selected[i].getBoundingClientRect().left+inner_wid/2)-w/2) + ((selected[i].getBoundingClientRect().top-inner_wid/2)-h/2)*((selected[i].getBoundingClientRect().top-inner_wid/2)-h/2)) 
					< (sq_w/8)*4
					&&
					(selected[i].getBoundingClientRect().top-inner_wid/2)>b_3_ybound_1+inner_wid
					&&
					(selected[i].getBoundingClientRect().top-inner_wid/2)<b_3_ybound_2-inner_wid
					&&
					(selected[i].getBoundingClientRect().left-inner_wid/2)>b_3_xbound_1+inner_wid
					&&
					(selected[i].getBoundingClientRect().left-inner_wid/2)<b_3_xbound_2-inner_wid
					){
					selected[i].id = "post_"+
									timeout_counter+"top_" + 
									Math.floor(selected[i].getBoundingClientRect().top/(sq_amount*0.66))+
									"_left_" + 
									Math.floor(selected[i].getBoundingClientRect().left);
					var s_artist={
						top:Math.floor(selected[i].getBoundingClientRect().top/(sq_amount*0.66)),
						left:Math.floor(selected[i].getBoundingClientRect().left)
					}
					 pos_array_artist.push(s_artist);
					 pos_array_artist.sort(function (x, y) {
					    var n = x.top - y.top;
					    if (n !== 0) {
					        return n;
					    }
					    return x.left - y.left;
					});
				}
			}
		for (var i =  pos_array_artist.length - 1; i >= 0; i--) {
			$("#post_"+timeout_counter+"top_"+ pos_array_artist[i].top+"_left_" +  pos_array_artist[i].left).html(chars_artist[i])
			if(chars_artist[i] === 'p'||
				chars_artist[i] === 'q'||
				chars_artist[i] === 'y'||
				chars_artist[i] === 'g'||
				chars_artist[i] === 'j'||
				chars_artist[i] === 'q'){
				$("#post_"+timeout_counter+"top_"+ pos_array_artist[i].top+"_left_" +  pos_array_artist[i].left).addClass('line_p')
			}
			if(chars_artist[i] === 's'||
				chars_artist[i] === 'w'||
				chars_artist[i] === 'e'||
				chars_artist[i] === 'r'||
				chars_artist[i] === 'u'||
				chars_artist[i] === 'o'||
				chars_artist[i] === 'a'||
				chars_artist[i] === 'z'||
				chars_artist[i] === 'x'||
				chars_artist[i] === 'c'||
				chars_artist[i] === 'v'||
				chars_artist[i] === 'n'||
				chars_artist[i] === 'm'){
				$("#post_"+timeout_counter+"top_"+ pos_array_artist[i].top+"_left_" +  pos_array_artist[i].left).addClass('line_s')
			}
			$("#post_"+timeout_counter+"top_"+ pos_array_artist[i].top+"_left_" +  pos_array_artist[i].left).addClass("post"+timeout_counter+'artist')
			$("#post_"+timeout_counter+"top_"+ pos_array_artist[i].top+"_left_" +  pos_array_artist[i].left).addClass('artist')
		}













			var chars_artwork = post_contents_artwork[timeout_counter-1].split('');


			var  pos_array_artwork = []
			for (var i = selected.length - 1; i >= 0; i--) {
				if(Math.sqrt(((selected[i].getBoundingClientRect().left+inner_wid/2)-w/2)*((selected[i].getBoundingClientRect().left+inner_wid/2)-w/2) + ((selected[i].getBoundingClientRect().top-inner_wid/2)-h/2)*((selected[i].getBoundingClientRect().top-inner_wid/2)-h/2)) 
					< (sq_w/8)*4
					&&
					(selected[i].getBoundingClientRect().top-inner_wid/2)>b_2_ybound_1+inner_wid
					&&
					(selected[i].getBoundingClientRect().top-inner_wid/2)<b_2_ybound_2-inner_wid
					&&
					(selected[i].getBoundingClientRect().left-inner_wid/2)>b_2_xbound_1+inner_wid
					&&
					(selected[i].getBoundingClientRect().left-inner_wid/2)<b_2_xbound_2-inner_wid
					){
					selected[i].id = "post_"+
									timeout_counter+"top_" + 
									Math.floor(selected[i].getBoundingClientRect().top/(sq_amount*0.66))+
									"_left_" + 
									Math.floor(selected[i].getBoundingClientRect().left);
					var s_artwork={
						top:Math.floor(selected[i].getBoundingClientRect().top/(sq_amount*0.66)),
						left:Math.floor(selected[i].getBoundingClientRect().left)
					}
					 pos_array_artwork.push(s_artwork);
					 pos_array_artwork.sort(function (x, y) {
					    var n = x.top - y.top;
					    if (n !== 0) {
					        return n;
					    }
					    return x.left - y.left;
					});
				}
			}


		for (var i =  pos_array_artwork.length - 1; i >= 0; i--) {

			$("#post_"+timeout_counter+"top_"+ pos_array_artwork[i].top+"_left_" +  pos_array_artwork[i].left).html(chars_artwork[i])
			if(chars_artwork[i] === 'p'||
				chars_artwork[i] === 'q'||
				chars_artwork[i] === 'y'||
				chars_artwork[i] === 'g'||
				chars_artwork[i] === 'j'||
				chars_artwork[i] === 'q'){
				$("#post_"+timeout_counter+"top_"+ pos_array_artwork[i].top+"_left_" +  pos_array_artwork[i].left).addClass('line_p')
			}
			if(chars_artwork[i] === 's'||
				chars_artwork[i] === 'w'||
				chars_artwork[i] === 'e'||
				chars_artwork[i] === 'r'||
				chars_artwork[i] === 'u'||
				chars_artwork[i] === 'o'||
				chars_artwork[i] === 'a'||
				chars_artwork[i] === 'z'||
				chars_artwork[i] === 'x'||
				chars_artwork[i] === 'c'||
				chars_artwork[i] === 'v'||
				chars_artwork[i] === 'n'||
				chars_artwork[i] === 'm'){
				$("#post_"+timeout_counter+"top_"+ pos_array_artwork[i].top+"_left_" +  pos_array_artwork[i].left).addClass('line_s')
			}
			$("#post_"+timeout_counter+"top_"+ pos_array_artwork[i].top+"_left_" +  pos_array_artwork[i].left).addClass("post"+timeout_counter+'artwork')
			$("#post_"+timeout_counter+"top_"+ pos_array_artwork[i].top+"_left_" +  pos_array_artwork[i].left).addClass('artwork')
		}


		for (var k = 100; k >= 0; k--) {
			var sfpc_array = ['s','f','p','c']
			var i = Math.floor(Math.random() * inner.length)
				if(Math.sqrt(((inner[i].getBoundingClientRect().left+inner_wid/2)-w/2)*((inner[i].getBoundingClientRect().left+inner_wid/2)-w/2) + ((inner[i].getBoundingClientRect().top-inner_wid/2)-h/2)*((inner[i].getBoundingClientRect().top-inner_wid/2)-h/2)) 
					< (sq_w/8)*2){
							if(inner[i].innerHTML === ""){
								inner[i].innerHTML = sfpc_array[Math.floor(Math.random() * 4)]
							}
				}
		}

		if(timeout_counter == 1){
    		$('#whole').addClass('rotating')
    		$('#loading').hide()
    		$('#wholewrapper').css({'opacity':'1'})
			insert_extra()
		}
	}
function insert_extra(){
	rotate_whole()
}
function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}

	var whole_val
	var innernumber

	function rotate_whole() {
	    $('#whole').addClass('rotating')

	    	whole_val = getRotationDegrees($('#whole'))
	    	if(whole_val%360<140 && whole_val%360>120){
	    		$('#dash').css({'backgroundColor': 'red'})
	    		$('#b_9>div>div').css({'backgroundColor': 'red'})
	    	}else{
	    		$('#dash').css({'backgroundColor': 'black'})
	    		$('#b_9>div>div').css({'backgroundColor': 'black'})
	    	}
	    if (Math.floor(whole_val/6)<10) {
	    	innernumber = '0'+Math.floor(whole_val/6)
	    }else{
	    	innernumber = Math.floor(whole_val/6)
	    }
		$('#b_9>div>div').html(innernumber)





		var diff = Math.abs(new Date() - new Date('2019/5/14 00:00'));
		var diffMins = Math.floor((diff/1000)/60);
		$('.ago_minute').html(diffMins)





		$( '.inner').removeClass('c_1')
		$( '.artwork_lined').removeClass('c_2_lined')
		$( '.artist_lined').removeClass('c_3_lined')
		$( '.inner').removeClass('c_2')
		var unit = 360/32

		rot_counter = 15 - Math.floor((((whole_val-unit)%360)+1)/(unit*2))
		if( Math.floor(((whole_val%360)+1)/(unit*2)) == 15){
			rot_counter = 0
		}
		$('#b_2').attr("href", 'details.html#'+rot_counter);
		$('#b_3').attr("href",'details.html#'+rot_counter);
		selected_artist = document.getElementsByClassName('post'+rot_counter+'artist')
		selected_artwork = document.getElementsByClassName('post'+rot_counter+'artwork')

		$('.description>a').hide()
		$('#contents_'+rot_counter).show()
		$('#photo_'+rot_counter).show()

		for (var i = selected_artist.length - 1; i >= 0; i--) {
			selected_artist[i].classList.add("c_1");
		}
		for (var i = selected_artwork.length - 1; i >= 0; i--) {
			selected_artwork[i].classList.add("c_2");
		}

		selected_artwork_lined = document.querySelector('.post'+rot_counter+'artwork_lined')
    if(selected_artwork_lined !== null) {
      selected_artwork_lined.classList.add("c_2_lined");
    }
		selected_artist_lined = document.querySelector('.post'+rot_counter+'artist_lined')
    if(selected_artist_lined !== null) {
      selected_artist_lined.classList.add("c_3_lined");
    }
	}

  setInterval(rotate_whole, 300);

})