// D3 Notes:

// SVGs:

// -D3 is used to draw shapes
// -Shapes: Rectangles, circles, ellipses, lines, texts, and paths
// -Markup language ala HTML
// -Small file size, better for rescaling
// -Positioned on x(l->r)/y(u->d) coordinates in pixels Canvas of Shapes

// -Circle: center value, r for radius
// -Ellipse: circle with x and y radius value

// D3 select -use D3 to get elements (uses css selectors ala jquery, select returns 1, selectAll() returns all matching) -->
// D3 append - adds SVGs to selection -->
// D3 attr - set attr of SVGs to appear on screen: .attr(value to select, how to midfy). Returns element changed.

const canvas = d3.select(".canvas");

// Uses method chaining:
svg = d3
  .select(".canvas")
  .append("shape")
  .attr("height", 450)
  .attr("width", 450);