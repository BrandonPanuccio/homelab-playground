package com.bpanuccio.homelabplayground.dto;

public record SystemInfoResponse(
        String appName,
        String message,
        String serverTime
) {
}