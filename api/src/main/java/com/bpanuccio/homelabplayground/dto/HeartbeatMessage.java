package com.bpanuccio.homelabplayground.dto;

public record HeartbeatMessage(
        String message,
        String timestamp
) {
}