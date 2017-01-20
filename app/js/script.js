(function(){
	var app = angular.module('app', []);
	


	app.controller('DataController', ['$http', function($http) {
		this.students = arr;
		this.regexp = /^[A-z]+$/;

		/*$http.get('../app/js/store.json').then(function(prop){
     		this.students = prop;
   		});*/

		this.students.img = '../app/img/cat.svg';
		this.students.name = 'Adelaide Jacobs';
		this.students.age = 32;
		this.students.phone = '8 (609) 383-7022';


		this.reset = function() {
			this.text = '';
		};


		this.sidebarActive = function(img, name, age, phone) {
			this.students.img = img;
			this.students.name = name;
			this.students.age = age;
			this.students.phone = phone;
		};


		this.orderType = "name";
		this.orderReverse = false;

		this.sort = function(prop) {
			this.orderType = prop;
			this.orderReverse = !this.orderReverse;
		};
	
	}]);

	app.filter('favAnimal', function() {

		return function(str) {
			var str = str.substring(str.indexOf("/") + 9);
			str = str.substring(0, str.indexOf('.'));
			return str;
		};
	});

	arr = [
	    {img: '../app/img/dog.svg', name: 'Chad Snyder', age: 22, phone: '8 (629) 653-9041'},
	    {img: '../app/img/raccoon.svg', name: 'Milton Warner', age: 19, phone: '8 (366) 958-8850'},
	    {img: '../app/img/fox.svg', name: 'Viola Hale', age: 35, phone: '8 (687) 456-4873'},
	    {img: '../app/img/owl.svg', name: 'Tyler Herrera', age: 27, phone: '8 (537) 867-1647'},
	    {img: '../app/img/sheep.svg', name: 'Gabriel Howell', age: 45, phone: '8 (332) 288-8294'},
	    {img: '../app/img/cat.svg', name: 'Adelaide Jacobs', age: 32, phone: '8 (609) 383-7022'},
	    {img: '../app/img/koala.svg', name: 'James Diaz', age: 21, phone: '8 (262) 812-4095'},
	    {img: '../app/img/lion.svg', name: 'Vincent Sparks', age: 21, phone: '8 (475) 497-4172'},
	    {img: '../app/img/owl.svg', name: 'Jackson Peterson', age: 23, phone: '8 (838) 992-3015'},
	    {img: '../app/img/penguin.svg', name: 'Theresa Schwartz', age: 31, phone: '8 (215) 881-3278'},
	    {img: '../app/img/pig.svg', name: 'Charles Carter', age: 39, phone: '8 (719) 862-9379'},
	    {img: '../app/img/dog.svg', name: 'Curtis Briggs', age: 70, phone: '8 (255) 719-5400'},
	    {img: '../app/img/raccoon.svg', name: 'Mollie French', age: 57, phone: '8 (668) 359-4293'},
	    {img: '../app/img/koala.svg', name: 'Maurice Watson', age: 36, phone: '8 (368) 345-7784'},
	    {img: '../app/img/lion.svg', name: 'Derrick Hill', age: 42, phone: '8 (413) 435-6719'}
  	];

}());