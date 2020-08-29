package com.espark.adarsh.exception.handler;

import com.espark.adarsh.bean.ResponseBean;
import com.espark.adarsh.exception.ResourceNotFound;
import org.springframework.core.convert.ConversionFailedException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalControllerExceptionHandler {


    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ResponseBean<Map<String, String>>> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        ResponseBean<Map<String, String>> responseBean = new ResponseBean<>();
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        responseBean.setData(errors);
        return new ResponseEntity<ResponseBean<Map<String, String>>>(responseBean, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ConversionFailedException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ResponseBean<String>> handleConnversion(RuntimeException ex) {
        ResponseBean<String> responseBean = new ResponseBean<>();
        responseBean.setMessage(ex.getMessage());
        responseBean.setError(ex.getLocalizedMessage());
        return new ResponseEntity<ResponseBean<String>>(responseBean, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ResourceNotFound.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<ResponseBean<String>> handleResourceNotFound(ResourceNotFound ex) {
        ResponseBean<String> responseBean = new ResponseBean<>();
        responseBean.setMessage(ex.getMessage());
        responseBean.setError(ex.getLocalizedMessage());
        return new ResponseEntity<ResponseBean<String>>(responseBean, HttpStatus.NOT_FOUND);
    }


    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<ResponseBean<String>> handleException(Exception ex) {
        ResponseBean<String> responseBean = new ResponseBean<>();
        responseBean.setMessage(ex.getMessage());
        responseBean.setError(ex.getLocalizedMessage());
        return new ResponseEntity<ResponseBean<String>>(responseBean, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
