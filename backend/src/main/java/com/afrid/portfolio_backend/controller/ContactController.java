package com.afrid.portfolio_backend.controller;

import com.afrid.portfolio_backend.entity.ContactMessage;
import com.afrid.portfolio_backend.repository.ContactMessageRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    @PostMapping
    public ResponseEntity<String> saveContact(@RequestBody ContactMessage contactMessage) {
        contactMessageRepository.save(contactMessage);
        return ResponseEntity.ok("Message sent successfully");
    }
}