require([
  "gitbook",
  "jQuery"
], function(gitbook, $) {
  var conf = {}

  function insert() {

    var cnzz = conf.cnzz || {}

    var visible = cnzz.visible;
    var style = cnzz.style;
    var siteid = cnzz.siteid;

    console.log("visible:" + visible + ", style:" + style + ", siteid:" + siteid);

    var stat = "<script src='https://s95.cnzz.com/z_stat.php?id="
        + siteid + "&web_id=" + siteid + "' language='JavaScript'></script>";

    if (!visible) {
        stat = "<div style='display:none'>" + stat + "</div>";
    }

    $('body').append(stat);
  }

  gitbook.events.bind("start", function(e, config) {
    conf = config || {}
  })
  gitbook.events.bind("page.change", insert)
})
