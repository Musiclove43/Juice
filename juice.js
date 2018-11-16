$( document ).ready(function() {
  console.log( "ready!" );

// $(".thumbnailtext1").on("mouseover", function () {
// $(img).css("opacity", ".4")
// )}

  $("#thumbnail1").on("mouseover", function () {
    if($(".thumbnailtext1").hasClass("one")) {
      $(".one").text("VIEW STORE DETAILS");
    }
  });

  $("#thumbnail1").on("mouseout", function () {
    if($(".thumbnailtext1").hasClass("one")) {
      $(".one").text("");
    };
  });

  $("#thumbnail2").on("mouseover", function () {
    if($(".thumbnailtext1").hasClass("two")) {
      $(".two").text("VIEW STORE DETAILS");
    }
  });

  $("#thumbnail2").on("mouseout", function () {
    if($(".thumbnailtext1").hasClass("two")) {
      $(".two").text("");
    };
  });

  $("#thumbnail3").on("mouseover", function () {
    if($(".thumbnailtext1").hasClass("three")) {
      $(".three").text("VIEW STORE DETAILS");
    }
  });

  $("#thumbnail3").on("mouseout", function () {
    if($(".thumbnailtext1").hasClass("three")) {
      $(".three").text("");
    };
});
    $("#thumbnail4").on("mouseover", function () {
      if($(".thumbnailtext1").hasClass("four")) {
        $(".four").text("VIEW STORE DETAILS");
      }
    });

    $("#thumbnail4").on("mouseout", function () {
      if($(".thumbnailtext1").hasClass("four")) {
        $(".four").text("");
      };
  });

  $(".thumbnail5").on("mouseover", function () {
  console.log("yoo");
    if($(".thumbnailtext2").hasClass("five")) {
      $(".five").text("VIEW MILKS MENU");
    };
});


  $("#thumbnail5").on("mouseout", function () {
    if($(".thumbnailtext2").hasClass("five")) {
      $(".five").text("");
    };
});

    $("#thumbnail6").on("mouseover", function () {
      if($(".thumbnailtext2").hasClass("six")) {
        $(".six").text("VIEW MILKS MENU");
      };
    });

    $("#thumbnail6").on("mouseout", function () {
      if($(".thumbnailtext2").hasClass("six")) {
        $(".six").text("");
      };
});

      $("#thumbnail7").on("mouseover", function () {
        if($(".thumbnailtext2").hasClass("seven")) {
          $(".seven").text("VIEW MILKS MENU");
        };
      });

      $("#thumbnail7").on("mouseout", function () {
        if($(".thumbnailtext2").hasClass("seven")) {
          $(".seven").text("");
        };
});
        $("#thumbnail8").on("mouseover", function () {
          if($(".thumbnailtext2").hasClass("eight")) {
            $(".eight").text("VIEW MILKS MENU");
          }
        });

        $("#thumbnail8").on("mouseout", function () {
          if($(".thumbnailtext2").hasClass("eight")) {
            $(".eight").text("");
          };
});




  });



// });
