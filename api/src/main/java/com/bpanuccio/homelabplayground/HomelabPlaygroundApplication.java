package com.bpanuccio.homelabplayground;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class HomelabPlaygroundApplication {

    public static void main(String[] args) {
        SpringApplication.run(HomelabPlaygroundApplication.class, args);
    }
}