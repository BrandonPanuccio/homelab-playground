package com.bpanuccio.homelabplayground.service;

import com.bpanuccio.homelabplayground.dto.SystemInfoResponse;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;

@Service
public class SystemInfoService {

    public SystemInfoResponse getSystemInfo() {
        return new SystemInfoResponse(
                "Homelab Playground API",
                "API is running",
                OffsetDateTime.now().toString()
        );
    }
}