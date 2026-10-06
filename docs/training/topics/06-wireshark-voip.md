# Module 6: Wireshark for VoIP Analysis

## Learning Objective

Use Wireshark to capture, filter, and analyze VoIP traffic to diagnose call quality and connectivity issues.

---

## Foundational Knowledge You Need

Before diving into this module, understand:

- **Basic VoIP concepts**: SIP for signaling, RTP for media.
- **Network fundamentals**: IP addresses, ports, UDP vs. TCP.
- **What is a packet capture**: Recording network traffic for analysis.
- **Wireshark basics**: How to start/stop a capture, basic interface.

---

## Key Teaching Points

### 1. Wireshark Interface Overview

**Main sections:**

- **Packet List**: Top pane showing all captured packets.
- **Packet Details**: Middle pane showing protocol layers for selected packet.
- **Packet Bytes**: Bottom pane showing raw hex data.
- **Filter Bar**: Where you type display filters (e.g., `sip`, `rtp`).
- **Capture Menu**: Start/stop/save captures.

**Essential shortcuts:**

- `Ctrl + E`: Start/stop capture.
- `Ctrl + F`: Find packet.
- `Ctrl + Shift + F`: Find packet (advanced).
- `/`: Quick filter (type filter and press Enter).
- `Ctrl + R`: Reload capture.

### 2. Capture Filters vs. Display Filters

**Capture filters** (set before capturing):

- Reduce what's captured (saves disk space).
- Syntax: BPF (Berkeley Packet Filter).
- Examples:
  - `host 192.168.1.100` (only traffic to/from this IP).
  - `port 5060` (only SIP traffic).
  - `net 192.168.1.0/24` (only this subnet).

**Display filters** (applied after capturing):

- Hide/show packets without deleting them.
- Syntax: Wireshark filter language.
- Examples:
  - `sip` (show only SIP packets).
  - `rtp` (show only RTP packets).
  - `ip.addr == 192.168.1.100` (traffic involving this IP).
  - `sip.Method == "INVITE"` (only INVITE messages).

### 3. Filtering SIP Traffic

**Basic filters:**

sip # All SIP packets
sip.Method == "INVITE" # Only INVITE messages
sip.Method == "BYE" # Only BYE messages
sip.Status-Code == 200 # Only 200 OK responses
sip.Status-Code >= 400 # Only error responses


**Finding call flows:**

1. Filter: `sip`.
2. Look for: INVITE → 100 Trying → 180 Ringing → 200 OK → ACK.
3. Select the INVITE packet.
4. Right-click → "Follow" → "UDP Stream" (to see full conversation).

**Key SIP fields to check:**

- `sip.Method`: Type of message (INVITE, BYE, REGISTER, etc.).
- `sip.Status-Code`: Response code (200, 404, 503, etc.).
- `sip.from.user`: Caller's extension/number.
- `sip.to.user`: Callee's extension/number.
- `sip.Contact`: Where to send subsequent requests.
- `sdp.c.connection_info`: IP address for RTP media.

### 4. Filtering RTP Traffic

**Basic filters:**

rtp # All RTP packets
rtp.ssrc == 0x12345678 # Specific stream (SSRC)
udp.port >= 10000 && udp.port <= 20000 # Typical RTP port range


**Finding RTP streams:**

1. Make a test call.
2. Start capture before the call.
3. Filter: `rtp`.
4. Look for: UDP packets with payload type (PT) 0, 8, 18, etc. (codecs).
5. Right-click → "Follow" → "UDP Stream" (to see the stream).

**Key RTP fields to check:**

- `rtp.ssrc`: Stream identifier (unique per call direction).
- `rtp.seq`: Sequence number (detect packet loss).
- `rtp.timestamp`: Timing info (detect jitter).
- `rtp.payload_type`: Codec used (0 = G.711 PCMU, 8 = G.711 PCMA, 18 = G.729).
- `rtp.jitter`: Calculated jitter (if available).
- `rtp.lost`: Packets lost (if available).

### 5. Analyzing Call Quality

**Metrics to check:**

| Metric | Good | Acceptable | Poor |
|--------|------|------------|------|
| **Latency** | <100ms | 100–150ms | >150ms |
| **Jitter** | <20ms | 20–30ms | >30ms |
| **Packet Loss** | 0% | <1% | >1% |
| **MOS Score** | 4.0+ | 3.5–4.0 | <3.5 |

**How to find these in Wireshark:**

1. **Jitter & Packet Loss:**
   - Telephony → RTP → Stream Analysis.
   - Select the stream → Click "Analyze".
   - Look at: "Lost", "Out of order", "Jitter (ms)".

2. **Latency:**
   - Not directly shown in Wireshark.
   - Estimate from RTCP reports (if available).
   - Or use ping to the PBX as a proxy.

3. **MOS Score:**
   - Some captures include RTCP with MOS.
   - Filter: `rtcp`.
   - Look for "Mean Opinion Score" field.

### 6. Identifying Common VoIP Issues

#### One-Way Audio

**Symptoms in capture:**

- RTP stream exists in one direction only.
- Check SDP: Are both sides advertising correct IPs?

**Troubleshooting:**

1. Filter: `rtp`.
2. Count streams: Do you see 2 (bidirectional) or 1 (unidirectional)?
3. Check SDP in INVITE and 200 OK:
   - `c=IN IP4 192.168.1.100` (private IP behind NAT = problem).
4. Verify firewall allows RTP ports (10000–20000) outbound.

#### Call Drops After X Seconds

**Symptoms in capture:**

- Call establishes normally.
- Suddenly BYE or no more RTP.
- May see SIP re-INVITE failures.

**Troubleshooting:**

1. Filter: `sip`.
2. Look for: BYE message (who sent it?).
3. Check time between INVITE and BYE.
4. Look for: Firewall timeouts, NAT issues, SIP ALG interference.

#### No Audio (Silence Both Ways)

**Symptoms in capture:**

- SIP call setup succeeds (200 OK, ACK).
- No RTP packets, or RTP to wrong IP/port.

**Troubleshooting:**

1. Filter: `sip`.
2. Check SDP in INVITE and 200 OK:
   - Are IPs routable (not private behind NAT)?
   - Are ports in expected range (10000–20000)?
3. Filter: `rtp`.
4. Are there ANY RTP packets? If not, media negotiation failed.

#### Registration Failures

**Symptoms in capture:**

- REGISTER messages but no 200 OK.
- May see 401/407 (auth challenges) or 503 (service unavailable).

**Troubleshooting:**

1. Filter: `sip.Method == "REGISTER"`.
2. Check responses:
   - 200 OK = success.
   - 401/407 = authentication issue (check credentials).
   - 503 = server unavailable (check PBX status).
   - No response = network/firewall issue.

### 7. Wireshark's VoIP-Specific Tools

**Telephony Menu:**

- **VoIP Calls**: Shows all detected calls with summary.
  - Select a call → Click "Flow Sequence" (visual call flow).
  - Click "Player" (if audio export is possible).

- **RTP → Stream Analysis**:
  - Select an RTP stream.
  - Shows: Packet count, lost packets, jitter, max/avg delta.

- **SIP → Call Flow**:
  - Visual diagram of SIP messages for selected call.

**Exporting Audio (if supported):**

1. Telephony → VoIP Calls.
2. Select the call.
3. Click "Save As" (if codec is supported).
4. Play back in external player (for quality testing).

---

## Hands-On Exercises

### Exercise 1: Capture a Test Call

1. Start Wireshark capture on your network interface.
2. Make a VoIP call (or use a softphone).
3. Stop capture after call ends.
4. Save the file as `test-call.pcapng`.

**Analysis:**

1. Filter: `sip`. Count INVITE, 200 OK, BYE messages.
2. Filter: `rtp`. Count RTP packets.
3. Telephony → VoIP Calls → Select your call → Note duration, packet count.

---

### Exercise 2: Identify SIP Messages

Using your captured file (or a sample pcap):

1. Filter: `sip`.
2. Find and note the packet numbers for:
   - INVITE
   - 100 Trying
   - 180 Ringing
   - 200 OK
   - ACK
   - BYE
3. For the INVITE packet, note:
   - Caller (From:)
   - Callee (To:)
   - SDP connection IP (`c=IN IP4 x.x.x.x`)
   - Codec offered (in SDP).

---

### Exercise 3: Analyze RTP Quality

1. Filter: `rtp`.
2. Telephony → RTP → Stream Analysis.
3. Select your RTP stream.
4. Record:
   - Total packets.
   - Lost packets (%).
   - Jitter (ms).
   - Payload type (codec).

**Interpretation:**

- Is jitter <30ms?
- Is packet loss <1%?
- What codec is being used?

---

### Exercise 4: Diagnose a Problem Capture

You're given a pcap file with a known issue (one-way audio, no audio, or call drop).

**Your tasks:**

1. Filter: `sip`. Identify the call flow.
2. Filter: `rtp`. Check if media is flowing.
3. Telephony → VoIP Calls → Analyze the stream.
4. Identify the issue and root cause.
5. Document your findings and recommended fix.

---

### Exercise 5: Build a Wireshark Filter Cheat Sheet

Create a one-page reference with:

- Common display filters (sip, rtp, ip.addr, etc.).
- Filter examples for specific scenarios.
- Key fields to check in SIP and RTP packets.
- Menu paths for VoIP analysis tools.

Example:

SIP Filters
sip
sip.Method == "INVITE"
sip.Status-Code >= 400

RTP Filters
rtp
udp.port >= 10000 && udp.port <= 20000

IP Filters
ip.addr == 192.168.1.100
ip.src == 10.0.0.1


---

## Additional Resources

- **LinkedIn Learning Course**: [Wireshark: VoIP](https://spectrotel.lightning.force.com/lightning/r/Knowledge__kav/ka08W000000BB2DQAW/view?ws=%2Flightning%2Fr%2FCase%2F500Ub00000vUns5IAC%2Fview) – 1h 37m
- **Wireshark Official Docs**: https://wiki.wireshark.org/
- **Sample VoIP Captures**: https://wiki.wireshark.org/SampleCaptures#voip

---

## Completion Checklist

- [ ] Read and understand all key teaching points.
- [ ] Complete all 5 hands-on exercises.
- [ ] Create your Wireshark filter cheat sheet.
- [ ] Capture and analyze at least 1 real VoIP call.
- [ ] Move on to [Module 7: Firewall Administration Essentials](07-firewall-essentials.md).

---

**Next Module**: [Firewall Administration Essentials](07-firewall-essentials.md)
