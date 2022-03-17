export function Do(slide){
    document.getElementById("bota").style.backgroundColor = "blue";
    alert("OI"+slide);
}
export function toggleIcon() {
    $("#bota").click(function() {
        console.log("CLICK");
        alert("slider pass function");
    });
}
