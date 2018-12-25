var Token = GetInputConstructorValue("Token", loader);
var UserId = GetInputConstructorValue("UserId", loader);
var Message = GetInputConstructorValue("Message", loader);

if(Token["original"].length == 0)
{
  Invalid("Token is empty");
  return;
}

if(UserId["original"].length == 0)
{
  Invalid("UserId is empty");
  return;
}

if(Message["original"].length == 0)
{
  Invalid("Message is empty");
  return;
}

try{
  var code = loader.GetAdditionalData() + _.template($("#messages_send_code").html())({token:Token["updated"], user_id:UserId["updated"], message:Message["updated"]});
  code = Normalize(code,0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
}catch(e)
{}