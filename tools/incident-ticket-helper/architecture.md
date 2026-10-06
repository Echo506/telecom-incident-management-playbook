# Tool Architecture

```mermaid
flowchart LR
    A[Analyst enters incident data] --> B[Browser extension popup]
    B --> C[Input validation]
    C --> D[Structured incident content]
    D --> E[Manual review]
    E --> F[Authorized ticketing system]
```

## Security Principles

- Local processing where possible
- No unnecessary external network requests
- Least-privilege browser permissions
- No credential collection
- No transmission of confidential information
- Manual review before operational use
