define({ "api": [
  {
    "type": "POST",
    "url": "/album/:album/video/:video",
    "title": "Add video",
    "version": "1.8.10",
    "name": "AddVideo",
    "group": "Album",
    "permission": [
      {
        "name": "albums",
        "title": "Albums",
        "description": "<p>Requires the albums scope</p> "
      }
    ],
    "description": "<p>Add a video to an album, or update meta information.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "album",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST https://api.vid.me/album/1/video/2",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"albumVideo\" : {\n    // ...\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "albumVideo",
            "description": "<p>Album video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albumVideo.album_id",
            "description": "<p>The album ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albumVideo.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albumVideo.date_created",
            "description": "<p>The date at which the video was added to the album</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "albumVideo.order",
            "description": "<p>The order of the video in the album</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Album.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Album not found\",\n  \"code\" : \"album_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Album",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/album",
    "title": "Create",
    "version": "1.9.6",
    "name": "Create",
    "group": "Album",
    "permission": [
      {
        "name": "albums",
        "title": "Albums",
        "description": "<p>Requires the albums scope</p> "
      }
    ],
    "description": "<p>Create an album</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d 'title=My+Album' https://api.vid.me/album",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"album\" : {\n    // ...\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "album",
            "description": "<p>Album</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.album_id",
            "description": "<p>The unique album ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.user_id",
            "description": "<p>The ID of the owner of the album</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.url",
            "description": "<p>The album URL fragment</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.full_url",
            "description": "<p>The full URL to the album</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.date_created",
            "description": "<p>The date at which the album was created</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.video_count",
            "description": "<p>The number of videos in the album</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.view_count",
            "description": "<p>The number of videos in the album</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Album.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Album",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/album/:album",
    "title": "Delete",
    "version": "1.8.10",
    "name": "Delete",
    "group": "Album",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Delete an album</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "album",
            "description": "<p>The album ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X DELETE https://api.vid.me/album/1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Album.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Album not found\",\n  \"code\" : \"album_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Album"
  },
  {
    "type": "GET",
    "url": "/album/:album",
    "title": "Detail",
    "version": "1.8.9",
    "name": "Detail",
    "group": "Album",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get information about an album</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "album",
            "description": "<p>The album ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/album/1"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/album/1",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"album\" : {\n    // ...\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "album",
            "description": "<p>Album</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.album_id",
            "description": "<p>The unique album ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.user_id",
            "description": "<p>The ID of the owner of the album</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.url",
            "description": "<p>The album URL fragment</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.full_url",
            "description": "<p>The full URL to the album</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.date_created",
            "description": "<p>The date at which the album was created</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.video_count",
            "description": "<p>The number of videos in the album</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.view_count",
            "description": "<p>The number of videos in the album</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Album.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Album not found\",\n  \"code\" : \"album_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Album"
  },
  {
    "type": "POST",
    "url": "/album/:album",
    "title": "Edit",
    "version": "1.8.10",
    "name": "Edit",
    "group": "Album",
    "permission": [
      {
        "name": "albums",
        "title": "Albums",
        "description": "<p>Requires the albums scope</p> "
      }
    ],
    "description": "<p>Edit an album</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "album",
            "description": "<p>The album ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d 'title=My+Album' https://api.vid.me/album/1/edit",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"album\" : {\n    // ...\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "album",
            "description": "<p>Album</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.album_id",
            "description": "<p>The unique album ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.user_id",
            "description": "<p>The ID of the owner of the album</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.url",
            "description": "<p>The album URL fragment</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.full_url",
            "description": "<p>The full URL to the album</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.date_created",
            "description": "<p>The date at which the album was created</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.video_count",
            "description": "<p>The number of videos in the album</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "album.view_count",
            "description": "<p>The number of videos in the album</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Album.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Album not found\",\n  \"code\" : \"album_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Album",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/album/:album/videos",
    "title": "List videos",
    "version": "1.8.10",
    "name": "ListVideos",
    "group": "Album",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List videos in an album</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "album",
            "description": "<p>The album ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/album/1/videos"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/album/1/videos",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"videos\" : {\n    // ...\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Album.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Album not found\",\n  \"code\" : \"album_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Album"
  },
  {
    "type": "DELETE",
    "url": "/album/:album/video/:video",
    "title": "Remove video",
    "version": "1.8.10",
    "name": "RemoveVideo",
    "group": "Album",
    "permission": [
      {
        "name": "albums",
        "title": "Albums",
        "description": "<p>Requires the albums scope</p> "
      }
    ],
    "description": "<p>Remove a video from an album</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "album",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X DELETE https://api.vid.me/album/1/video/2",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Album.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Album not found\",\n  \"code\" : \"album_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Album",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/auth/check",
    "title": "Check",
    "version": "1.2.1",
    "name": "Check",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Check status of an authentication session.</p> ",
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -H \"AccessToken: abcdef0123456789\" https://api.vid.me/auth/check",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"auth\" : {\n    \"token\" : \"fedcba9876543210fedcba9876543210\",\n    \"expires\" : \"1543-01-01 13:33:37\",\n    \"user_id\" : \"1234\"\n  },\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    \"username\" : \"foo\",\n    \"avatar\" : \"avatars\\/1234.jpg?v3r1400000000\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : false\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auth",
            "description": "<p>Auth data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.token",
            "description": "<p>The user authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.expires",
            "description": "<p>The date at which the token expires</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.user_id",
            "description": "<p>The user ID of the authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Auth.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Auth",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/auth/create",
    "title": "Create",
    "version": "2.0.0",
    "name": "Create",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Create an authentication session.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the account</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the account</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "nocookie",
            "description": "<p>True to not set a cookie</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "client_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "client_secret",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"username=foo&password=bar\" https://api.vid.me/auth/create",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"auth\" : {\n    \"token\" : \"fedcba9876543210fedcba9876543210\",\n    \"expires\" : \"1543-01-01 13:33:37\",\n    \"user_id\" : \"1234\"\n  },\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    \"username\" : \"foo\",\n    \"avatar\" : \"avatars\\/1234.jpg?v3r1400000000\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auth",
            "description": "<p>Auth data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.token",
            "description": "<p>The user authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.expires",
            "description": "<p>The date at which the token expires</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.user_id",
            "description": "<p>The user ID of the authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Auth.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please enter a valid email address.\",\n  \"code\" : \"invalid_email\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"The password you entered was not valid.\",\n  \"code\" : \"invalid_password\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please specify a valid username.\",\n  \"code\" : \"invalid_username\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/auth/create",
    "title": "Create",
    "version": "1.7.15",
    "name": "Create",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Create an authentication session.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the account</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the account</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "nocookie",
            "description": "<p>True to not set a cookie</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"username=foo&password=bar\" https://api.vid.me/auth/create",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"auth\" : {\n    \"token\" : \"fedcba9876543210fedcba9876543210\",\n    \"expires\" : \"1543-01-01 13:33:37\",\n    \"user_id\" : \"1234\"\n  },\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    \"username\" : \"foo\",\n    \"avatar\" : \"avatars\\/1234.jpg?v3r1400000000\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auth",
            "description": "<p>Auth data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.token",
            "description": "<p>The user authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.expires",
            "description": "<p>The date at which the token expires</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.user_id",
            "description": "<p>The user ID of the authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please enter a valid email address.\",\n  \"code\" : \"invalid_email\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"The password you entered was not valid.\",\n  \"code\" : \"invalid_password\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please specify a valid username.\",\n  \"code\" : \"invalid_username\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/auth/create",
    "title": "Create",
    "version": "1.2.3",
    "name": "Create",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Create an authentication session.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the account</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the account</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "remember",
            "description": "<p>True for extended session</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "nocookie",
            "description": "<p>True to not set a cookie</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"username=foo&password=bar\" https://api.vid.me/auth/create",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"auth\" : {\n    \"token\" : \"fedcba9876543210fedcba9876543210\",\n    \"expires\" : \"1543-01-01 13:33:37\",\n    \"user_id\" : \"1234\"\n  },\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    \"username\" : \"foo\",\n    \"avatar\" : \"avatars\\/1234.jpg?v3r1400000000\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auth",
            "description": "<p>Auth data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.token",
            "description": "<p>The user authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.expires",
            "description": "<p>The date at which the token expires</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.user_id",
            "description": "<p>The user ID of the authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please enter a valid email address.\",\n  \"code\" : \"invalid_email\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"The password you entered was not valid.\",\n  \"code\" : \"invalid_password\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please specify a valid username.\",\n  \"code\" : \"invalid_username\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/user/login",
    "title": "Create",
    "version": "1.2.1",
    "name": "Create",
    "group": "Auth",
    "description": "<p>Deprecated since 1.2.3. Use /auth/create instead.</p> ",
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "Auth"
  },
  {
    "type": "POST",
    "url": "/auth/delete",
    "title": "Delete",
    "version": "1.2.1",
    "name": "Delete",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Destroy an authentication session.</p> ",
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -H \"AccessToken: abcdef0123456789\" https://api.vid.me/auth/delete",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Auth.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Auth",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/channel/:channel/delete",
    "title": "Delete",
    "version": "1.8.0",
    "name": "Delete",
    "group": "Channel",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Delete a channel</p> ",
    "filename": "VideoApp/Api/Controllers/Channel.php",
    "groupTitle": "Channel"
  },
  {
    "type": "GET",
    "url": "/channel/:channel",
    "title": "Detail",
    "version": "1.4.2",
    "name": "Detail",
    "group": "Channel",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get information about a channel</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel",
            "description": "<p>The channel ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFollowing",
            "description": "<p>If authenticated as a user, whether or not the user follows this channel</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "channel",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel.channel_id",
            "description": "<p>The ID of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel.url",
            "description": "<p>The unique URL fragment of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel.full_url",
            "description": "<p>The full URL of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel.title",
            "description": "<p>The title of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel.description",
            "description": "<p>The description of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel.date_created",
            "description": "<p>The date at which the channel was created</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "channel.is_default",
            "description": "<p>Is this a default channel?</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channel.nsfw",
            "description": "<p>Does the channel contain NSFW videos?</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "channel.follower_count",
            "description": "<p>The number of users following the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "channel.video_count",
            "description": "<p>The number of videos in the channel</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"channel\" : {\n    \"channel_id\" : \"1234\",\n    \"url\" : \"aww\",\n    \"full_url\" : \"https://vid.me/n/aww\",\n    \"title\" : \"Aww\",\n    \"description\" : \"\",\n    \"date_created\" : \"2014-03-18 22:21:02\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/channel/1"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/channel/1",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Channel.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Channel not found\",\n  \"code\" : \"channel_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Channel"
  },
  {
    "type": "POST",
    "url": "/channel/:channel/follow",
    "title": "Follow",
    "version": "1.5.5",
    "name": "Follow",
    "group": "Channel",
    "permission": [
      {
        "name": "channels",
        "title": "Channels",
        "description": "<p>Requires the channels scope</p> "
      }
    ],
    "description": "<p>Follow a channel</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel",
            "description": "<p>The channel ID to follow</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"token=123abc\" https://api.vid.me/channel/1234/follow",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Channel.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Channel not found\",\n  \"code\" : \"channel_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Channel",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/channel/:channel/followers",
    "title": "Followers",
    "version": "1.7.3",
    "name": "Followers",
    "group": "Channel",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List users who follow specified channel</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "channel",
            "description": "<p>The channel ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/channel/1/followers"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/channel/1/followers",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"page\" : {\n    \"total\" : 2,\n    \"offset\" : 0,\n    \"limit\" : 25,\n  },\n  \"users\" : [\n    {},\n    {}\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Channel.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Channel not found\",\n  \"code\" : \"channel_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Channel"
  },
  {
    "type": "GET",
    "url": "/channel/:channel/hot",
    "title": "Hot Videos",
    "version": "1.7.1",
    "name": "HotVideos",
    "group": "Channel",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List videos in channel ordered by hot algorithm.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "channel",
            "description": "<p>The channel ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/channel/1/hot"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/channel/1/hot",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"channels\" : [\n    {},\n    {}\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Channels.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Channel not found\",\n  \"code\" : \"channel_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Channel"
  },
  {
    "type": "GET",
    "url": "/channel/:channel/follow(/:otherUser)",
    "title": "Is Following",
    "version": "1.7.6",
    "name": "IsFollowing",
    "group": "Channel",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Check if the authenticated user (or specified otherUser) is following a channel.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel",
            "description": "<p>The channel ID to follow</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFollowing",
            "description": "<p>Whether or not otherUser is following channel</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"isFollowing\" : true\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\" : true,\n  \"isFollowing\" : false\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/channel/1/follow/1"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl -X GET -H \"AccessToken: 123abc\" https://api.vid.me/channel/1234/follow",
        "type": "curl"
      },
      {
        "title": "Example",
        "content": "curl -X GET https://api.vid.me/channel/1234/follow/4321",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Channel.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Channel not found\",\n  \"code\" : \"channel_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Channel",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/channel/:channel/moderators",
    "title": "Moderators",
    "version": "1.7.5",
    "name": "Moderators",
    "group": "Channel",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List users who are moderators of specified channel</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "channel",
            "description": "<p>The channel ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/channel/1/moderators"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/channel/1/moderators",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"page\" : {\n    \"total\" : 2,\n    \"offset\" : 0,\n    \"limit\" : 25,\n  },\n  \"users\" : [\n    {},\n    {}\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Channel.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Channel not found\",\n  \"code\" : \"channel_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Channel"
  },
  {
    "type": "GET",
    "url": "/channel/:channel/new",
    "title": "New Videos",
    "version": "1.7.1",
    "name": "NewVideos",
    "group": "Channel",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List videos in channel ordered by age.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "channel",
            "description": "<p>The channel ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/channel/1/new"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/channel/1/new",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"channels\" : [\n    {},\n    {}\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Channels.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Channel not found\",\n  \"code\" : \"channel_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Channel"
  },
  {
    "type": "POST",
    "url": "/channel/:channel/pin/:video",
    "title": "Pin Video",
    "version": "1.8.7",
    "name": "PinCreate",
    "group": "Channel",
    "permission": [
      {
        "name": "channelmod",
        "title": "Channel Moderator",
        "description": "<p>Must be signed in as a channel moderator</p> "
      }
    ],
    "description": "<p>Pin a video to the top of a channel hot feed</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "channel",
            "description": "<p>The channel ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/channel/1/pin/1234",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Channel.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Channel not found\",\n  \"code\" : \"channel_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Channel"
  },
  {
    "type": "DELETE",
    "url": "/channel/:channel/pin/:video",
    "title": "Un-pin Video",
    "version": "1.8.7",
    "name": "PinDelete",
    "group": "Channel",
    "permission": [
      {
        "name": "channelmod",
        "title": "Channel Moderator",
        "description": "<p>Must be signed in as a channel moderator</p> "
      }
    ],
    "description": "<p>Pin a video to the top of a channel hot feed</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "channel",
            "description": "<p>The channel ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/channel/1/pin/1234?_method=delete",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Channel.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Channel not found\",\n  \"code\" : \"channel_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Channel"
  },
  {
    "type": "GET",
    "url": "/channel/:channel/pin/:video",
    "title": "Pinned",
    "version": "1.8.7",
    "name": "PinDetail",
    "group": "Channel",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Is the video pinned to the specified channel</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "channel",
            "description": "<p>The channel ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/channel/1/pin/1234",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Channel.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Channel not found\",\n  \"code\" : \"channel_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Channel"
  },
  {
    "type": "GET",
    "url": "/channel/:channel/top",
    "title": "Top Videos",
    "version": "1.7.12",
    "name": "TopVideos",
    "group": "Channel",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List videos in channel ordered by score (upvotes - downvotes).</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "channel",
            "description": "<p>The channel ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/channel/1/top"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/channel/1/top",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"channels\" : [\n    {},\n    {}\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Channels.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Channel not found\",\n  \"code\" : \"channel_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Channel"
  },
  {
    "type": "POST",
    "url": "/channel/:channel/unfollow",
    "title": "Unfollow",
    "version": "1.5.5",
    "name": "Unfollow",
    "group": "Channel",
    "permission": [
      {
        "name": "channels",
        "title": "Channels",
        "description": "<p>Requires the channels scope</p> "
      }
    ],
    "description": "<p>Unfollow a channel</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel",
            "description": "<p>The channel ID to unfollow</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"token=123abc\" https://api.vid.me/channel/1234/unfollow",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Channel.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Channel not found\",\n  \"code\" : \"channel_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Channel",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/channel/:channel/url",
    "title": "URL",
    "version": "1.4.2",
    "name": "Url",
    "group": "Channel",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get a channel&#39;s URL</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "channel",
            "description": "<p>The channel ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -i https://api.vid.me/channel/1/url",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 302 Found\nLocation: https://vid.me/n/some-channel\nExpires: Fri, 04 Apr 2014 01:04:54\nCache-Control: max-age=86400",
          "type": "http"
        }
      ]
    },
    "filename": "VideoApp/Api/Controllers/Channel.php",
    "groupTitle": "Channel"
  },
  {
    "type": "GET",
    "url": "/channels",
    "title": "List",
    "version": "1.7.1",
    "name": "List",
    "group": "Channels",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List channels</p> ",
    "sampleRequest": [
      {
        "url": "https://api.vid.me/channels"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/channels",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"channels\" : [\n    {},\n    {}\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "channels",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.channel_id",
            "description": "<p>The ID of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.url",
            "description": "<p>The unique URL fragment of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.full_url",
            "description": "<p>The full URL of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.title",
            "description": "<p>The title of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.description",
            "description": "<p>The description of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.date_created",
            "description": "<p>The date at which the channel was created</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "channels.is_default",
            "description": "<p>Is this a default channel?</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.nsfw",
            "description": "<p>Does the channel contain NSFW videos?</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "channels.follower_count",
            "description": "<p>The number of users following the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "channels.video_count",
            "description": "<p>The number of videos in the channel</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Channels.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Channel not found\",\n  \"code\" : \"channel_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Channels",
    "parameter": {
      "fields": {
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/channels/suggest",
    "title": "Suggest",
    "version": "1.7.9",
    "name": "Suggest",
    "group": "Channels",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Suggest channels.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "text",
            "description": "<p>Channel name or URL partial</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "number",
            "description": "<p>(deprecated) Use limit instead</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>(deprecated) Use channels instead</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>The ID of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.text",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.label",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.url",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.flags",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "channels",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.channel_id",
            "description": "<p>The ID of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.url",
            "description": "<p>The unique URL fragment of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.full_url",
            "description": "<p>The full URL of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.title",
            "description": "<p>The title of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.description",
            "description": "<p>The description of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.date_created",
            "description": "<p>The date at which the channel was created</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "channels.is_default",
            "description": "<p>Is this a default channel?</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.nsfw",
            "description": "<p>Does the channel contain NSFW videos?</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "channels.follower_count",
            "description": "<p>The number of users following the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "channels.video_count",
            "description": "<p>The number of videos in the channel</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"data\" : [\n    {}\n  ],\n  \"channels\" : [\n    {},\n    {}\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/channels/suggest"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/channels/suggest",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Channels.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Channel not found\",\n  \"code\" : \"channel_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Channels"
  },
  {
    "type": "GET",
    "url": "/channels/suggest",
    "title": "Suggest",
    "version": "1.7.1",
    "name": "Suggest",
    "group": "Channels",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Suggest channels.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "text",
            "description": "<p>Channel name or URL partial</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "number",
            "description": "<p>The number of results to return, max 100</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>The ID of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.text",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.label",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.url",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.flags",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "channels",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.channel_id",
            "description": "<p>The ID of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.url",
            "description": "<p>The unique URL fragment of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.full_url",
            "description": "<p>The full URL of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.title",
            "description": "<p>The title of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.description",
            "description": "<p>The description of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.date_created",
            "description": "<p>The date at which the channel was created</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "channels.is_default",
            "description": "<p>Is this a default channel?</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.nsfw",
            "description": "<p>Does the channel contain NSFW videos?</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "channels.follower_count",
            "description": "<p>The number of users following the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "channels.video_count",
            "description": "<p>The number of videos in the channel</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"data\" : [\n    {}\n  ],\n  \"channels\" : [\n    {},\n    {}\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/channels/suggest"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/channels/suggest",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Channel not found\",\n  \"code\" : \"channel_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Channels"
  },
  {
    "type": "POST",
    "url": "/comment/create",
    "title": "Create",
    "version": "1.2.3",
    "name": "Create",
    "group": "Comment",
    "permission": [
      {
        "name": "comments",
        "title": "Comments",
        "description": "<p>Requires the comments scope</p> "
      }
    ],
    "description": "<p>Create a comment</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID on which to comment</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "comment",
            "description": "<p>The comment to reply to</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>The comment body text</p> "
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "at",
            "description": "<p>The time in the video at which the comment was made</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -H \"AccessToken: abc123\" -d \"video=1234&body=zomg\" https://api.vid.me/comment/create",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"comment\" : {\n    \"comment_id\" : \"89\",\n    \"video_id\" : \"1\",\n    \"user_id\" : \"1\",\n    \"parent_comment_id\" : null,\n    \"body\" : \"sadfgsdfg\",\n    \"date_created\" : \"2014-03-12 21:10:37\",\n    \"made_at_time\" : null,\n    \"score\" : 1\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.comment_id",
            "description": "<p>The comment ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.video_id",
            "description": "<p>The video the comment was posted on</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.user_id",
            "description": "<p>The user that posted the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.parent_comment_id",
            "description": "<p>The comment to which this comment was posted as a reply</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.full_url",
            "description": "<p>The full URL to the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.body",
            "description": "<p>The comment body text</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.date_created",
            "description": "<p>The date at which the comment was created</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "comment.made_at_time",
            "description": "<p>The time in the video at which the comment was made</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "comment.score",
            "description": "<p>The score of the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "comment.user",
            "description": "<p>The user that posted the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "Vote",
            "optional": false,
            "field": "comment.viewerVote",
            "description": "<p>The authenticated user&#39;s vote, if applicable</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Comment.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Comment not found\",\n  \"code\" : \"comment_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Comment",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/comments/create",
    "title": "Create",
    "version": "1.2.1",
    "name": "Create",
    "group": "Comment",
    "description": "<p>Deprecated since 1.2.3. Use /comment/create instead.</p> ",
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "Comment"
  },
  {
    "type": "POST",
    "url": "/comment/:comment/delete",
    "title": "Delete",
    "version": "1.2.3",
    "name": "Delete",
    "group": "Comment",
    "permission": [
      {
        "name": "comments",
        "title": "Comments",
        "description": "<p>Requires the comments scope</p> "
      }
    ],
    "description": "<p>Delete a comment. User must own the comment</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>The comment to delete</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -H \"AccessToken: 0123456789abcdef\" https://api.vid.me/comment/1234/delete",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Comment.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Comment not found\",\n  \"code\" : \"comment_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Comment",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/comments/delete",
    "title": "Delete",
    "version": "1.2.1",
    "name": "Delete",
    "group": "Comment",
    "description": "<p>Deprecated since 1.2.3. Use /comment/:comment/delete instead.</p> ",
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "Comment"
  },
  {
    "type": "GET",
    "url": "/comment/:comment",
    "title": "Detail",
    "version": "1.2.3",
    "name": "Detail",
    "group": "Comment",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get information about a comment.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>The comment ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/comment/484"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/comment/1234",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"comment\" : {\n    \"comment_id\" : \"89\",\n    \"video_id\" : \"1\",\n    \"user_id\" : \"1\",\n    \"parent_comment_id\" : null,\n    \"body\" : \"sadfgsdfg\",\n    \"date_created\" : \"2014-03-12 21:10:37\",\n    \"made_at_time\" : null,\n    \"score\" : 1\n  },\n  \"user\": {},\n  \"viewerVote\": {}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.comment_id",
            "description": "<p>The comment ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.video_id",
            "description": "<p>The video the comment was posted on</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.user_id",
            "description": "<p>The user that posted the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.parent_comment_id",
            "description": "<p>The comment to which this comment was posted as a reply</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.full_url",
            "description": "<p>The full URL to the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.body",
            "description": "<p>The comment body text</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.date_created",
            "description": "<p>The date at which the comment was created</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "comment.made_at_time",
            "description": "<p>The time in the video at which the comment was made</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "comment.score",
            "description": "<p>The score of the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "comment.user",
            "description": "<p>The user that posted the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "Vote",
            "optional": false,
            "field": "comment.viewerVote",
            "description": "<p>The authenticated user&#39;s vote, if applicable</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Comment.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Comment not found\",\n  \"code\" : \"comment_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Comment"
  },
  {
    "type": "GET",
    "url": "/comments/list",
    "title": "List",
    "version": "1.2.3",
    "name": "List",
    "group": "Comment",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List comments on a video</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID on which to comment</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": "<p><code>comment_id</code></p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "direction",
            "description": "<p><code>ASC</code> or <code>DESC</code></p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -d \"video=1234\" https://api.vid.me/comments/list",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"comments\" : [\n      {},\n      {}\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "comments",
            "description": "<p>Comment data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.comment_id",
            "description": "<p>The comment ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.video_id",
            "description": "<p>The video the comment was posted on</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.user_id",
            "description": "<p>The user that posted the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.parent_comment_id",
            "description": "<p>The comment to which this comment was posted as a reply</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.full_url",
            "description": "<p>The full URL to the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.body",
            "description": "<p>The comment body text</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.date_created",
            "description": "<p>The date at which the comment was created</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "comments.made_at_time",
            "description": "<p>The time in the video at which the comment was made</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "comments.score",
            "description": "<p>The score of the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "comments.user",
            "description": "<p>The user that posted the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "Vote",
            "optional": false,
            "field": "comments.viewerVote",
            "description": "<p>The authenticated user&#39;s vote, if applicable</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Comment"
  },
  {
    "type": "GET",
    "url": "/comment/:comment/url",
    "title": "URL",
    "version": "1.2.3",
    "name": "Url",
    "group": "Comment",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get a comment&#39;s url</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>The comment ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/comment/484/url"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl -i https://api.vid.me/comment/484/url",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 301 Moved Permanently\nLocation: https://vid.me/yvi#comment-484",
          "type": "json"
        }
      ]
    },
    "filename": "VideoApp/Api/Controllers/Comment.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Comment not found\",\n  \"code\" : \"comment_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Comment"
  },
  {
    "type": "POST",
    "url": "/comment/:comment/vote",
    "title": "Vote",
    "version": "1.2.3",
    "name": "Vote",
    "group": "Comment",
    "permission": [
      {
        "name": "comments",
        "title": "Comments",
        "description": "<p>Requires the comments scope</p> "
      }
    ],
    "description": "<p>Vote on a comment.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>The comment on which to vote</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "value",
            "description": "<p>The value of the vote (<code>1</code>, <code>0</code>, <code>-1</code>)</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -H \"AccessToken: 0123456789abcdef\" -d \"value=1\" https://api.vid.me/comment/1234/vote",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"comment\": {\n    \"comment_id\": \"1234\",\n    \"video_id\": \"5678\",\n    \"user_id\": \"90\",\n    \"parent_comment_id\": null,\n    \"body\": \"aha!\",\n    \"date_created\": \"2014-03-20 22:41:17\",\n    \"made_at_time\": null,\n    \"score\": -1\n  },\n  \"vote\": {\n    \"vote_id\": \"2358\",\n    \"comment_id\": \"1234\",\n    \"video_id\": \"5678\",\n    \"user_id\": \"90\",\n    \"value\": -1,\n    \"date_created\": \"2014-03-20 22:41:17\",\n    \"date_modified\": \"2014-03-28 02:06:18\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "comment",
            "description": "<p>Comment data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.comment_id",
            "description": "<p>The comment ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.video_id",
            "description": "<p>The video the comment was posted on</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.user_id",
            "description": "<p>The user that posted the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.parent_comment_id",
            "description": "<p>The comment to which this comment was posted as a reply</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.full_url",
            "description": "<p>The full URL to the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.body",
            "description": "<p>The comment body text</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.date_created",
            "description": "<p>The date at which the comment was created</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "comment.made_at_time",
            "description": "<p>The time in the video at which the comment was made</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "comment.score",
            "description": "<p>The score of the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "comment.user",
            "description": "<p>The user that posted the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "Vote",
            "optional": false,
            "field": "comment.viewerVote",
            "description": "<p>The authenticated user&#39;s vote, if applicable</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "vote",
            "description": "<p>Vote data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vote.vote_id",
            "description": "<p>The ID of the vote</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vote.comment_id",
            "description": "<p>The comment on which the vote was made</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vote.video_id",
            "description": "<p>The video of the comment on which the vote was made</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vote.user_id",
            "description": "<p>The user that voted</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "vote.value",
            "description": "<p>The value of the vote (1, 0, -1)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vote.date_created",
            "description": "<p>The date at which the vote was created</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vote.date_modified",
            "description": "<p>The date at which the vote was changed</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Comment.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Comment not found\",\n  \"code\" : \"comment_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Comment",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/comments/vote",
    "title": "Vote",
    "version": "1.2.1",
    "name": "Vote",
    "group": "Comment",
    "description": "<p>Deprecated since 1.2.3. Use /comment/:comment/vote instead.</p> ",
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "Comment"
  },
  {
    "type": "GET",
    "url": "/geofences",
    "title": "List",
    "version": "1.6.6",
    "name": "List",
    "group": "Geofences",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List geofences</p> ",
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/geofences",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "https://api.vid.me/geofences"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Geofences.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Geofences",
    "parameter": {
      "fields": {
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "geofences",
            "description": "<p>Geofences data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "geofences.geofence_id",
            "description": "<p>The unique geofence identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "geofences.title",
            "description": "<p>The title</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "geofences.latitude",
            "description": "<p>The latitude of the center</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "geofences.longitude",
            "description": "<p>The longitude of the center</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "geofences.radius",
            "description": "<p>The radius (in meters)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "geofences.date_created",
            "description": "<p>The date of creation</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/geofences/suggest",
    "title": "Suggest",
    "version": "1.6.6",
    "name": "Suggest",
    "group": "Geofences",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Suggest geofences</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "text",
            "description": "<p>The text for which to search</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -d \"test=USC\" https://api.vid.me/geofences/suggest",
        "type": "curl"
      }
    ],
    "sampleRequest": [
      {
        "url": "https://api.vid.me/geofences/suggest?text=USC"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Geofences.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Geofences",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "geofences",
            "description": "<p>Geofences data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "geofences.geofence_id",
            "description": "<p>The unique geofence identifier</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "geofences.title",
            "description": "<p>The title</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "geofences.latitude",
            "description": "<p>The latitude of the center</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "geofences.longitude",
            "description": "<p>The longitude of the center</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "geofences.radius",
            "description": "<p>The radius (in meters)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "geofences.date_created",
            "description": "<p>The date of creation</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/grab",
    "title": "Grab",
    "version": "1.9.0",
    "name": "Grab",
    "group": "Grab",
    "permission": [
      {
        "name": "video_upload",
        "title": "Video Upload",
        "description": "<p>Requires the video_upload or videos scope</p> "
      }
    ],
    "description": "<p>Grab an external video.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The external video URL</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "channel",
            "description": "<p>The channel to which to add the video</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "private",
            "description": "<p>Should the video be considered private? Default: 0</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "nsfw",
            "description": "<p>Is the video NFSW? Default: 0</p> "
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": true,
            "field": "start",
            "description": "<p>Start time offset, Maximum duration is ten minutes.</p> "
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": true,
            "field": "end",
            "description": "<p>End time offset. Maximum duration is ten minutes.</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST\n     -d \"url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRI6mLNpp-j8\"\n     -d \"title=baz\"\n     -d \"description=bat\"\n     https://api.vid.me/grab",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"video\" : {} // ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please specify a valid URL.\",\n  \"code\" : \"invalid_url\",\n  \"url\" : \"foo/bar\",\n  \"accessToken\" : {\n    \"token\" : \"bfdmj1a9u68088kgw4ck0swgo\",\n    \"expires\" : \"2004-02-12T15:19:21+00:00\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please specify a valid URL.\",\n  \"code\" : \"invalid_url\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Grab.php",
    "groupTitle": "Grab",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/grab",
    "title": "Grab",
    "version": "1.4.1",
    "name": "Grab",
    "group": "Grab",
    "permission": [
      {
        "name": "video_upload",
        "title": "Video Upload",
        "description": "<p>Requires the video_upload or videos scope</p> "
      }
    ],
    "description": "<p>Grab an external video.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The external video URL</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "channel",
            "description": "<p>The channel to which to add the video</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "private",
            "description": "<p>Should the video be considered private? Default: 0</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "nsfw",
            "description": "<p>Is the video NFSW? Default: 0</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST\n     -d \"url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRI6mLNpp-j8\"\n     -d \"title=baz\"\n     -d \"description=bat\"\n     https://api.vid.me/grab",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"video\" : {} // ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please specify a valid URL.\",\n  \"code\" : \"invalid_url\",\n  \"url\" : \"foo/bar\",\n  \"accessToken\" : {\n    \"token\" : \"bfdmj1a9u68088kgw4ck0swgo\",\n    \"expires\" : \"2004-02-12T15:19:21+00:00\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please specify a valid URL.\",\n  \"code\" : \"invalid_url\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "Grab",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/grab",
    "title": "Grab",
    "version": "1.2.1",
    "name": "Grab",
    "group": "Grab",
    "permission": [
      {
        "name": "video_upload",
        "title": "Video Upload",
        "description": "<p>Requires the video_upload or videos scope</p> "
      }
    ],
    "description": "<p>Grab an external video.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The external video URL</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The video description</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -d \"url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRI6mLNpp-j8&title=baz&description=bat\" https://api.vid.me/grab",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"video\" : {} // ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please specify a valid URL.\",\n  \"code\" : \"invalid_url\",\n  \"url\" : \"foo/bar\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please specify a valid URL.\",\n  \"code\" : \"invalid_url\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "Grab"
  },
  {
    "type": "GET",
    "url": "/grab/preview",
    "title": "Preview",
    "version": "1.5.3",
    "name": "Preview",
    "group": "Grab",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get metadata about an external video.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The external video URL</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -d \"url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRI6mLNpp-j8\" https://api.vid.me/grab/preview",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"url\" : \"https:\\/\\/www.youtube.com\\/watch?v=RI6mLNpp-j8\",\n  \"title\" : \"Robert Scoble on Google Glass and Contextual API\",\n  \"description\" : \"This is just a short interview highlight trailer snippet from my conversation with Robert Scoble where we discuss Google Glass and contextual api. You can see the full interview here: http:\\/\\/snglrty.co\\/1eKH7pJ\",\n  \"format\" : \"video\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"url\" : \"http:\\/\\/giant.gfycat.com\\/BlueFickleGalapagosalbatross.gif\",\n  \"format\" : \"gif\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"That link is not supported for grabbing.\",\n  \"code\" : \"invalid_grab\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please specify a valid URL.\",\n  \"code\" : \"invalid_url\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Grab.php",
    "groupTitle": "Grab",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/grab/preview",
    "title": "Preview",
    "version": "1.2.1",
    "name": "Preview",
    "group": "Grab",
    "description": "<p>Get metadata about an external video.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The external video URL</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -d \"url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRI6mLNpp-j8\" https://api.vid.me/grab/preview",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"data\" : {\n    \"url\" : \"https:\\/\\/www.youtube.com\\/watch?v=RI6mLNpp-j8\",\n    \"title\" : \"Robert Scoble on Google Glass and Contextual API\",\n    \"description\" : \"This is just a short interview highlight trailer snippet from my conversation with Robert Scoble where we discuss Google Glass and contextual api. You can see the full interview here: http:\\/\\/snglrty.co\\/1eKH7pJ\",\n    \"format\" : \"video\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"data\" : {\n    \"url\" : \"http:\\/\\/giant.gfycat.com\\/BlueFickleGalapagosalbatross.gif\",\n    \"format\" : \"gif\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"That link is not supported for grabbing.\",\n  \"code\" : \"invalid_grab\",\n  \"url\" : \"https:\\/\\/foo.com\\/bar\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please specify a valid URL.\",\n  \"code\" : \"invalid_url\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "Grab"
  },
  {
    "type": "GET",
    "url": "/notification/:notification",
    "title": "Detail",
    "version": "1.7.9",
    "name": "Detail",
    "group": "Notifications",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Detail notification</p> ",
    "filename": "VideoApp/Api/Controllers/Notifications.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\" : false,\n  \"error\" : \"Not found\",\n  \"code\" : \"not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Notifications",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "notification",
            "description": "<p>Video upload and encoding progress information</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notification.notification_id",
            "description": "<p>The notification ID</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notification.user_id",
            "description": "<p>The recipient&#39;s user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.type",
            "description": "<p>The type of notification. Currently one of: channel-subscribed, comment-replied-to, user-subscribed, user-welcome, video-commented, video-upvoted</p> "
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "notification.data",
            "description": "<p>Arbitrary data, varies with notification type</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "notification.read",
            "description": "<p>If the notification has been read by the recipient</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.date_created",
            "description": "<p>The date at which the notification was created</p> "
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": true,
            "field": "notification.actor",
            "description": "<p>The user that caused the notification</p> "
          },
          {
            "group": "Success 200",
            "type": "Channel",
            "optional": true,
            "field": "notification.channel",
            "description": "<p>The channel related to the notification. Varies by type.</p> "
          },
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": true,
            "field": "notification.comment",
            "description": "<p>The comment related to the notification. Varies by type.</p> "
          },
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": true,
            "field": "notification.parentComment",
            "description": "<p>The parent comment related to the notification. Varies by type.</p> "
          },
          {
            "group": "Success 200",
            "type": "Video",
            "optional": true,
            "field": "notification.video",
            "description": "<p>The video related to the notification. Varies by type.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/notifications",
    "title": "List",
    "version": "1.4.6",
    "name": "List",
    "group": "Notifications",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>List notifications</p> ",
    "filename": "VideoApp/Api/Controllers/Notifications.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Notifications",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "notifications",
            "description": "<p>Video upload and encoding progress information</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notifications.notification_id",
            "description": "<p>The notification ID</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "notifications.user_id",
            "description": "<p>The recipient&#39;s user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifications.type",
            "description": "<p>The type of notification. Currently one of: channel-subscribed, comment-replied-to, user-subscribed, user-welcome, video-commented, video-upvoted</p> "
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "notifications.data",
            "description": "<p>Arbitrary data, varies with notification type</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "notifications.read",
            "description": "<p>If the notification has been read by the recipient</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifications.date_created",
            "description": "<p>The date at which the notification was created</p> "
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": true,
            "field": "notifications.actor",
            "description": "<p>The user that caused the notification</p> "
          },
          {
            "group": "Success 200",
            "type": "Channel",
            "optional": true,
            "field": "notifications.channel",
            "description": "<p>The channel related to the notification. Varies by type.</p> "
          },
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": true,
            "field": "notifications.comment",
            "description": "<p>The comment related to the notification. Varies by type.</p> "
          },
          {
            "group": "Success 200",
            "type": "Comment",
            "optional": true,
            "field": "notifications.parentComment",
            "description": "<p>The parent comment related to the notification. Varies by type.</p> "
          },
          {
            "group": "Success 200",
            "type": "Video",
            "optional": true,
            "field": "notifications.video",
            "description": "<p>The video related to the notification. Varies by type.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/notifications/mark-read",
    "title": "Mark Read",
    "version": "1.4.6",
    "name": "MarkRead",
    "group": "Notifications",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Mark notifications as read</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "notifications",
            "description": "<p>A list of notification IDs, or <code>all</code></p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST \\\n    -d \"notifications=all\" \\\n    https://api.vid.me/notifications/mark-read",
        "type": "curl"
      },
      {
        "title": "Example",
        "content": "curl -X POST \\\n    -d \"notifications=[1,2,3,4]\" \\\n    https://api.vid.me/notifications/mark-read",
        "type": "curl"
      },
      {
        "title": "Example",
        "content": "curl -X POST \\\n    -d \"notifications[]=1\" \\\n    -d \"notifications[]=2\" \\\n    https://api.vid.me/notifications/mark-read",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Notifications.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Notifications",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/notifications/subscribe",
    "title": "Subscribe",
    "version": "1.7.9",
    "name": "Subscribe",
    "group": "Notifications",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Subscribe to notifications. Note: It is not currently possible to use  the apn or gcm type.</p> <p> For notify_type=web, a POST request will be sent to the specified  URL when a notification is triggered. The data will be in JSON format,  the same as <code>notification/:notification</code> (detail), plus <code>unreadCount</code>.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notify_type",
            "description": "<p>web, apn, or gcm</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notify_address",
            "description": "<p>The web hook URL, or APN/GCM token.</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST \\\n    -d \"token=0123456789abcdef\" \\\n    -d \"notify_type=web\" \\\n    -d \"notify_address=http://requestb.in/bin/id\" \\\n    https://api.vid.me/notifications/subscribe",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subscription_id",
            "description": ""
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Notifications.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Notifications",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/notifications/subscribe",
    "title": "Subscribe",
    "version": "1.4.6",
    "name": "Subscribe",
    "group": "Notifications",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Subscribe to notifications</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notify_type",
            "description": "<p>apn or gcm</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notify_address",
            "description": "<p>The APN or GCM token</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST \\\n    -d \"token=0123456789abcdef\" \\\n    -d \"notify_type=apn\" \\\n    -d \"notify_address=abcdef012345689\" \\\n    https://api.vid.me/notifications/subscribe",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subscription_id",
            "description": ""
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Notifications",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/notification/unread",
    "title": "Unread Count",
    "version": "1.7.9",
    "name": "UnreadCount",
    "group": "Notifications",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Get number of unread notifications</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "unreadCount",
            "description": "<p>The number of unread notifications</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Notifications.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\" : false,\n  \"error\" : \"Not found\",\n  \"code\" : \"not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Notifications",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/notifications/unsubscribe",
    "title": "Unsubscribe",
    "version": "1.7.9",
    "name": "Unsubscribe",
    "group": "Notifications",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Unsubscribe to notifications. Note: It is not currently possible to use  the apn or gcm type.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notify_type",
            "description": "<p>web, apn, or gcm</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notify_address",
            "description": "<p>The web hook URL, or APN/GCM token</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subscription_id",
            "description": "<p>The subscription identifier</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST \\\n    -d \"token=0123456789abcdef\" \\\n    -d \"notify_type=web\" \\\n    -d \"notify_address=http://requestb.in/bin/id\" \\\n    https://api.vid.me/notifications/unsubscribe",
        "type": "curl"
      },
      {
        "title": "Example",
        "content": "curl -X POST \\\n    -d \"token=0123456789abcdef\" \\\n    -d \"subscription_id=1234\" \\\n    https://api.vid.me/notifications/unsubscribe",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Notifications.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Notifications",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/notifications/unsubscribe",
    "title": "Unsubscribe",
    "version": "1.4.6",
    "name": "Unsubscribe",
    "group": "Notifications",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Unsubscribe to notifications</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notify_type",
            "description": "<p><code>apn</code> or <code>gcm</code></p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notify_address",
            "description": "<p>The APN or GCM token</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subscription_id",
            "description": "<p>The subscription identifier</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST \\\n    -d \"token=0123456789abcdef\" \\\n    -d \"notify_type=apn\" \\\n    -d \"notify_address=abcdef012345689\" \\\n    https://api.vid.me/notifications/unsubscribe",
        "type": "curl"
      },
      {
        "title": "Example",
        "content": "curl -X POST \\\n    -d \"token=0123456789abcdef\" \\\n    -d \"subscription_id=1234\" \\\n    https://api.vid.me/notifications/unsubscribe",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Notifications",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/oauth/apps",
    "title": "Apps",
    "version": "1.2.6",
    "name": "Apps",
    "group": "Oauth",
    "permission": [
      {
        "name": "auth_management",
        "title": "Auth Management",
        "description": "<p>Requires the :auth_management scope</p> "
      }
    ],
    "description": "<p>List authorized applications</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "application",
            "description": "<p>List of authorized applications</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Oauth.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Oauth",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/oauth/authorize",
    "title": "Authorize",
    "version": "1.2.6",
    "name": "Authorize",
    "group": "Oauth",
    "permission": [
      {
        "name": "auth_management",
        "title": "Auth Management",
        "description": "<p>Requires the :auth_management scope</p> "
      }
    ],
    "description": "<p>Authorize an oauth application</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>The application client ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "response_type",
            "description": "<p>The response type <code>token</code> or <code>code</code></p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "redirect_uri",
            "description": "<p>The uri to which to redirect on success</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>A space separated list of scopes</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Either <code>allow</code> or <code>deny</code></p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>Either <code>allow</code> or <code>deny</code></p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response_type",
            "description": "<p>The response type <code>token</code> or <code>code</code></p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>The access token, if response_type is <code>token</code></p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>The code, if response_type is <code>code</code></p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Oauth.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"{message}\",\n  \"code\" : \"invalid_param\",\n  \"param\" : \"{paramName}\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Oauth",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/oauth/client/:application_id/delete",
    "title": "Delete Client",
    "version": "2.0.0",
    "name": "ClientDelete",
    "group": "Oauth",
    "permission": [
      {
        "name": "client_management",
        "title": "Client Management",
        "description": "<p>Requires the :client_management scope</p> "
      }
    ],
    "description": "<p>Delete an application</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "application_id",
            "description": "<p>The ID of the application (not the client_id)</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The user&#39;s password</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Oauth.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"{message}\",\n  \"code\" : \"invalid_param\",\n  \"param\" : \"{paramName}\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Oauth",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/oauth/client/:application_id/edit",
    "title": "Edit Client",
    "version": "1.7.9",
    "name": "ClientEdit",
    "group": "Oauth",
    "permission": [
      {
        "name": "client_management",
        "title": "Client Management",
        "description": "<p>Requires the :client_management scope</p> "
      }
    ],
    "description": "<p>Edit an application</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "application_id",
            "description": "<p>The ID of the application (not the client_id)</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>The name of the Application encoded as a UTF-8 string [RFC 3629] with a maximum length                           of 100 bytes.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "website",
            "description": "<p>The website URI for the Application with a maximum length of 200 bytes</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief description of the Application encoded as a UTF-8 string with a maximum                                  length of 500 bytes.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "organization",
            "description": "<p>The name of the Organization behind the Application encoded as a UTF-8 string                                   with a maximum length of 100 bytes.</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "redirect_uri_prefix",
            "description": "<p>The expected prefix of the “callback” HTTP or HTTPS URI to redirect to                                          after a User has authorized an OAuth request. Maximum length of 200                                          bytes.</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Oauth.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"{message}\",\n  \"code\" : \"invalid_param\",\n  \"param\" : \"{paramName}\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Oauth",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/oauth/clients",
    "title": "Clients",
    "version": "1.2.6",
    "name": "Clients",
    "group": "Oauth",
    "permission": [
      {
        "name": "client_management",
        "title": "Client Management",
        "description": "<p>Requires the :client_management scope</p> "
      }
    ],
    "description": "<p>List owned applications</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "application",
            "description": "<p>List of owned applications</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Oauth.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Oauth",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/oauth/register",
    "title": "Register",
    "version": "1.2.6",
    "name": "Register",
    "group": "Oauth",
    "permission": [
      {
        "name": "client_management",
        "title": "Client Management",
        "description": "<p>Requires the :client_management scope</p> "
      }
    ],
    "description": "<p>Register an application</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Application encoded as a UTF-8 string [RFC 3629] with a maximum length                          of 100 bytes.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "website",
            "description": "<p>The website URI for the Application with a maximum length of 200 bytes</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>a brief description of the Application encoded as a UTF-8 string with a                                  maximum length of 500 bytes.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "organization",
            "description": "<p>The name of the Organization behind the Application encoded as a UTF-8                                   string with a maximum length of 100 bytes.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accept_terms",
            "description": "<p>This MUST be set to yes and indicates acceptance of the Service                                 Provider&#39;s terms_of_use</p> "
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "redirect_uri_prefix",
            "description": "<p>The expected prefix of the “callback” HTTP or HTTPS URI to redirect                                        to after a User has authorized an OAuth request. Maximum length of                                        200 bytes.</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Oauth.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"{message}\",\n  \"code\" : \"invalid_param\",\n  \"param\" : \"{paramName}\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Oauth",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/oauth/revoke",
    "title": "Revoke",
    "version": "1.2.6",
    "name": "Revoke",
    "group": "Oauth",
    "permission": [
      {
        "name": "auth_management",
        "title": "Auth Management",
        "description": "<p>Requires the :auth_management scope</p> "
      }
    ],
    "description": "<p>Revoke all access tokens for an oauth application</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>The application client ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Oauth.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"{message}\",\n  \"code\" : \"invalid_param\",\n  \"param\" : \"{paramName}\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Oauth",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/oauth/token",
    "title": "Token",
    "version": "1.2.6",
    "name": "Token",
    "group": "Oauth",
    "description": "<p>Exchange a code for an access token</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "grant_type",
            "description": "<p>Must be set to &quot;client_credentials&quot;</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>The application client ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_secret",
            "description": "<p>The application client secret</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>The access code</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>The access token</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auth",
            "description": "<p>Auth data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.token",
            "description": "<p>The user authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.expires",
            "description": "<p>The date at which the token expires</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.user_id",
            "description": "<p>The user ID of the authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"access_token\" : \"fedcba9876543210fedcba9876543210\",\n  \"auth\" : {\n    \"token\" : \"fedcba9876543210fedcba9876543210\",\n    \"expires\" : \"1543-01-01 13:33:37\",\n    \"user_id\" : \"1234\"\n  },\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    \"username\" : \"foo\",\n    \"avatar\" : \"avatars\\/1234.jpg?v3r1400000000\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -d \"grant_type=client_credentials\" \\\n     -d \"client_id=abcdef0123456789\" \\\n     -d \"client_secret=abcdef0123456789\" \\\n     -d \"code=abcdef0123456789\" \\\n     https://api.vid.me/oauth/token",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Oauth.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"{message}\",\n  \"code\" : \"invalid_param\",\n  \"param\" : \"{paramName}\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Oauth"
  },
  {
    "type": "POST",
    "url": "/video/:video/sms",
    "title": "Share via SMS",
    "version": "1.2.4",
    "name": "Sms",
    "group": "Share",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Share a video anonymously via SMS. Must specify either the device ID or  user token that uploaded the video</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "phones",
            "description": "<p>A list of recipient phone numbers</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phones.name",
            "description": "<p>The name associated with the phone number</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phones.value",
            "description": "<p>The phone number</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notify_type",
            "description": "<p>Type of notification (apn, gcm) for link view notifications</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notify_id",
            "description": "<p>The notification token</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"DEVICE=fedcba9876543210&phones[0][value]=15555555555&phones[0][name]=Arnold+Schwarzenegger\" \\\n    https://api.vid.me/video/1234/sms",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please select at least one valid recipient.\",\n  \"code\" : \"invalid_phone\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Share.php",
    "groupTitle": "Share",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/tag/:tag/hot",
    "title": "Hot Videos",
    "version": "1.8.19",
    "name": "Hot",
    "group": "Tags",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List hot videos for a particular tag.</p> ",
    "parameter": {
      "fields": {
        "Filters": [
          {
            "group": "Filters",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The tag ID or text. Text must be URL-encoded.</p> "
          }
        ],
        "Page": [
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": "<p>Result offset</p> "
          },
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>Result limit (1-100)</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/tag/grmd/hot"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/tag/grmd/hot",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Tag.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Tags",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/tag/:tag/videos",
    "title": "List Videos",
    "version": "1.9.0",
    "name": "List",
    "group": "Tags",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List videos for a particular tag.</p> ",
    "parameter": {
      "fields": {
        "Filters": [
          {
            "group": "Filters",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The tag ID or text. Text must be URL-encoded.</p> "
          },
          {
            "group": "Filters",
            "type": "Integer",
            "optional": true,
            "field": "user",
            "description": "<p>Filter by user ID</p> "
          },
          {
            "group": "Filters",
            "type": "Ternary",
            "optional": true,
            "field": "nsfw",
            "description": "<p>Filter results by NSFW</p> "
          }
        ],
        "Order": [
          {
            "group": "Order",
            "type": "Integer",
            "optional": true,
            "field": "order",
            "description": "<p>May be one of <code>video_id</code>, <code>view_count</code>, <code>date_completed</code>, <code>score</code></p> "
          },
          {
            "group": "Order",
            "type": "Integer",
            "optional": true,
            "field": "direction",
            "description": "<p><code>ASC</code> or <code>DESC</code></p> "
          }
        ],
        "Page": [
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": "<p>Result offset</p> "
          },
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>Result limit (1-100)</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/tag/grmd/videos"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/tag/grmd/videos",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Tag.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Tags",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/tag/:tag/videos",
    "title": "List Videos",
    "version": "1.8.19",
    "name": "List",
    "group": "Tags",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List videos for a particular tag.</p> ",
    "parameter": {
      "fields": {
        "Filters": [
          {
            "group": "Filters",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>The tag ID or text. Text must be URL-encoded.</p> "
          },
          {
            "group": "Filters",
            "type": "Ternary",
            "optional": true,
            "field": "nsfw",
            "description": "<p>Filter results by NSFW</p> "
          }
        ],
        "Order": [
          {
            "group": "Order",
            "type": "Integer",
            "optional": true,
            "field": "order",
            "description": "<p>May be one of <code>video_id</code>, <code>view_count</code>, <code>date_completed</code>, <code>score</code></p> "
          },
          {
            "group": "Order",
            "type": "Integer",
            "optional": true,
            "field": "direction",
            "description": "<p><code>ASC</code> or <code>DESC</code></p> "
          }
        ],
        "Page": [
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": "<p>Result offset</p> "
          },
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>Result limit (1-100)</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/tag/grmd/videos"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/tag/grmd/videos",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Tags",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/tags/suggest",
    "title": "Suggest",
    "version": "1.2.3",
    "name": "Suggest",
    "group": "Tags",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Suggest tags</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "text",
            "description": "<p>Fragment of a tag for which to search</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -d \"text=Ga\" https://api.vid.me/tags/suggest",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"text\": \"Ga\",\n  \"tags\": [\n    {\n      \"tag_id\": \"1\",\n      \"text\": \"Gaming\",\n      \"label\": \"Gaming\",\n      \"use_count\": \"1\"\n    }\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Tag.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Tags"
  },
  {
    "type": "POST",
    "url": "/upload/cancel",
    "title": "Cancel",
    "version": "1.2.3",
    "name": "Cancel",
    "group": "Upload",
    "permission": [
      {
        "name": "video_upload",
        "title": "Video Upload",
        "description": "<p>Requires the video_upload or videos scope</p> "
      }
    ],
    "description": "<p>Cancel the upload of a video</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "upload",
            "description": "<p>The upload ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>The video code</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"upload=1234&code=foo\" https://api.vid.me/upload/cancel",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"status\" : true,\n   \"upload\": {\n     \"upload_id\": \"63\",\n     \"video_id\": \"254\",\n     \"size_total\": 100000000,\n     \"size_completed\": 0,\n     \"state\": \"failed\"\n   }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Invalid Upload\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Upload.php",
    "groupTitle": "Upload",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/upload/chunk",
    "title": "Upload chunk",
    "version": "1.2.3",
    "name": "Chunk",
    "group": "Upload",
    "permission": [
      {
        "name": "video_upload",
        "title": "Video Upload",
        "description": "<p>Requires the video_upload or videos scope</p> "
      }
    ],
    "description": "<p>Upload a chunk of a video</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "upload",
            "description": "<p>The upload ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>The video code</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d @upload.mp4.1 https://api.vid.me/upload/chunk?upload=1234&code=foo",
        "type": "curl"
      },
      {
        "title": "Example",
        "content": "curl -X POST -F filedata=@upload.mp4.1 https://api.vid.me/upload/chunk?upload=1234&code=foo",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"status\" : true,\n   \"upload\": {\n     \"upload_id\": \"63\",\n     \"video_id\": \"254\",\n     \"size_total\": 100000000,\n     \"size_completed\": 500000,\n     \"state\": \"started\"\n   },\n   \"video\" : {} // ...\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "upload",
            "description": "<p>Upload data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upload.upload_id",
            "description": "<p>The upload ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upload.video_id",
            "description": "<p>The video ID for the upload</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upload.size_total",
            "description": "<p>The total size of the upload, in bytes</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upload.size_completed",
            "description": "<p>The size of the completed section of the upload, in bytes</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upload.state",
            "description": "<p>The state of the upload</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "video",
            "description": "<p>The video data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.full_url",
            "description": "<p>The full URL to the video page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.embed_url",
            "description": "<p>The full URL to the video embed page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete_url",
            "description": "<p>The full URL to the completed, encoded video object</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "video.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail_url",
            "description": "<p>The full URL to the video thumbnail</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.private",
            "description": "<p>Is the video visible in lists and search engines?</p> "
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Invalid Content-Range\",\n  \"code\" : \"invalid_content_range\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "VideoApp/Api/Controllers/Upload.php",
    "groupTitle": "Upload",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/upload/create",
    "title": "Create",
    "version": "1.2.3",
    "name": "Create",
    "group": "Upload",
    "permission": [
      {
        "name": "video_upload",
        "title": "Video Upload",
        "description": "<p>Requires the video_upload or videos scope</p> "
      }
    ],
    "description": "<p>Request a chunked video upload</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>The video code</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "size",
            "description": "<p>The size of the file, in bytes</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"code=foo&size=13333337\" https://api.vid.me/upload/create",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n {\n   \"status\" : true,\n   \"upload\": {\n     \"upload_id\": \"63\",\n     \"video_id\": \"254\",\n     \"size_total\": 100000000,\n     \"size_completed\": 0,\n     \"state\": \"started\"\n   }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "upload",
            "description": "<p>Upload data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upload.upload_id",
            "description": "<p>The upload ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upload.video_id",
            "description": "<p>The video ID for the upload</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upload.size_total",
            "description": "<p>The total size of the upload, in bytes</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upload.size_completed",
            "description": "<p>The size of the completed section of the upload, in bytes</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upload.state",
            "description": "<p>The state of the upload</p> "
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Invalid video state\",\n  \"code\" : \"invalid_video_state\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Upload.php",
    "groupTitle": "Upload",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/upload/status",
    "title": "Get upload status",
    "version": "1.2.3",
    "name": "Status",
    "group": "Upload",
    "permission": [
      {
        "name": "video_upload",
        "title": "Video Upload",
        "description": "<p>Requires the video_upload or videos scope</p> "
      }
    ],
    "description": "<p>Check chunked upload status</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "upload",
            "description": "<p>The upload ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>The video code</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/upload/status?upload=1234&code=foo",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"upload\" : {\n     \"upload_id\" : 1234,\n     \"video_id\" : 4321,\n     \"size_total\" : 133333337,\n     \"size_completed\" : 1337,\n     \"state\" : \"started\"\n  },\n  \"video\" : {} // ...\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "upload",
            "description": "<p>Upload data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upload.upload_id",
            "description": "<p>The upload ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upload.video_id",
            "description": "<p>The video ID for the upload</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upload.size_total",
            "description": "<p>The total size of the upload, in bytes</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upload.size_completed",
            "description": "<p>The size of the completed section of the upload, in bytes</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "upload.state",
            "description": "<p>The state of the upload</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "video",
            "description": "<p>The video data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.full_url",
            "description": "<p>The full URL to the video page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.embed_url",
            "description": "<p>The full URL to the video embed page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete_url",
            "description": "<p>The full URL to the completed, encoded video object</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "video.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail_url",
            "description": "<p>The full URL to the video thumbnail</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.private",
            "description": "<p>Is the video visible in lists and search engines?</p> "
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Invalid Content-Range\",\n  \"code\" : \"invalid_content_range\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Upload.php",
    "groupTitle": "Upload",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/user/:user/avatar[/:type]",
    "title": "Avatar URL",
    "version": "1.2.3",
    "name": "Avatar",
    "group": "User",
    "description": "<p>Get a user&#39;s avatar</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -i https://api.vid.me/user/9532/avatar",
        "type": "curl"
      },
      {
        "title": "Example",
        "content": "curl -i https://api.vid.me/user/9532/avatar/original",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 302 Found\nLocation: https://d1wst0behutosd.cloudfront.net/avatars/9532.small.jpg?v2r1392862240\nExpires: Fri, 04 Apr 2014 01:04:54\nCache-Control: max-age=86400",
          "type": "json"
        }
      ]
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"User not found\",\n  \"code\" : \"user_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/:user/avatar/crop",
    "title": "Crop Avatar",
    "version": "1.8.2",
    "name": "AvatarCrop",
    "group": "User",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Crop the current user avatar. Only affects cases where a square avatar is  used. Use the &#39;original&#39; avatar (e.g. avatars/1.original.jpg)</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user for which to crop the avatar</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "x",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "y",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "width",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "height",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d 'x=0' -d 'y=0' -d 'width=100' -d 'height=100' https://api.vid.me/user/1234/avatar/crop",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/user/:user/avatar/remove",
    "title": "Remove avatar",
    "version": "1.2.3",
    "name": "AvatarRemove",
    "group": "User",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Remove a user avatar</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user for which to remove the avatar</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST https://api.vid.me/user/1234/avatar/remove",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    \"username\" : \"foo\",\n    \"avatar\" : null\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/user/avatar-remove",
    "title": "Remove avatar",
    "version": "1.2.1",
    "name": "AvatarRemove",
    "group": "User",
    "description": "<p>Deprecated since 1.2.3. User /user/:user/avatar/remove instead.</p> ",
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/:user/avatar/update",
    "title": "Update avatar",
    "version": "1.2.3",
    "name": "AvatarUpdate",
    "group": "User",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Update a user avatar</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user for which to remove the avatar</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filedata",
            "description": "<p>The data of the avatar</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -F filedata=@avatar.png https://api.vid.me/user/1234/avatar/update",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    \"username\" : \"foo\",\n    \"avatar\" : \"avatars\\/1234.jpg?v3r1396046580\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/user/avatar",
    "title": "Update avatar",
    "version": "1.2.1",
    "name": "AvatarUpdate",
    "group": "User",
    "description": "<p>Deprecated since 1.2.3. User /user/:user/avatar/update instead.</p> ",
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/:user/cover/remove",
    "title": "Remove cover",
    "version": "1.7.6",
    "name": "CoverRemove",
    "group": "User",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Remove a user cover</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user for which to remove the avatar</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST https://api.vid.me/user/1234/cover/remove",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    // ...\n    \"cover\" : null\n    // ...\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/user/:user/cover/update",
    "title": "Update cover",
    "version": "1.7.6",
    "name": "CoverUpdate",
    "group": "User",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Update a user cover photo</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user for which to remove the avatar</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filedata",
            "description": "<p>The data of the cover</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -F filedata=@cover.png https://api.vid.me/user/1234/cover/update",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    // ...\n    \"cover\" : \"cover\\/1234.jpg?v3r1396046580\"\n    // ...\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/user/:user/cover[/:type]",
    "title": "Cover URL",
    "version": "1.7.6",
    "name": "CoverUrl",
    "group": "User",
    "description": "<p>Get a user&#39;s cover</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -i https://api.vid.me/user/9532/cover",
        "type": "curl"
      },
      {
        "title": "Example",
        "content": "curl -i https://api.vid.me/user/9532/cover/small",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 302 Found\nLocation: https://d1wst0behutosd.cloudfront.net/covers/9532.jpg?v1r1413597438\nExpires: Fri, 04 Apr 2014 01:04:54\nCache-Control: max-age=86400",
          "type": "json"
        }
      ]
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"User not found\",\n  \"code\" : \"user_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/create",
    "title": "Create",
    "version": "1.7.15",
    "name": "Create",
    "group": "User",
    "description": "<p>Create a user</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>The email address</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "claimToken",
            "description": "<p>Token to claim a video</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "nocookie",
            "description": "<p>True to not set a cookie</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"username=arnold&password=notmypassword\" https://api.vid.me/user/create",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"auth\" : {\n    \"token\" : \"fedcba9876543210fedcba9876543210\",\n    \"expires\" : \"1543-01-01 13:33:37\",\n    \"user_id\" : \"1234\"\n  },\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    \"username\" : \"foo\",\n    \"avatar\" : \"avatars\\/1234.jpg?v3r1400000000\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auth",
            "description": "<p>Auth data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.token",
            "description": "<p>The user authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.expires",
            "description": "<p>The date at which the token expires</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.user_id",
            "description": "<p>The user ID of the authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/create",
    "title": "Create",
    "version": "1.4.7",
    "name": "Create",
    "group": "User",
    "description": "<p>Create a user</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>The email address</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "remember",
            "description": "<p>To extend the duration of the authentication session</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "claimToken",
            "description": "<p>Token to claim a video</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "nocookie",
            "description": "<p>True to not set a cookie</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"username=arnold&password=notmypassword\" https://api.vid.me/user/create",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"auth\" : {\n    \"token\" : \"fedcba9876543210fedcba9876543210\",\n    \"expires\" : \"1543-01-01 13:33:37\",\n    \"user_id\" : \"1234\"\n  },\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    \"username\" : \"foo\",\n    \"avatar\" : \"avatars\\/1234.jpg?v3r1400000000\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auth",
            "description": "<p>Auth data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.token",
            "description": "<p>The user authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.expires",
            "description": "<p>The date at which the token expires</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.user_id",
            "description": "<p>The user ID of the authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/create",
    "title": "Create",
    "version": "1.4.1",
    "name": "Create",
    "group": "User",
    "description": "<p>Create a user</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>The email address</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "remember",
            "description": "<p>To extend the duration of the authentication session</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "claimToken",
            "description": "<p>Token to claim a video</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"username=arnold&password=notmypassword\" https://api.vid.me/user/create",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"auth\" : {\n    \"token\" : \"fedcba9876543210fedcba9876543210\",\n    \"expires\" : \"1543-01-01 13:33:37\",\n    \"user_id\" : \"1234\"\n  },\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    \"username\" : \"foo\",\n    \"avatar\" : \"avatars\\/1234.jpg?v3r1400000000\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "auth",
            "description": "<p>Auth data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.token",
            "description": "<p>The user authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.expires",
            "description": "<p>The date at which the token expires</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "auth.user_id",
            "description": "<p>The user ID of the authentication token</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/:user",
    "title": "Detail",
    "version": "1.7.7",
    "name": "Detail",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get information about a user. If you have the account scope, it  will contain the user&#39;s email address, if available.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFollowing",
            "description": "<p>If authenticated as a user, whether or not follows specified user</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFollowedBy",
            "description": "<p>If authenticated as a user, whether or not specified user follows</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    \"username\" : \"arnold\",\n    \"avatar\" : \"avatars\\/1234.jpg?v3r1400000000\",\n    \"avatar_url\" : \"https://d1wst0behutosd.cloudfront.net/avatars/9532.jpg?v2r1392862240\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/user/1234",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"User not found\",\n  \"code\" : \"user_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/:user",
    "title": "Detail",
    "version": "1.2.3",
    "name": "Detail",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get information about a user.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/user/1234",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    \"username\" : \"arnold\",\n    \"avatar\" : \"avatars\\/1234.jpg?v3r1400000000\",\n    \"avatar_url\" : \"https://d1wst0behutosd.cloudfront.net/avatars/9532.jpg?v2r1392862240\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"User not found\",\n  \"code\" : \"user_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/userByUsername(/:url)",
    "title": "Detail by Username",
    "version": "1.9.3",
    "name": "DetailByUsername",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get information about a user by Username. The same as calling detail  with the ID, See detail for more info.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The user&#39;s username</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/userByUsername?username=baz",
        "type": "curl"
      },
      {
        "title": "Example",
        "content": "curl https://api.vid.me/userByUsername/baz",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/User.php",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/:user/edit",
    "title": "Edit",
    "version": "1.6.5",
    "name": "Edit",
    "group": "User",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Edit a user. The current password is required if a new password is  specififed.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>The email address</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>The new password</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "passwordCurrent",
            "description": "<p>The current password</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bio",
            "description": "<p>The profile bio</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"username=arnold&token=123abc\" https://api.vid.me/user/1234/edit",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    \"username\" : \"arnold\",\n    \"avatar\" : \"avatars\\/1234.jpg?v3r1400000000\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/user/:user/edit",
    "title": "Edit",
    "version": "1.6.1",
    "name": "Edit",
    "group": "User",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Edit a user</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>The email address</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>The password</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "bio",
            "description": "<p>The profile bio</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"username=arnold&token=123abc\" https://api.vid.me/user/1234/edit",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    \"username\" : \"arnold\",\n    \"avatar\" : \"avatars\\/1234.jpg?v3r1400000000\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/user/:user/edit",
    "title": "Edit",
    "version": "1.2.3",
    "name": "Edit",
    "group": "User",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Edit a user</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>The email address</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>The password</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"username=arnold&token=123abc\" https://api.vid.me/user/1234/edit",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"user\" : {\n    \"user_id\" : \"1234\",\n    \"username\" : \"arnold\",\n    \"avatar\" : \"avatars\\/1234.jpg?v3r1400000000\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/user/:user/follow",
    "title": "Follow",
    "version": "1.2.3",
    "name": "Follow",
    "group": "User",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Follow a user</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID to follow</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"token=123abc\" https://api.vid.me/user/1234/follow",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"User not found\",\n  \"code\" : \"user_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/user/:user/followers",
    "title": "Followers",
    "version": "1.7.5",
    "name": "Followers",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Lists a user&#39;s followers</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Page offset</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Page limit</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/user/1/followers",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"users\" : [\n    {}\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"User not found\",\n  \"code\" : \"user_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/user/:user/following",
    "title": "Following",
    "version": "1.7.5",
    "name": "Following",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Lists users a user&#39;s is following</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Page offset</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Page limit</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/user/1/following",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"users\" : [\n    {}\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"User not found\",\n  \"code\" : \"user_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/user/:user/follows-channels",
    "title": "Follows Channels",
    "version": "1.7.1",
    "name": "FollowsChannels",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List channels a user follows</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/user/1/follows-channels",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"channels\" : [\n    {}\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "channels",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.channel_id",
            "description": "<p>The ID of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.url",
            "description": "<p>The unique URL fragment of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.full_url",
            "description": "<p>The full URL of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.title",
            "description": "<p>The title of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.description",
            "description": "<p>The description of the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.date_created",
            "description": "<p>The date at which the channel was created</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "channels.is_default",
            "description": "<p>Is this a default channel?</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels.nsfw",
            "description": "<p>Does the channel contain NSFW videos?</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "channels.follower_count",
            "description": "<p>The number of users following the channel</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "channels.video_count",
            "description": "<p>The number of videos in the channel</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"User not found\",\n  \"code\" : \"user_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/user/:user/follow(/:otherUser)",
    "title": "Is Following",
    "version": "1.7.6",
    "name": "IsFollowing",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Check if the authenticated user (or specified otherUser) is following a user.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID to check</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "otherUser",
            "description": "<p>The user ID to check for. Defaults to authenticated user.</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFollowing",
            "description": "<p>Whether or not otherUser is following user</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"isFollowing\" : true\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\" : true,\n  \"isFollowing\" : false\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X GET -H \"AccessToken: 123abc\" https://api.vid.me/user/1234/follow",
        "type": "curl"
      },
      {
        "title": "Example",
        "content": "curl -X GET https://api.vid.me/user/1234/follow/4321",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"User not found\",\n  \"code\" : \"user_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/user/:user/pin/:video",
    "title": "Pin Video",
    "version": "1.8.8",
    "name": "PinCreate",
    "group": "User",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Pin a video to the top of a user hot feed</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/user/1/pin/1234",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"User not found\",\n  \"code\" : \"user_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "/user/:user/pin/:video",
    "title": "Un-pin Video",
    "version": "1.8.8",
    "name": "PinDelete",
    "group": "User",
    "permission": [
      {
        "name": "usermod"
      }
    ],
    "description": "<p>Pin a video to the top of a user hot feed</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/user/1/pin/1234?_method=delete",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"User not found\",\n  \"code\" : \"user_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/:user/pin/:video",
    "title": "Pinned",
    "version": "1.8.8",
    "name": "PinDetail",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Is the video pinned to the specified user</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/user/1/pin/1234",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"User not found\",\n  \"code\" : \"user_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/email/send-verify",
    "title": "Send Verification Email",
    "version": "1.7.9",
    "name": "SendVerificationEmail",
    "group": "User",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Send a verification email. Must be signed in.</p> ",
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"token=123abc\" https://api.vid.me/user/email/send-verify",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/user/:user/unfollow",
    "title": "Unfollow",
    "version": "1.2.3",
    "name": "Unfollow",
    "group": "User",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Unfollow a user</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>The user ID to follow</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The authentication token</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"token=123abc\" https://api.vid.me/user/1234/unfollow",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"User not found\",\n  \"code\" : \"user_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/user/email/verify",
    "title": "Verify Email",
    "version": "1.7.9",
    "name": "VerifyEmail",
    "group": "User",
    "permission": [
      {
        "name": "account",
        "title": "Account",
        "description": "<p>Requires the account scope</p> "
      }
    ],
    "description": "<p>Verify your email address. The code is the hexadecimal part of the  link sent in the verification email.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>The verification code</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"token=123abc\" -d \"code=234bcd\" https://api.vid.me/user/email/verify",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/User.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "User",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/users/featured",
    "title": "Featured",
    "version": "1.7.14",
    "name": "Featured",
    "group": "Users",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List featured users</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -d \"text=a\" https://api.vid.me/users/featured",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"page\": {\n    \"total\": 123,\n    \"offset\": 0,\n    \"limit\": 20\n  },\n  \"users\": [\n     {} // ...\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Users.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/users/suggest",
    "title": "Suggest",
    "version": "1.7.9",
    "name": "Suggest",
    "group": "Users",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Suggest users for @mentions</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "text",
            "description": "<p>The text for which to search</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -d \"text=a\" https://api.vid.me/users/suggest",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"text\": \"a\",\n  \"users\": [\n     {} // ...\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>User data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.avatar_url",
            "description": "<p>The full avatar url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.cover",
            "description": "<p>The cover photo url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.cover_url",
            "description": "<p>The full cover photo url</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.video_views",
            "description": "<p>The number of views on all of the user&#39;s videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.likes_count",
            "description": "<p>The number of likes on all of the user&#39;s videos</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Users.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/suggest",
    "title": "Suggest",
    "version": "1.2.3",
    "name": "Suggest",
    "group": "Users",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Suggest users for @mentions</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "text",
            "description": "<p>The text for which to search</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -d \"text=a\" https://api.vid.me/users/suggest",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"text\": \"a\",\n  \"users\": [\n       {\n      \"id\": \"3\",\n      \"avatar\": \"avatars/3.jpg?v3r1393633075\",\n      \"text\": \"aha\",\n      \"label\": \"aha\"\n    }\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/user/suggest",
    "title": "Suggest",
    "version": "1.2.1",
    "name": "Suggest",
    "group": "Users",
    "description": "<p>Deprecated since 1.2.3. Use /users/suggest instead.</p> ",
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "Users",
    "parameter": {
      "fields": {
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/video/:video/claim",
    "title": "",
    "version": "1.4.1",
    "name": "Claim",
    "group": "Video",
    "permission": [
      {
        "name": "videos",
        "title": "Videos",
        "description": "<p>Requires the videos scope</p> "
      }
    ],
    "description": "<p>Claim a video</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "claimToken",
            "description": "<p>The claim token</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"claimToken=zyxwabcdef01234\" https://api.vid.me/video/1234/claim",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Video.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Video",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/video/:video/comments",
    "title": "Comments",
    "version": "1.8.10",
    "name": "Comments",
    "group": "Video",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List comments on a video</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID on which to comment</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": "<p><code>comment_id</code></p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "direction",
            "description": "<p><code>ASC</code> or <code>DESC</code></p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -d \"video=1234\" https://api.vid.me/video/1/comments",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"comments\" : [\n      {},\n      {}\n  ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "comments",
            "description": "<p>Comment data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.comment_id",
            "description": "<p>The comment ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.video_id",
            "description": "<p>The video the comment was posted on</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.user_id",
            "description": "<p>The user that posted the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.parent_comment_id",
            "description": "<p>The comment to which this comment was posted as a reply</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.full_url",
            "description": "<p>The full URL to the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.body",
            "description": "<p>The comment body text</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.date_created",
            "description": "<p>The date at which the comment was created</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "comments.made_at_time",
            "description": "<p>The time in the video at which the comment was made</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "comments.score",
            "description": "<p>The score of the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "comments.user",
            "description": "<p>The user that posted the comment</p> "
          },
          {
            "group": "Success 200",
            "type": "Vote",
            "optional": false,
            "field": "comments.viewerVote",
            "description": "<p>The authenticated user&#39;s vote, if applicable</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Comments.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Video"
  },
  {
    "type": "POST",
    "url": "/video/:video/delete",
    "title": "Delete",
    "version": "1.4.1",
    "name": "Delete",
    "group": "Video",
    "permission": [
      {
        "name": "videos",
        "title": "Videos",
        "description": "<p>Requires the videos scope</p> "
      }
    ],
    "description": "<p>Delete a video</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "description": "<p>The device UUID.</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST https://api.vid.me/video/1234/delete",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Video"
  },
  {
    "type": "POST",
    "url": "/video/:video/delete",
    "title": "Delete",
    "version": "1.4.1",
    "name": "Delete",
    "group": "Video",
    "permission": [
      {
        "name": "videos",
        "title": "Videos",
        "description": "<p>Requires the videos scope</p> "
      }
    ],
    "description": "<p>Delete a video</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "description": "<p>The device UUID.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "deleteToken",
            "description": "<p>Deletion token</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST https://api.vid.me/video/1234/delete",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Video.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Video",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/video/delete",
    "title": "Delete",
    "version": "1.2.1",
    "name": "Delete",
    "group": "Video",
    "description": "<p>Deprecated since 1.2.1. Use /video/:video/delete instead</p> ",
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "Video"
  },
  {
    "type": "GET",
    "url": "/video/:video",
    "title": "Detail",
    "version": "1.2.3",
    "name": "Detail",
    "group": "Video",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get information about a video</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/video/1234",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Vote",
            "optional": false,
            "field": "viewerVote",
            "description": "<p>If authenticated, the like/vote information for the user&#39;s vote on this video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "video",
            "description": "<p>The video data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.full_url",
            "description": "<p>The full URL to the video page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.embed_url",
            "description": "<p>The full URL to the video embed page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete_url",
            "description": "<p>The full URL to the completed, encoded video object</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "video.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail_url",
            "description": "<p>The full URL to the video thumbnail</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.private",
            "description": "<p>Is the video visible in lists and search engines?</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "progress",
            "description": "<p>Video upload and encoding progress information</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "progress.progress",
            "description": "<p>The current calculated effective progress on range [0, 1]</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "watchers",
            "description": "<p>Information about who is watching this video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "watchers.total",
            "description": "<p>Number of people watching the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "watchers.countries",
            "description": "<p>Countries from which the video is being watched</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"video\" : {\n    \"video_id\" : \"1234\",\n    \"url\" : \"Foo\",\n    \"full_url\" : \"https://vid.me/Foo\",\n    \"embed_url\" : \"https://vid.me/e/Foo\",\n    \"complete\" : \"1234.mp4\",\n    \"complete_url\" : \"\",\n    \"state\" : \"stored\",\n    \"title\" : \"\",\n    \"description\" : null,\n    \"duration\" : 9,\n    \"height\" : null,\n    \"width\" : null,\n    \"date_created\" : \"2014-03-18 22:21:02\",\n    \"date_stored\" : \"2014-03-18 22:21:02\",\n    \"date_completed\" : \"0000-00-00 00:00:00\",\n    \"comment_count\" : 0,\n    \"view_count\" : 1,\n    \"version\" : 2,\n    \"nsfw\" : false,\n    \"thumbnail\" : null,\n    \"thumbnail_url\" : null,\n    \"score\" : 1\n  },\n  \"progress\" : {\n    \"progress\" : 0.5\n  }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"video\" : {\n    \"video_id\" : \"1234\",\n    \"url\" : \"Foo\",\n    \"full_url\" : \"https://vid.me/Foo\",\n    \"embed_url\" : \"https://vid.me/e/Foo\",\n    \"complete\" : \"videos/1234.mp4\",\n    \"state\" : \"success\",\n    \"title\" : \"\",\n    \"description\" : null,\n    \"duration\" : 9,\n    \"height\" : 240,\n    \"width\" : 320,\n    \"date_created\" : \"2014-03-18 22:21:02\",\n    \"date_stored\" : \"2014-03-18 22:21:02\",\n    \"date_completed\" : \"0000-00-00 00:00:00\",\n    \"comment_count\" : 0,\n    \"view_count\" : 1,\n    \"version\" : 2,\n    \"nsfw\" : false,\n    \"thumbnail\" : \"thumbnails/1234.png?v1r14000000000\",\n    \"thumbnail_url\" : \"https://d1lpjom9omu2wc.cloudfront.net/thumbnails/1234.png?v1r14000000000\",\n    \"score\" : 1\n  },\n  \"progress\" : {\n    \"progress\" : 1\n  },\n  \"watching\": 1,\n  \"watchingFromCountries\": [\n    \"US\"\n  ],\n  \"viewerVote\": {\n    \"vote_id\": \"12345\",\n    \"video_id\": \"1234\",\n    \"user_id\": \"12\",\n    \"value\": 1,\n    \"date_created\": \"2015-01-30 22:33:46\",\n    \"date_modified\": \"2015-01-30 22:33:46\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "VideoApp/Api/Controllers/Video.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Video"
  },
  {
    "type": "GET",
    "url": "/status",
    "title": "Status",
    "version": "1.2.1",
    "name": "Detail",
    "group": "Video",
    "description": "<p>Deprecated since 1.2.3. Use /video/:video instead.</p> ",
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "Video"
  },
  {
    "type": "GET",
    "url": "/videoByUrl(/:url)",
    "title": "Detail by URL",
    "version": "1.8.2",
    "name": "DetailByURL",
    "group": "Video",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get information about a video by URL. The same as calling detail  with the ID, see detail for more info.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>The video URL</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videoByUrl?url=https%3A%2F%2Fvid.me%2Fyvi",
        "type": "curl"
      },
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videoByUrl/yvi",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Video.php",
    "groupTitle": "Video"
  },
  {
    "type": "GET",
    "url": "/video/:video/edit",
    "title": "Edit",
    "version": "1.7.9",
    "name": "Edit",
    "group": "Video",
    "permission": [
      {
        "name": "videos",
        "title": "Videos",
        "description": "<p>Requires the videos scope</p> "
      }
    ],
    "description": "<p>Edit a video. Must specify either <code>token</code> or <code>device</code></p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "description": "<p>The device UUID.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "thumbnail",
            "description": "<p>The custom thumbnail data</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "source",
            "description": "<p>The source of the video. Must be one of <code>computer</code>,                                    <code>library</code>, <code>camera</code>, <code>shareintent</code>,                                    <code>webcam</code>, or a URL. Cannot be changed once set.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "private",
            "description": "<p>Hides from feeds and search engines</p> "
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "latitude",
            "description": "<p>The latitude at which the video was recorded</p> "
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "longitude",
            "description": "<p>The longitude at which the video was recorded</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "place_id",
            "description": "<p>The foursquare place ID at which the video was recorded</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "place_name",
            "description": "<p>The foursquare place name at which the video was recorded</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "nsfw",
            "description": "<p>May be set to 1 to flag as NSFW. Currently, once set, it may not be unset.</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -F thumbnail=@blah.png -d \"title=very+nice+video\" https://api.vid.me/video/1234/edit",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"video\" : {\n    \"video_id\" : \"1234\",\n    \"url\" : \"Foo\",\n    \"full_url\" : \"https://vid.me/Foo\",\n    \"embed_url\" : \"https://vid.me/e/Foo\",\n    \"complete\" : \"videos/1234.mp4\",\n    \"state\" : \"success\",\n    \"title\" : \"\",\n    \"description\" : null,\n    \"duration\" : 9,\n    \"height\" : 240,\n    \"width\" : 320,\n    \"date_created\" : \"2014-03-18 22:21:02\",\n    \"date_stored\" : \"2014-03-18 22:21:02\",\n    \"date_completed\" : \"0000-00-00 00:00:00\",\n    \"comment_count\" : 0,\n    \"view_count\" : 1,\n    \"version\" : 2,\n    \"nsfw\" : false,\n    \"thumbnail\" : \"thumbnails/1234.png?v1r14000000000\",\n    \"thumbnail_url\" : \"https://d1lpjom9omu2wc.cloudfront.net/thumbnails/1234.png?v1r14000000000\",\n    \"score\" : 1\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "video",
            "description": "<p>The video data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.full_url",
            "description": "<p>The full URL to the video page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.embed_url",
            "description": "<p>The full URL to the video embed page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete_url",
            "description": "<p>The full URL to the completed, encoded video object</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "video.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail_url",
            "description": "<p>The full URL to the video thumbnail</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.private",
            "description": "<p>Is the video visible in lists and search engines?</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Video.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Video",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/video/:video/edit",
    "title": "Edit",
    "version": "1.4.2",
    "name": "Edit",
    "group": "Video",
    "permission": [
      {
        "name": "videos",
        "title": "Videos",
        "description": "<p>Requires the videos scope</p> "
      }
    ],
    "description": "<p>Edit a video. Must specify either <code>token</code> or <code>device</code></p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "description": "<p>The device UUID.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "thumbnail",
            "description": "<p>The custom thumbnail data</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "source",
            "description": "<p>The source of the video. Must be one of <code>computer</code>, <code>library</code>, <code>camera</code>, <code>shareintent</code>, <code>webcam</code>, or a URL. Cannot be changed once set.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "private",
            "description": "<p>Hides from feeds and search engines</p> "
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "latitude",
            "description": "<p>The latitude at which the video was recorded</p> "
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": true,
            "field": "longitude",
            "description": "<p>The longitude at which the video was recorded</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "place_id",
            "description": "<p>The foursquare place ID at which the video was recorded</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "place_name",
            "description": "<p>The foursquare place name at which the video was recorded</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -F thumbnail=@blah.png -d \"title=very+nice+video\" https://api.vid.me/video/1234/edit",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"video\" : {\n    \"video_id\" : \"1234\",\n    \"url\" : \"Foo\",\n    \"full_url\" : \"https://vid.me/Foo\",\n    \"embed_url\" : \"https://vid.me/e/Foo\",\n    \"complete\" : \"videos/1234.mp4\",\n    \"state\" : \"success\",\n    \"title\" : \"\",\n    \"description\" : null,\n    \"duration\" : 9,\n    \"height\" : 240,\n    \"width\" : 320,\n    \"date_created\" : \"2014-03-18 22:21:02\",\n    \"date_stored\" : \"2014-03-18 22:21:02\",\n    \"date_completed\" : \"0000-00-00 00:00:00\",\n    \"comment_count\" : 0,\n    \"view_count\" : 1,\n    \"version\" : 2,\n    \"nsfw\" : false,\n    \"thumbnail\" : \"thumbnails/1234.png?v1r14000000000\",\n    \"thumbnail_url\" : \"https://d1lpjom9omu2wc.cloudfront.net/thumbnails/1234.png?v1r14000000000\",\n    \"score\" : 1\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "video",
            "description": "<p>The video data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.full_url",
            "description": "<p>The full URL to the video page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.embed_url",
            "description": "<p>The full URL to the video embed page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete_url",
            "description": "<p>The full URL to the completed, encoded video object</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "video.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail_url",
            "description": "<p>The full URL to the video thumbnail</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.private",
            "description": "<p>Is the video visible in lists and search engines?</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Video",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/video/:video/edit",
    "title": "Edit",
    "version": "1.2.3",
    "name": "Edit",
    "group": "Video",
    "permission": [
      {
        "name": "videos",
        "title": "Videos",
        "description": "<p>Requires the videos scope</p> "
      }
    ],
    "description": "<p>Edit a video. Must specify either token or device</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "description": "<p>The device UUID.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "thumbnail",
            "description": "<p>The custom thumbnail data</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "source",
            "description": "<p>The source of the video. Must be one of computer, library, camera, shareintent, webcam, or a URL. Cannot be changed once set.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "private",
            "description": "<p>Hides from feeds and search engines</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -F thumbnail=@blah.png -d \"title=very+nice+video\" https://api.vid.me/video/1234/edit",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"video\" : {\n    \"video_id\" : \"1234\",\n    \"url\" : \"Foo\",\n    \"full_url\" : \"https://vid.me/Foo\",\n    \"embed_url\" : \"https://vid.me/e/Foo\",\n    \"complete\" : \"videos/1234.mp4\",\n    \"state\" : \"success\",\n    \"title\" : \"\",\n    \"description\" : null,\n    \"duration\" : 9,\n    \"height\" : 240,\n    \"width\" : 320,\n    \"date_created\" : \"2014-03-18 22:21:02\",\n    \"date_stored\" : \"2014-03-18 22:21:02\",\n    \"date_completed\" : \"0000-00-00 00:00:00\",\n    \"comment_count\" : 0,\n    \"view_count\" : 1,\n    \"version\" : 2,\n    \"nsfw\" : false,\n    \"thumbnail\" : \"thumbnails/1234.png?v1r14000000000\",\n    \"thumbnail_url\" : \"https://d1lpjom9omu2wc.cloudfront.net/thumbnails/1234.png?v1r14000000000\",\n    \"score\" : 1\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "video",
            "description": "<p>The video data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.full_url",
            "description": "<p>The full URL to the video page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.embed_url",
            "description": "<p>The full URL to the video embed page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete_url",
            "description": "<p>The full URL to the completed, encoded video object</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "video.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail_url",
            "description": "<p>The full URL to the video thumbnail</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.private",
            "description": "<p>Is the video visible in lists and search engines?</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Video"
  },
  {
    "type": "POST",
    "url": "/video/edit",
    "title": "Edit",
    "version": "1.2.1",
    "name": "Edit",
    "group": "Video",
    "description": "<p>Deprecated since 1.2.1. Use /video/:video/edit instead</p> ",
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "Video"
  },
  {
    "type": "POST",
    "url": "/video/:video/flag",
    "title": "Flag",
    "version": "1.7.6",
    "name": "Flag",
    "group": "Video",
    "permission": [
      {
        "name": "videos",
        "title": "Videos",
        "description": "<p>Requires the videos scope</p> "
      }
    ],
    "description": "<p>Flag a video. Must specify either <code>token</code> or <code>device</code></p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "value",
            "description": "<p>The flag state. Defaults to 1</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "description": "<p>The device UUID.</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "flagged",
            "description": "<p>The current state of your flag</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "video",
            "description": "<p>The video data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.full_url",
            "description": "<p>The full URL to the video page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.embed_url",
            "description": "<p>The full URL to the video embed page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete_url",
            "description": "<p>The full URL to the completed, encoded video object</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "video.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail_url",
            "description": "<p>The full URL to the video thumbnail</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.private",
            "description": "<p>Is the video visible in lists and search engines?</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"flagged\" : true,\n  \"video\" : {\n    \"video_id\" : \"1234\",\n    \"url\" : \"Foo\",\n    \"full_url\" : \"https://vid.me/Foo\",\n    \"embed_url\" : \"https://vid.me/e/Foo\",\n    \"complete\" : \"videos/1234.mp4\",\n    \"state\" : \"success\",\n    \"title\" : \"\",\n    \"description\" : null,\n    \"duration\" : 9,\n    \"height\" : 240,\n    \"width\" : 320,\n    \"date_created\" : \"2014-03-18 22:21:02\",\n    \"date_stored\" : \"2014-03-18 22:21:02\",\n    \"date_completed\" : \"0000-00-00 00:00:00\",\n    \"comment_count\" : 0,\n    \"view_count\" : 1,\n    \"version\" : 2,\n    \"nsfw\" : false,\n    \"thumbnail\" : \"thumbnails/1234.png?v1r14000000000\",\n    \"thumbnail_url\" : \"https://d1lpjom9omu2wc.cloudfront.net/thumbnails/1234.png?v1r14000000000\",\n    \"score\" : 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST\n     -H \"AccessToken: abcdef0123456789\"\n     -d \"value=1\" https://api.vid.me/video/1234/flag",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Video.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Video",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/video/:video/flag",
    "title": "Flag",
    "version": "1.4.2",
    "name": "Flag",
    "group": "Video",
    "permission": [
      {
        "name": "videos",
        "title": "Videos",
        "description": "<p>Requires the videos scope</p> "
      }
    ],
    "description": "<p>Flag a video. Must specify either <code>token</code> or <code>device</code></p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "flagged",
            "description": "<p>The flag state. Defaults to 1</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "device",
            "description": "<p>The device UUID.</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST  \"token=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\" https://api.vid.me/video/1234/flag",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"video\" : {\n    \"video_id\" : \"1234\",\n    \"url\" : \"Foo\",\n    \"full_url\" : \"https://vid.me/Foo\",\n    \"embed_url\" : \"https://vid.me/e/Foo\",\n    \"complete\" : \"videos/1234.mp4\",\n    \"state\" : \"success\",\n    \"title\" : \"\",\n    \"description\" : null,\n    \"duration\" : 9,\n    \"height\" : 240,\n    \"width\" : 320,\n    \"date_created\" : \"2014-03-18 22:21:02\",\n    \"date_stored\" : \"2014-03-18 22:21:02\",\n    \"date_completed\" : \"0000-00-00 00:00:00\",\n    \"comment_count\" : 0,\n    \"view_count\" : 1,\n    \"version\" : 2,\n    \"nsfw\" : false,\n    \"thumbnail\" : \"thumbnails/1234.png?v1r14000000000\",\n    \"thumbnail_url\" : \"https://d1lpjom9omu2wc.cloudfront.net/thumbnails/1234.png?v1r14000000000\",\n    \"score\" : 1\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "video",
            "description": "<p>The video data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.full_url",
            "description": "<p>The full URL to the video page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.embed_url",
            "description": "<p>The full URL to the video embed page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete_url",
            "description": "<p>The full URL to the completed, encoded video object</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "video.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail_url",
            "description": "<p>The full URL to the video thumbnail</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.private",
            "description": "<p>Is the video visible in lists and search engines?</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Video"
  },
  {
    "type": "GET",
    "url": "/video/random",
    "title": "Random Video",
    "version": "1.8.3",
    "name": "Random",
    "group": "Video",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Return a random video. See detail for response format.</p> ",
    "sampleRequest": [
      {
        "url": "https://api.vid.me/video/random"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST https://api.vid.me/video/random",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Video.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Video",
    "parameter": {
      "fields": {
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "video",
            "description": "<p>The video data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.full_url",
            "description": "<p>The full URL to the video page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.embed_url",
            "description": "<p>The full URL to the video embed page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete_url",
            "description": "<p>The full URL to the completed, encoded video object</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "video.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail_url",
            "description": "<p>The full URL to the video thumbnail</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.private",
            "description": "<p>Is the video visible in lists and search engines?</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/video/:video/remove-channel",
    "title": "Remove From Channel",
    "version": "1.8.1",
    "name": "RemoveChannel",
    "group": "Video",
    "permission": [
      {
        "name": "videos",
        "title": "Videos",
        "description": "<p>Requires the videos scope</p> "
      }
    ],
    "description": "<p>Remove a video from a channel. Must be the owner or a network moderator.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST https://api.vid.me/video/1234/remove-channel",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Video.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Video",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "video",
            "description": "<p>The video data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.full_url",
            "description": "<p>The full URL to the video page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.embed_url",
            "description": "<p>The full URL to the video embed page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete_url",
            "description": "<p>The full URL to the completed, encoded video object</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "video.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail_url",
            "description": "<p>The full URL to the video thumbnail</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.private",
            "description": "<p>Is the video visible in lists and search engines?</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/video/request",
    "title": "Request",
    "version": "1.4.2",
    "name": "Request",
    "group": "Video",
    "permission": [
      {
        "name": "video_upload",
        "title": "Video Upload",
        "description": "<p>Requires the video_upload or videos scope</p> "
      }
    ],
    "description": "<p>Requests a video identity. If using this method to upload a video, do not  send video metadata to the upload method.</p> <p> For notify=web, a POST request will be sent to the specified  URL when the video is ready. The data will be in JSON format,  the same as <code>video/:video</code> (detail).</p> ",
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"size=1333337&video_title=foo\" https://api.vid.me/video/request",
        "type": "curl"
      },
      {
        "title": "Example",
        "content": "curl -X POST -d \"size=1333337&video_title=foo&mode=chunked\" https://api.vid.me/video/request",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"video\" : {\n    \"video_id\" : \"1234\",\n    \"url\" : \"Foo\",\n    \"full_url\" : \"https://vid.me/Foo\",\n    \"embed_url\" : \"https://vid.me/e/Foo\",\n    \"complete\" : null,\n    \"complete_url\" : null,\n    \"state\" : \"success\",\n    \"title\" : \"\",\n    \"description\" : null,\n    \"duration\" : 9,\n    \"height\" : 240,\n    \"width\" : 320,\n    \"date_created\" : \"2014-03-18 22:21:02\",\n    \"date_stored\" : \"2014-03-18 22:21:02\",\n    \"date_completed\" : \"0000-00-00 00:00:00\",\n    \"comment_count\" : 0,\n    \"view_count\" : 1,\n    \"version\" : 2,\n    \"nsfw\" : false,\n    \"thumbnail\" : \"thumbnails/1234.png?v1r14000000000\",\n    \"thumbnail_url\" : \"https://d1lpjom9omu2wc.cloudfront.net/thumbnails/1234.png?v1r14000000000\",\n    \"score\" : 1\n  },\n  \"maxSize\" : 268435456,\n  \"uploadId\" : null\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"id\" : \"1234\",\n  \"code\" : \"Foo\",\n  \"url\" : \"https:\\/\\/vid.me\\/Foo\",\n  \"video\" : {\n    \"video_id\" : \"61\",\n    \"url\" : \"Foo\",\n    \"complete\" : null,\n    \"state\" : \"initial\",\n    \"title\" : \"\",\n    \"description\" : null,\n    \"duration\" : null,\n    \"height\" : null,\n    \"width\" : null,\n    \"date_created\" : \"2014-03-18 21:27:16\",\n    \"date_stored\" : \"0000-00-00 00:00:00\",\n    \"date_completed\" : \"0000-00-00 00:00:00\",\n    \"comment_count\" : 0,\n    \"view_count\" : 0,\n    \"version\" : 2,\n    \"nsfw\" : false,\n    \"thumbnail\" : null,\n    \"score\" : 0\n  },\n  \"maxSize\" : 268435456,\n  \"maxSizeMB\" : 256,\n  \"uploadId\" : 2358,\n  \"accessToken\" : {\n    \"token\" : \"bfdmj1a9u68088kgw4ck0swgo\",\n    \"expires\" : \"2004-02-12T15:19:21+00:00\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "video",
            "description": "<p>The video data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.full_url",
            "description": "<p>The full URL to the video page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.embed_url",
            "description": "<p>The full URL to the video embed page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete_url",
            "description": "<p>The full URL to the completed, encoded video object</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "video.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail_url",
            "description": "<p>The full URL to the video thumbnail</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.private",
            "description": "<p>Is the video visible in lists and search engines?</p> "
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please upload a file smaller than 256MB\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Video.php",
    "groupTitle": "Video",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ],
        "Video Metadata": [
          {
            "group": "Video Metadata",
            "type": "Integer",
            "optional": true,
            "field": "channel",
            "description": "<p>The ID of the channel in which the video should be added</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "filename",
            "description": "<p>The name of the file.</p> "
          },
          {
            "group": "Video Metadata",
            "type": "Integer",
            "optional": true,
            "field": "size",
            "description": "<p>The size of the video being requested.</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>The title of the video</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the video</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "source",
            "description": "<p>The source of the video. Must be one of computer, library, camera, shareintent, webcam, or a URL. Cannot be changed once set.</p> "
          },
          {
            "group": "Video Metadata",
            "type": "Boolean",
            "optional": true,
            "field": "private",
            "description": "<p>Is the video not visible in lists and search engines?</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "notify",
            "description": "<p>Type of notification to send when video is ready (apn, gcm, web)</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "notify-id",
            "description": "<p>The address to which to send the notification. This is the token/ID for apn and gcm, or a URL for web.</p> "
          },
          {
            "group": "Video Metadata",
            "type": "Double",
            "optional": true,
            "field": "latitude",
            "description": "<p>The latitude at which the video was recorded</p> "
          },
          {
            "group": "Video Metadata",
            "type": "Double",
            "optional": true,
            "field": "longitude",
            "description": "<p>The longitude at which the video was recorded</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "place_id",
            "description": "<p>The foursquare place ID at which the video was recorded</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "place_name",
            "description": "<p>The foursquare place name at which the video was recorded</p> "
          },
          {
            "group": "Video Metadata",
            "type": "Boolean",
            "optional": true,
            "field": "nsfw",
            "description": "<p>May be set to 1 to flag as NSFW. Currently, once set, it may not be unset.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/video/request",
    "title": "Request",
    "version": "1.2.3",
    "name": "Request",
    "group": "Video",
    "permission": [
      {
        "name": "video_upload",
        "title": "Video Upload",
        "description": "<p>Requires the video_upload or videos scope</p> "
      }
    ],
    "description": "<p>Requests a video identity. If using this method to upload a video, do not  send video metadata to the upload method.</p> ",
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"size=1333337&video_title=foo\" https://api.vid.me/video/request",
        "type": "curl"
      },
      {
        "title": "Example",
        "content": "curl -X POST -d \"size=1333337&video_title=foo&mode=chunked\" https://api.vid.me/video/request",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"video\" : {\n    \"video_id\" : \"1234\",\n    \"url\" : \"Foo\",\n    \"full_url\" : \"https://vid.me/Foo\",\n    \"embed_url\" : \"https://vid.me/e/Foo\",\n    \"complete\" : null,\n    \"complete_url\" : null,\n    \"state\" : \"success\",\n    \"title\" : \"\",\n    \"description\" : null,\n    \"duration\" : 9,\n    \"height\" : 240,\n    \"width\" : 320,\n    \"date_created\" : \"2014-03-18 22:21:02\",\n    \"date_stored\" : \"2014-03-18 22:21:02\",\n    \"date_completed\" : \"0000-00-00 00:00:00\",\n    \"comment_count\" : 0,\n    \"view_count\" : 1,\n    \"version\" : 2,\n    \"nsfw\" : false,\n    \"thumbnail\" : \"thumbnails/1234.png?v1r14000000000\",\n    \"thumbnail_url\" : \"https://d1lpjom9omu2wc.cloudfront.net/thumbnails/1234.png?v1r14000000000\",\n    \"score\" : 1\n  },\n  \"maxSize\" : 268435456,\n  \"uploadId\" : null\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"id\" : \"1234\",\n  \"code\" : \"Foo\",\n  \"url\" : \"https:\\/\\/vid.me\\/Foo\",\n  \"video\" : {\n    \"video_id\" : \"61\",\n    \"url\" : \"Foo\",\n    \"complete\" : null,\n    \"state\" : \"initial\",\n    \"title\" : \"\",\n    \"description\" : null,\n    \"duration\" : null,\n    \"height\" : null,\n    \"width\" : null,\n    \"date_created\" : \"2014-03-18 21:27:16\",\n    \"date_stored\" : \"0000-00-00 00:00:00\",\n    \"date_completed\" : \"0000-00-00 00:00:00\",\n    \"comment_count\" : 0,\n    \"view_count\" : 0,\n    \"version\" : 2,\n    \"nsfw\" : false,\n    \"thumbnail\" : null,\n    \"score\" : 0\n  },\n  \"maxSize\" : 268435456,\n  \"maxSizeMB\" : 256,\n  \"uploadId\" : 2358\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "video",
            "description": "<p>The video data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.full_url",
            "description": "<p>The full URL to the video page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.embed_url",
            "description": "<p>The full URL to the video embed page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete_url",
            "description": "<p>The full URL to the completed, encoded video object</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "video.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail_url",
            "description": "<p>The full URL to the video thumbnail</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.private",
            "description": "<p>Is the video visible in lists and search engines?</p> "
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please upload a file smaller than 256MB\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "Video",
    "parameter": {
      "fields": {
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ],
        "Video Metadata": [
          {
            "group": "Video Metadata",
            "type": "Integer",
            "optional": true,
            "field": "channel",
            "description": "<p>The ID of the channel in which the video should be added</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "filename",
            "description": "<p>The name of the file.</p> "
          },
          {
            "group": "Video Metadata",
            "type": "Integer",
            "optional": true,
            "field": "size",
            "description": "<p>The size of the video being requested.</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>The title of the video</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the video</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "source",
            "description": "<p>The source of the video. Must be one of computer, library, camera, shareintent, webcam, or a URL. Cannot be changed once set.</p> "
          },
          {
            "group": "Video Metadata",
            "type": "Boolean",
            "optional": true,
            "field": "private",
            "description": "<p>Is the video not visible in lists and search engines?</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "notify",
            "description": "<p>Type of notification to send when video is ready (apn, gcm, web)</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "notify-id",
            "description": "<p>The address to which to send the notification. This is the token/ID for apn and gcm, or a URL for web.</p> "
          },
          {
            "group": "Video Metadata",
            "type": "Double",
            "optional": true,
            "field": "latitude",
            "description": "<p>The latitude at which the video was recorded</p> "
          },
          {
            "group": "Video Metadata",
            "type": "Double",
            "optional": true,
            "field": "longitude",
            "description": "<p>The longitude at which the video was recorded</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "place_id",
            "description": "<p>The foursquare place ID at which the video was recorded</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "place_name",
            "description": "<p>The foursquare place name at which the video was recorded</p> "
          },
          {
            "group": "Video Metadata",
            "type": "Boolean",
            "optional": true,
            "field": "nsfw",
            "description": "<p>May be set to 1 to flag as NSFW. Currently, once set, it may not be unset.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/request",
    "title": "Request",
    "version": "1.2.1",
    "name": "Request",
    "group": "Video",
    "description": "<p>Deprecated since 1.2.3</p> ",
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "Video"
  },
  {
    "type": "GET",
    "url": "/video/:video/thumbnail",
    "title": "Thumbnail",
    "version": "1.2.3",
    "name": "Thumbnail",
    "group": "Video",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Get a video&#39;s thumbnail</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -i https://api.vid.me/video/1234/thumbnail",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 302 Found\nLocation: https://d1wst0behutosd.cloudfront.net/thumbnails/1234.png?v1r1393633605\nExpires: Fri, 04 Apr 2014 01:04:54\nCache-Control: max-age=86400",
          "type": "json"
        }
      ]
    },
    "filename": "VideoApp/Api/Controllers/Video.php",
    "groupTitle": "Video"
  },
  {
    "type": "POST",
    "url": "/video/update-title",
    "title": "Update title",
    "version": "1.2.1",
    "name": "UpdateTitle",
    "group": "Video",
    "description": "<p>Updates a video&#39;s title. The device ID from which the video was  uploaded must be specified.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>The unique code of the video</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the video</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"code=bAr&device=fedcba9876543210&title=baz\" https://api.vid.me/video/update-title",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "video",
            "description": "<p>The video data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.full_url",
            "description": "<p>The full URL to the video page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.embed_url",
            "description": "<p>The full URL to the video embed page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete_url",
            "description": "<p>The full URL to the completed, encoded video object</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "video.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail_url",
            "description": "<p>The full URL to the video thumbnail</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.private",
            "description": "<p>Is the video visible in lists and search engines?</p> "
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Invalid video or device\",\n  \"code\" : \"invalid_request\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video does not exist\",\n  \"code\" : \"not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Unable to update title\",\n  \"code\" : \"not_allowed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "VideoApp/Api/Controllers/Video.php",
    "groupTitle": "Video",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/video/upload",
    "title": "Upload",
    "version": "1.4.2",
    "name": "Upload",
    "group": "Video",
    "permission": [
      {
        "name": "video_upload",
        "title": "Video Upload",
        "description": "<p>Requires the video_upload or videos scope</p> "
      }
    ],
    "description": "<p>If using in conjunction with /video/request and the code parameter, video  metadata should be sent to the request method instead.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filedata",
            "description": "<p>The binary data of the video</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>The unique code of the video returned by request</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ],
        "Video Metadata": [
          {
            "group": "Video Metadata",
            "type": "Integer",
            "optional": true,
            "field": "channel",
            "description": "<p>The ID of the channel in which the video should be added</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "filename",
            "description": "<p>The name of the file.</p> "
          },
          {
            "group": "Video Metadata",
            "type": "Integer",
            "optional": true,
            "field": "size",
            "description": "<p>The size of the video being requested.</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>The title of the video</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>The description of the video</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "source",
            "description": "<p>The source of the video. Must be one of computer, library, camera, shareintent, webcam, or a URL. Cannot be changed once set.</p> "
          },
          {
            "group": "Video Metadata",
            "type": "Boolean",
            "optional": true,
            "field": "private",
            "description": "<p>Is the video not visible in lists and search engines?</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "notify",
            "description": "<p>Type of notification to send when video is ready (apn, gcm, web)</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "notify-id",
            "description": "<p>The address to which to send the notification. This is the token/ID for apn and gcm, or a URL for web.</p> "
          },
          {
            "group": "Video Metadata",
            "type": "Double",
            "optional": true,
            "field": "latitude",
            "description": "<p>The latitude at which the video was recorded</p> "
          },
          {
            "group": "Video Metadata",
            "type": "Double",
            "optional": true,
            "field": "longitude",
            "description": "<p>The longitude at which the video was recorded</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "place_id",
            "description": "<p>The foursquare place ID at which the video was recorded</p> "
          },
          {
            "group": "Video Metadata",
            "type": "String",
            "optional": true,
            "field": "place_name",
            "description": "<p>The foursquare place name at which the video was recorded</p> "
          },
          {
            "group": "Video Metadata",
            "type": "Boolean",
            "optional": true,
            "field": "nsfw",
            "description": "<p>May be set to 1 to flag as NSFW. Currently, once set, it may not be unset.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -F filedata=blah.avi -d \"code=Foo\" https://api.vid.me/video/upload",
        "type": "curl"
      },
      {
        "title": "Example",
        "content": "curl -X POST -F filedata=blah.avi -d \"filename=blah.avi&title=blah\" https://api.vid.me/video/upload",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"id\" : \"1234\",\n  \"code\" : \"Foo\",\n  \"url\" : \"https:\\/\\/vid.me\\/Foo\",\n  \"duration\" : 13.37,\n  \"video\" : {\n    \"video_id\" : \"1234\",\n    \"url\" : \"Foo\",\n    \"complete\" : null,\n    \"state\" : \"initial\",\n    \"title\" : \"Bar\",\n    \"description\" : null,\n    \"duration\" : null,\n    \"height\" : null,\n    \"width\" : null,\n    \"date_created\" : \"2014-03-18 20:50:21\",\n    \"date_stored\" : \"0000-00-00 00:00:00\",\n    \"date_completed\" : \"0000-00-00 00:00:00\",\n    \"comment_count\" : 0,\n    \"view_count\" : 0,\n    \"version\" : 2,\n    \"nsfw\" : false,\n    \"thumbnail\" : null,\n    \"score\" : 0\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "video",
            "description": "<p>The video data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.full_url",
            "description": "<p>The full URL to the video page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.embed_url",
            "description": "<p>The full URL to the video embed page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete_url",
            "description": "<p>The full URL to the completed, encoded video object</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "video.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail_url",
            "description": "<p>The full URL to the video thumbnail</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.private",
            "description": "<p>Is the video visible in lists and search engines?</p> "
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please choose a valid video or GIF to upload.\",\n  \"code\" : \"no_file\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please choose a valid video or GIF to upload.\",\n  \"code\" : \"no_extension\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Please choose a valid video or GIF to upload.\",\n  \"code\" : \"invalid_mime\",\n  \"mime\" : \"text\\/plain\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video has already been uploaded.\",\n  \"code\" : \"already_uploaded\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Video.php",
    "groupTitle": "Video",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/upload",
    "title": "Upload",
    "version": "1.2.1",
    "name": "Upload",
    "group": "Video",
    "description": "<p>Deprecated since 1.2.3. Use /video/upload instead.</p> ",
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "Video"
  },
  {
    "type": "POST",
    "url": "/video/:video/vote",
    "title": "Vote",
    "version": "1.2.3",
    "name": "Vote",
    "group": "Video",
    "permission": [
      {
        "name": "votes",
        "title": "Votes",
        "description": "<p>Requires the votes scope</p> "
      }
    ],
    "description": "<p>Vote on a video</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "value",
            "description": "<p>The value of the vote (1|0|-1)</p> "
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "at",
            "description": "<p>The time in the video at which the vote was made</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl -X POST -d \"value=1&at=2.30\" https://api.vid.me/video/1234/vote",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"vote\": {\n    \"vote_id\": \"2358\",\n    \"video_id\": \"5678\",\n    \"user_id\": \"90\",\n    \"value\": -1,\n    \"date_created\": \"2014-03-20 22:41:17\",\n    \"date_modified\": \"2014-03-28 02:06:18\"\n  },\n  \"video\" : {} // ...",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "vote",
            "description": "<p>Vote data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vote.vote_id",
            "description": "<p>The ID of the vote</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vote.video_id",
            "description": "<p>The video on which the vote was made</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vote.user_id",
            "description": "<p>The user that voted</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "vote.value",
            "description": "<p>The value of the vote (1, 0, -1)</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vote.date_created",
            "description": "<p>The date at which the vote was created</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vote.date_modified",
            "description": "<p>The date at which the vote was changed</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "video",
            "description": "<p>The video data</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.full_url",
            "description": "<p>The full URL to the video page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.embed_url",
            "description": "<p>The full URL to the video embed page</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.complete_url",
            "description": "<p>The full URL to the completed, encoded video object</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "video.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "video.thumbnail_url",
            "description": "<p>The full URL to the video thumbnail</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "video.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "video.private",
            "description": "<p>Is the video visible in lists and search engines?</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Vote.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\" : false,\n  \"error\" : \"Video not found\",\n  \"code\" : \"video_not_found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n  \"status\" : false,\n  \"error\" : \"Method not allowed\",\n  \"code\" : \"method_not_allowed\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"status\" : false,\n  \"error\" : \"Forbidden\",\n  \"code\" : \"forbidden\"\n}",
          "type": "json"
        }
      ]
    },
    "groupTitle": "Video",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": false,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    }
  },
  {
    "type": "POST",
    "url": "/video/vote",
    "title": "Vote",
    "version": "1.2.1",
    "name": "Vote",
    "group": "Video",
    "description": "<p>Deprecated since 1.2.3. Use /video/:video/vote instead.</p> ",
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "groupTitle": "Video"
  },
  {
    "type": "GET",
    "url": "/videos/featured",
    "title": "Featured Videos",
    "version": "2.0.0",
    "name": "Featured",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List featured videos. Ordrered by date featured, descending. If <code>marker</code> is specified, offset and limit  are ignored.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "marker",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/featured"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/featured",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Videos.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/following",
    "title": "Following Videos",
    "version": "1.8.5",
    "name": "Following",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>A video feed. If not signed in, displays videos in the list of  default channels. If signed in, displays videos posted by users and  channels that the user has followed.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "maxVideoId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "maxDateCompleted",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/feed"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/feed",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Videos.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/following",
    "title": "Following Videos",
    "version": "1.7.9",
    "name": "Following",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>A video feed. If not signed in, displays videos in the list of  default channels. If signed in, displays videos posted by users and  channels that the user has followed.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "maxVideoId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "maxDateCompleted",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "locationOnly",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/feed"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/feed",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/frontpage/:order",
    "title": "Frontpage Videos",
    "version": "1.7.12",
    "name": "Frontpage",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List videos from the frontpage by the specified ordering algorithm.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": "<p>One of: hot, new, top. Defaults to hot (ordered by likes decaying over time)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/frontpage"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/frontpage",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Videos.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/frontpage/:order",
    "title": "Frontpage Videos",
    "version": "1.7.9",
    "name": "Frontpage",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List videos from the frontpage by the specified ordering algorithm.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": "<p>One of: hot, new. Defaults to hot (ordered by likes decaying over time)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/frontpage"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/frontpage",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/hot/:subindex",
    "title": "Hot Videos",
    "version": "1.7.8",
    "name": "Hot",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List videos ordered by hot algorithm (votes decaying over time).  Note: trending videos has moved to /videos/trending</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "subindex",
            "description": "<p>One of main, frontpage, featured. Defaults to main (all videos)</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/hot/frontpage"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/hot/frontpage",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Videos.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/hot",
    "title": "Hot Videos",
    "version": "1.7.0",
    "name": "Hot",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List videos ordered by hot algorithm (views decaying over time).</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/hot"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/hot",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/likes",
    "title": "Liked Videos",
    "version": "1.8.7",
    "name": "Liked",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List videos a user has liked.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "user",
            "description": "<p>List videos by user ID</p> "
          }
        ],
        "Filters": [
          {
            "group": "Filters",
            "type": "Ternary",
            "optional": true,
            "field": "nsfw",
            "description": "<p>Filter results by NSFW</p> "
          },
          {
            "group": "Filters",
            "type": "Ternary",
            "optional": true,
            "field": "moderated",
            "description": "<p>Filter results by moderated. Must specify <code>user</code> and be                                              authenticated as that user or specify <code>device</code> to use this                                              option. Omit or use -1 for any. Forced to 1 if not                                              authenticated.</p> "
          },
          {
            "group": "Filters",
            "type": "Ternary",
            "optional": true,
            "field": "private",
            "description": "<p>Filter results by private. Must specify <code>user</code> and be                                              authenticated as that user or specify <code>device</code> to use this                                              option. Omit or use -1 for any. Forced to 0 if not                                              authenticated.</p> "
          }
        ],
        "Order": [
          {
            "group": "Order",
            "type": "Integer",
            "optional": true,
            "field": "order",
            "description": "<p>May be one of <code>video_id</code>, <code>view_count</code>, <code>date_completed</code>, <code>score</code></p> "
          },
          {
            "group": "Order",
            "type": "Integer",
            "optional": true,
            "field": "direction",
            "description": "<p><code>ASC</code> or <code>DESC</code></p> "
          }
        ],
        "Page": [
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": "<p>Result offset</p> "
          },
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>Result limit (1-100)</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/likes?user=9532"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/likes?user=9532",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Videos.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/likes",
    "title": "Liked Videos",
    "version": "1.7.0",
    "name": "Liked",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List videos a user has liked.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "user",
            "description": "<p>List videos by user ID</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": "<p>Result offset</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>Result limit (1-100)</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/likes?user=9532"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/likes?user=9532",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/list",
    "title": "List Videos",
    "version": "1.8.8",
    "name": "List",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Lists videos. All filters are joined with a logical AND.</p> ",
    "parameter": {
      "fields": {
        "Filters": [
          {
            "group": "Filters",
            "type": "Integer",
            "optional": true,
            "field": "user",
            "description": "<p>List videos by user ID</p> "
          },
          {
            "group": "Filters",
            "type": "String",
            "optional": true,
            "field": "device",
            "description": "<p>List videos by device ID</p> "
          },
          {
            "group": "Filters",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>Filter results by state</p> "
          },
          {
            "group": "Filters",
            "type": "Ternary",
            "optional": true,
            "field": "nsfw",
            "description": "<p>Filter results by NSFW</p> "
          },
          {
            "group": "Filters",
            "type": "Ternary",
            "optional": true,
            "field": "moderated",
            "description": "<p>Filter results by moderated. Must specify <code>user</code> and be                                                authenticated as that user or specify <code>device</code> to use                                                this option. Omit or use -1 for any. Forced to 1 if                                                not authenticated.</p> "
          },
          {
            "group": "Filters",
            "type": "Ternary",
            "optional": true,
            "field": "private",
            "description": "<p>Filter results by private. Must specify <code>user</code> and be                                                authenticated as that user or specify <code>device</code> to use                                                this option. Omit or use -1 for any. Forced to 0 if not                                                authenticated.</p> "
          },
          {
            "group": "Filters",
            "type": "Boolean",
            "optional": true,
            "field": "location",
            "description": "<p>Only results that have a location.</p> "
          },
          {
            "group": "Filters",
            "type": "Integer[]",
            "optional": true,
            "field": "videos",
            "description": "<p>List of video IDs. Comma separated list or array</p> "
          }
        ],
        "Order": [
          {
            "group": "Order",
            "type": "Integer",
            "optional": true,
            "field": "order",
            "description": "<p>May be one of <code>video_id</code>, <code>view_count</code>, <code>date_completed</code>, <code>score</code></p> "
          },
          {
            "group": "Order",
            "type": "Integer",
            "optional": true,
            "field": "direction",
            "description": "<p><code>ASC</code> or <code>DESC</code></p> "
          }
        ],
        "Page": [
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "maxVideoId",
            "description": "<p>Return only results with an ID less than this</p> "
          },
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "minVideoId",
            "description": "<p>Return only results with an ID more than this</p> "
          },
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": "<p>Result offset</p> "
          },
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>Result limit (1-100)</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/list"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/list",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Videos.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/list",
    "title": "List Videos",
    "version": "1.7.12",
    "name": "List",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List a video feed. If not signed in, displays videos in the list of  default channels. If signed in, displays videos posted by users and  channels that the user has followed. All filters are joined with a  logical AND.</p> ",
    "parameter": {
      "fields": {
        "Filters": [
          {
            "group": "Filters",
            "type": "Integer",
            "optional": true,
            "field": "user",
            "description": "<p>List videos by user ID</p> "
          },
          {
            "group": "Filters",
            "type": "String",
            "optional": true,
            "field": "device",
            "description": "<p>List videos by device ID</p> "
          },
          {
            "group": "Filters",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>Filter results by state</p> "
          },
          {
            "group": "Filters",
            "type": "Ternary",
            "optional": true,
            "field": "nsfw",
            "description": "<p>Filter results by NSFW</p> "
          },
          {
            "group": "Filters",
            "type": "Ternary",
            "optional": true,
            "field": "moderated",
            "description": "<p>Filter results by moderated. Must specify <code>user</code> and be authenticated as that user or specify <code>device</code> to use this option. Omit or use -1 for any. Forced to 1 if not authenticated.</p> "
          },
          {
            "group": "Filters",
            "type": "Ternary",
            "optional": true,
            "field": "private",
            "description": "<p>Filter results by private. Must specify <code>user</code> and be authenticated as that user or specify <code>device</code> to use this option. Omit or use -1 for any. Forced to 0 if not authenticated.</p> "
          },
          {
            "group": "Filters",
            "type": "Boolean",
            "optional": true,
            "field": "location",
            "description": "<p>Only results that have a location.</p> "
          }
        ],
        "Order": [
          {
            "group": "Order",
            "type": "Integer",
            "optional": true,
            "field": "order",
            "description": "<p>May be one of <code>video_id</code>, <code>view_count</code>, <code>date_completed</code>, <code>score</code></p> "
          },
          {
            "group": "Order",
            "type": "Integer",
            "optional": true,
            "field": "direction",
            "description": "<p><code>ASC</code> or <code>DESC</code></p> "
          }
        ],
        "Page": [
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "maxVideoId",
            "description": "<p>Return only results with an ID less than this</p> "
          },
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "minVideoId",
            "description": "<p>Return only results with an ID more than this</p> "
          },
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": "<p>Result offset</p> "
          },
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>Result limit (1-100)</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/list"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/list",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/list",
    "title": "List Videos",
    "version": "1.7.0",
    "name": "List",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List a video feed. If not signed in, displays videos in the list of  default channels. If signed in, displays videos posted by users and  channels that the user has followed. All filters are joined with a  logical AND.</p> ",
    "parameter": {
      "fields": {
        "Filters": [
          {
            "group": "Filters",
            "type": "Integer",
            "optional": true,
            "field": "user",
            "description": "<p>List videos by user ID</p> "
          },
          {
            "group": "Filters",
            "type": "String",
            "optional": true,
            "field": "device",
            "description": "<p>List videos by device ID</p> "
          },
          {
            "group": "Filters",
            "type": "String",
            "optional": true,
            "field": "state",
            "description": "<p>Filter results by state</p> "
          },
          {
            "group": "Filters",
            "type": "Ternary",
            "optional": true,
            "field": "nsfw",
            "description": "<p>Filter results by NSFW</p> "
          },
          {
            "group": "Filters",
            "type": "Ternary",
            "optional": true,
            "field": "moderated",
            "description": "<p>Filter results by moderated. Must specify <code>user</code> and be authenticated as that user or specify <code>device</code> to use this option. Omit or use -1 for any. Forced to 1 if not authenticated.</p> "
          },
          {
            "group": "Filters",
            "type": "Ternary",
            "optional": true,
            "field": "private",
            "description": "<p>Filter results by private. Must specify <code>user</code> and be authenticated as that user or specify <code>device</code> to use this option. Omit or use -1 for any. Forced to 0 if not authenticated.</p> "
          },
          {
            "group": "Filters",
            "type": "Boolean",
            "optional": true,
            "field": "location",
            "description": "<p>Only results that have a location.</p> "
          }
        ],
        "Order": [
          {
            "group": "Order",
            "type": "Integer",
            "optional": true,
            "field": "order",
            "description": "<p>May be one of <code>video_id</code>, <code>view_count</code>, <code>date_completed</code></p> "
          },
          {
            "group": "Order",
            "type": "Integer",
            "optional": true,
            "field": "direction",
            "description": "<p><code>ASC</code> or <code>DESC</code></p> "
          }
        ],
        "Page": [
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "maxVideoId",
            "description": "<p>Return only results with an ID less than this</p> "
          },
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "minVideoId",
            "description": "<p>Return only results with an ID more than this</p> "
          },
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": "<p>Result offset</p> "
          },
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>Result limit (1-100)</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/list"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/list",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/location",
    "title": "Location Search",
    "version": "1.6.6",
    "name": "Location",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List videos near a point</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "latitude",
            "description": "<p>Latitude of the center of search</p> "
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "longitude",
            "description": "<p>Longitude of the center of search</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "geofence",
            "description": "<p>A geofence identifier (instead of latitude, longitude, and distance)</p> "
          },
          {
            "group": "Parameter",
            "type": "Distance",
            "optional": true,
            "field": "from",
            "description": "<p>Minimum distance of center (e.g. 1km or 2mi). Use with to.</p> "
          },
          {
            "group": "Parameter",
            "type": "Distance",
            "optional": true,
            "field": "to",
            "description": "<p>Maximum distance from center (e.g. 5km or 10mi). Use with from.</p> "
          },
          {
            "group": "Parameter",
            "type": "Distance",
            "optional": true,
            "field": "distance",
            "description": "<p>Maximum distance from center (e.g. 5km or 10mi). Use with alone.</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": "<p>Result offset</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>Result limit</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": "<p>(null), likes_count, hot_score, score, date_completed</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/Videos.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/location",
    "title": "Location Search",
    "version": "1.4.2",
    "name": "Location",
    "group": "Videos",
    "description": "<p>List videos near a point</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "latitude",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "longitude",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Distance",
            "optional": true,
            "field": "from",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Distance",
            "optional": true,
            "field": "to",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Distance",
            "optional": true,
            "field": "distance",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": "<p>One of (null, likes_count, hot_score)</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/new",
    "title": "New Videos",
    "version": "1.9.0",
    "name": "New",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Lists new videos. All filters are joined with a logical AND.</p> ",
    "parameter": {
      "fields": {
        "Filters": [
          {
            "group": "Filters",
            "type": "Ternary",
            "optional": true,
            "field": "nsfw",
            "description": "<p>Filter results by NSFW</p> "
          }
        ],
        "Page": [
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": "<p>Result offset</p> "
          },
          {
            "group": "Page",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": "<p>Result limit (1-100)</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/new"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/new",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Videos.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/oembed",
    "title": "",
    "version": "1.8.13",
    "name": "OEmbed",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Formats a vidme video to oEmbed specification. See <a href=\"http://oembed.com/\">http://oembed.com/</a></p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "format",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "maxwidth",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "maxheight",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/oembed.json?url=https://vid.me/yvi"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/oembed.json?url=https://vid.me/yvi",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Videos.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/search",
    "title": "Search",
    "version": "1.8.10",
    "name": "Search",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Search for videos</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>The string query for which to search</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nsfw",
            "description": "<p>Include NSFW results. If ommited, defaults to setting in user account</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": "<p>One of likes_count, hot_score, score, date_completed</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "user",
            "description": "<p>Search for videos by a particular user. NSFW is included.</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "parameters",
            "description": "<p>Filer parameters</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parameters.query",
            "description": "<p>The given string query</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"page\": {\n    \"total\": 2,\n    \"offset\": 0,\n    \"limit\": 20\n  },\n  \"parameters\": {\n    \"query\": \"findme\"\n  },\n  \"videos\" : [\n    {}, // ...\n    {} // ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 503 Service Unavailable\n{\n  \"status\" : false,\n  \"error\" : \"Service Unavailable\",\n  \"code\" : \"service_unavailable\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/search?query=google"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/search?query=google",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Videos.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos"
  },
  {
    "type": "GET",
    "url": "/videos/search",
    "title": "Search",
    "version": "1.7.5",
    "name": "Search",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Search for videos</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>The string query for which to search</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nsfw",
            "description": "<p>Include NSFW results. If ommited, defaults to setting in user account</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": "<p>One of likes_count, hot_score, score, date_completed</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "parameters",
            "description": "<p>Filer parameters</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parameters.query",
            "description": "<p>The given string query</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"page\": {\n    \"total\": 2,\n    \"offset\": 0,\n    \"limit\": 20\n  },\n  \"parameters\": {\n    \"query\": \"findme\"\n  },\n  \"videos\" : [\n    {}, // ...\n    {} // ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 503 Service Unavailable\n{\n  \"status\" : false,\n  \"error\" : \"Service Unavailable\",\n  \"code\" : \"service_unavailable\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/search?query=google"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/search?query=google",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos"
  },
  {
    "type": "GET",
    "url": "/videos/search",
    "title": "Search",
    "version": "1.2.3",
    "name": "Search",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Search for videos</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query",
            "description": "<p>The string query for which to search</p> "
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>The total number of results</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The page offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The requested page size</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "parameters",
            "description": "<p>Filer parameters</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parameters.query",
            "description": "<p>The given string query</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"page\": {\n    \"total\": 2,\n    \"offset\": 0,\n    \"limit\": 20\n  },\n  \"parameters\": {\n    \"query\": \"findme\"\n  },\n  \"videos\" : [\n    {}, // ...\n    {} // ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 503 Service Unavailable\n{\n  \"status\" : false,\n  \"error\" : \"Service Unavailable\",\n  \"code\" : \"service_unavailable\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/search?query=google",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos"
  },
  {
    "type": "GET",
    "url": "/videos/trending",
    "title": "Trending Videos",
    "version": "1.7.8",
    "name": "Trending",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List videos ordered by hot algorithm (views decaying over time).  Note: this used to be /videos/hot</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/hot"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/hot",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/Videos.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  },
  {
    "type": "GET",
    "url": "/videos/feed",
    "title": "Video Feed",
    "version": "1.7.9",
    "name": "VideoFeed",
    "group": "Videos",
    "description": "<p>Renamed to /videos/following. /videos/feed is provided for compatibility.</p> ",
    "filename": "VideoApp/Api/Controllers/Videos.php",
    "groupTitle": "Videos"
  },
  {
    "type": "GET",
    "url": "/videos/feed",
    "title": "Video Feed",
    "version": "1.7.0",
    "name": "VideoFeed",
    "group": "Videos",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>List a video feed. If not signed in, displays videos in the list of  default channels. If signed in, displays videos posted by users and  channels that the user has followed.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "maxVideoId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "maxDateCompleted",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "locationOnly",
            "description": ""
          }
        ],
        "Global Parameters": [
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "token",
            "description": "<p>The user authentication token. May use AccessToken header instead.</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "DEVICE",
            "description": "<p>The device UUID</p> "
          },
          {
            "group": "Global Parameters",
            "type": "String",
            "optional": true,
            "field": "PLATFORM",
            "description": "<p>The device platform (ios|android|web)</p> "
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.vid.me/videos/feed"
      }
    ],
    "examples": [
      {
        "title": "Example",
        "content": "curl https://api.vid.me/videos/feed",
        "type": "curl"
      }
    ],
    "filename": "VideoApp/Api/Controllers/_apidocversions.php",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true for success, false for failure</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>An error message explaining the error</p> "
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>An error code</p> "
          }
        ]
      }
    },
    "groupTitle": "Videos",
    "header": {
      "fields": {
        "Global Headers": [
          {
            "group": "Global Headers",
            "type": "String",
            "optional": true,
            "field": "AccessToken",
            "description": "<p>The user authentication token. May use token parameter instead.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Whether or not this request succeeded</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "page",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.total",
            "description": "<p>Total items matching query</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.limit",
            "description": "<p>The effective result limit</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page.offset",
            "description": "<p>The effective result offset</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "videos",
            "description": "<p>Videos</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.video_id",
            "description": "<p>The video ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.url",
            "description": "<p>The video code, used for the URL</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.complete",
            "description": "<p>The path on the CDN where the completed video is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.state",
            "description": "<p>The state of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.title",
            "description": "<p>The video title</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.description",
            "description": "<p>The video description</p> "
          },
          {
            "group": "Success 200",
            "type": "Double",
            "optional": false,
            "field": "videos.duration",
            "description": "<p>The duration of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.height",
            "description": "<p>The height of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.width",
            "description": "<p>The width of the video in pixels</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_created",
            "description": "<p>The date at which the video was created or upload requested</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_stored",
            "description": "<p>The date at which the video was stored for encoding</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.date_completed",
            "description": "<p>The date at which the video oompleted encoding and was available to view</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.comment_count",
            "description": "<p>The number of comments on the video, including replies</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.view_count",
            "description": "<p>The number of times the video has been viewed</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.version",
            "description": "<p>The version of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "videos.nsfw",
            "description": "<p>Whether or not the video should be considered &quot;Not safe for work&quot;</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.thumbnail",
            "description": "<p>The path on the CDN where the video thumbnail/poster is stored</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "videos.score",
            "description": "<p>The score of the video</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "videos.user",
            "description": "<p>The video owner</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.user_id",
            "description": "<p>The user ID</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.username",
            "description": "<p>The unique username</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.full_url",
            "description": "<p>The full URL to the user&#39;s profile</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar",
            "description": "<p>The avatar url on the CDN</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "videos.user.avatar_url",
            "description": "<p>The full avatar url</p> "
          }
        ]
      }
    }
  }
] });