package com.elev8.chat.controller;

import com.elev8.chat.model.Message;
import com.elev8.chat.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * MessageController - handles HTTP requests for the chat feature.
 *
 * Endpoints:
 *   GET  /api/messages         → returns all messages (oldest first)
 *   POST /api/messages         → saves a new message, returns it back
 *   GET  /api/messages/health  → simple health-check endpoint
 */
@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*")   // Allow React (any origin) to call this API
public class MessageController {

    // Spring automatically injects the repository (Dependency Injection)
    @Autowired
    private MessageRepository messageRepository;

    /**
     * GET /api/messages
     * Returns all messages sorted oldest → newest.
     */
    @GetMapping
    public List<Message> getAllMessages() {
        return messageRepository.findAllByOrderByTimestampAsc();
    }

    /**
     * POST /api/messages
     * Accepts JSON body: { "sender": "Alice", "content": "Hello!" }
     * Saves the message to DB and returns the saved object (with id + timestamp).
     */
    @PostMapping
    public ResponseEntity<Message> sendMessage(@RequestBody Map<String, String> body) {
        String sender  = body.get("sender");
        String content = body.get("content");

        // Basic validation
        if (sender == null || sender.isBlank() || content == null || content.isBlank()) {
            return ResponseEntity.badRequest().build();
        }

        Message msg = new Message(sender, content);
        Message saved = messageRepository.save(msg);
        return ResponseEntity.ok(saved);
    }

    /**
     * GET /api/messages/health
     * Quick health check — open this in a browser to confirm the server is up.
     * Returns: { "status": "Elev8 Chat API is running!" }
     */
    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "Elev8 Chat API is running!");
    }
}
