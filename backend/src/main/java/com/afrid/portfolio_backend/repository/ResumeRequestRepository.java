package com.afrid.portfolio_backend.repository;

import com.afrid.portfolio_backend.entity.ResumeRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResumeRequestRepository extends JpaRepository<ResumeRequest, Long> {
}