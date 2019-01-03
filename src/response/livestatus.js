const livestatus = {
    "response_code": 200,
    "debit": 3,
    "position": "Train has reached Destination and late by 5 minutes",
    "train": {
      "number": "12046",
      "name": "CDG NDLS SHTBDI"
    },
    "route": [
      {
        "no": 1,
        "day": 0,
        "station": {
          "name": "CHANDIGARH",
          "code": "CDG"
        },
        "has_arrived": false,
        "has_departed": true,
        "distance": 0,
        "scharr": "Source",
        "schdep": "12:00",
        "actarr": "00:00",
        "actdep": "12:00",
        "scharr_date": "19 Nov 2015",
        "actarr_date": "19 Nov 2015",
        "latemin": 0
      },
      {
        "no": 2,
        "day": 0,
        "station": {
          "name": "AMBALA CANT JN",
          "code": "UMB"
        },
        "has_arrived": true,
        "has_departed": true,
        "distance": 67,
        "scharr": "12:40",
        "schdep": "12:42",
        "actarr": "12:40",
        "actdep": "12:42",
        "scharr_date": "19 Nov 2015",
        "actarr_date": "19 Nov 2015",
        "latemin": 0
      },
      {
        "no": 3,
        "day": 0,
        "station": {
          "name": "NEW DELHI",
          "code": "NDLS"
        },
        "has_arrived": true,
        "has_departed": false,
        "distance": 265,
        "scharr": "15:25",
        "schdep": "Destination",
        "actarr": "15:30",
        "actdep": "00:00",
        "scharr_date": "19 Nov 2015",
        "actarr_date": "19 Nov 2015",
        "latemin": 5
      }
    ]
  }

  export default livestatus