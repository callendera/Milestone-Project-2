{"filter":false,"title":"sendApplication.js","tooltip":"/assets/js/sendApplication.js","undoManager":{"mark":47,"position":47,"stack":[[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":3,"column":13},"action":"insert","lines":[" (function() {","            emailjs.init(\"user_92AoHT5tDuWzStBRMLqiD\");","","        })();"],"id":3}],[{"start":{"row":0,"column":0},"end":{"row":10,"column":7},"action":"remove","lines":[" (function() {","            emailjs.init(\"user_92AoHT5tDuWzStBRMLqiD\");","","        })();","","emailjs.sendForm('outlook', 'subscribe', '#volunteerForm')","    .then(function(response) {","       console.log('SUCCESS!', response.status, response.text);","    }, function(error) {","       console.log('FAILED...', error);","    });"],"id":4}],[{"start":{"row":1,"column":0},"end":{"row":6,"column":7},"action":"insert","lines":["emailjs.sendForm('outlook', 'subscribe', '#volunteerForm')","    .then(function(response) {","       console.log('SUCCESS!', response.status, response.text);","    }, function(error) {","       console.log('FAILED...', error);","    });"],"id":5}],[{"start":{"row":0,"column":0},"end":{"row":7,"column":0},"action":"remove","lines":["","emailjs.sendForm('outlook', 'subscribe', '#volunteerForm')","    .then(function(response) {","       console.log('SUCCESS!', response.status, response.text);","    }, function(error) {","       console.log('FAILED...', error);","    });",""],"id":6},{"start":{"row":0,"column":0},"end":{"row":24,"column":3},"action":"insert","lines":["var myform = $(\"form#myform\");","myform.submit(function(event){","\tevent.preventDefault();","","\tvar params = myform.serializeArray().reduce(function(obj, item) {","     obj[item.name] = item.value;","     return obj;","  }, {});","","  // Change to your service ID, or keep using the default service","  var service_id = \"default_service\";","","  var template_id = \"subscribe\";","  myform.find(\"button\").text(\"Sending...\");","  emailjs.send(service_id, template_id, params)","  \t.then(function(){ ","       alert(\"Sent!\");","       myform.find(\"button\").text(\"Send\");","     }, function(err) {","       alert(\"Send email failed!\\r\\n Response:\\n \" + JSON.stringify(err));","       myform.find(\"button\").text(\"Send\");","    });","","  return false;","});"]}],[{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"remove","lines":["y"],"id":7},{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"remove","lines":["m"]}],[{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":["v"],"id":8},{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"insert","lines":["o"]},{"start":{"row":0,"column":23},"end":{"row":0,"column":24},"action":"insert","lines":["l"]},{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"insert","lines":["u"]},{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"insert","lines":["n"]},{"start":{"row":0,"column":26},"end":{"row":0,"column":27},"action":"insert","lines":["t"]},{"start":{"row":0,"column":27},"end":{"row":0,"column":28},"action":"insert","lines":["e"]}],[{"start":{"row":0,"column":28},"end":{"row":0,"column":29},"action":"insert","lines":["e"],"id":9},{"start":{"row":0,"column":29},"end":{"row":0,"column":30},"action":"insert","lines":["r"]}],[{"start":{"row":0,"column":30},"end":{"row":0,"column":31},"action":"remove","lines":["f"],"id":10}],[{"start":{"row":0,"column":30},"end":{"row":0,"column":31},"action":"insert","lines":["F"],"id":11}],[{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"remove","lines":["y"],"id":12},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"remove","lines":["m"]}],[{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["v"],"id":13},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["o"]},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["l"]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["u"]},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["n"]},{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["t"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["e"]},{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["e"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["r"]}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"remove","lines":["f"],"id":14}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["F"],"id":15}],[{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"remove","lines":["y"],"id":16},{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"remove","lines":["m"]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["v"],"id":17},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":["o"]},{"start":{"row":1,"column":2},"end":{"row":1,"column":3},"action":"insert","lines":["l"]},{"start":{"row":1,"column":3},"end":{"row":1,"column":4},"action":"insert","lines":["u"]},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["n"]},{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["t"]},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["e"]},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["e"]}],[{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["r"],"id":18}],[{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"remove","lines":["f"],"id":19}],[{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":["F"],"id":20}],[{"start":{"row":13,"column":3},"end":{"row":13,"column":4},"action":"remove","lines":["y"],"id":21},{"start":{"row":13,"column":2},"end":{"row":13,"column":3},"action":"remove","lines":["m"]}],[{"start":{"row":13,"column":2},"end":{"row":13,"column":3},"action":"insert","lines":["v"],"id":22},{"start":{"row":13,"column":3},"end":{"row":13,"column":4},"action":"insert","lines":["o"]},{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"insert","lines":["l"]},{"start":{"row":13,"column":5},"end":{"row":13,"column":6},"action":"insert","lines":["u"]},{"start":{"row":13,"column":6},"end":{"row":13,"column":7},"action":"insert","lines":["n"]},{"start":{"row":13,"column":7},"end":{"row":13,"column":8},"action":"insert","lines":["t"]},{"start":{"row":13,"column":8},"end":{"row":13,"column":9},"action":"insert","lines":["e"]},{"start":{"row":13,"column":9},"end":{"row":13,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":13,"column":10},"end":{"row":13,"column":11},"action":"insert","lines":["r"],"id":23}],[{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"remove","lines":["f"],"id":24}],[{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"insert","lines":["F"],"id":25}],[{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"remove","lines":["y"],"id":26},{"start":{"row":17,"column":7},"end":{"row":17,"column":8},"action":"remove","lines":["m"]}],[{"start":{"row":17,"column":7},"end":{"row":17,"column":8},"action":"insert","lines":["v"],"id":27},{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"insert","lines":["o"]},{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["l"]},{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"insert","lines":["u"]},{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":["n"]},{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["t"]}],[{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":["e"],"id":28},{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":["e"]},{"start":{"row":17,"column":15},"end":{"row":17,"column":16},"action":"insert","lines":["r"]}],[{"start":{"row":17,"column":16},"end":{"row":17,"column":17},"action":"remove","lines":["f"],"id":29}],[{"start":{"row":17,"column":16},"end":{"row":17,"column":17},"action":"insert","lines":["F"],"id":30}],[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"remove","lines":["y"],"id":31},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"remove","lines":["m"]}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["v"],"id":32},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["o"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["l"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["u"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["n"]},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["t"]},{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["e"]},{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["e"]},{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["r"]}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"remove","lines":["f"],"id":33}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["F"],"id":34}],[{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"remove","lines":["e"],"id":35},{"start":{"row":10,"column":33},"end":{"row":10,"column":34},"action":"remove","lines":["c"]},{"start":{"row":10,"column":32},"end":{"row":10,"column":33},"action":"remove","lines":["i"]},{"start":{"row":10,"column":31},"end":{"row":10,"column":32},"action":"remove","lines":["v"]},{"start":{"row":10,"column":30},"end":{"row":10,"column":31},"action":"remove","lines":["r"]},{"start":{"row":10,"column":29},"end":{"row":10,"column":30},"action":"remove","lines":["e"]},{"start":{"row":10,"column":28},"end":{"row":10,"column":29},"action":"remove","lines":["s"]},{"start":{"row":10,"column":27},"end":{"row":10,"column":28},"action":"remove","lines":["_"]},{"start":{"row":10,"column":26},"end":{"row":10,"column":27},"action":"remove","lines":["t"]},{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"remove","lines":["l"]},{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"remove","lines":["u"]},{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"remove","lines":["a"]},{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"remove","lines":["f"]}],[{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"remove","lines":["e"],"id":36},{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"remove","lines":["d"]}],[{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":["o"],"id":37},{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":["u"]},{"start":{"row":10,"column":22},"end":{"row":10,"column":23},"action":"insert","lines":["t"]},{"start":{"row":10,"column":23},"end":{"row":10,"column":24},"action":"insert","lines":["l"]},{"start":{"row":10,"column":24},"end":{"row":10,"column":25},"action":"insert","lines":["o"]},{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"insert","lines":["o"]},{"start":{"row":10,"column":26},"end":{"row":10,"column":27},"action":"insert","lines":["k"]}],[{"start":{"row":9,"column":3},"end":{"row":9,"column":65},"action":"remove","lines":["/ Change to your service ID, or keep using the default service"],"id":38},{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"remove","lines":["/"]},{"start":{"row":9,"column":1},"end":{"row":9,"column":2},"action":"remove","lines":[" "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"remove","lines":[" "]}],[{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"remove","lines":["$"],"id":39}],[{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":["$"],"id":40}],[{"start":{"row":20,"column":8},"end":{"row":20,"column":9},"action":"remove","lines":["y"],"id":41},{"start":{"row":20,"column":7},"end":{"row":20,"column":8},"action":"remove","lines":["m"]}],[{"start":{"row":20,"column":7},"end":{"row":20,"column":8},"action":"insert","lines":["v"],"id":42},{"start":{"row":20,"column":8},"end":{"row":20,"column":9},"action":"insert","lines":["o"]},{"start":{"row":20,"column":9},"end":{"row":20,"column":10},"action":"insert","lines":["l"]},{"start":{"row":20,"column":10},"end":{"row":20,"column":11},"action":"insert","lines":["u"]},{"start":{"row":20,"column":11},"end":{"row":20,"column":12},"action":"insert","lines":["n"]},{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"insert","lines":["t"]},{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"insert","lines":["e"]}],[{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"insert","lines":["e"],"id":43},{"start":{"row":20,"column":15},"end":{"row":20,"column":16},"action":"insert","lines":["r"]}],[{"start":{"row":20,"column":16},"end":{"row":20,"column":17},"action":"remove","lines":["f"],"id":44}],[{"start":{"row":20,"column":16},"end":{"row":20,"column":17},"action":"insert","lines":["F"],"id":45}],[{"start":{"row":18,"column":4},"end":{"row":18,"column":7},"action":"insert","lines":["// "],"id":46},{"start":{"row":19,"column":4},"end":{"row":19,"column":6},"action":"insert","lines":["//"]},{"start":{"row":20,"column":4},"end":{"row":20,"column":6},"action":"insert","lines":["//"]}],[{"start":{"row":18,"column":4},"end":{"row":18,"column":7},"action":"remove","lines":["// "],"id":47},{"start":{"row":19,"column":4},"end":{"row":19,"column":7},"action":"remove","lines":["// "]},{"start":{"row":20,"column":4},"end":{"row":20,"column":7},"action":"remove","lines":["// "]}],[{"start":{"row":12,"column":29},"end":{"row":12,"column":30},"action":"remove","lines":["e"],"id":48},{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"remove","lines":["b"]},{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"remove","lines":["i"]},{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"remove","lines":["r"]}],[{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"insert","lines":["r"],"id":49},{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"insert","lines":["i"]},{"start":{"row":12,"column":28},"end":{"row":12,"column":29},"action":"insert","lines":["b"]},{"start":{"row":12,"column":29},"end":{"row":12,"column":30},"action":"insert","lines":["e"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":28,"column":0},"end":{"row":28,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1566536010567,"hash":"3b64d6f49def2d3781339485ec8440e643755efc"}