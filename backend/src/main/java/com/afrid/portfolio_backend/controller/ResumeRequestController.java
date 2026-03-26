package com.afrid.portfolio_backend.controller;

import com.afrid.portfolio_backend.entity.ResumeRequest;
import com.afrid.portfolio_backend.repository.ResumeRequestRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/resume-request")
@CrossOrigin(origins = "http://localhost:3000")
public class ResumeRequestController {

    private final ResumeRequestRepository repository;

    public ResumeRequestController(ResumeRequestRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResumeRequest saveRequest(@RequestBody ResumeRequest request) {
        return repository.save(request);
    }
}