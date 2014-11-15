/* Jacob R. Minotti
 * November 2nd, 2014
 * Debug v1
 */

// Create privatized scope using a self-executing function
(function(){
console.log ("Derp");
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = ''
		;
	//validate is spelled incorrectly (Fixed)
	// Validates search query
	var validate = function(query){
console.log ("We're in the Validation Function");
		// Trim whitespace from start and end of search query
		//line 20 needs to be a conditional
		while(query.charAt(0) === " "){
			query = query.substring(1, query.length);
		}
		while(query.charAt(query.length-1) === ""){
			query = query.substring(0, query.length-1);
		}

		// Check search length, must have 3 characters
		// Syntax Error on line 28 (Missing " )
		if(query.length < 3){
			alert("Your search query is too small, try again.");

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		} //added }

		//missing brackets, semicolons
		search(query);
	};

	// Finds search matches
	var search = function(query){

	// split the user's search query string into an array
	/* I'm not quite sure what's going on here. It says it expected an operand but I don't see where
	 an operand could possibly go in that statement.
	 */
	var queryArray = String.split(" ");

	// array to store matched results from database.js
	var results = [];

	// loop through each index of db array
	for(var i=0, j=db.length; i<j; i++) {

		// each db[i] is a single video item, each title ends with a pipe "|"
		// save a lowercase variable of the video title
		var dbTitleEnd = db[i].indexOf('|');
		//fixed camelcasing on the line below
		var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);
		//improper camel casing on line 64 and 59
		// loop through the user's search query words
		// save a lowercase variable of the search keyword
		for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
			var qitem = queryArray[ii].tolowercase();

			// is the keyword anywhere in the video title?
			// If a match is found, push full db[i] into results array
			var compare = dbitem.indexOf(qitem);
			if (compare !== -1) {
				results.push(db[i]);
			}

		} //added }
	} //added }

			results.sort();
			//line 78 should be a conditional (===) instead of a statement (=)
			// Check that matches were found, and run output functions
			if(results.length = 0){
				noMatch();
			}else{
				showMatches(results);
			}
		};

		// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
		var noMatch = function(){
			var html = ''+
					'<p>No Results found.</p>'+
					'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
				;
			resultsDIV.innerHTML = html;
		};

		// Put matches into page as paragraphs with anchors
		var showMatches = function(results){

			// THE NEXT 4 LINES ARE CORRECT.
			var html = '<p>Results</p>',
				title,
				url
				;

			// loop through all the results search() function
			for(var i=0, j=results.length; i<j; i++){

				// title of video ends with pipe
				// pull the title's string using index numbers
				titleEnd = results[i].indexOf('|');
				title = results[i].subString(0, titleEnd);

				// pull the video url after the title
				url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

				// make the video link - THE NEXT LINE IS CORRECT.
				html += '<p><a href=' + url + '>' + title + '</a></p>';
			}
			resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
		};
		//improper spelling of vaildate on line 124
	//Fixed Spelling on Validate
		// The onsubmit event will be reviewed in upcoming Course Material.
		// THE LINE DIRECTLY BELOW IS CORRECT
		document.forms[0].onsubmit = function() {
			var query = searchInput.value;
			validate(query);


			// return false is needed for most events - this will be reviewed in upcoming course material
			// THE LINE DIRECTLY BELOW IS CORRECT
			return false;
		}; //Fixed Syntax Error added }
//Again probably some missing brackets or semicolons amongst this mess.
		})();