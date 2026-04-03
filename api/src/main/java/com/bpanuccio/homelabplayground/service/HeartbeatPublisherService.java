package com.bpanuccio.homelabplayground.service;

import com.bpanuccio.homelabplayground.dto.HeartbeatMessage;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.OffsetDateTime;

@Service
public class HeartbeatPublisherService {

    private final SimpMessagingTemplate messagingTemplate;

    public HeartbeatPublisherService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @Scheduled(fixedRate = 1000)
    public void publishHeartbeat() {
        HeartbeatMessage heartbeatMessage = new HeartbeatMessage(
                "Heartbeat from API",
                OffsetDateTime.now().toString()
        );

        messagingTemplate.convertAndSend("/topic/heartbeat", heartbeatMessage);
    }
}