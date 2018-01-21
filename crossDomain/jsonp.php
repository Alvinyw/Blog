<?php

$callback = $_GET['callback'];//得到回调函数名

$data = '{
  "Nmae": "Alvin",
  "Age": "xx",
  "Weight": "8.8.8.8"
}';//要返回的数据

echo $callback.'('.json_encode($data).')';//输出

?>