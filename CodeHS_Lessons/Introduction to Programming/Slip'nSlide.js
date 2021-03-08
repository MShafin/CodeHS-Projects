/*
 * This program has Karel slide down a slip n slide
 * by moving as long as Karel is standing on a blue square.
 */
function start() {
    while(colorIs(Color.blue)) {
        move();
    }
}