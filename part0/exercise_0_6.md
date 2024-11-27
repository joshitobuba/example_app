```mermaid
  sequenceDiagram
    autonumber
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Response HTTP (JSON Data included)
    deactivate server

    note left of browser: The JavaScript code that fetches the JSON from the server

```
