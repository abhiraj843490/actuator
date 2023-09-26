package com.actuator.controller;

import com.actuator.model.dto.Health;
import com.actuator.model.dto.Metrics;
import com.actuator.service.ActuatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ActuatorController {
    @Autowired
    private ActuatorService service;
    @GetMapping("/health")
    public Health health(){
        return service.getHealth();
    }
    @GetMapping("/metrics")
    public Metrics metrics(){
        return service.getMetrics();
    }



}
