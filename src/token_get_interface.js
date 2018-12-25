<div class="container-fluid">

	<%= _.template($('#input_constructor').html())({id:"Login", description:tr("Account Login"), default_selector: "string", disable_int:true, value_string: ""}) %>
	<%= _.template($('#input_constructor').html())({id:"Password", description:tr("Account Password"), default_selector: "string", disable_int:true, value_string: ""}) %>

	<%= _.template($('#variable_constructor').html())({id:"Save", description:tr("Variable To Save"), default_variable: "ACCESS_TOKEN"}) %>

</div>

<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>