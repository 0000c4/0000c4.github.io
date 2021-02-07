///аудио
  var soundtrack = new Audio(); // Создаём новый элемент Audio
  soundtrack.src = "soundtrack.wav"; // Указываем путь к звуку "клика"
  soundtrack.autoplay = true; // Автоматически запускаем
  soundtrack.loop = true;

document.getElementById("gameHtml").style.display = 'none';//изначатльно отключаем игру
document.getElementById("gameOver").style.display = 'none';//изначатльно отключаем игру
//глобальные переменные и константы

const WIDTH = 28
const HEIGHT = 20;

const playerChar = "◪";
const chestChar = "⬓";
const downChar = "d";
const healthChar = "h";
const keyChar = "k";

var time = 0;

var chestActive = 1;//открывался ли сундук ранее ?
var chestX = 0;
var chestY = 0;

var healthActive = 1;//открывался ли сундук ранее ?
var healthX = 0;
var heatlhY = 0;

var downX = 0;//кординаты спуска вниз
var downY = 0;

var keyX = 0;//кординаты спуска вниз
var keyY = 0;

var roomId1 = 0;
var roomId2 = 0;
var roomId3 = 0;
var roomId4 = 0;
var roomId5 = 0;
var roomId6 = 0;

var level = 1;//текущий уровень
var loop;//инициализация цикла
//stats
var player = {//игрок
	key: 0,
	x: 3,
	y: 2,
	hp: 100,//здоровье
	atk: 1,//атака
	step: 0,//ход(врага или игрока)
	wpn: "none",//оружие
	life(){
		if(this.hp <= 0){gameOver();}//cмерть
	},
};

var monstromicon = {
	slimeHP: 4,
	slimeATK: 2,
	skeletonHP: 7,
	skeletonATK: 3,
	};

//graphic
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "background.png";

const stone = new Image();
stone.src = "stone.png";

const door = new Image();
door.src = "door.png";

const chestIMG = new Image();
chestIMG.src = "chest.png";

const down = new Image();
down.src = "down.png";

const key = new Image();
key.src = "key.png";

const playerIMG = new Image();
playerIMG.src = "player.png";

const healthIMG = new Image();
healthIMG.src = "healthKit.png";

const enemy1IMG = new Image();
enemy1IMG.src = "slime.png";
const enemy1IMG2 = new Image();
enemy1IMG2.src = "slime2.png";

const enemy2IMG = new Image();
enemy2IMG.src = "slime.png";
const enemy2IMG2 = new Image();
enemy2IMG2.src = "slime2.png";

const enemy3IMG = new Image();
enemy3IMG.src = "slime.png";
const enemy3IMG2 = new Image();
enemy3IMG2.src = "slime2.png";

const enemy4IMG = new Image();
enemy4IMG.src = "slime.png";
const enemy4IMG2 = new Image();
enemy4IMG2.src = "slime2.png";

const enemy5IMG = new Image();
enemy5IMG.src = "slime.png";
const enemy5IMG2 = new Image();
enemy5IMG2.src = "slime2.png";

const enemy6IMG = new Image();
enemy6IMG.src = "slime.png";
const enemy6IMG2 = new Image();
enemy6IMG2.src = "slime2.png";

const enemy7IMG = new Image();
enemy7IMG.src = "slime.png";
const enemy7IMG2 = new Image();
enemy7IMG2.src = "slime2.png";

const enemy8IMG = new Image();
enemy8IMG.src = "slime.png";
const enemy8IMG2 = new Image();
enemy8IMG2.src = "slime2.png";

const enemy9IMG = new Image();
enemy9IMG.src = "slime.png";
const enemy9IMG2 = new Image();
enemy9IMG2.src = "slime2.png";

const enemy10IMG = new Image();
enemy10IMG.src = "slime.png";
const enemy10IMG2 = new Image();
enemy10IMG2.src = "slime2.png";

const enemy11IMG = new Image();
enemy11IMG.src = "slime.png";
const enemy11IMG2 = new Image();
enemy11IMG2.src = "slime2.png";

const enemy12IMG = new Image();
enemy12IMG.src = "slime.png";
const enemy12IMG2 = new Image();
enemy12IMG2.src = "slime2.png";

const enemy13IMG = new Image();
enemy13IMG.src = "slime.png";
const enemy13IMG2 = new Image();
enemy13IMG2.src = "slime2.png";

const enemy14IMG = new Image();
enemy14IMG.src = "slime.png";
const enemy14IMG2 = new Image();
enemy14IMG2.src = "slime2.png";

const enemy15IMG = new Image();
enemy15IMG.src = "slime.png";
const enemy15IMG2 = new Image();
enemy15IMG2.src = "slime2.png";

const enemy16IMG = new Image();
enemy16IMG.src = "slime.png";
const enemy16IMG2 = new Image();
enemy16IMG2.src = "slime2.png";

var field = [
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "]
];
function makefld(x,y){
	for(var i = 0;i<y;i++){
		for(var j = 0; j<x;j++){
			field[i][j] = "□";
		}
	}
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class enemy{//для врагов выбран класс вместо структуры(как у player) из за возможности создавать несколько экземпляров 
	hp = 0
	atk = 0
	life = 1
	x = 0
	y = 0
	char = " "
	key = 0;
	active = 0
	anim = false //false - первый кадр, true - второй кадр
	
	constructor(mx,my,hp,atk,char,key){//конструктор класса для создания монстра
		this.x = mx;
		this.y = my;
		this.hp = hp;
		this.atk = atk;
		this.char = char;
		this.key = key;
		field[this.y][this.x] = this.char;
	}
	moving(){
		if(this.active == 1 && this.life == 1 && time == 10){//действует когда жив и активирован
			this.anim = !this.anim;//изменение кадра каждый ход
			if(player.y > this.y && field[this.y + 1][this.x] == "□"){//движение врага
				field[this.y][this.x] = "□"
				this.y++;
				field[this.y][this.x] = this.char
			}
		
			else if(player.y < this.y && field[this.y - 1][this.x] == "□"){
				field[this.y][this.x] = "□"
				this.y--;
				field[this.y][this.x] = this.char
			}
		
			if(player.x > this.x && field[this.y][this.x + 1] == "□"){
				field[this.y][this.x] = "□"
				this.x++;
				field[this.y][this.x] = this.char
			}
		
			else if(player.x < this.x && field[this.y][this.x - 1] == "□"){
				field[this.y][this.x] = "□"
				this.x--;
				field[this.y][this.x] = this.char
			
			}
			if(this.hp <= 0 && this.key == 1){this.active = 0;this.life = 0; field[this.y][this.x] = "k";keyX = this.x; keyY = this.y;}//выпадение ключа
			else if(this.hp <= 0&& this.key == 0){this.active = 0;this.life = 0; field[this.y][this.x] = "□";}//dead
			
			//battle
			if(field[this.y][this.x - 1] == playerChar || field[this.y][this.x + 1] == playerChar ||
			field[this.y - 1][this.x] == playerChar || field[this.y + 1][this.x] == playerChar){
				if(player.step == 0){player.hp = player.hp - this.atk; player.step = 1;}//ход врага
			}
			
		}
	}
}
//отрисовка графики
function output(){
	ctx.drawImage(ground,0,0);
	for (var i = 0; i < HEIGHT; i++)
		for (var j = 0; j < WIDTH; j++)
		{
			if (field[i][j] == playerChar){ctx.drawImage(playerIMG,j*24,i*24)}
			
			if (field[i][j] == 'm1' && monster1.active == 1 && monster1.anim == false){ctx.drawImage(enemy1IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm1' && monster1.active == 1 && monster1.anim == true){ctx.drawImage(enemy1IMG2,j*24,i*24)}//вывод тайтла врага если он активен
			
			if (field[i][j] == 'm2' && monster2.active == 1 && monster2.anim == false){ctx.drawImage(enemy2IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm2' && monster2.active == 1 && monster2.anim == true){ctx.drawImage(enemy2IMG2,j*24,i*24)}//вывод тайтла врага если он активен
			
			if (field[i][j] == 'm3' && monster3.active == 1 && monster3.anim == false){ctx.drawImage(enemy3IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm3' && monster3.active == 1 && monster3.anim == true){ctx.drawImage(enemy3IMG2,j*24,i*24)}//вывод тайтла врага если он активен
			
			if (field[i][j] == 'm4' && monster4.active == 1 && monster4.anim == false){ctx.drawImage(enemy4IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm4' && monster4.active == 1 && monster4.anim == true){ctx.drawImage(enemy4IMG2,j*24,i*24)}
			
			if (field[i][j] == 'm5' && monster5.active == 1 && monster5.anim == false){ctx.drawImage(enemy5IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm5' && monster5.active == 1 && monster5.anim == true){ctx.drawImage(enemy5IMG2,j*24,i*24)}
			
			if (field[i][j] == 'm6' && monster6.active == 1 && monster6.anim == false){ctx.drawImage(enemy6IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm6' && monster6.active == 1 && monster6.anim == true){ctx.drawImage(enemy6IMG2,j*24,i*24)}
			
			if (field[i][j] == 'm7' && monster7.active == 1 && monster7.anim == false){ctx.drawImage(enemy7IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm7' && monster7.active == 1 && monster7.anim == true){ctx.drawImage(enemy7IMG2,j*24,i*24)}
			
			if (field[i][j] == 'm8' && monster8.active == 1 && monster8.anim == false){ctx.drawImage(enemy8IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm8' && monster8.active == 1 && monster8.anim == true){ctx.drawImage(enemy8IMG2,j*24,i*24)}
			
			if (field[i][j] == 'm9' && monster9.active == 1 && monster9.anim == false){ctx.drawImage(enemy9IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm9' && monster9.active == 1 && monster9.anim == true){ctx.drawImage(enemy9IMG2,j*24,i*24)}
			
			if (field[i][j] == 'm10' && monster10.active == 1 && monster10.anim == false){ctx.drawImage(enemy10IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm10' && monster10.active == 1 && monster10.anim == true){ctx.drawImage(enemy10IMG2,j*24,i*24)}
			
			if (field[i][j] == 'm11' && monster11.active == 1 && monster11.anim == false){ctx.drawImage(enemy11IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm11' && monster11.active == 1 && monster11.anim == true){ctx.drawImage(enemy11IMG2,j*24,i*24)}
			
			if (field[i][j] == 'm12' && monster12.active == 1 && monster12.anim == false){ctx.drawImage(enemy12IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm12' && monster12.active == 1 && monster12.anim == true){ctx.drawImage(enemy12IMG2,j*24,i*24)}
			
			if (field[i][j] == 'm13' && monster13.active == 1 && monster13.anim == false){ctx.drawImage(enemy13IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm13' && monster13.active == 1 && monster13.anim == true){ctx.drawImage(enemy13IMG2,j*24,i*24)}
			
			if (field[i][j] == 'm14' && monster14.active == 1 && monster14.anim == false){ctx.drawImage(enemy14IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm14' && monster14.active == 1 && monster14.anim == true){ctx.drawImage(enemy14IMG2,j*24,i*24)}
			
			if (field[i][j] == 'm15' && monster15.active == 1 && monster15.anim == false){ctx.drawImage(enemy15IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm15' && monster15.active == 1 && monster15.anim == true){ctx.drawImage(enemy15IMG2,j*24,i*24)}
			
			if (field[i][j] == 'm16' && monster16.active == 1 && monster16.anim == false){ctx.drawImage(enemy16IMG,j*24,i*24)}//вывод тайтла врага если он активен
			else if (field[i][j] == 'm16' && monster16.active == 1 && monster16.anim == true){ctx.drawImage(enemy16IMG2,j*24,i*24)}
			
			if (field[i][j] == chestChar){ctx.drawImage(chestIMG,j*24,i*24)}
			if (field[i][j] == downChar){ctx.drawImage(down,j*24,i*24)}
			if (field[i][j] == keyChar){ctx.drawImage(key,j*24,i*24)}
			if (field[i][j] == healthChar){ctx.drawImage(healthIMG,j*24,i*24)}
			if (field[i][j] == '■'){ctx.drawImage(stone,j*24,i*24)}
			if (field[i][j] == '▩'){ctx.drawImage(door,j*24,i*24)}

		}
}
function init(){
	//появление персонажа
	field[player.y][player.x] = playerChar;

}
//логика кнопок
function returnMenu(){//возвращение в меню
        document.getElementById("gameOver").style.display = 'none';//изначатльно отключаем игру
        document.getElementById("menu").style.display = 'block';//изначатльно отключаем игру
}
function gameRetry(){//попробовать заново
    document.getElementById("gameHtml").style.display = 'block';//актививация игры
    document.getElementById("gameOver").style.display = 'none';//закрытие меню
    		//перерисовка спрайтов
	enemy1IMG.src = "slime.png";
	enemy1IMG2.src = "slime2.png";
	enemy2IMG.src = "slime.png";
	enemy2IMG2.src = "slime2.png";
	enemy3IMG.src = "slime.png";
	enemy3IMG2.src = "slime2.png";
	enemy4IMG.src = "slime.png";
	enemy4IMG2.src = "slime2.png";
	enemy5IMG.src = "slime.png";
	enemy5IMG2.src = "slime2.png";
	enemy6IMG.src = "slime.png";
	enemy6IMG2.src = "slime2.png";
	enemy7IMG.src = "slime.png";
	enemy7IMG2.src = "slime2.png";
	enemy8IMG.src = "slime.png";
	enemy8IMG2.src = "slime2.png";
	enemy9IMG.src = "slime.png";
	enemy9IMG2.src = "slime2.png";
	enemy10IMG.src = "slime.png";
	enemy10IMG2.src = "slime2.png";
    //выход из цикла
    clearInterval(loop);
    //удаление врагов
    delete monster1;
    delete monster2;
    delete monster3;
    delete monster4;
    delete monster5;
    delete monster6;
    delete monster7;
    delete monster8;
    delete monster9;
    delete monster10;
    	//сброс всех переменных
	chestActive = 1;
	chestX = 0;
	chestY = 0;
	healthActive = 1;
	healthX = 0;
	heatlhY = 0;
	downX = 0;
	downY = 0;
	roomId1 = 0;
	roomId2 = 0;
	roomId3 = 0;
	roomId4 = 0;
	roomId5 = 0;
	roomId6 = 0;
	level = 1;
	player.x = 3;
	player.y = 2;
	player.hp = 100;
	player.atk = 1;
	player.step = 0;
	player.wpn = "none";
	lvl1();//запуск первого уровня
}
function gameOver(){//сообщение о проигрыше
    document.getElementById("gameHtml").style.display = 'none';//отключаем игру
    document.getElementById("gameOver").style.display = 'block';//вывод меню о проигрыше
}
function new_game(){//запуск игры
	document.getElementById("menu").style.display = 'none';//выход из меню
	document.getElementById("gameHtml").style.display = 'block';//запуск игры
	document.getElementById("gameOver").style.display = 'none';//вывод меню о проигрыше
	
	soundtrack.muted = true; // Автоматически запускаем
		//перерисовка спрайтов
	enemy1IMG.src = "slime.png";
	enemy1IMG2.src = "slime2.png";
	enemy2IMG.src = "slime.png";
	enemy2IMG2.src = "slime2.png";
	enemy3IMG.src = "slime.png";
	enemy3IMG2.src = "slime2.png";
	enemy4IMG.src = "slime.png";
	enemy4IMG2.src = "slime2.png";
	enemy5IMG.src = "slime.png";
	enemy5IMG2.src = "slime2.png";
	enemy6IMG.src = "slime.png";
	enemy6IMG2.src = "slime2.png";
	enemy7IMG.src = "slime.png";
	enemy7IMG2.src = "slime2.png";
	enemy8IMG.src = "slime.png";
	enemy8IMG2.src = "slime2.png";
	enemy9IMG.src = "slime.png";
	enemy9IMG2.src = "slime2.png";
	enemy10IMG.src = "slime.png";
	enemy10IMG2.src = "slime2.png";
	    //выход из цикла
    clearInterval(loop);
    //удаление врагов
    delete monster1;
    delete monster2;
    delete monster3;
    delete monster4;
    delete monster5;
    delete monster6;
    delete monster7;
    delete monster8;
    delete monster9;
    delete monster10;
	    	//сброс всех переменных
	chestActive = 1;
	chestX = 0;
	chestY = 0;
	healthActive = 1;
	healthX = 0;
	heatlhY = 0;
	downX = 0;
	downY = 0;
	roomId1 = 0;
	roomId2 = 0;
	roomId3 = 0;
	roomId4 = 0;
	roomId5 = 0;
	roomId6 = 0;
	level = 1;
	player.x = 3;
	player.y = 2;
	player.hp = 100;
	player.atk = 1;
	player.step = 0;
	player.wpn = "none";
	lvl1();//запуск первого уровня
	
}//запуск игры из меню
function btnOk() {
   if(field[player.y][player.x+1] == chestChar || field[player.y][player.x-1] == chestChar || field[player.y-1][player.x] == chestChar ||//если игрок рядом с сундуком
   field[player.y+1][player.x] == chestChar || field[player.y-1][player.x+1] == chestChar || field[player.y+1][player.x+1] == chestChar ||
    field[player.y-1][player.x-1] == chestChar || field[player.y+1][player.x-1] == chestChar){//открытие сундука
		field[chestY][chestX] = "□";//удаление сундука

		var foo = Math.random() * 100;
		if (foo < 45){
			player.atk = 2;
			player.wpn = "wooden stick";
		}
		else if (foo < 80){
			player.atk = 4;
			player.wpn = "rusty ax";
		}
		else if (foo < 98){
			player.atk = 7;
			player.wpn = "silver spear";
		}
		else{
			player.atk = 12;
			player.wpn = "magic sword";
		}
	}
   if(field[player.y][player.x+1] == keyChar || field[player.y][player.x-1] == keyChar || field[player.y-1][player.x] == keyChar ||//если игрок рядом с ключом
   field[player.y+1][player.x] == keyChar || field[player.y-1][player.x+1] == keyChar || field[player.y+1][player.x+1] == keyChar ||
    field[player.y-1][player.x-1] == keyChar || field[player.y+1][player.x-1] == keyChar){//ключ
		player.key = 1; field[keyY][keyX] = "□";
	}
		
   if(field[player.y][player.x+1] == healthChar || field[player.y][player.x-1] == healthChar || field[player.y-1][player.x] == healthChar ||//если игрок рядом с сундуком
   field[player.y+1][player.x] == healthChar || field[player.y-1][player.x+1] == healthChar || field[player.y+1][player.x+1] == healthChar ||
    field[player.y-1][player.x-1] == healthChar || field[player.y+1][player.x-1] == healthChar){
		field[healthY][healthX] = "□";//удаление аптечки
		player.hp = player.hp + 50;
		if(player.hp > 100){player.hp = 100;}
	}
	   if(field[player.y][player.x+1] == downChar || field[player.y][player.x-1] == downChar || field[player.y-1][player.x] == downChar ||//если игрок рядом с сундуком
   field[player.y+1][player.x] == downChar || field[player.y-1][player.x+1] == downChar || field[player.y+1][player.x+1] == downChar ||
    field[player.y-1][player.x-1] == downChar || field[player.y+1][player.x-1] == downChar){//переход на соелующий этаж
		if(player.key == 1 && level == 1){clearInterval(loop);lvl2(); player.key = 0;}
		else if(player.key == 1 && level == 2){clearInterval(loop);lvl3(); player.key = 0;}
		else if(player.key == 1 && level == 3){clearInterval(loop);lvl4(); player.key = 0;}
		}
		
   if(field[player.y][player.x+1] == monster1.char || field[player.y][player.x-1] == monster1.char || field[player.y-1][player.x] == monster1.char ||//если игрок рядом с врагом
   field[player.y+1][player.x] == monster1.char || field[player.y-1][player.x+1] == monster1.char || field[player.y+1][player.x+1] == monster1.char ||
    field[player.y-1][player.x-1] == monster1.char || field[player.y+1][player.x-1] == monster1.char){//начало битвы
	if(player.step == 1){monster1.hp = monster1.hp - player.atk; player.step = 0;}//ход игрока
   }//первый монстр
   
   if(field[player.y][player.x+1] == monster2.char || field[player.y][player.x-1] == monster2.char || field[player.y-1][player.x] == monster2.char ||//если игрок рядом с врагом
   field[player.y+1][player.x] == monster2.char || field[player.y-1][player.x+1] == monster2.char || field[player.y+1][player.x+1] == monster2.char ||
    field[player.y-1][player.x-1] == monster2.char || field[player.y+1][player.x-1] == monster2.char){//начало битвы
	if(player.step == 1){monster2.hp = monster2.hp - player.atk; player.step = 0;}//ход игрока
   }//второй монстр
   if(field[player.y][player.x+1] == monster3.char || field[player.y][player.x-1] == monster3.char || field[player.y-1][player.x] == monster3.char ||//если игрок рядом с врагом
   field[player.y+1][player.x] == monster3.char || field[player.y-1][player.x+1] == monster3.char || field[player.y+1][player.x+1] == monster3.char ||
    field[player.y-1][player.x-1] == monster3.char || field[player.y+1][player.x-1] == monster3.char){//начало битвы
	if(player.step == 1){monster3.hp = monster3.hp - player.atk;player.step = 0;}//ход игрока
   }//третий монстр
      if(field[player.y][player.x+1] == monster4.char || field[player.y][player.x-1] == monster4.char || field[player.y-1][player.x] == monster4.char ||//если игрок рядом с врагом
   field[player.y+1][player.x] == monster4.char || field[player.y-1][player.x+1] == monster4.char || field[player.y+1][player.x+1] == monster4.char ||
    field[player.y-1][player.x-1] == monster4.char || field[player.y+1][player.x-1] == monster4.char){//начало битвы
	if(player.step == 1){monster4.hp = monster4.hp - player.atk;player.step = 0;}//ход игрока
   }//четвертый монстр
   if(field[player.y][player.x+1] == monster5.char || field[player.y][player.x-1] == monster5.char || field[player.y-1][player.x] == monster5.char ||//если игрок рядом с врагом
   field[player.y+1][player.x] == monster5.char || field[player.y-1][player.x+1] == monster5.char || field[player.y+1][player.x+1] == monster5.char ||
    field[player.y-1][player.x-1] == monster5.char || field[player.y+1][player.x-1] == monster5.char){//начало битвы
	if(player.step == 1){monster5.hp = monster5.hp - player.atk;player.step = 0;}//ход игрока
   }//пятый монстр
   if(typeof monster6 != "undefined"){//проверка на существование
		if(field[player.y][player.x+1] == monster6.char || field[player.y][player.x-1] == monster6.char || field[player.y-1][player.x] == monster6.char ||//если игрок рядом с врагом
		field[player.y+1][player.x] == monster6.char || field[player.y-1][player.x+1] == monster6.char || field[player.y+1][player.x+1] == monster6.char ||
		field[player.y-1][player.x-1] == monster6.char || field[player.y+1][player.x-1] == monster6.char){//начало битвы
			if(player.step == 1){monster6.hp = monster6.hp - player.atk;player.step = 0;}//ход игрока
		}
   }//шестой монстр
   if(typeof monster7 != "undefined"){//проверка на существование
		if(field[player.y][player.x+1] == monster7.char || field[player.y][player.x-1] == monster7.char || field[player.y-1][player.x] == monster7.char ||//если игрок рядом с врагом
		field[player.y+1][player.x] == monster7.char || field[player.y-1][player.x+1] == monster7.char || field[player.y+1][player.x+1] == monster7.char ||
		field[player.y-1][player.x-1] == monster7.char || field[player.y+1][player.x-1] == monster7.char){//начало битвы
			if(player.step == 1){monster7.hp = monster7.hp - player.atk;player.step = 0;}//ход игрока
		}
   }//седьмой монстр
   if(typeof monster8 != "undefined"){//проверка на существование
		if(field[player.y][player.x+1] == monster8.char || field[player.y][player.x-1] == monster8.char || field[player.y-1][player.x] == monster8.char ||//если игрок рядом с врагом
		field[player.y+1][player.x] == monster8.char || field[player.y-1][player.x+1] == monster8.char || field[player.y+1][player.x+1] == monster8.char ||
		field[player.y-1][player.x-1] == monster8.char || field[player.y+1][player.x-1] == monster8.char){//начало битвы
			if(player.step == 1){monster8.hp = monster8.hp - player.atk;player.step = 0;}//ход игрока
		}
   }//восьмой монстр
   if(typeof monster9 != "undefined"){//проверка на существование
		if(field[player.y][player.x+1] == monster9.char || field[player.y][player.x-1] == monster9.char || field[player.y-1][player.x] == monster9.char ||//если игрок рядом с врагом
		field[player.y+1][player.x] == monster9.char || field[player.y-1][player.x+1] == monster9.char || field[player.y+1][player.x+1] == monster9.char ||
		field[player.y-1][player.x-1] == monster9.char || field[player.y+1][player.x-1] == monster9.char){//начало битвы
			if(player.step == 1){monster9.hp = monster9.hp - player.atk;player.step = 0;}//ход игрока
		}
   }//девятый монстр
   if(typeof monster10 != "undefined"){//проверка на существование
		if(field[player.y][player.x+1] == monster10.char || field[player.y][player.x-1] == monster10.char || field[player.y-1][player.x] == monster10.char ||//если игрок рядом с врагом
		field[player.y+1][player.x] == monster10.char || field[player.y-1][player.x+1] == monster10.char || field[player.y+1][player.x+1] == monster10.char ||
		field[player.y-1][player.x-1] == monster10.char || field[player.y+1][player.x-1] == monster10.char){//начало битвы
			if(player.step == 1){monster10.hp = monster10.hp - player.atk;player.step = 0;}//ход игрока
		}
   }//десятый монстр
   if(typeof monster11 != "undefined"){//проверка на существование
		if(field[player.y][player.x+1] == monster11.char || field[player.y][player.x-1] == monster11.char || field[player.y-1][player.x] == monster11.char ||//если игрок рядом с врагом
		field[player.y+1][player.x] == monster11.char || field[player.y-1][player.x+1] == monster11.char || field[player.y+1][player.x+1] == monster11.char ||
		field[player.y-1][player.x-1] == monster11.char || field[player.y+1][player.x-1] == monster11.char){//начало битвы
			if(player.step == 1){monster11.hp = monster11.hp - player.atk;player.step = 0;}//ход игрока
		}
   }//одинадцатый  монстр
      if(typeof monster12 != "undefined"){//проверка на существование
		if(field[player.y][player.x+1] == monster12.char || field[player.y][player.x-1] == monster12.char || field[player.y-1][player.x] == monster12.char ||//если игрок рядом с врагом
		field[player.y+1][player.x] == monster12.char || field[player.y-1][player.x+1] == monster12.char || field[player.y+1][player.x+1] == monster12.char ||
		field[player.y-1][player.x-1] == monster12.char || field[player.y+1][player.x-1] == monster12.char){//начало битвы
			if(player.step == 1){monster12.hp = monster12.hp - player.atk;player.step = 0;}//ход игрока
		}
   }//двенадцатый монстр
      if(typeof monster13 != "undefined"){//проверка на существование
		if(field[player.y][player.x+1] == monster13.char || field[player.y][player.x-1] == monster13.char || field[player.y-1][player.x] == monster13.char ||//если игрок рядом с врагом
		field[player.y+1][player.x] == monster13.char || field[player.y-1][player.x+1] == monster13.char || field[player.y+1][player.x+1] == monster13.char ||
		field[player.y-1][player.x-1] == monster13.char || field[player.y+1][player.x-1] == monster13.char){//начало битвы
			if(player.step == 1){monster13.hp = monster13.hp - player.atk;player.step = 0;}//ход игрока
		}
   }//тринадцатый монстр
      if(typeof monster14 != "undefined"){//проверка на существование
		if(field[player.y][player.x+1] == monster14.char || field[player.y][player.x-1] == monster14.char || field[player.y-1][player.x] == monster14.char ||//если игрок рядом с врагом
		field[player.y+1][player.x] == monster14.char || field[player.y-1][player.x+1] == monster14.char || field[player.y+1][player.x+1] == monster14.char ||
		field[player.y-1][player.x-1] == monster14.char || field[player.y+1][player.x-1] == monster14.char){//начало битвы
			if(player.step == 1){monster14.hp = monster14.hp - player.atk;player.step = 0;}//ход игрока
		}
   }//четырнадцатый монстр
      if(typeof monster15 != "undefined"){//проверка на существование
		if(field[player.y][player.x+1] == monster15.char || field[player.y][player.x-1] == monster15.char || field[player.y-1][player.x] == monster15.char ||//если игрок рядом с врагом
		field[player.y+1][player.x] == monster15.char || field[player.y-1][player.x+1] == monster15.char || field[player.y+1][player.x+1] == monster15.char ||
		field[player.y-1][player.x-1] == monster15.char || field[player.y+1][player.x-1] == monster15.char){//начало битвы
			if(player.step == 1){monster15.hp = monster15.hp - player.atk;player.step = 0;}//ход игрока
		}
   }//пятнадцатый монстр
      if(typeof monster16 != "undefined"){//проверка на существование
		if(field[player.y][player.x+1] == monster16.char || field[player.y][player.x-1] == monster16.char || field[player.y-1][player.x] == monster16.char ||//если игрок рядом с врагом
		field[player.y+1][player.x] == monster16.char || field[player.y-1][player.x+1] == monster16.char || field[player.y+1][player.x+1] == monster16.char ||
		field[player.y-1][player.x-1] == monster16.char || field[player.y+1][player.x-1] == monster16.char){//начало битвы
			if(player.step == 1){monster16.hp = monster16.hp - player.atk;player.step = 0;}//ход игрока
		}
   }//шестнадцатый монстр
}
function btnUp() {
   if(field[player.y - 1][player.x] == "□"){
	    field[player.y][player.x] = "□";
		player.y = player.y - 1;
		field[player.y][player.x] = playerChar;
		player.step = 0;
		output();
	}
}

function btnDown() {
   if(field[player.y + 1][player.x] == "□"){
		field[player.y][player.x] = "□";
		player.y = player.y + 1;
		field[player.y][player.x] = playerChar;
		player.step = 0;
		output();
	}
}

function btnLeft() {
	if(field[player.y][player.x - 1] == "□"){
		field[player.y][player.x] = "□";
		player.x = player.x - 1;
		field[player.y][player.x] = playerChar;
		player.step = 0;
		output();
	}
}

function btnRight() {
	if(field[player.y][player.x + 1] == "□"){
		field[player.y][player.x] = "□";
		player.x = player.x + 1;
		field[player.y][player.x] = playerChar;
		player.step = 0;
		output();
	}
}

function control(e){
	switch(e.keyCode){
		case 38://up
			btnUp();
			break;
		case 40://down
			btnDown();
			break;
		case 37://left
			btnLeft();
			break;
		case 39://right
			btnRight();
			break;
		case 32://space
			btnOk();
			break;
	////////////alternative controls
			case 87://W
			btnUp();
			break;
		case 83://S
			btnDown();
			break;
		case 65://A
			btnLeft();
			break;
		case 68://D
			btnRight();
			break;
		case 69:
			btnOk();
			break;
	}
}
addEventListener("keydown", control);
var room = {
square: [
["■","■","■","▩","▩","■","■","■"],
["■","□","□","□","□","□","□","■"],
["▩","□","□","□","□","□","□","▩"],
["▩","□","□","□","□","□","□","▩"],
["■","□","□","□","□","□","□","■"],
["■","■","■","▩","▩","■","■","■"]
],

leftTopSquare: [
["□","□","■","▩","▩","■","■","■"],
["□","□","■","□","□","□","□","■"],
["■","■","■","□","□","□","□","▩"],
["▩","□","□","□","□","□","□","▩"],
["▩","□","□","□","□","□","□","■"],
["■","■","■","▩","▩","■","■","■"]
],

leftBottomSquare: [
["■","■","■","▩","▩","■","■","■"],
["▩","□","□","□","□","□","□","■"],
["▩","□","□","□","□","□","□","▩"],
["■","■","■","□","□","□","□","▩"],
["□","□","■","□","□","□","□","■"],
["□","□","■","▩","▩","■","■","■"]
],
rightTopSquare: [
["■","■","■","▩","▩","■","□","□"],
["■","□","□","□","□","■","□","□"],
["▩","□","□","□","□","■","■","■"],
["▩","□","□","□","□","□","□","▩"],
["■","□","□","□","□","□","□","▩"],
["■","■","■","▩","▩","■","■","■"]
],

rightBottomSquare: [
["■","■","■","▩","▩","■","■","■"],
["■","□","□","□","□","□","□","▩"],
["▩","□","□","□","□","□","□","▩"],
["▩","□","□","□","□","■","■","■"],
["■","□","□","□","□","■","□","□"],
["■","■","■","▩","▩","■","□","□"]
],

topRectangle: [
["■","■","■","□","□","■","■","■"],
["■","□","■","▩","▩","■","□","■"],
["▩","□","□","□","□","□","□","▩"],
["▩","□","□","□","□","□","□","▩"],
["■","□","□","□","□","□","□","■"],
["■","■","■","▩","▩","■","■","■"]
],

bottomRectangle: [
["■","■","■","▩","▩","■","■","■"],
["■","□","□","□","□","□","□","■"],
["▩","□","□","□","□","□","□","▩"],
["▩","□","□","□","□","□","□","▩"],
["■","□","■","▩","▩","■","□","■"],
["■","■","■","□","□","■","■","■"]
],

shape: [
["□","■","■","▩","▩","■","■","□"],
["■","□","□","□","□","□","□","■"],
["▩","□","□","□","□","□","□","▩"],
["▩","□","□","□","□","□","□","▩"],
["■","□","□","□","□","□","□","■"],
["□","■","■","▩","▩","■","■","□"]
],
	make(y,x,type){
		if(type == 0){
			for(var i = 0;i<6;i++){
				for(var j = 0;j<8;j++){
					field[y + i][x + j] = this.square[i][j]; 
				}
			}
		}
		
		else if(type == 1){
			for(var i = 0;i<6;i++){
				for(var j = 0;j<8;j++){
					field[y + i][x + j] = this.leftTopSquare[i][j]; 
				}
			}
		}
		
		else if(type == 2){
			for(var i = 0;i<6;i++){
				for(var j = 0;j<8;j++){
					field[y + i][x + j] = this.leftBottomSquare[i][j]; 
				}
			}
		}
		else if(type == 3){
			for(var i = 0;i<6;i++){
				for(var j = 0;j<8;j++){
					field[y + i][x + j] = this.rightTopSquare[i][j]; 
				}
			}
		}

		else if(type == 4){
			for(var i = 0;i<6;i++){
				for(var j = 0;j<8;j++){
					field[y + i][x + j] = this.rightBottomSquare[i][j]; 
				}
			}
		}
		
		else if(type == 5){
			for(var i = 0;i<6;i++){
				for(var j = 0;j<8;j++){
					field[y + i][x + j] = this.topRectangle[i][j]; 
				}
			}
		}
		
		else if(type == 6){
			for(var i = 0;i<6;i++){
				for(var j = 0;j<8;j++){
					field[y + i][x + j] = this.bottomRectangle[i][j]; 
				}
			}
		}
		
		else if(type == 7){
			for(var i = 0;i<6;i++){
				for(var j = 0;j<8;j++){
					field[y + i][x + j] = this.shape[i][j]; 
				}
			}
		}
	
	},
};
function openDoor(x,y,orient,number){
	if(orient == 'horizontal'){
		if(field[y-1][x] == playerChar || field[y-1][x+1] == playerChar || field[y+1][x] == playerChar || field[y+1][x+1] == playerChar)
			{	
				field[y][x] = "□";
				field[y][x+1] = "□";
			}
			else if(field[y][x] == playerChar || field[y][x+1] == playerChar){//если игрок проходит через дверь
				field[player.y][player.x] = playerChar;
				switch(number){
					case 2:
						monster1.active = 1;
						if(typeof monster9 != "undefined"){monster9.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 14 && healthY == 3 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 14 && chestY == 3 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 14 && downY == 3){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
						
					case 3:
						monster2.active = 1;
						if(typeof monster10 != "undefined"){monster10.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 24 && healthY == 3 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 24 && chestY == 3 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 24 && downY == 3){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
					case 4:
						monster3.active = 1;
						if(typeof monster11 != "undefined"){monster11.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 4 && healthY == 10 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 4 && chestY == 10 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 4 && downY == 10){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
					case 5:
						monster4.active = 1;
						if(typeof monster12 != "undefined"){monster12.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 14 && healthY == 10 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 14 && chestY == 10 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 14 && downY == 10){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
					case 6:
						monster5.active = 1;
						if(typeof monster13 != "undefined"){monster13.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 24 && healthY == 10 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 24 && chestY == 10 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 24 && downY == 10){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
					case 7:
						monster6.active = 1
						if(typeof monster14 != "undefined"){monster14.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 4 && healthY == 17 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 4 && chestY == 17 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 4 && downY == 17){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
					case 8:
						monster7.active = 1
						if(typeof monster15 != "undefined"){monster15.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 14 && healthY == 17 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 14 && chestY == 17 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 14 && downY == 17){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
					case 9:
						monster8.active = 1
						if(typeof monster16 != "undefined"){monster16.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 24 && healthY == 17 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 24 && chestY == 17 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 24 && downY == 17){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
					}
			}
			else{//если игрока поблизости нет
				field[y][x] = "▩";
				field[y][x+1] = "▩";
			}	
	}
	else if(orient == 'vertical'){
			if(field[y][x-1] == playerChar || field[y+1][x-1] == playerChar || field[y][x+1] == playerChar || field[y+1][x+1] == playerChar)
			{
				field[y][x] = "□";
				field[y+1][x] = "□";
			}
			else if(field[y][x] == playerChar || field[y+1][x] == playerChar){//если игрок проходит через дверь
				field[player.y][player.x] = playerChar;
				switch(number){
					case 2:
						monster1.active = 1;
						if(typeof monster9 != "undefined"){monster9.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 14 && healthY == 3 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 14 && chestY == 3 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 14 && downY == 3){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
						
					case 3:
						monster2.active = 1;
						if(typeof monster10 != "undefined"){monster10.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 24 && healthY == 3 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 24 && chestY == 3 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 24 && downY == 3){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
					case 4:
						monster3.active = 1;
						if(typeof monster11 != "undefined"){monster11.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 4 && healthY == 10 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 4 && chestY == 10 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 4 && downY == 10){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
					case 5:
						monster4.active = 1;
						if(typeof monster12 != "undefined"){monster12.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 14 && healthY == 10 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 14 && chestY == 10 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 14 && downY == 10){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
					case 6:
						monster5.active = 1;
						if(typeof monster13 != "undefined"){monster13.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 24 && healthY == 10 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 24 && chestY == 10 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 24 && downY == 10){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
					case 7:
						monster6.active = 1
						if(typeof monster14 != "undefined"){monster14.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 4 && healthY == 17 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 4 && chestY == 17 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 4 && downY == 17){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
					case 8:
						monster7.active = 1
						if(typeof monster15 != "undefined"){monster15.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 14 && healthY == 17 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 14 && chestY == 17 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 14 && downY == 17){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
					case 9:
						monster8.active = 1
						if(typeof monster16 != "undefined"){monster16.active = 1;} //проверка существует ли монстр ? если да активирует
						if(healthX == 24 && healthY == 17 && healthActive == 1){field[healthY][healthX] = healthChar; healthActive = 0;}
						if(chestX == 24 && chestY == 17 && chestActive == 1){field[chestY][chestX] = chestChar; chestActive = 0;}//появление сундука если игрок зашел в комнату
						if(downX == 24 && downY == 17){field[downY][downX] = downChar;}//появление спуска если игрок зашел в комнату
						break;
					}
			}
			else{//если игрока поблизости нет
				field[y][x] = "▩";
				field[y+1][x] = "▩";
			}
		}
}
function doors(){
	//////room 1
	if(roomId1 != 6){openDoor(3,5,'horizontal',1);}
	else{openDoor(3,4,'horizontal',1);}
	
	if(roomId1 != 3 && roomId1 != 4){openDoor(7,2,'vertical',1);}
	else if(roomId1 == 3){openDoor(7,3,'vertical',1);}
	else if(roomId1 == 4){openDoor(7,1,'vertical',1);}
	//////room 2
	if(roomId2 != 6){openDoor(13,5,'horizontal',2);}
	else{openDoor(13,4,'horizontal',2);}
	
	if(roomId2 != 1 && roomId2 != 2){openDoor(10,2,'vertical',2);}
	else if(roomId2 == 1){openDoor(10,3,'vertical',2);}
	else if(roomId2 == 2){openDoor(10,1,'vertical',2);}
	
	if(roomId2 != 3 && roomId2 != 4){openDoor(17,2,'vertical',2);}
	else if(roomId2 == 3){openDoor(17,3,'vertical',2);}
	else if(roomId2 == 4){openDoor(17,1,'vertical',2);}
	//////room 3
	if(roomId3 != 6){openDoor(23,5,'horizontal',3);}
	else{openDoor(23,4,'horizontal',3);}
	
	if(roomId3 != 1 && roomId3 != 2){openDoor(20,2,'vertical',3);}
	else if(roomId3 == 1){openDoor(20,3,'vertical',3);}
	else if(roomId3 == 2){openDoor(20,1,'vertical',3);}
	/////room 4
	if(roomId4 != 5){openDoor(3,7,'horizontal',4);}
	else{openDoor(3,8,'horizontal',4);}
	
	if(roomId4 != 6){openDoor(3,12,'horizontal',4);}
	else{openDoor(3,11,'horizontal',4);}
	
	if(roomId4 != 3 && roomId4 != 4){openDoor(7,9,'vertical',4);}
	else if(roomId4 == 3){openDoor(7,10,'vertical',4);}
	else if(roomId4 == 4){openDoor(7,8,'vertical',4);}
	//////room 5
	if(roomId5 != 5){openDoor(13,7,'horizontal',5);}
	else{openDoor(13,8,'horizontal',5);}
	
	if(roomId5 != 6){openDoor(13,12,'horizontal',5);}
	else{openDoor(13,11,'horizontal',5);}
	
	if(roomId5 != 1 && roomId5 != 2){openDoor(10,9,'vertical',5);}
	else if(roomId5 == 1){openDoor(10,10,'vertical',5);}
	else if(roomId5 == 2){openDoor(10,8,'vertical',5);}
	
	if(roomId5 != 3 && roomId5 != 4){openDoor(17,9,'vertical',5);}
	else if(roomId5 == 3){openDoor(17,10,'vertical',5);}
	else if(roomId5 == 4){openDoor(17,8,'vertical',5);}
	/////room 6
	if(roomId6 != 5){openDoor(23,7,'horizontal',6);}
	else{openDoor(23,8,'horizontal',6);}
	
	if(roomId6 != 6){openDoor(23,12,'horizontal',6);}
	else{openDoor(23,11,'horizontal',6);}
	
	if(roomId6 != 1 && roomId6 != 2){openDoor(20,9,'vertical',6);}
	else if(roomId6 == 1){openDoor(20,10,'vertical',6);}
	else if(roomId6 == 2){openDoor(20,8,'vertical',6);}
	//////room 7
	if(roomId7 != 5){openDoor(3,14,'horizontal',7);}
	else{openDoor(3,15,'horizontal',7);}
	
	if(roomId7 != 3 && roomId7 != 4){openDoor(7,16,'vertical',7);}
	else if(roomId7 == 3){openDoor(7,17,'vertical',7);}
	else if(roomId7 == 4){openDoor(7,15,'vertical',7);}
	/////room 8
	if(roomId8 != 5){openDoor(13,14,'horizontal',8);}
	else{openDoor(13,15,'horizontal',8);}
	
	if(roomId8 != 1 && roomId8 != 2){openDoor(10,16,'vertical',8);}
	else if(roomId8 == 1){openDoor(10,17,'vertical',8);}
	else if(roomId8 == 2){openDoor(10,15,'vertical',8);}
	
	if(roomId8 != 3 && roomId8 != 4){openDoor(17,16,'vertical',8);}
	else if(roomId8 == 3){openDoor(17,17,'vertical',8);}
	else if(roomId8 == 4){openDoor(17,15,'vertical',8);}
	////room 9
	if(roomId9 != 5){openDoor(23,14,'horizontal',9);}
	else{openDoor(23,15,'horizontal',9);}
	
	if(roomId9 != 1 && roomId9 != 2){openDoor(20,16,'vertical',9);}
	else if(roomId9 == 1){openDoor(20,17,'vertical',9);}
	else if(roomId9 == 2){openDoor(20,15,'vertical',9);}	
}

	function cycle(){
	    monster1.moving();//запуск ИИ врагов
        monster2.moving();//8 монстров - минимальное колво, поэтому в проверке не требуется
        monster3.moving();
        monster4.moving();
        monster5.moving();
        monster6.moving();
        monster7.moving();
        monster8.moving();
		if(typeof monster9 != "undefined"){monster9.moving();} //проверка существует ли монстр ? если да запускает ИИ
		if(typeof monster10 != "undefined"){monster10.moving();} //проверка существует ли монстр ? если да запускает ИИ
		if(typeof monster11 != "undefined"){monster11.moving();} //проверка существует ли монстр ? если да запускает ИИ
		if(typeof monster12 != "undefined"){monster12.moving();} //проверка существует ли монстр ? если да запускает ИИ
		if(typeof monster13 != "undefined"){monster13.moving();} //проверка существует ли монстр ? если да запускает ИИ
		if(typeof monster14 != "undefined"){monster14.moving();} //проверка существует ли монстр ? если да запускает ИИ
		if(typeof monster15 != "undefined"){monster15.moving();} //проверка существует ли монстр ? если да запускает ИИ
		if(typeof monster16 != "undefined"){monster16.moving();} //проверка существует ли монстр ? если да запускает ИИ

		doors();
		player.life();
		output();
		document.getElementById("statsHP").innerHTML="hp:" + player.hp;//вывод статистики
		document.getElementById("statsATK").innerHTML=" atk:" + player.atk
		document.getElementById("statsWEAPON").innerHTML=" weapon:" + player.wpn
		document.getElementById("statsFLOOR").innerHTML=" floor:" + level;
		//вывод статистики
	    if(time >= 10){//после прохождения 1 секунды(100х10 = 1000millis) таймер сбрасываеться
        		time = 0;
		}
	    time = time + 1;//одна еденица равна 100 миллисекунд
}

function items(mode){
	//генерация предметов
	var roomChest  = random(0,9);
	var roomHealth = random(0,9);
	var roomDown = random(0,8);
	if(mode == "chest"){//chest
			while(roomDown + 1 == roomChest){roomDown = random(0,8);}//если комната сундука и спуска совпадает выбрать другую
		if(roomChest == 0){chestY = 3;chestX = 4;field[chestY][chestX] = chestChar;}
		else if(roomChest == 1){chestY = 3;chestX = 14;}
		else if(roomChest == 2){chestY = 3;chestX = 24;}
		else if(roomChest == 3){chestY = 10;chestX = 4;}
		else if(roomChest == 4){chestY = 10;chestX = 14;}
		else if(roomChest == 5){chestY = 10;chestX = 24;}
		else if(roomChest == 6){chestY = 17;chestX = 4;}
		else if(roomChest == 7){chestY = 17;chestX = 14;}
		else if(roomChest == 8){chestY = 17;chestX = 24;}
		chestActive = 1;
	}
	if(mode == "health"){//health
			while(roomDown + 1 == roomHealth){roomDown = random(0,8);}
		if(roomHealth == 0){healthY = 3;healthX = 4;field[healthY][healthX] = healthChar;}
		else if(roomHealth == 1){healthY = 3;healthX = 14;}
		else if(roomHealth == 2){heatlhY = 3;healthX = 24;}
		else if(roomHealth == 3){healthY = 10;healthX = 4;}
		else if(roomHealth == 4){healthY = 10;healthX = 14;}
		else if(roomHealth == 5){healthY = 10;healthX = 24;}
		else if(roomHealth == 6){healthY = 17;healthX = 4;}
		else if(roomHealth == 7){healthY = 17;healthX = 14;}
		else if(roomHealth == 8){healthY = 17;healthX = 24;}
		healthActive = 1;
	}
	
	if(roomDown == 0){downY = 3;downX = 14;}//находиться на каждом уровне поэтому особого аргумента не требует
	else if(roomDown == 1){downY = 3;downX = 24;}
	else if(roomDown == 2){downY = 10;downX = 4;}
	else if(roomDown == 3){downY = 10;downX = 14;}
	else if(roomDown == 4){downY = 10;downX = 24;}
	else if(roomDown == 5){downY = 17;downX = 4;}
	else if(roomDown == 6){downY = 17;downX = 14;}
	else if(roomDown == 7){downY = 17;downX = 24;}
}
//levels
function lvl1(){
	makefld(28,20);
	roomId1 = random(0,8);
	roomId2 = random(0,8);
	roomId3 = random(0,8);
	roomId4 = random(0,8);
	roomId5 = random(0,8);
	roomId6 = random(0,8);
	roomId7 = random(0,8);
	roomId8 = random(0,8);
	roomId9 = random(0,8);

	room.make(0,0,roomId1);
	room.make(0,10,roomId2);
	room.make(0,20,roomId3);
	room.make(7,0,roomId4);
	room.make(7,10,roomId5);
	room.make(7,20,roomId6);
	room.make(14,0,roomId7);
	room.make(14,10,roomId8);
	room.make(14,20,roomId9);
	items("chest");
	init();
	output();
	var keyM1 = 0;
	var keyM2 = 0;
	var keyM3 = 0;
	var keyM4 = 0;
	var keyM5 = 0;
	var keyM6 = 0;
	var keyM7 = 0;
	var keyM8 = 0;
	var KeyChoise = random(0,8);
	if(KeyChoise == 0){keyM1 = 1;}
	else if(KeyChoise == 1){keyM2 = 1;}
	else if(KeyChoise == 2){keyM3 = 1;}
	else if(KeyChoise == 3){keyM4 = 1;}
	else if(KeyChoise == 4){keyM5 = 1;}
	else if(KeyChoise == 5){keyM6 = 1;}
	else if(KeyChoise == 6){keyM7 = 1;}
	else if(KeyChoise == 7){keyM8 = 1;}
	window.monster1 = new enemy(14,2,monstromicon.slimeHP,monstromicon.slimeATK,"m1",keyM1);//монстры 
	window.monster2 = new enemy(24,2,monstromicon.slimeHP,monstromicon.slimeATK,"m2",keyM2);//виндов - создание глобальныъ переменных
	window.monster3 = new enemy(4,9,monstromicon.slimeHP,monstromicon.slimeATK,"m3",keyM3);
	window.monster4 = new enemy(14,9,monstromicon.slimeHP,monstromicon.slimeATK,"m4",keyM4);
	window.monster5 = new enemy(24,9,monstromicon.slimeHP,monstromicon.slimeATK,"m5",keyM5);
	window.monster6 = new enemy(4,16,monstromicon.slimeHP,monstromicon.slimeATK,"m6",keyM6);
	window.monster7 = new enemy(14,16,monstromicon.slimeHP,monstromicon.slimeATK,"m7",keyM7);
	window.monster8 = new enemy(24,16,monstromicon.slimeHP,monstromicon.slimeATK,"m8",keyM8);
	
	loop = setInterval(cycle,100);
}
function lvl2(){
	level = 2;
	player.x = 3;
	player.y = 2;
	makefld(28,20);
	roomId1 = random(0,8);
	roomId2 = random(0,8);
	roomId3 = random(0,8);
	roomId4 = random(0,8);
	roomId5 = random(0,8);
	roomId6 = random(0,8);
	roomId7 = random(0,8);
	roomId8 = random(0,8);
	roomId9 = random(0,8);

	room.make(0,0,roomId1);
	room.make(0,10,roomId2);
	room.make(0,20,roomId3);
	room.make(7,0,roomId4);
	room.make(7,10,roomId5);
	room.make(7,20,roomId6);
	room.make(14,0,roomId7);
	room.make(14,10,roomId8);
	room.make(14,20,roomId9);
	//items("health");
	init();
	output();
	var keyM1 = 0;
	var keyM2 = 0;
	var keyM3 = 0;
	var keyM4 = 0;
	var keyM5 = 0;
	var keyM6 = 0;
	var keyM7 = 0;
	var keyM8 = 0;
	var KeyChoise = random(0,8);
	if(KeyChoise == 0){keyM1 = 1;}
	else if(KeyChoise == 1){keyM2 = 1;}
	else if(KeyChoise == 2){keyM3 = 1;}
	else if(KeyChoise == 3){keyM4 = 1;}
	else if(KeyChoise == 4){keyM5 = 1;}
	else if(KeyChoise == 5){keyM6 = 1;}
	else if(KeyChoise == 6){keyM7 = 1;}
	else if(KeyChoise == 7){keyM8 = 1;}
	if(random(0,20) == 1){ 
		enemy1IMG.src = "skeleton.png"
		enemy1IMG2.src = "skeleton2.png"
		window.monster1 = new enemy(14,2,monstromicon.skeletonHP,monstromicon.skeletonATK,"m1",keyM1);}
	else{window.monster1 = new enemy(14,2,monstromicon.slimeHP,monstromicon.slimeATK,"m1",keyM1);}
	
	if(random(0,20) == 1){ 
		enemy2IMG.src = "skeleton.png"
		enemy2IMG2.src = "skeleton2.png"
		window.monster2 = new enemy(24,2,monstromicon.skeletonHP,monstromicon.skeletonATK,"m2",keyM2);}
	else{window.monster2 = new enemy(24,2,monstromicon.slimeHP,monstromicon.slimeATK,"m2",keyM2);}
	
	if(random(0,20) == 1){
		enemy3IMG.src = "skeleton.png"
		enemy3IMG2.src = "skeleton2.png"
		window.monster3 = new enemy(4,9,monstromicon.skeletonHP,monstromicon.skeletonATK,"m3",keyM3);}
	else{window.monster3 = new enemy(4,9,monstromicon.slimeHP,monstromicon.slimeATK,"m3",keyM3);}
	
	if(random(0,20) == 1){
		enemy4IMG.src = "skeleton.png"
		enemy4IMG2.src = "skeleton2.png"
		window.monster4 = new enemy(14,9,monstromicon.skeletonHP,monstromicon.skeletonATK,"m4",keyM4);}
	else{window.monster4 = new enemy(14,9,monstromicon.slimeHP,monstromicon.slimeATK,"m4",keyM4);}
	
	if(random(0,20) == 1){
		enemy5IMG.src = "skeleton.png"
		enemy5IMG2.src = "skeleton2.png"
		window.monster5 = new enemy(24,9,monstromicon.skeletonHP,monstromicon.skeletonATK,"m5",keyM5);}
	else{window.monster5 = new enemy(24,9,monstromicon.slimeHP,monstromicon.slimeATK,"m5",keyM5);}
	
	if(random(0,20) == 1){
		enemy6IMG.src = "skeleton.png"
		enemy6IMG2.src = "skeleton2.png"
		window.monster6 = new enemy(4,16,monstromicon.skeletonHP,monstromicon.skeletonATK,"m6",keyM6);}
	else{window.monster6 = new enemy(4,16,monstromicon.slimeHP,monstromicon.slimeATK,"m6",keyM6);}

	if(random(0,20) == 1){
		enemy7IMG.src = "skeleton.png"
		enemy7IMG2.src = "skeleton2.png"
		window.monster7 = new enemy(14,16,monstromicon.skeletonHP,monstromicon.skeletonATK,"m7",keyM7);}
	else{window.monster7 = new enemy(14,16,monstromicon.slimeHP,monstromicon.slimeATK,"m7",keyM7);}

	if(random(0,20) == 1){
		enemy8IMG.src = "skeleton.png"
		enemy8IMG2.src = "skeleton2.png"
		window.monster8 = new enemy(24,16,monstromicon.skeletonHP,monstromicon.skeletonATK,"m8",keyM8);}
	else{window.monster8 = new enemy(24,16,monstromicon.slimeHP,monstromicon.slimeATK,"m8",keyM8);}

	loop = setInterval(cycle,100);
}
///////////////
function lvl3(){
	level = 3;
	player.x = 3;
	player.y = 2;
	makefld(28,20);
	roomId1 = random(0,8);
	roomId2 = random(0,8);
	roomId3 = random(0,8);
	roomId4 = random(0,8);
	roomId5 = random(0,8);
	roomId6 = random(0,8);
	roomId7 = random(0,8);
	roomId8 = random(0,8);
	roomId9 = random(0,8);

	room.make(0,0,roomId1);
	room.make(0,10,roomId2);
	room.make(0,20,roomId3);
	room.make(7,0,roomId4);
	room.make(7,10,roomId5);
	room.make(7,20,roomId6);
	room.make(14,0,roomId7);
	room.make(14,10,roomId8);
	room.make(14,20,roomId9);
	items("health");
	init();
	output();
	var keyM1 = 0;
	var keyM2 = 0;
	var keyM3 = 0;
	var keyM4 = 0;
	var keyM5 = 0;
	var keyM6 = 0;
	var keyM7 = 0;
	var keyM8 = 0;
	var KeyChoise = random(0,8);
	if(KeyChoise == 0){keyM1 = 1;}
	else if(KeyChoise == 1){keyM2 = 1;}
	else if(KeyChoise == 2){keyM3 = 1;}
	else if(KeyChoise == 3){keyM4 = 1;}
	else if(KeyChoise == 4){keyM5 = 1;}
	else if(KeyChoise == 5){keyM6 = 1;}
	else if(KeyChoise == 6){keyM7 = 1;}
	else if(KeyChoise == 7){keyM8 = 1;}
	if(random(0,10) == 1){ 
		enemy1IMG.src = "skeleton.png"
		enemy1IMG2.src = "skeleton2.png"
		window.monster1 = new enemy(14,2,monstromicon.skeletonHP,monstromicon.skeletonATK,"m1",keyM1);}
	else{
		enemy1IMG.src = "slime.png"
		enemy1IMG2.src = "slime2.png"
		window.monster1 = new enemy(14,2,monstromicon.slimeHP,monstromicon.slimeATK,"m1",keyM1);}
	
	if(random(0,10) == 1){ 
		enemy2IMG.src = "skeleton.png"
		enemy2IMG2.src = "skeleton2.png"
		window.monster2 = new enemy(24,2,monstromicon.skeletonHP,monstromicon.skeletonATK,"m2",keyM2);}
	else{
		enemy2IMG.src = "slime.png"
		enemy2IMG2.src = "slime2.png"
		window.monster2 = new enemy(24,2,monstromicon.slimeHP,monstromicon.slimeATK,"m2",keyM2);}
	
	if(random(0,10) == 1){
		enemy3IMG.src = "skeleton.png"
		enemy3IMG2.src = "skeleton2.png"
		window.monster3 = new enemy(4,9,monstromicon.skeletonHP,monstromicon.skeletonATK,"m3",keyM3);}
	else{
		enemy3IMG.src = "slime.png"
		enemy3IMG2.src = "slime2.png"
		window.monster3 = new enemy(4,9,monstromicon.slimeHP,monstromicon.slimeATK,"m3",keyM3);}
	
	if(random(0,10) == 1){
		enemy4IMG.src = "skeleton.png"
		enemy4IMG2.src = "skeleton2.png"
		window.monster4 = new enemy(14,9,monstromicon.skeletonHP,monstromicon.skeletonATK,"m4",keyM4);}
	else{
		enemy4IMG.src = "slime.png"
		enemy4IMG2.src = "slime2.png"
		window.monster4 = new enemy(14,9,monstromicon.slimeHP,monstromicon.slimeATK,"m4",keyM4);}
	
	if(random(0,10) == 1){
		enemy5IMG.src = "skeleton.png"
		enemy5IMG2.src = "skeleton2.png"
		window.monster5 = new enemy(24,9,monstromicon.skeletonHP,monstromicon.skeletonATK,"m5",keyM5);}
	else{
		enemy5IMG.src = "slime.png"
		enemy5IMG2.src = "slime2.png"
		window.monster5 = new enemy(24,9,monstromicon.slimeHP,monstromicon.slimeATK,"m5",keyM5);}
	
	if(random(0,10) == 1){
		enemy6IMG.src = "skeleton.png"
		enemy6IMG2.src = "skeleton2.png"
		window.monster6 = new enemy(4,16,monstromicon.skeletonHP,monstromicon.skeletonATK,"m6",keyM6);}
	else{
		enemy6IMG.src = "slime.png"
		enemy6IMG2.src = "slime2.png"
		window.monster6 = new enemy(4,16,monstromicon.slimeHP,monstromicon.slimeATK,"m6",keyM6);}

	if(random(0,10) == 1){
		enemy7IMG.src = "skeleton.png"
		enemy7IMG2.src = "skeleton2.png"
		window.monster7 = new enemy(14,16,monstromicon.skeletonHP,monstromicon.skeletonATK,"m7",keyM7);}
	else{
		enemy7IMG.src = "slime.png"
		enemy7IMG2.src = "slime2.png"
		window.monster7 = new enemy(14,16,monstromicon.slimeHP,monstromicon.slimeATK,"m7",keyM7);}

	if(random(0,10) == 1){
		enemy8IMG.src = "skeleton.png"
		enemy8IMG2.src = "skeleton2.png"
		window.monster8 = new enemy(24,16,monstromicon.skeletonHP,monstromicon.skeletonATK,"m8",keyM8);}
	else{
		enemy8IMG.src = "slime.png"
		enemy8IMG2.src = "slime2.png"
		window.monster8 = new enemy(24,16,monstromicon.slimeHP,monstromicon.slimeATK,"m8",keyM8);}
		///////////////two wave monster
		if(random(0,4) == 1){
			if(random(0,10) == 1){ 
				enemy9IMG.src = "skeleton.png"
				enemy9IMG2.src = "skeleton2.png"
				window.monster9 = new enemy(13,2,monstromicon.skeletonHP,monstromicon.skeletonATK,"m9");}
			else{
				enemy9IMG.src = "slime.png"
				enemy9IMG2.src = "slime2.png"
				window.monster9 = new enemy(13,2,monstromicon.slimeHP,monstromicon.slimeATK,"m9");}
			}
		if(random(0,4) == 1){
			if(random(0,10) == 1){ 
				enemy10IMG.src = "skeleton.png"
				enemy10IMG2.src = "skeleton2.png"
				window.monster10 = new enemy(23,2,monstromicon.skeletonHP,monstromicon.skeletonATK,"m10");}
			else{
				enemy10IMG.src = "slime.png"
				enemy10IMG2.src = "slime2.png"
				window.monster10 = new enemy(23,2,monstromicon.slimeHP,monstromicon.slimeATK,"m10");}
		}
		if(random(0,4) == 1){
			if(random(0,10) == 1){
				enemy11IMG.src = "skeleton.png"
				enemy11IMG2.src = "skeleton2.png"
				window.monster11 = new enemy(3,9,monstromicon.skeletonHP,monstromicon.skeletonATK,"m11",0);}
			else{
				enemy11IMG.src = "slime.png"
				enemy11IMG2.src = "slime2.png"
				window.monster11 = new enemy(3,9,monstromicon.slimeHP,monstromicon.slimeATK,"m11",0);}
			}
		if(random(0,4) == 1){
			if(random(0,10) == 1){
				enemy12IMG.src = "skeleton.png"
				enemy12IMG2.src = "skeleton2.png"
				window.monster12 = new enemy(13,9,monstromicon.skeletonHP,monstromicon.skeletonATK,"m12",0);}
			else{
				enemy12IMG.src = "slime.png"
				enemy12IMG2.src = "slime2.png"
				window.monster12 = new enemy(13,9,monstromicon.slimeHP,monstromicon.slimeATK,"m12",0);}
		}
		if(random(0,4) == 1){
			if(random(0,10) == 1){
				enemy13IMG.src = "skeleton.png"
				enemy13IMG2.src = "skeleton2.png"
				window.monster13 = new enemy(23,9,monstromicon.skeletonHP,monstromicon.skeletonATK,"m13",0);}
			else{
				enemy13IMG.src = "slime.png"
				enemy13IMG2.src = "slime2.png"
				window.monster13 = new enemy(23,9,monstromicon.slimeHP,monstromicon.slimeATK,"m13",0);}
		}
		if(random(0,4) == 1){
			if(random(0,10) == 1){
				enemy14IMG.src = "skeleton.png"
				enemy14IMG2.src = "skeleton2.png"
				window.monster14 = new enemy(3,16,monstromicon.skeletonHP,monstromicon.skeletonATK,"m14",0);}
			else{
				enemy14IMG.src = "slime.png"
				enemy14IMG2.src = "slime2.png"
				window.monster14 = new enemy(3,16,monstromicon.slimeHP,monstromicon.slimeATK,"m14",0);}
		}
		if(random(0,4) == 1){
			if(random(0,10) == 1){
				enemy15IMG.src = "skeleton.png"
				enemy15IMG2.src = "skeleton2.png"
				window.monster15 = new enemy(13,16,monstromicon.skeletonHP,monstromicon.skeletonATK,"m15",0);}
			else{
				enemy15IMG.src = "slime.png"
				enemy15IMG2.src = "slime2.png"
				window.monster15 = new enemy(13,16,monstromicon.slimeHP,monstromicon.slimeATK,"m15",0);}
		}
		if(random(0,4) == 1){
			if(random(0,10) == 1){
				enemy16IMG.src = "skeleton.png"
				enemy16IMG2.src = "skeleton2.png"
				window.monster16 = new enemy(23,16,monstromicon.skeletonHP,monstromicon.skeletonATK,"m16",0);}
			else{
				enemy16IMG.src = "slime.png"
				enemy16IMG2.src = "slime2.png"
				window.monster16 = new enemy(23,16,monstromicon.slimeHP,monstromicon.slimeATK,"m16",0);}
		}
	loop = setInterval(cycle,100);
}
function lvl4(){
    delete monster9;
    delete monster10;
    delete monster11;
    delete monster12;
    delete monster13;
    delete monster14;
    delete monster15;
    delete monster16;
	level = 4;
	player.x = 3;
	player.y = 2;
	makefld(28,20);
	roomId1 = random(0,8);
	roomId2 = random(0,8);
	roomId3 = random(0,8);
	roomId4 = random(0,8);
	roomId5 = random(0,8);
	roomId6 = random(0,8);
	roomId7 = random(0,8);
	roomId8 = random(0,8);
	roomId9 = random(0,8);

	room.make(0,0,roomId1);
	room.make(0,10,roomId2);
	room.make(0,20,roomId3);
	room.make(7,0,roomId4);
	room.make(7,10,roomId5);
	room.make(7,20,roomId6);
	room.make(14,0,roomId7);
	room.make(14,10,roomId8);
	room.make(14,20,roomId9);
	if(player.wpn == "wooden stick"){items("chest");}//шанс получить хорошее оружие
	init();
	output();
	var keyM1 = 0;
	var keyM2 = 0;
	var keyM3 = 0;
	var keyM4 = 0;
	var keyM5 = 0;
	var keyM6 = 0;
	var keyM7 = 0;
	var keyM8 = 0;
	var KeyChoise = random(0,8);
	if(KeyChoise == 0){keyM1 = 1;}
	else if(KeyChoise == 1){keyM2 = 1;}
	else if(KeyChoise == 2){keyM3 = 1;}
	else if(KeyChoise == 3){keyM4 = 1;}
	else if(KeyChoise == 4){keyM5 = 1;}
	else if(KeyChoise == 5){keyM6 = 1;}
	else if(KeyChoise == 6){keyM7 = 1;}
	else if(KeyChoise == 7){keyM8 = 1;}
	if(random(0,5) == 1){ 
		enemy1IMG.src = "skeleton.png"
		enemy1IMG2.src = "skeleton2.png"
		window.monster1 = new enemy(14,2,monstromicon.skeletonHP,monstromicon.skeletonATK,"m1",keyM1);}
	else{
		enemy1IMG.src = "slime.png"
		enemy1IMG2.src = "slime2.png"
		window.monster1 = new enemy(14,2,monstromicon.slimeHP,monstromicon.slimeATK,"m1",keyM1);}
	
	if(random(0,5) == 1){ 
		enemy2IMG.src = "skeleton.png"
		enemy2IMG2.src = "skeleton2.png"
		window.monster2 = new enemy(24,2,monstromicon.skeletonHP,monstromicon.skeletonATK,"m2",keyM2);}
	else{
		enemy2IMG.src = "slime.png"
		enemy2IMG2.src = "slime2.png"
		window.monster2 = new enemy(24,2,monstromicon.slimeHP,monstromicon.slimeATK,"m2",keyM2);}
	
	if(random(0,5) == 1){
		enemy3IMG.src = "skeleton.png"
		enemy3IMG2.src = "skeleton2.png"
		window.monster3 = new enemy(4,9,monstromicon.skeletonHP,monstromicon.skeletonATK,"m3",keyM3);}
	else{
		enemy3IMG.src = "slime.png"
		enemy3IMG2.src = "slime2.png"
		window.monster3 = new enemy(4,9,monstromicon.slimeHP,monstromicon.slimeATK,"m3",keyM3);}
	
	if(random(0,5) == 1){
		enemy4IMG.src = "skeleton.png"
		enemy4IMG2.src = "skeleton2.png"
		window.monster4 = new enemy(14,9,monstromicon.skeletonHP,monstromicon.skeletonATK,"m4",keyM4);}
	else{
		enemy4IMG.src = "slime.png"
		enemy4IMG2.src = "slime2.png"
		window.monster4 = new enemy(14,9,monstromicon.slimeHP,monstromicon.slimeATK,"m4",keyM4);}
	
	if(random(0,5) == 1){
		enemy5IMG.src = "skeleton.png"
		enemy5IMG2.src = "skeleton2.png"
		window.monster5 = new enemy(24,9,monstromicon.skeletonHP,monstromicon.skeletonATK,"m5",keyM5);}
	else{
		enemy5IMG.src = "slime.png"
		enemy5IMG2.src = "slime2.png"
		window.monster5 = new enemy(24,9,monstromicon.slimeHP,monstromicon.slimeATK,"m5",keyM5);}
	
	if(random(0,5) == 1){
		enemy6IMG.src = "skeleton.png"
		enemy6IMG2.src = "skeleton2.png"
		window.monster6 = new enemy(4,16,monstromicon.skeletonHP,monstromicon.skeletonATK,"m6",keyM6);}
	else{
		enemy6IMG.src = "slime.png"
		enemy6IMG2.src = "slime2.png"
		window.monster6 = new enemy(4,16,monstromicon.slimeHP,monstromicon.slimeATK,"m6",keyM6);}

	if(random(0,5) == 1){
		enemy7IMG.src = "skeleton.png"
		enemy7IMG2.src = "skeleton2.png"
		window.monster7 = new enemy(14,16,monstromicon.skeletonHP,monstromicon.skeletonATK,"m7",keyM7);}
	else{
		enemy7IMG.src = "slime.png"
		enemy7IMG2.src = "slime2.png"
		window.monster7 = new enemy(14,16,monstromicon.slimeHP,monstromicon.slimeATK,"m7",keyM7);}

	if(random(0,5) == 1){
		enemy8IMG.src = "skeleton.png"
		enemy8IMG2.src = "skeleton2.png"
		window.monster8 = new enemy(24,16,monstromicon.skeletonHP,monstromicon.skeletonATK,"m8",keyM8);}
	else{
		enemy8IMG.src = "slime.png"
		enemy8IMG2.src = "slime2.png"
		window.monster8 = new enemy(24,16,monstromicon.slimeHP,monstromicon.slimeATK,"m8",keyM8);}
		///////////////two wave monster
		if(random(0,3) == 1){
			if(random(0,5) == 1){ 
				enemy9IMG.src = "skeleton.png"
				enemy9IMG2.src = "skeleton2.png"
				window.monster9 = new enemy(13,2,monstromicon.skeletonHP,monstromicon.skeletonATK,"m9");}
			else{
				enemy9IMG.src = "slime.png"
				enemy9IMG2.src = "slime2.png"
				window.monster9 = new enemy(13,2,monstromicon.slimeHP,monstromicon.slimeATK,"m9");}
			}
		if(random(0,3) == 1){
			if(random(0,5) == 1){ 
				enemy10IMG.src = "skeleton.png"
				enemy10IMG2.src = "skeleton2.png"
				window.monster10 = new enemy(23,2,monstromicon.skeletonHP,monstromicon.skeletonATK,"m10");}
			else{
				enemy10IMG.src = "slime.png"
				enemy10IMG2.src = "slime2.png"
				window.monster10 = new enemy(23,2,monstromicon.slimeHP,monstromicon.slimeATK,"m10");}
		}
		if(random(0,3) == 1){
			if(random(0,5) == 1){
				enemy11IMG.src = "skeleton.png"
				enemy11IMG2.src = "skeleton2.png"
				window.monster11 = new enemy(3,9,monstromicon.skeletonHP,monstromicon.skeletonATK,"m11",0);}
			else{
				enemy11IMG.src = "slime.png"
				enemy11IMG2.src = "slime2.png"
				window.monster11 = new enemy(3,9,monstromicon.slimeHP,monstromicon.slimeATK,"m11",0);}
			}
		if(random(0,3) == 1){
			if(random(0,5) == 1){
				enemy12IMG.src = "skeleton.png"
				enemy12IMG2.src = "skeleton2.png"
				window.monster12 = new enemy(13,9,monstromicon.skeletonHP,monstromicon.skeletonATK,"m12",0);}
			else{
				enemy12IMG.src = "slime.png"
				enemy12IMG2.src = "slime2.png"
				window.monster12 = new enemy(13,9,monstromicon.slimeHP,monstromicon.slimeATK,"m12",0);}
		}
		if(random(0,3) == 1){
			if(random(0,5) == 1){
				enemy13IMG.src = "skeleton.png"
				enemy13IMG2.src = "skeleton2.png"
				window.monster13 = new enemy(23,9,monstromicon.skeletonHP,monstromicon.skeletonATK,"m13",0);}
			else{
				enemy13IMG.src = "slime.png"
				enemy13IMG2.src = "slime2.png"
				window.monster13 = new enemy(23,9,monstromicon.slimeHP,monstromicon.slimeATK,"m13",0);}
		}
		if(random(0,3) == 1){
			if(random(0,5) == 1){
				enemy14IMG.src = "skeleton.png"
				enemy14IMG2.src = "skeleton2.png"
				window.monster14 = new enemy(3,16,monstromicon.skeletonHP,monstromicon.skeletonATK,"m14",0);}
			else{
				enemy14IMG.src = "slime.png"
				enemy14IMG2.src = "slime2.png"
				window.monster14 = new enemy(3,16,monstromicon.slimeHP,monstromicon.slimeATK,"m14",0);}
		}
		if(random(0,3) == 1){
			if(random(0,5) == 1){
				enemy15IMG.src = "skeleton.png"
				enemy15IMG2.src = "skeleton2.png"
				window.monster15 = new enemy(13,16,monstromicon.skeletonHP,monstromicon.skeletonATK,"m15",0);}
			else{
				enemy15IMG.src = "slime.png"
				enemy15IMG2.src = "slime2.png"
				window.monster15 = new enemy(13,16,monstromicon.slimeHP,monstromicon.slimeATK,"m15",0);}
		}
		if(random(0,3) == 1){
			if(random(0,5) == 1){
				enemy16IMG.src = "skeleton.png"
				enemy16IMG2.src = "skeleton2.png"
				window.monster16 = new enemy(23,16,monstromicon.skeletonHP,monstromicon.skeletonATK,"m16",0);}
			else{
				enemy16IMG.src = "slime.png"
				enemy16IMG2.src = "slime2.png"
				window.monster16 = new enemy(23,16,monstromicon.slimeHP,monstromicon.slimeATK,"m16",0);}
		}
	loop = setInterval(cycle,100);
}

