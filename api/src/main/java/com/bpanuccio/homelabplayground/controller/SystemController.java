package com.bpanuccio.homelabplayground.controller;

import com.bpanuccio.homelabplayground.dto.SystemInfoResponse;
import com.bpanuccio.homelabplayground.service.SystemInfoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SystemController {

    private final SystemInfoService systemInfoService;

    public SystemController(SystemInfoService systemInfoService) {
        this.systemInfoService = systemInfoService;
    }

    @GetMapping("/api/info")
    public SystemInfoResponse getSystemInfo() {
        return systemInfoService.getSystemInfo();
    }
}