
function fileBrowse(fName, fUrl, type, win){
    var fileURL = windows.location.pathname;
    var sString = windows.location.search; //search
    if (sString.length < 1) {
        sString = "?"
    }

tinyMCE.openWindow({
    file: fileURL + sString + "&type=" + type,
    title: "File Browser",
    minWidth: fileBrowse.getParam("fileBrowse_dialog_width", 900),
    minHeight: fileBrowse.getParam("fileBrowse_dialog_height", 
    Math.min(tinymce.DOM.getViewPort().h - 100, 800)) // end minHeight
    close_previous: "no"
    }, 
    {
        window: win,
        input: field_name,
        resizable: "yes",
        inline: "yes",
        editor_id: tinyMCE.selectedInstance.editorId

    }); // end openWindow
} // filebrowse End