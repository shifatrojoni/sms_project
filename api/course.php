<?php
include 'db_config.php';
$products = [];

$sql = "SELECT * FROM tblcourse";
if($result = $db->query($sql))
{
	$i = 1;
	while($row = $result->fetch_assoc())
	{
		$products[$i]['ID'] = $row['ID'];
		$products[$i]['courses-name'] = $row['courses-name'];
		$products[$i]['p-date'] = $row['p-date'];
		$products[$i]['Upload-path'] = $row['Upload-path'];
		$i++;
	}
	echo json_encode($products);
}
else
{
	http_response_code(404);
}

 	