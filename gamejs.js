var output = "";

for (var i = 0; i < 20; i++) {
  output += "<tr>"
  for (var j = 0; j < 20; j++) {
    output += "<td class = 'tiles' id ='"+i+'_'+j+"' onclick='f("+i+", "+j+")' style='background-color:red'> </td>"
  }
  output += "</td>"
}

document.getElementById('t').innerHTML = output;

 function f(x, y) {
    cal('xplus')(x, y);
    cal('xminus')(x, y);
    cal2('yplus')(x, y);
    cal2('yminus')(x, y);
}

function cal(mode) {
  var funcs = {
    'xplus' : function(xplu,yplu) {
      var x1 = xplu + 1;
        if(x1 < 0 || x1 >= 20) {
          return;
        }
        else {
          var newarea1 = x1 + '_' + yplu;
          var currentColor1 = document.getElementById(newarea1).style.backgroundColor;
          return setColor(newarea1, currentColor1)
        }
    },
    'xminus' : function(xminu,yminu) {
      var x2 = xminu - 1;
        if(x2 < 0 ) {
          return
        }
        else {
          var newarea2 = x2 + '_' + yminu;
          var currentColor2 = document.getElementById(newarea2).style.backgroundColor;
          return setColor(newarea2, currentColor2)
        }
    }
  }
  return funcs[mode];
}

function cal2(mode) {
  var funcs = {
    'yplus' : function(xpl,ypl) {
      var y1 = ypl + 1;
        if(y1 < 0 || y1 >= 20) {
          return
        }
        else {
          var newarea3 = xpl + '_' + y1;
          var currentColor3 = document.getElementById(newarea3).style.backgroundColor;
          return setColor(newarea3, currentColor3)
        }
    },
    'yminus' : function(xmin,ymin) {
      var y2 = ymin - 1;
        if(y2 < 0 || y2 >= 20) {
          return
        }
        else  {
          var newarea4 = xmin + '_' + y2;
          var currentColor4 = document.getElementById(newarea4).style.backgroundColor;
          return setColor(newarea4, currentColor4)
        }
    }
  }
  return funcs[mode];
}

function setColor(a, b) {
  document.getElementById(a).style.backgroundColor = coloring(b);
}

function coloring(color) {
  if (color == 'red') {
    return 'green';
  }
  else if (color == 'green') {
    return 'blue';
  }
  else if (color == 'blue') {
    return 'red';
  }
}
