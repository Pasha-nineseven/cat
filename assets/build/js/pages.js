// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="about.html">About</a></li> \
		<li><a href="news.html">News</a></li> \
		<li><a href="contacts.html">Contacts</a></li> \
		<li><a href="text.html">Text</a></li> \
		<li><a href="index.html">Index</a></li> \
		<li><a href="catalog.html">Catalog</a></li> \
		<li><a href="service.html">Service</a></li> \
		<li><a href="filter.html">Filter</a></li> \
		<li><a href="page404.html">page404</a></li> \
		<li><a href="tech.html">tech</a></li> \
		<li><a href="product.html">Product</a></li> \
		<li><a href="search.html">Search</a></li> \
	</ol> \
</div>');