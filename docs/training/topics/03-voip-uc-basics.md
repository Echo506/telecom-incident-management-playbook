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

Phone A PBX/Server Phone B
| | |
|------- INVITE ---------->| |
| |------- INVITE -------->|
| |<------ 200 OK ---------|
|<------ 200 OK -----------| |
|--------- ACK ----------->| |
| |--------- ACK ---------->|
|<======== RTP Stream =====|====== RTP Stream ======>|
| | |
|--------- BYE ------------| |
| |--------- BYE ---------->|
| | |


**Key points:**
- SIP sets up the call (signaling).
- RTP carries the audio (media).
- Both must work for a successful call.

### 3. Common VoIP Issues & Symptoms

| Issue | Symptom | Likely Cause |
|-------|---------|--------------|
| One-way audio | Can hear but not be heard (or vice versa) | NAT/firewall blocking RTP, codec mismatch |
| No audio | Call connects but silence both ways | RTP ports blocked, misconfigured endpoints |
| Call drops | Calls disconnect after X seconds | Firewall timeout, SIP ALG interference |
| No ringback | Caller hears silence before answer | Media path issue, early media not configured |
| Registration failed | Phone shows "unregistered" | Wrong credentials, network unreachable, port blocked |
| Choppy audio | Voice cuts in and out | Jitter, packet loss, insufficient bandwidth |
| Robotic voice | Distorted, garbled audio | Packet loss, high jitter, wrong codec |

### 4. Codecs and Quality

**Common codecs:**

- **G.711**: High quality, high bandwidth (~64 kbps per call).
- **G.729**: Compressed, lower bandwidth (~8 kbps), slightly lower quality.
- **Opus**: Modern, adaptive, excellent quality at various bitrates.

**MOS Score (Mean Opinion Score):**

- 5.0 = Perfect quality.
- 4.0+ = Toll quality (acceptable for business).
- 3.5–4.0 = Degraded but usable.
- <3.5 = Poor, complaints expected.

**Factors affecting quality:**
- Latency >150ms = noticeable delay.
- Jitter >30ms = choppy audio.
- Packet loss >1% = degraded quality.

### 5. NAT and Firewall Considerations

**The problem:**
- VoIP phones behind NAT have private IPs (e.g., 192.168.x.x).
- SIP messages may contain private IPs in SDP.
- Remote end tries to send RTP to private IP = fails.

**Solutions:**
- Use a Session Border Controller (SBC).
- Configure STUN/TURN/ICE on endpoints.
- Disable SIP ALG on firewalls (often causes more problems than it solves).
- Ensure RTP port range (10000–20000) is open outbound.

### 6. Hosted PBX vs. On-Premise vs. UCaaS

| Type | Description | Pros | Cons |
|------|-------------|------|------|
| **Hosted PBX** | Provider hosts the PBX in the cloud | Low upfront cost, managed by provider | Monthly fees, less control |
| **On-Premise PBX** | PBX hardware on customer site | Full control, no monthly fees | High upfront cost, requires maintenance |
| **UCaaS** (Unified Communications as a Service) | Cloud platform with voice, video, chat, collaboration | Scalable, feature-rich, integrated | Dependent on internet, vendor lock-in |

**Examples:**
- Hosted PBX: 8x8, CoreDial, Windstream, Intelepeer.
- On-Premise: Cisco CUCM, Avaya Aura.
- UCaaS: Microsoft Teams Phone, Zoom Phone, RingCentral.

---

## Hands-On Exercises

### Exercise 1: Diagram a Call Flow

Draw the SIP call flow for this scenario:

- User A (extension 101) calls User B (extension 102).
- Both are on the same hosted PBX.
- Call lasts 2 minutes, then User A hangs up.

Label each SIP message (INVITE, 200 OK, ACK, BYE).

---

### Exercise 2: Diagnose One-Way Audio

Scenario: Customer reports they can hear the other party, but the other party can't hear them.

Troubleshooting steps:

1. Check firewall rules: Are RTP ports (10000–20000) open outbound?
2. Verify NAT settings: Is the PBX configured for NAT traversal?
3. Check SIP ALG: Is it enabled on the firewall? (Try disabling it.)
4. Test with a different network: Does the issue persist on mobile hotspot?
5. Review endpoint settings: Is the correct codec selected?

Document your findings and resolution.

---

### Exercise 3: Codec Comparison Test

If you have access to a VoIP system:

1. Make a call using G.711. Note audio quality.
2. Make a call using G.729. Note any difference.
3. Calculate bandwidth: How many concurrent calls can a 10 Mbps link support with each codec?

Formula:
- G.711: ~64 kbps + overhead ≈ 80 kbps per call.
- G.729: ~8 kbps + overhead ≈ 24 kbps per call.

---

### Exercise 4: Identify SIP Messages in Wireshark

Download a sample VoIP pcap file (or capture your own if possible).

1. Apply filter: `sip`.
2. Identify: INVITE, 200 OK, ACK, BYE messages.
3. Note the IP addresses and ports used.
4. Look at the SDP section: What codec is negotiated?

---

### Exercise 5: Build a VoIP Troubleshooting Checklist

Create a one-page reference for VoIP issues:

- [ ] Can the phone ping the PBX?
- [ ] Is the phone registered (green light/status)?
- [ ] Are SIP and RTP ports allowed through firewall?
- [ ] Is SIP ALG disabled?
- [ ] What's the jitter/latency/packet loss to the PBX?
- [ ] Are other users affected or just one?
- [ ] Check codec settings on both ends.

---

## Additional Resources

- **LinkedIn Learning Course**: [Learning VoIP and Unified Communications](https://www.linkedin.com/learning/learning-voip-and-unified-communications/providing-voice-over-internet-protocol-voip-telephony-14173322?autoplay=true&u=85066170) – 1h 1m

---

## Completion Checklist

- [ ] Read and understand all key teaching points.
- [ ] Complete all 5 hands-on exercises.
- [ ] Create your VoIP troubleshooting checklist.
- [ ] Practice analyzing at least 1 Wireshark capture.
- [ ] Move on to [Module 4: Networking Foundations](04-networking-foundations.md).

---

**Next Module**: [Networking Foundations (IP, Subnetting, Routing)](04-networking-foundations.md)
