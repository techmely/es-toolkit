export function downloadByData(data, filename, mime, bom) {
    const blobData = typeof bom !== "undefined" ? [bom, data] : [data];
    const blob = new Blob(blobData, { type: mime || "application/octet-stream" });
    const blobURL = window.URL.createObjectURL(blob);
    const tempLink = document.createElement("a");
    tempLink.style.display = "none";
    tempLink.href = blobURL;
    tempLink.setAttribute("download", filename);
    tempLink.dataset.testid = "link-download-blob-file";
    if (typeof tempLink.download === "undefined") {
        tempLink.setAttribute("target", "_blank");
    }
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    window.URL.revokeObjectURL(blobURL);
}
