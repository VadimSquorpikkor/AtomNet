<?php
$myfile = fopen("Input.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("Input.txt"));
fclose($myfile);
?>
