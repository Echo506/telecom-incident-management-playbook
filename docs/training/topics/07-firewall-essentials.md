# Module 7: Firewall Administration Essentials

## Learning Objective

Understand firewall fundamentals and how to troubleshoot firewall-related issues affecting network and VoIP traffic.

---

## Foundational Knowledge You Need

Before diving into this module, understand:

- **Basic networking**: IP addresses, ports, protocols (TCP/UDP).
- **What is a firewall**: Security device that filters network traffic.
- **OSI layers 3–4**: Network and Transport layers (IP, TCP, UDP).
- **Common services and ports**: HTTP (80), HTTPS (443), SSH (22), SIP (5060), etc.

---

## Key Teaching Points

### 1. Firewall Types Explained

#### Stateful vs. Stateless Firewalls

**Stateful firewall:**
- Tracks connection state (new, established, related).
- Allows return traffic automatically for established connections.
- More secure and easier to manage.
- Example: Modern firewalls (Fortinet, Palo Alto, Cisco ASA).

**Stateless firewall:**
- Filters each packet independently.
- Doesn't track connection state.
- Requires explicit rules for both directions.
- Example: Basic ACLs on routers, iptables without state tracking.

**Why it matters:**
- VoIP uses dynamic ports for RTP.
- Stateful firewalls can track SIP and allow related RTP.
- Stateless firewalls need wide port ranges opened.

#### Next-Generation Firewalls (NGFW)

- Traditional firewall + advanced features.
- Features:
  - Application awareness (identify Skype, Zoom, etc.).
  - Intrusion Prevention (IPS).
  - URL filtering.
  - SSL/TLS inspection.
  - User identity integration (Active Directory).

**Examples:** Fortinet FortiGate, Palo Alto, Cisco Firepower, Meraki MX.

### 2. Firewall Rules: Inbound, Outbound, and NAT

#### Inbound Rules

- Control traffic entering your network from outside.
- Typically restrictive (deny by default).
- Example: Allow inbound HTTPS (443) to web server.

Action: ALLOW
Source: Any
Destination: 203.0.113.10 (web server)
Service: TCP/443


#### Outbound Rules

- Control traffic leaving your network.
- Often more permissive (allow most, block known-bad).
- Example: Allow outbound HTTP/HTTPS for web browsing.

Action: ALLOW
Source: 192.168.1.0/24 (internal network)
Destination: Any
Service: TCP/80, TCP/443


#### NAT (Network Address Translation)

**Purpose:** Map private IPs to public IPs (and vice versa).

**Types:**

- **Source NAT (SNAT):** Internal IP → Public IP (outbound traffic).
- **Destination NAT (DNAT):** Public IP → Internal IP (inbound traffic, port forwarding).
- **Port Forwarding:** Forward specific port to internal server.

**Example: Port Forwarding for VoIP**

Public IP: 203.0.113.50
Internal PBX: 192.168.1.100

Rule:
Action: DNAT
Source: Any
Destination: 203.0.113.50
Service: TCP/5060, UDP/10000-20000
Translate to: 192.168.1.100


### 3. Critical Ports for VoIP and Network Services

| Service | Protocol | Port(s) | Direction |
|---------|----------|---------|-----------|
| **SIP (unencrypted)** | UDP/TCP | 5060 | Outbound (and inbound if receiving calls) |
| **SIP (TLS)** | TCP | 5061 | Outbound |
| **RTP (media)** | UDP | 10000–20000 | Outbound (and inbound) |
| **HTTP** | TCP | 80 | Outbound |
| **HTTPS** | TCP | 443 | Outbound |
| **DNS** | UDP/TCP | 53 | Outbound |
| **SSH** | TCP | 22 | Inbound (for management) |
| **ICMP (ping)** | ICMP | - | Both (for troubleshooting) |

**Best practices:**

- Allow outbound SIP (5060) and RTP (10000–20000) from phone subnet.
- If receiving inbound calls, forward 5060 and RTP to PBX.
- Block unsolicited inbound traffic (deny by default).
- Log denied packets for troubleshooting.

### 4. Testing Firewall Rules

#### Using Telnet (TCP ports)

```bash
telnet 203.0.113.50 5060
```

- If connection succeeds: Port is open.
- If connection fails: Port is blocked or service not listening.

#### Using Test-NetConnection (PowerShell)

```powershell
Test-NetConnection -ComputerName 203.0.113.50 -Port 5060
```

- Output: `TcpTestSucceeded: True` = port is open.

#### Using nc (Netcat, Linux/Mac)

```bash
nc -zv 203.0.113.50 5060
```

- Output: `succeeded!` = port is open.

#### Using ping (ICMP)

```bash
ping 203.0.113.50
```

- If replies: ICMP is allowed.
- If timeout: ICMP may be blocked (doesn't mean TCP/UDP is blocked).

### 5. Common Firewall Issues Affecting VoIP

#### SIP ALG (Application Layer Gateway)

**What it is:**
- Firewall feature that tries to "help" SIP traffic.
- Modifies SIP packets to fix NAT issues.

**Problem:**
- Often breaks more than it fixes.
- Changes IP/ports in SIP headers incorrectly.
- Causes: One-way audio, call drops, registration failures.

**Solution:**
- **Disable SIP ALG** on most firewalls.
- Test VoIP after disabling.

**How to check:**

- Fortinet: `config system session-helper` → look for SIP.
- Cisco: `show running-config | include sip` → look for `fixup protocol sip`.
- Meraki: Security Appliance → Firewall → SIP ALG (checkbox).

#### NAT Traversal Issues

**Symptoms:**

- One-way audio.
- Calls fail after NAT device.
- Registration works but calls don't.

**Root cause:**

- SIP messages contain private IPs in SDP.
- Remote end tries to send RTP to private IP = fails.

**Solutions:**

1. Configure NAT on PBX/phones:
   - Set external IP (public IP) in phone/PBX settings.
   - Use STUN server (if supported).
2. Ensure firewall allows RTP ports (10000–20000) outbound.
3. Disable SIP ALG (as above).

#### Asymmetric Routing

**What it is:**

- Outbound and inbound traffic take different paths.
- Firewall sees only one direction = drops traffic.

**Symptoms:**

- Intermittent call failures.
- Works sometimes, fails other times.
- Traceroute shows different paths.

**Solution:**

- Ensure symmetric routing (same path both ways).
- Adjust routing or firewall placement.

### 6. Reading Firewall Logs

**Key fields to look for:**

- **Date/Time:** When did the event occur?
- **Source IP/Port:** Where did traffic originate?
- **Destination IP/Port:** Where was it going?
- **Action:** Allow, Deny, Drop, Reject.
- **Rule/Policy:** Which rule matched?
- **Reason:** Why was it blocked (if denied)?

**Example log entry:**


### 3. Critical Ports for VoIP and Network Services

| Service | Protocol | Port(s) | Direction |
|---------|----------|---------|-----------|
| **SIP (unencrypted)** | UDP/TCP | 5060 | Outbound (and inbound if receiving calls) |
| **SIP (TLS)** | TCP | 5061 | Outbound |
| **RTP (media)** | UDP | 10000–20000 | Outbound (and inbound) |
| **HTTP** | TCP | 80 | Outbound |
| **HTTPS** | TCP | 443 | Outbound |
| **DNS** | UDP/TCP | 53 | Outbound |
| **SSH** | TCP | 22 | Inbound (for management) |
| **ICMP (ping)** | ICMP | - | Both (for troubleshooting) |

**Best practices:**

- Allow outbound SIP (5060) and RTP (10000–20000) from phone subnet.
- If receiving inbound calls, forward 5060 and RTP to PBX.
- Block unsolicited inbound traffic (deny by default).
- Log denied packets for troubleshooting.

### 4. Testing Firewall Rules

#### Using Telnet (TCP ports)

```bash
telnet 203.0.113.50 5060
```

- If connection succeeds: Port is open.
- If connection fails: Port is blocked or service not listening.

#### Using Test-NetConnection (PowerShell)

```powershell
Test-NetConnection -ComputerName 203.0.113.50 -Port 5060
```

- Output: `TcpTestSucceeded: True` = port is open.

#### Using nc (Netcat, Linux/Mac)

```bash
nc -zv 203.0.113.50 5060
```

- Output: `succeeded!` = port is open.

#### Using ping (ICMP)

```bash
ping 203.0.113.50
```

- If replies: ICMP is allowed.
- If timeout: ICMP may be blocked (doesn't mean TCP/UDP is blocked).

### 5. Common Firewall Issues Affecting VoIP

#### SIP ALG (Application Layer Gateway)

**What it is:**
- Firewall feature that tries to "help" SIP traffic.
- Modifies SIP packets to fix NAT issues.

**Problem:**
- Often breaks more than it fixes.
- Changes IP/ports in SIP headers incorrectly.
- Causes: One-way audio, call drops, registration failures.

**Solution:**
- **Disable SIP ALG** on most firewalls.
- Test VoIP after disabling.

**How to check:**

- Fortinet: `config system session-helper` → look for SIP.
- Cisco: `show running-config | include sip` → look for `fixup protocol sip`.
- Meraki: Security Appliance → Firewall → SIP ALG (checkbox).

#### NAT Traversal Issues

**Symptoms:**

- One-way audio.
- Calls fail after NAT device.
- Registration works but calls don't.

**Root cause:**

- SIP messages contain private IPs in SDP.
- Remote end tries to send RTP to private IP = fails.

**Solutions:**

1. Configure NAT on PBX/phones:
   - Set external IP (public IP) in phone/PBX settings.
   - Use STUN server (if supported).
2. Ensure firewall allows RTP ports (10000–20000) outbound.
3. Disable SIP ALG (as above).

#### Asymmetric Routing

**What it is:**

- Outbound and inbound traffic take different paths.
- Firewall sees only one direction = drops traffic.

**Symptoms:**

- Intermittent call failures.
- Works sometimes, fails other times.
- Traceroute shows different paths.

**Solution:**

- Ensure symmetric routing (same path both ways).
- Adjust routing or firewall placement.

### 6. Reading Firewall Logs

**Key fields to look for:**

- **Date/Time:** When did the event occur?
- **Source IP/Port:** Where did traffic originate?
- **Destination IP/Port:** Where was it going?
- **Action:** Allow, Deny, Drop, Reject.
- **Rule/Policy:** Which rule matched?
- **Reason:** Why was it blocked (if denied)?

**Example log entry:**


2024-01-15 10:23:45 DENY UDP 192.168.1.100:5060 → 203.0.113.50:5060
Rule: Default-Deny-Inbound
Reason: No matching allow rule


**Interpretation:**

- SIP traffic from phone to PBX was blocked.
- No inbound rule allows UDP/5060.
- Fix: Add allow rule for SIP.

**Common log patterns:**

- Repeated denies from same IP = misconfiguration or attack.
- Deny on random high ports = may be RTP or other dynamic traffic.
- Deny on known ports (80, 443, 5060) = missing allow rule.

### 7. Firewall Troubleshooting Methodology

**Step 1: Identify the symptom**

- What's not working? (VoIP, web, SSH, etc.)
- Who's affected? (One user, entire site, specific service?)

**Step 2: Verify connectivity**

- Can you ping the destination?
- Can you telnet to the port?
- Is the service listening on the destination?

**Step 3: Check firewall rules**

- Is there an allow rule for this traffic?
- Is the rule in the correct order (top to bottom)?
- Is NAT configured correctly?

**Step 4: Review logs**

- Are packets being allowed or denied?
- Which rule is matching?
- Are there error messages?

**Step 5: Test and document**

- Make a change (add/modify rule).
- Test again (telnet, place call, etc.).
- Document the change and result.

---

## Hands-On Exercises

### Exercise 1: Test Port Connectivity

On your machine, test these ports to a known server:

```bash
# Test HTTP (should work)
telnet google.com 80

# Test HTTPS (should work)
telnet google.com 443

# Test a random high port (likely blocked)
telnet google.com 12345
```

Note which ports succeed and which fail.

---

### Exercise 2: Analyze Firewall Rules

You're given a firewall rule set:


Rule 1: ALLOW TCP 192.168.1.0/24 → Any:80,443
Rule 2: ALLOW UDP 192.168.1.0/24 → Any:53
Rule 3: DENY Any → Any:5060
Rule 4: ALLOW Any → Any (default allow)


**Questions:**

1. Can phones in 192.168.1.0/24 make outbound VoIP calls?
2. Can external callers reach the PBX?
3. What rule is blocking SIP?
4. How would you fix it?

---

### Exercise 3: Diagnose a Firewall Issue

Scenario: Customer reports "phones can register but can't make calls."

**Investigation:**

1. Check: Can phones ping the PBX? (Yes)
2. Check: Can phones telnet to PBX:5060? (Yes)
3. Check: Firewall logs show DENY for UDP ports 10000–20000.
4. Check: No rule allows RTP traffic.

**Your task:**

- Write the firewall rule needed to fix this.
- Specify: Action, Source, Destination, Service/Ports.

---

### Exercise 4: Disable SIP ALG (Simulated)

You're configuring a firewall for a customer with VoIP issues.

**Current state:**

- SIP ALG is enabled.
- One-way audio and call drops reported.

**Your task:**

1. Research how to disable SIP ALG on a specific firewall (Fortinet, Cisco, Meraki, etc.).
2. Write the steps (CLI commands or GUI path).
3. Note: What do you do after disabling? (Test VoIP, monitor logs.)

Example (Fortinet CLI):

```bash
config system session-helper
  delete 13  # SIP helper
end
```

---

### Exercise 5: Build a Firewall Troubleshooting Checklist

Create a one-page reference for firewall-related issues:

- [ ] Can you ping the destination?
- [ ] Can you telnet to the port?
- [ ] Is there an allow rule for this traffic?
- [ ] Is NAT configured correctly?
- [ ] Check firewall logs: Allow or Deny?
- [ ] Is SIP ALG enabled? (Disable if yes.)
- [ ] Are RTP ports (10000–20000) allowed?
- [ ] Is routing symmetric?

---

## Additional Resources

- **LinkedIn Learning Course**: [Firewall Administration Essential Training](https://www.linkedin.com/learning-login/share?account=85066170&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Ffirewall-administration-essential-training-2%3Ftrk%3Dshare_ent_url%26shareId%3DB4FDgDfvR6K%252BZ2mn%252B16IPA%253D%253D) – 1h 55m
- **Fortinet NSE 1-3**: https://training.fortinet.com/course/index.php
- **Cisco Firewall Docs**: https://www.cisco.com/c/en/us/support/security/

---

## Completion Checklist

- [ ] Read and understand all key teaching points.
- [ ] Complete all 5 hands-on exercises.
- [ ] Create your firewall troubleshooting checklist.
- [ ] Practice testing at least 3 ports with telnet/nc.
- [ ] Move on to [Module 8: VPN Fundamentals](08-vpn-fundamentals.md).

---

**Next Module**: [VPN Fundamentals](08-vpn-fundamentals.md)
