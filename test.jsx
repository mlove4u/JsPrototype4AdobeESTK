#include "JsPrototype4AdobeESTK.jsx"
//#target "InDesign CC 2019"

// InDesign
//format
var tf = app.activeDocument.textFrames[0];
var info = { "fax": "03-1234-5678", "tel": "03-8765-4321" };
tf.contents = "TEL: {tel}, FAX: {fax}".format(info);
alert(tf.parentStory.contents);
//TEL: 03-8765-4321, FAX: 03-1234-5678

//filter
//get all textFrames in document
var objs = app.activeDocument.allPageItems;
var tfs = objs.filter(
    function (x) {
        return x instanceof TextFrame
    });
// get all textFrames which width >20mm
var largeTfs = tfs.filter(
    function (x) {
        var bounds = x.geometricBounds;
        var width = bounds[3] - bounds[1];
        return width > 20;
    });

// map
// do something to largeTfs
largeTfs.map(
    function (x) {
        x.contents = "large than 20mm";
        x.fillColor = "Magenta";
    });
