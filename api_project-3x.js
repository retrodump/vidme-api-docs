define({
  "name": "vidme",
  "version": "1.7.12",
  "description": "",
  "title": "Vidme API",
  "url": "https://api.vid.me",
  "header": {
    "title": "General",
    "content": "<h2 id=\"oauth-scopes-\">OAuth Scopes:</h2>\n<ul>\n<li><code>:auth_management</code> : Allows access to manage authorized applications</li>\n<li><code>:client_management</code> : Allows access to manage owned applications</li>\n<li><code>account</code> : Allows access to change account settings such as avatar, username, or email.</li>\n<li><code>basic</code> : Allows access to read public information about an account such as username, avatar, and user ID.</li>\n<li><code>channels</code> : Allows access to manage subscriptions to channels.</li>\n<li><code>comments</code> : Allows access to create or delete comments.</li>\n<li><code>videos</code> : Allows access to upload, edit, and delete videos.</li>\n<li><code>video_upload</code> : Allows ability to upload videos only.</li>\n<li><code>votes</code> : Allows access to upvote or downvote videos.</li>\n</ul>\n<h2 id=\"access-token-\">Access Token:</h2>\n<p>Specify the access token using the Access-Token header</p>\n<pre><code class=\"lang-bash\">curl -H &quot;AccessToken: abcdef0123456789&quot;\n</code></pre>\n<p>alternatively, it may be specified using a GET or POST parameter</p>\n<pre><code class=\"lang-bash\">curl -d &quot;token=abcdef0123456789&quot;\n</code></pre>\n<h2 id=\"web-hooks\">Web Hooks</h2>\n<p>A web hook can be sent when a video completes encoding. Example:</p>\n<pre><code>curl -d&quot;notify=web&quot; -d&quot;notify-id=http://domain.com/&quot; https://api.vid.me/video/request\n</code></pre><p>A POST request will be sent to the specified URL with the following signature:</p>\n<pre><code>User-Agent: VidMe Web Hook/1.0\nContent-Type: application/json\n\n{&quot;notificationType&quot;:&quot;video_success&quot;,&quot;videoId&quot;:1234,&quot;url&quot;:&quot;https:\\/\\/vid.me\\/Foo&quot;}\n</code></pre><h2 id=\"notification-types-\">Notification Types:</h2>\n<ul>\n<li><code>channel-subscribed</code> - When someone follows a channel of which you are a moderator</li>\n<li><code>comment-replied-to</code> - When someone replies to your comment</li>\n<li><code>user-subscribed</code> - When someone follows you</li>\n<li><code>user-welcome</code> - When you sign up</li>\n<li><code>video-commented</code> - When someone comments on your video</li>\n<li><code>video-upvoted</code> - When someone upvotes your video</li>\n</ul>\n"
  },
  "sampleUrl": false,
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2015-04-09T18:41:38.405Z",
    "url": "http://apidocjs.com",
    "version": "0.12.1"
  }
});