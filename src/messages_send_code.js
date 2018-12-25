url = "https://api.vk.com/method/messages.send?access_token=" + <%= token %> + "&user_id=" + <%= user_id %> + "&message=" + <%= message %>
_switch_http_client_internal()
http_client_post(url, ["data", ""], {"content-type":"custom/" + ("application/x-www-form-urlencoded"), "encoding":("UTF-8"), "method":("POST"),headers:("")})!
var json = JSON.parse(http_client_content())
_switch_http_client_main()
if (!json['response'])
	fail(json['description'], false)