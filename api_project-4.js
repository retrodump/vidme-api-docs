define({
  "name": "vidme",
  "version": "1.8.18",
  "description": "",
  "title": "Vidme API",
  "url": "https://api.vid.me",
  "header": {
    "title": "General",
    "content": "<h2 id=\"oauth\">OAuth</h2>\n<h3 id=\"registration\">Registration</h3>\n<p>To make an OAuth app, create a Vidme account and visit: <a href=\"https://vid.me/oauth/clients\">https://vid.me/oauth/clients</a>.</p>\n<h3 id=\"scopes\">Scopes</h3>\n<ul>\n<li><code>:auth_management</code> : Allows access to manage authorized applications</li>\n<li><code>:client_management</code> : Allows access to manage owned applications</li>\n<li><code>account</code> : Allows access to change account settings such as avatar, username, or email.</li>\n<li><code>basic</code> : Allows access to read public information about an account such as username, avatar, and user ID.</li>\n<li><code>channels</code> : Allows access to manage subscriptions to channels.</li>\n<li><code>comments</code> : Allows access to create or delete comments.</li>\n<li><code>videos</code> : Allows access to upload, edit, and delete videos.</li>\n<li><code>video_upload</code> : Allows ability to upload videos only.</li>\n<li><code>votes</code> : Allows access to upvote or downvote videos.</li>\n</ul>\n<h3 id=\"token-exchange\">Token exchange</h3>\n<p>Redirect the user to <code>https://vid.me/oauth/authorize?client_id={client_id}&amp;redirect_uri={redirect_uri}&amp;scopes={scopes}&amp;response_type={code|token}</code>.\nIf the user authorizes access, they will be redirected to your redirect URI with a code or token, depending on the response type.\nIf you use a code, it can be exchanged for a token using the oauth/token API method below. Scopes should be separated with spaces.</p>\n<h2 id=\"access-token-\">Access Token:</h2>\n<p>Specify the access token using the Access-Token header</p>\n<pre><code class=\"lang-bash\">curl -H &quot;AccessToken: abcdef0123456789&quot;\n</code></pre>\n<p>alternatively, it may be specified using a GET or POST parameter</p>\n<pre><code class=\"lang-bash\">curl -d &quot;token=abcdef0123456789&quot;\n</code></pre>\n<h2 id=\"web-hooks\">Web Hooks</h2>\n<p>A web hook can be sent when a video completes encoding. Example:</p>\n<pre><code>curl -d&quot;notify=web&quot; -d&quot;notify-id=http://domain.com/&quot; https://api.vid.me/video/request\n</code></pre><p>A POST request will be sent to the specified URL with the following signature:</p>\n<pre><code>User-Agent: VidMe Web Hook/1.0\nContent-Type: application/json\n\n{&quot;notificationType&quot;:&quot;video_success&quot;,&quot;videoId&quot;:1234,&quot;url&quot;:&quot;https:\\/\\/vid.me\\/Foo&quot;}\n</code></pre><h2 id=\"notification-types-\">Notification Types:</h2>\n<ul>\n<li><code>channel-subscribed</code> - When someone follows a channel of which you are a moderator</li>\n<li><code>comment-replied-to</code> - When someone replies to your comment</li>\n<li><code>user-subscribed</code> - When someone follows you</li>\n<li><code>user-welcome</code> - When you sign up</li>\n<li><code>video-commented</code> - When someone comments on your video</li>\n<li><code>video-upvoted</code> - When someone upvotes your video</li>\n</ul>\n"
  },
  "sampleUrl": false,
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2015-09-04T22:55:11.216Z",
    "url": "http://apidocjs.com",
    "version": "0.12.3"
  }
});