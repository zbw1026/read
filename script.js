function displayTxt() {
    var txtLink = document.getElementById('txtLink').value;
    var txtDisplay = document.getElementById('txtDisplay');
    fetch(txtLink)
        .then(response => response.text())
        .then(data => {
            txtDisplay.innerText = data;
        });
}

function changeFontSize() {
    var fontSize = document.getElementById('fontSize').value + 'px';
    document.getElementById('txtDisplay').style.fontSize = fontSize;
}

function changeFontColor() {
    var fontColor = document.getElementById('fontColor').value;
    document.getElementById('txtDisplay').style.color = fontColor;
}

function changeBgColor() {
    var bgColor = document.getElementById('bgColor').value;
    document.getElementById('txtDisplay').style.backgroundColor = bgColor;
}

function toggleSettings() {
    var settingsContent = document.getElementById('settingsContent');
    if(settingsContent.style.display === 'none') {
        settingsContent.style.display = 'block';
    } else {
        settingsContent.style.display = 'none';
    }
}
function myFunction() {    
    var x = document.getElementById("myFile");    
    if ('files' in x) {    
      if (x.files.length == 0) {    
        alert('请选择一个文件');    
        return false;    
      }    
      var file = x.files[0];    
      var reader = new FileReader();    
      
      // 读取文件内容    
      reader.onload = function(evt) {    
        // 将读取到的文件内容显示在 txtDisplay 元素中  
        document.getElementById("txtDisplay").innerHTML = evt.target.result;    
      }    
      
      // 以文本格式读取文件    
      reader.readAsText(file);    
    } else {    
      if (x.value == "") {    
        alert('请选择一个文件');    
        return false;    
      }    
    }    
}