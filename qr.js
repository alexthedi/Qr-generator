function Show() {
var x=document.getElementById('display').value;
alert(x);
}
function generateQR()
        {
            var gapi="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
            var myimg=document.getElementById("img");
            var mytext=document.getElementById("qrtext").value;
            var size=document.getElementById("size").value;

            if (mytext!=="" && size=="100")
            {
                myimg.src=gapi+"100x100"+"&chl="+mytext;
                // https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=hello
            }

            else if(mytext!=="" && size=="150")
            {

                myimg.src=gapi+"150x150"+"&chl="+mytext;
            }

            else if(mytext!=="" && size=="200")
            {
                myimg.src=gapi+"200x200"+"&chl="+mytext;
            }

            else if (mytext!=="" && size=="250")
            {
                myimg.src=gapi+"250x250"+"&chl="+mytext;
            }

            else if (mytext!=="" && size=="300")
            {
                myimg.src=gapi+"300x300"+"&chl="+mytext;
            }

            else
            {
                alert("Please Enter Text");
            }
        
        }