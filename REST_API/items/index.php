<?php
  session_start();
  // Display all warnings
  ini_set('display_errors', '1');
  ini_set('display_startup_errors', '1');
  error_reporting(E_ALL);
  ob_start();
?>
<?php 
	$link = mysqli_connect('localhost', 'marang', 'marang-xmlpub13', 'marang');
	if (mysqli_connect_errno()) {
		printf("Connection failed: %s\n", mysqli_connect_error());
		exit();
	}

	$category='mens';
	$query="SELECT * FROM ocs_items NATURAL JOIN ocs_images WHERE Category='$category'";

	if (($result=mysqli_query($link, $query)) === false) {
	  	printf("Query failed: %s <br />\n%s", $query, mysqli_error($link));
	  	exit();
	}
	
	$items = '';
	$rowcount=mysqli_num_rows($result);
	$i = 1;
	while ($row=$result->fetch_object()) {
		$element = '{"Name":"'.$row->Title.'", "Price":"'.$row->Price.'", "Description":"'.$row->Description.'", "imageUrl":"'.$row->Image_url.'"}';
		if ($i != $rowcount){
			$items .= $element.',';
		}else{
			$items .= $element;
		}
		$i = $i + 1;
	}

	$data='{"data":['.$items.']}';

	print_r($data);
	mysqli_free_result($result);
	header('Access-Control-Allow-Origin: *');
?>