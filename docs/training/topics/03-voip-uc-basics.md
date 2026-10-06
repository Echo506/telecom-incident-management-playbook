# Module 3: VoIP & Unified Communications Basics

## Learning Objective

Understand how Voice over IP (VoIP) works and troubleshoot common issues in unified communications systems.

---

## Foundational Knowledge You Need

Before diving into this module, understand:

- **Basic networking concepts**: IP addresses, ports, UDP vs. TCP.
- **What is VoIP**: Voice transmitted over IP networks instead of traditional phone lines.
- **Common VoIP terms**: SIP, RTP, codec, PBX, endpoint.
- **How traditional phones differ from VoIP phones**: Circuit-switched vs. packet-switched.

---

## Key Teaching Points

### 1. VoIP Protocols Explained

#### SIP (Session Initiation Protocol)

- **Purpose**: Sets up, manages, and tears down voice/video calls.
- **Port**: 5060 (UDP/TCP), 5061 (TLS for encrypted).
- **Key messages**:
  - `INVITE`: Start a call.
  - `ACK`: Confirm call setup.
  - `BYE`: End a call.
  - `REGISTER`: Endpoint registers with server.
  - `4xx/5xx/6xx`: Error responses (e.g., 404 Not Found, 503 Service Unavailable).

#### RTP (Real-time Transport Protocol)

- **Purpose**: Carries the actual audio/video stream.
- **Port range**: Typically 10000–20000 (UDP).
- **Characteristics**:
  - Uses UDP (not TCP) for low latency.
  - Sensitive to jitter, packet loss, and latency.
  - Each call uses 2 RTP streams (one each direction).

#### SDP (Session Description Protocol)

- **Purpose**: Negotiates call parameters (codec, ports, IP addresses).
- **Embedded in**: SIP messages (INVITE, 200 OK).

### 2. How a VoIP Call Works

Simplified flow:
