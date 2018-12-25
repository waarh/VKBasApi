url = "https://oauth.vk.com/token?grant_type=password&client_id=2274003&client_secret=hHbZxrka2uZ6jB1inYsH&username=" + (<%= login %>) + "&password=" + (<%= password %>) + "&scope=1073741823&v=5.92"

_switch_http_client_internal()
http_client_get(url, ["data", ""])!
var json = JSON.parse(http_client_content())
_switch_http_client_main()

if(json["access_token"])
<%= variable %> = json["access_token"]