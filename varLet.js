// Global variable
const browserVersion = "Chrome";
function getBrowserVersion() {

    if (browserVersion === "Chrome") {
        // Local variable using var
        var browserVersion="chromeversion11";
         // Local variable using let
         let browserVersion="chromeversion11";
    }

    // Accessible outside the if block
    console.log(browserVersion);
}
getBrowserVersion();