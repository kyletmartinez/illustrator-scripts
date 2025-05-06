/**
 * @name Update Artboard Positions
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description There is a bug in Adobe Illustrator where when the "X" and "Y" positions of an
 * artboard contain decimal values, the final output using any export method will result in
 * incorrect dimensions.
 *
 * For example, take an artboard that should be "448 px by 64 px".
 * * If "X" is "1339.14 px" and "Y" is "366.33 px" then the final output will be "449 px by 65 px"
 * * If "X" is "1339" and "Y" is "366" then the final output will be "448 px by 64 px"
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an Illustrator designer a little easier.
 */

(function updateArtboardPositions() {
    var doc = app.activeDocument;
    var artboards = doc.artboards;
    var numArtboards = artboards.length;
    for (var a = 0; a < numArtboards; a++) {
        var artboard = artboards[a];
        var oldArtboardRect = artboard.artboardRect;
        artboard.artboardRect = [
            Math.floor(oldArtboardRect[0]),
            Math.floor(oldArtboardRect[1]),
            Math.floor(oldArtboardRect[2]),
            Math.floor(oldArtboardRect[3])
        ];
    }
})();
