'use strict';

module.exports = {
	init: function() {
		this.examples.init();
	},

	examples: {
		init: function() {
			this.basic();
			this.image();
			this.imageBlending();
			this.imageMask();
			this.interactive();
		},

		basic: function() {
			var animation = new Granim({
				element: '#canvas-basic',
				name: 'basic-gradient',
				direction: 'left-right',
				opacity: [1, 1],
				isPausedWhenNotInView: true,
				states : {
					"default-state": {
						gradients: [
							['#ff9966', '#ff5e62'],
							['#00F260', '#0575E6'],
							['#e1eec3', '#f05053']
						]
					}
				}
			});
			$('#select-direction').on('change', function() {
				animation.direction = $(this).val();
			})
		},

		image: function() {
			var animation = new Granim({
				element: '#canvas-image',
				direction: 'top-bottom',
				opacity: [.9, .3],
				isPausedWhenNotInView: true,
				states : {
					"default-state": {
						gradients: [
							['#29323c', '#485563'],
							['#FF6B6B', '#556270'],
							['#80d3fe', '#7ea0c4'],
							['#f0ab51', '#eceba3']
						],
						transitionSpeed: 7000
					}
				}
			});
		},

		imageBlending: function() {
			var animation = new Granim({
				element: '#canvas-image-blending',
				direction: 'top-bottom',
				opacity: [1, 1],
				isPausedWhenNotInView: true,
				image: {
					source: '../assets/img/bg-forest.jpg',
					position: ['center', 'center'],
					stretchMode: ['stretch-if-smaller', 'stretch-if-bigger'],
					blendingMode: 'multiply'
				},
				states : {
					"default-state": {
						gradients: [
							['#29323c', '#485563'],
							['#FF6B6B', '#556270'],
							['#80d3fe', '#7ea0c4'],
							['#f0ab51', '#eceba3']
						],
						transitionSpeed: 7000
					}
				}
			});

			$('#select-blending-mode').on('change', function() {
				animation.changeBlendingMode($(this).val());
			})
		},

		imageMask: function() {
			var animation = new Granim({
				element: '#canvas-image-mask',
				direction: 'left-right',
				opacity: [1, 1],
				isPausedWhenNotInView: true,
				states : {
					"default-state": {
						gradients: [
							['#EB3349', '#F45C43'],
							['#FF8008', '#FFC837'],
							['#4CB8C4', '#3CD3AD'],
							['#24C6DC', '#514A9D'],
							['#FF512F', '#DD2476'],
							['#DA22FF', '#9733EE']
						],
						transitionSpeed: 2000
					}
				}
			});
			
			$('.canvas-image-wrapper .logo-mask').on('click', function(event) {
				event.preventDefault();
			})
		},

		interactive: function() {
			var animation = new Granim({
				element: '#canvas-interactive',
				name: 'interactive-gradient',
				elToSetClassOn: '.canvas-interactive-wrapper',
				direction: 'diagonal',
				opacity: [1, 1],
				isPausedWhenNotInView: true,
				stateTransitionSpeed: 500,
				states : {
					"default-state": {
						gradients: [
							['#B3FFAB', '#12FFF7'],
							['#ADD100', '#7B920A'],
							['#1A2980', '#26D0CE']
						],
						transitionSpeed: 10000
					},
					"violet-state": {
						gradients: [
							['#9D50BB', '#6E48AA'],
							['#4776E6', '#8E54E9']
						],
						transitionSpeed: 2000
					},
					"orange-state": {
						gradients: [ ['#FF4E50', '#F9D423'] ],
						loop: false
					}
				}
			});

			$('#default-state-cta').on('click', function(event) {
				event.preventDefault();
				animation.changeState('default-state');
				setClass('#default-state-cta')
			});
			$('#violet-state-cta').on('click', function(event) {
				event.preventDefault();
				animation.changeState('violet-state');
				setClass('#violet-state-cta')
			});
			$('#orange-state-cta').on('click', function(event) {
				event.preventDefault();
				animation.changeState('orange-state');
				setClass('#orange-state-cta')
			});

			function setClass(element) {
				$('.canvas-interactive-wrapper a').removeClass('active');
				$(element).addClass('active');
			}
		}
	}
};
