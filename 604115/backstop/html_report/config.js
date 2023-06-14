report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Homepage_Test_0_document_0_desktop.png",
        "test": "../bitmaps_test/20230614-194504/backstop_default_Homepage_Test_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "backstop_default_Homepage_Test_0_document_0_desktop.png",
        "label": "Homepage Test",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.1,
        "url": "https://sheffield.ac.uk/",
        "referenceUrl": "http://sheffield.ac.uk/",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.14",
          "analysisTime": 178
        },
        "diffImage": "../bitmaps_test/20230614-194504/failed_diff_backstop_default_Homepage_Test_0_document_0_desktop.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});