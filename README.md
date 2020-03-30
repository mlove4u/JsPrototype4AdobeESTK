# Prototype to Adobe ESTK
## About: 
Add some prototype to Adobe ESTK (ES3).
- String.prototype.format
- String.prototype.trim
- Array.prototype.map
- Array.prototype.indexOf
- Array.prototype.filter
## Usage: 
```js
#include "JsPrototype4AdobeESTK.jsx"
```
## Sample: (Array.prototype.filter)
```js
// InDesign
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
```