$("#search-field").ghostHunter({results:"#search-results",onKeyUp:!0,result_template:"<li id='gh-{{ref}}' class='gh-search-item'><a href='{{link}}'>{{title}}</a></li>",info_template:"<header class='read-next-card-header'><h3 class='read-next-card-header-title'>Number of posts found: {{amount}}</h3></header>",subpath:"/blog",onComplete:function(e){e&&e.length?$(".search-results").show():$("#search-field").val()||$(".search-results").hide()}});
//# sourceMappingURL=jquery.ghosthunter-staypuft.js.map
