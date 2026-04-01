package com.afrid.portfolio_backend.controller;

import com.afrid.portfolio_backend.entity.ResumeRequest;
import com.afrid.portfolio_backend.repository.ResumeRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/resume-request")
@CrossOrigin(origins = "http://localhost:3000")
public class ResumeRequestController {

    @Autowired
    private ResumeRequestRepository resumeRequestRepository;

    @PostMapping
    public ResponseEntity<String> saveResumeRequest(@RequestBody ResumeRequest request) {
        resumeRequestRepository.save(request);
        return ResponseEntity.ok("Resume request sent successfully");
    }
}