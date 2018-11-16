
includeScript('../public/javascripts/circles.js');
includeScript('../public/javascripts/easing.js');
includeScript ('../public/javascripts/modernizr.custom.53451.js');
includeScript('../public/javascripts/modernizr.custom.js');
includeScript('../public/javascripts/move-top.js');
includeScript('../public/javascripts/responsiveslides.min.js');







function includeScript(url) {
	document.write('<script type="text/javascript" src="js/'+ url + '"></script>'); 
	return false;
}