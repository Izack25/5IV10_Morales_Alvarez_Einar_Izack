const reader = new FileReader();
$("#cif").click(function(){
    var key=$("#key").val()
    
    reader.addEventListener('loadend', function() {
        document.getElementById('mensaje').innerText = this.result;
    });
    console.log(key)
    document.getElementById('mensaje').files[0].text().then(PromiseResult => {
        var mensaje=PromiseResult
        console.log(mensaje)
        var en=CryptoJS.DES.encrypt(mensaje, key)
        $("#res").text(en)
        download("Cifrado.txt",en)
    })
})

$("#cif").click(function(){
    var key=$("#key").val()
    
    reader.addEventListener('loadend', function() {
        document.getElementById('mensaje').innerText = this.result;
    });
    console.log(key)
    document.getElementById('mensaje').files[0].text().then(PromiseResult => {
        var mensaje=PromiseResult
        console.log(mensaje)
        var de=(CryptoJS.DES.decrypt(mensaje, key)).toString(CryptoJS.enc.Utf8);
        $("#res").text(de)
        download("Descifrado.txt",de)
    })
})
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}