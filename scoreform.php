<!DOCTYPE html>
<html>
<head>
</head>
<body>


	<?php
		$scoreFile = 'data/score.json';
		$fh = fopen($scoreFile, 'w') or die("impossible to open file");
	    $scoreData = array($_POST['color0'] => intval($_POST['score0']), $_POST['color1'] => intval($_POST['score1']));
		//$scoreData = $_POST['redScore'];
		$scoreData=json_encode($scoreData);
		echo $scoreData;
		fwrite($fh, $scoreData);
		fclose($fh);
	?>

</body>
</html>
