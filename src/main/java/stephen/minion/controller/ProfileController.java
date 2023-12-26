package stephen.minion.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProfileController {
    @GetMapping("/demo")
    public ResponseEntity<String> Demo() {
        return ResponseEntity.ok("Hello, This is Demo");
    }
}
