/**
 * @name Create Matte Shapes
 * @version 1.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Create a red rectangle at the same location and size for all selected items.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an Illustrator designer a little easier.
 */

(function createMatteShapes() {
    var doc = app.activeDocument;
    if (doc.selection.length > 0) {
        for (var i = 0; i < doc.selection.length; i++) {
            var item = doc.selection[i];
            var x = item.left;
            var y = item.top;
            var width = item.width;
            var height = item.height;
            var rect = doc.pathItems.rectangle(y, x, width, height);
            rect.filled = true;
            var redColor = new RGBColor();
            redColor.red = 255;
            redColor.green = 0;
            redColor.blue = 0;
            rect.fillColor = redColor;
            rect.stroked = false;
        }
    }
})();
