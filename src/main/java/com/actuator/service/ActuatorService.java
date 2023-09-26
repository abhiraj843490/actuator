package com.actuator.service;

import com.actuator.model.dto.Health;
import com.actuator.model.dto.Metrics;
import org.springframework.stereotype.Service;

@Service
public interface ActuatorService {
    Health getHealth();

    Metrics getMetrics();
}

