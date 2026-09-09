<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
header('Connection: keep-alive');
header('X-Accel-Buffering: no');

ini_set('output_buffering', '0');
ini_set('zlib.output-compression', '0');
ini_set('implicit_flush', '1');
ob_implicit_flush(1);

while (ob_get_level() > 0) {
    ob_end_flush();
}

set_time_limit(0);

$i = 0;
while (true) {
    $i++;
    $time = date('H:i:s');
    echo "data: The server time is : {$time} (update #{$i})\n\n";
    ob_flush();
    flush();

    if (connection_aborted()) {
        break;
    }
    sleep(2);
}
?>
