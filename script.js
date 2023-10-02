$(function () {
  
  $("button").click(function () {
    var scheduleBlock = $(this).parent().attr("id");
    var txt = $(this).siblings("textarea").val();
    localStorage.setItem(scheduleBlock, txt);
  });

  $("#09 .description").val(localStorage.getItem("09"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  const timeblock = $(".time-block");
  var currentHour = dayjs().hour();

  $.each(timeblock, (index) => {
    const currentTimeblock = $(timeblock[index]);
    const currentBlock = Number(timeblock[index].getAttribute("value"));

    currentTimeblock
      .children("textarea")
      .text(localStorage.getItem(currentTimeblock.attr("id")));

    if (currentBlock < currentHour) {
      currentTimeblock.addClass("past");
    } else if (currentBlock == currentHour) {
      currentTimeblock.addClass("present");
    } else {
      currentTimeblock.addClass("future");
      currentTimeblock.children("button").addClass("future");
    }
  });
  
  $("#currentDay").text(dayjs().format("dddd, MMMM D, h:mm a"));
});
