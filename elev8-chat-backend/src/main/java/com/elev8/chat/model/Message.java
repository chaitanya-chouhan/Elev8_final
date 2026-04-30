package com.elev8.chat.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

/**
 * Message entity - represents a single chat message in the community.
 * Maps to the "message" table in H2 database.
 *
 * Fields:
 *   id        - auto-generated primary key
 *   sender    - name of the person who sent the message
 *   content   - the text of the message
 *   timestamp - when the message was sent (set automatically)
 */
@Entity
@Table(name = "message")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String sender;

    @Column(columnDefinition = "TEXT")
    private String content;

    private LocalDateTime timestamp;

    // Called automatically before saving to DB — sets the timestamp
    @PrePersist
    public void prePersist() {
        this.timestamp = LocalDateTime.now();
    }

    // --- Constructors ---
    public Message() {}

    public Message(String sender, String content) {
        this.sender = sender;
        this.content = content;
    }

    // --- Getters & Setters ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getSender() { return sender; }
    public void setSender(String sender) { this.sender = sender; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }
}
