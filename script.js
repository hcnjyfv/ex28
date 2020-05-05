$(".login").click(function() {
  let mes=$("input").val();
  $("h2").text(mes+"登陆成功");
});

alert("请输入你的用户名")