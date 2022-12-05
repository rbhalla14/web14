var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
};

var Body = {
  setColor: function(color){
    document.querySelector('body').style.color =color;
  },
  setBGColor: function(color){
    document.querySelector('body').style.backgroundColor =color;
  }
};



function linksSetColor(color){
  var alist = document.querySelectorAll('a');
  var i = 0;
  while (i < alist.length) {
    alist[i].style.color = color;
    i = i + 1;
  }
}
function bodySetColor(color){
  document.querySelector('body').style.color =color;
}
function bodySetBGColor(color){
  document.querySelector('body').style.backgroundColor =color;
}

function nightDayHandler(self){


  if(self.value == 'night'){
    //bodySetBGColor('black');
    Body.setBGColor('black');
    //bodySetColor('white');
    Body.setColor('white');
    self.value = 'day';
    //linksSetColor('powderblue');
    Links.setColor('powderblue');

  } else {
    //bodySetBGColor('white');
    Body.setBGColor('white');
    //bodySetColor('black');
    Body.setColor('black');
    self.value = 'night';
    //linksSetColor('blue');
    Links.setColor('blue');
  }
}
