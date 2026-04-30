# Elev8 Chat Backend — Setup & Run Instructions

> **Stack:** Java 21 · Spring Boot 3.2.5 · H2 In-Memory DB · Maven

---

## Prerequisites

| Tool | Required Version | Download |
|------|-----------------|---------|
| Java JDK | 21+ | https://adoptium.net |
| Apache Maven | 3.8+ | https://maven.apache.org/download.cgi |

### Verify installations

```powershell
java -version    # should print: openjdk 21...
mvn -version     # should print: Apache Maven 3.x.x
```

> **⚠️ Maven not found?**  
> If `mvn` is not recognized, you need to add it to your PATH permanently:
> 1. Extract Maven to a folder, e.g. `C:\apache-maven-3.9.15`
> 2. Open **System Properties → Environment Variables**
> 3. Under **System Variables**, find `Path` → click **Edit**
> 4. Add a new entry: `C:\apache-maven-3.9.15\bin`
> 5. Click OK and **restart your terminal**

---

## Project Structure

```
elev8-chat-backend/
├── pom.xml                          ← Maven build file (dependencies)
└── src/
    └── main/
        ├── java/com/elev8/chat/
        │   ├── Elev8ChatApplication.java    ← Entry point (main class)
        │   ├── controller/
        │   │   └── MessageController.java   ← REST API endpoints
        │   ├── model/
        │   │   └── Message.java             ← Database entity (table schema)
        │   └── repository/
        │       └── MessageRepository.java   ← Database queries
        └── resources/
            └── application.properties       ← Server & DB configuration
```

---

## Running the Backend

### Step 1 — Navigate to the backend folder

```powershell
cd "C:\Users\soham\OneDrive\Desktop\elev8\Elev8_final\elev8-chat-backend"
```

### Step 2 — Start the server

```powershell
mvn spring-boot:run
```

You should see output ending with:

```
Started Elev8ChatApplication in X.XXX seconds
```

The backend is now running at **http://localhost:8080**

### Step 3 — Verify it's working

Open your browser and go to:

```
http://localhost:8080/api/messages/health
```

Expected response:
```json
{ "status": "Elev8 Chat API is running!" }
```

### Stopping the server

Press `Ctrl + C` in the terminal.

---

## API Endpoints

| Method | URL | Description | Request Body |
|--------|-----|-------------|--------------|
| `GET` | `/api/messages` | Get all messages (oldest first) | — |
| `POST` | `/api/messages` | Send a new message | `{ "sender": "Alice", "content": "Hello!" }` |
| `GET` | `/api/messages/health` | Health check | — |

### Example — Send a message (PowerShell)

```powershell
Invoke-RestMethod -Uri "http://localhost:8080/api/messages" `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"sender":"Alice","content":"Hello Elev8!"}'
```

### Example — Get all messages (PowerShell)

```powershell
Invoke-RestMethod -Uri "http://localhost:8080/api/messages"
```

---

## H2 Database Console

Since this project uses an **in-memory H2 database** (no MySQL/Postgres setup needed), you can inspect the database live in your browser:

1. Go to: **http://localhost:8080/h2-console**
2. Use these credentials:
   - **JDBC URL:** `jdbc:h2:mem:elev8chat`
   - **Username:** `sa`
   - **Password:** *(leave blank)*
3. Click **Connect**

You can now run SQL queries like:
```sql
SELECT * FROM MESSAGE ORDER BY TIMESTAMP ASC;
```

> **Note:** All data is wiped when the server stops (in-memory = no persistence). This is intentional for demos.

---

## Configuration Reference

File: `src/main/resources/application.properties`

| Property | Value | Purpose |
|----------|-------|---------|
| `server.port` | `8080` | Port the API runs on |
| `spring.datasource.url` | `jdbc:h2:mem:elev8chat` | In-memory H2 database |
| `spring.jpa.hibernate.ddl-auto` | `create-drop` | Auto-creates tables on start, drops on stop |
| `spring.jpa.show-sql` | `true` | Prints SQL queries to console (useful for debugging) |
| `spring.h2.console.enabled` | `true` | Enables the H2 browser console |

---

## Connecting to the React Frontend

The backend has `@CrossOrigin(origins = "*")` enabled, so it accepts requests from any origin — including the React dev server on `http://localhost:5173`.

In your React code, call the backend like this:

```js
// Fetch all messages
const res = await fetch("http://localhost:8080/api/messages");
const messages = await res.json();

// Send a message
await fetch("http://localhost:8080/api/messages", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ sender: "Alice", content: "Hello!" }),
});
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| `mvn` not recognized | Add Maven's `bin` folder to your system `Path` (see Prerequisites) |
| `java` not found | Install JDK 21 from https://adoptium.net and add it to `Path` |
| Port 8080 already in use | Kill the process: `netstat -ano \| findstr :8080`, then `taskkill /PID <pid> /F` |
| CORS error in browser | Already handled via `@CrossOrigin(origins = "*")` — no action needed |
| Data disappears on restart | Expected behavior — H2 is in-memory. Switch to MySQL for persistence |
| `BUILD FAILURE` on `mvn spring-boot:run` | Run `mvn clean` first, then retry |

---

## Building a JAR (optional)

To package the app into a standalone `.jar` file:

```powershell
mvn clean package
java -jar target/elev8-chat-backend-1.0.0.jar
```

---

*Backend version: `1.0.0` · Spring Boot `3.2.5` · Java `21`*
