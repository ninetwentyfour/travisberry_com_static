(function ($) {
	// custom css expression for a case-insensitive contains()
	jQuery.expr[':'].Contains = function(a,i,m){
		return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
	};


	function listFilter(header, list) { // header is any element, list is an unordered list
		// create and add the filter form to the header
		var form = $("<form>").attr({"id":"searchFrom","class":"filterform","action":"#"}),
			input = $("<input>").attr({"id":"search","class":"filterinput","type":"text","placeholder":"Search..."});
		$(form).append(input).appendTo(header);

		$(input)
		.change( function () {
			var filter = $(this).val();
			if(filter) {
				// this finds all links in a list that contain the input,
				// and hide the ones not containing the input while showing the ones that do
				$(list).find("h3:not(:Contains(" + filter + "))").parent().slideUp();
				$(list).find("h3:Contains(" + filter + ")").parent().slideDown();
			} else {
				$(list).find("article").slideDown();
			}
			return false;
		})
		.keyup( function () {
			// fire the above change event after every letter
			$(this).change();
		});
	}


	//ondomready
	$(function () {
		listFilter($("#search"), $("#list"));
	});
}(jQuery));