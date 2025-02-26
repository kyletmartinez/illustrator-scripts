# Illustrator Scripts

A collection of helpful workflow scripts for Illustrator that run natively right from the Illustrator menu.

To run a script natively in Illustrator use `File > Scripts > Other Script...` and choose the script.

## Scripts

#### [Update Artboard Positions (v1.0)](/scripts/Update%20Artboard%20Positions.jsx)

There is a bug in Adobe Illustrator where when the `X` and `Y` positions of an
artboard contain decimal values, the final output using any export method will result in
incorrect dimensions.

For example, take an artboard that should be `448 px by 64 px`.
* If `X` is `1339.14 px` and `Y` is `366.33 px` then the final output will be `449 px by 65 px`
* If `X` is `1339` and `Y` is `366` then the final output will be `448 px by 64 px`

