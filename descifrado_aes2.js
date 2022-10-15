function cifrado()
{   
    
    var archivo=document.getElementById("file");
    var reader = new FileReader();
    reader.readAsDataURL (archivo.files [0]); 
   

    reader.onload = function()
    {
        
        reader.addEventListener('loadend', function() 
        {
            document.getElementById('file').innerText = this.result;
        });
        document.getElementById('file').files[0].text().then(PromiseResult => 
        {
            var texto=PromiseResult;

            var key = document.getElementById("key");
            var longKey=getRadio();
            var KeyHash=CryptoJS.SHA3(Key).toString().substr(0,longKey);
          
            var textcifrado=CryptoJS.AES.decrypt(texto,KeyHash);

            var textdescon = hex_to_ascii(textcifrado)

            download("DESCIFRADO.txt",textdescon);
          
            document.getElementById("cifrar").innerHTML = textcifrado;

            document.getElementById("file").value = "";
        })
    }
}

function getRadio()
{
    var select=256;
    var getSelectedValue = document.querySelector( 'input[name="bits"]:checked');   
    if(getSelectedValue != null) {   
        select=parseInt(getSelectedValue.value);
    }
    return select
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
function hex_to_ascii(str1)
 {
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }
