package com.systros.bikehype;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DefaultController {

    @GetMapping
    public ResponseEntity<String> get() {
        return ResponseEntity.ok("All is OK!");
    }
}
