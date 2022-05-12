var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.23614000677101643,
        "pitch": 0.022344157956613486,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": 0.227089491809922,
          "pitch": -0.3749309089157542,
          "rotation": 13.351768777756625,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7667624599493035,
          "pitch": 0.08126050655380901,
          "title": "Welcome!",
          "text": "Faculty of Engineering"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.072930530006726,
        "pitch": -0.24138132896326603,
        "fov": 1.379556356332768
      },
      "linkHotspots": [
        {
          "yaw": 0.08498029048894828,
          "pitch": -0.03209180027512559,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.6834008074453841,
          "pitch": -0.17754183570396087,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3150874213830779,
          "pitch": 0.04108922280014582,
          "title": "Sculpture",
          "text": "Engineering sculpture"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.8791959243948817,
        "pitch": -0.02408949176263775,
        "fov": 1.3545525999327719
      },
      "linkHotspots": [
        {
          "yaw": -2.9937363319478933,
          "pitch": 0.022988860343140516,
          "rotation": 5.497787143782138,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9567028323639981,
          "pitch": -0.16222842993875375,
          "title": "Spinelli Coffee Company",
          "text": "Yummy food"
        }
      ]
    }
  ],
  "name": "Ebigal",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
