// Define the XPath expression
var xpathExpr = "//h6[text()='Dashboard']";

// Use document.evaluate to find matching elements
var matchingElements = document.evaluate(xpathExpr, document, null, XPathResult.ANY_TYPE, null);

// Iterate through the matched elements
var element = matchingElements.iterateNext();
while (element) {
    console.log("Found element:", element);
    // Do something with the element, for example:
    // element.click(); // Perform a click action
    // element.textContent = "New Text"; // Change the text content
    element = matchingElements.iterateNext();
}
