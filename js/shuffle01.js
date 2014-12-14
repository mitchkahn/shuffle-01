/**
 * Created by mkahn on 12/13/14.
 */

 $(document).ready(function(){

      setInterval(function(){getScores()}, 100); //Refreshes the scores every 100 milliseconds

      function getScores() {	//polls the scores from the Overplay score.json file
        $.ajax({
          type: "GET",
          url: "data/score.json",
          dataType: "json",
          success: function( score ) {
            $("#reddisplay").html(score.red);
            $("#bluedisplay").html(score.blue);

          },
          error: function(error) {
            $("#error").html("Error fetching score...");
            $("#reddisplay").html("---");
            $("#bluedisplay").html("---");
          }
        });

      }; // end of getScores()

    });
