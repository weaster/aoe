(function() {
	
	if (window.location.href.indexOf('testpages') === -1) {
		return;
	}
	
	function init() {
		console.log('Hello, World!');
	}
	
	window.addEventListener('DOMContentLoaded', init);
	
})();