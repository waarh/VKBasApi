var Password = GetInputConstructorValue("Password", loader);
var Login = GetInputConstructorValue("Login", loader);
var Save = this.$el.find("#Save").val().toUpperCase();

if(Login["original"].length == 0)
{
  Invalid("Login is empty");
  return;
}
if(Password["original"].length == 0)
{
  Invalid("Password is empty");
  return;
}

try{
  var code = loader.GetAdditionalData() + _.template($("#token_get_code").html())(
  	{
      password: Password["updated"], 
      login: Login["updated"],
  		variable: "VAR_" + Save
  	})
  code = Normalize(code,0)
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
}catch(e)
{}