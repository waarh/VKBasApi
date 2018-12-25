<div class="container-fluid">
	<%= _.template($('#input_constructor').html())({id:"Token", description:tr("Access-Token"), default_selector: "string", disable_int:true, value_string: ""}) %>
	<%= _.template($('#input_constructor').html())({id:"UserId", description:tr("User Id"), default_selector: "string", disable_int:true, value_string: ""}) %>
	<%= _.template($('#input_constructor').html())({id:"Message", description:tr("Message text"), default_selector: "string", disable_int:true, default_variable: ""}) %>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>