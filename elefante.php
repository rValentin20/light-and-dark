<h1 class="text-center" style="color: #E0E153;">  
            <?php

            if (isset($_POST['nombre']) && isset($_POST['celular'])) {
                $nombre = $_POST['nombre'];
                $celular = $_POST['celular'];

                $para = "vchavez9@misena.edu.co";
                $asunto = "Nuevo mensaje desde Contacto Portafilio";
                $mensaje = "Nombre: " . $nombre . "\nCelular: " . $celular;
                $cabeceras = "From: vchavez9@misena.edu.co" . "\r\n" .
                    "Reply-To: vchavez9@misena.edu.co" . "\r\n" .
                    "X-Mailer: PHP/" . phpversion();

                mail($para, $asunto, $mensaje, $cabeceras);

                echo "Mensaje enviado correctamente";
            }

            ?></h1>