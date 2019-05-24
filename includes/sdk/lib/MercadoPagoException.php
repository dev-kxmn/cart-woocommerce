<?php

/**
 * Class MercadoPagoException
 */
class MercadoPagoException extends Exception {

    /**
     * MercadoPagoException constructor.
     * @param $message
     * @param int $code
     * @param Exception|null $previous
     */
    public function __construct( $message, $code = 500, Exception $previous = null ) {
        parent::__construct( $message, $code, $previous );
    }
}