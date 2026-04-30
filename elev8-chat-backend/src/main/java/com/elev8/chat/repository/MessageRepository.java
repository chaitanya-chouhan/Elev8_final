package com.elev8.chat.repository;

import com.elev8.chat.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * MessageRepository - Spring Data JPA automatically generates all
 * basic database operations (save, findAll, findById, delete, etc.)
 *
 * We add one custom method: findAllByOrderByTimestampAsc()
 * Spring reads the method name and builds the SQL query automatically:
 *   SELECT * FROM message ORDER BY timestamp ASC
 */
public interface MessageRepository extends JpaRepository<Message, Long> {

    // Returns all messages sorted oldest → newest (chat order)
    List<Message> findAllByOrderByTimestampAsc();
}
