# Module 4: Networking Foundations (IP, Subnetting, Routing)

## Learning Objective

Master IP addressing, subnetting, and basic routing concepts essential for network troubleshooting.

---

## Foundational Knowledge You Need

Before diving into this module, understand:

- **Binary basics**: How to convert between decimal and binary (optional but helpful).
- **What is an IP address**: Unique identifier for devices on a network.
- **Difference between IPv4 and IPv6**: IPv4 (32-bit, dotted decimal) vs. IPv6 (128-bit, hexadecimal).
- **Public vs. private networks**: Internet-facing vs. internal networks.

---

## Key Teaching Points

### 1. IPv4 Address Structure

**Format:** Four octets in dotted decimal notation.
192.168.1.100


- Each octet = 8 bits (0–255).
- Total = 32 bits.
- Example in binary: `11000000.10101000.00000001.01100100`

### 2. Subnet Masks and CIDR Notation

**Subnet mask:** Defines which part of the IP is network vs. host.

| CIDR | Subnet Mask | Usable Hosts |
|------|-------------|--------------|
| /8 | 255.0.0.0 | 16,777,214 |
| /16 | 255.255.0.0 | 65,534 |
| /24 | 255.255.255.0 | 254 |
| /26 | 255.255.255.192 | 62 |
| /28 | 255.255.255.240 | 14 |
| /30 | 255.255.255.252 | 2 |

**CIDR notation:** Compact way to write subnet mask.
192.168.1.0/24 = 192.168.1.0 with mask 255.255.255.0


### 3. Private IP Ranges (RFC 1918)

These IPs are NOT routable on the internet:

- **Class A:** `10.0.0.0` – `10.255.255.255` (10.0.0.0/8)
- **Class B:** `172.16.0.0` – `172.31.255.255` (172.16.0.0/12)
- **Class C:** `192.168.0.0` – `192.168.255.255` (192.168.0.0/16)

**Public IPs:** Everything else (assigned by ISPs).

### 4. How to Calculate Subnets

**Example:** You have `192.168.1.0/24` and need 4 subnets.

**Steps:**

1. **Determine bits to borrow:**
   - Need 4 subnets → 2² = 4 → borrow 2 bits.
   - New CIDR: /24 + 2 = /26.

2. **Calculate new subnet mask:**
   - /26 = 255.255.255.192.

3. **Determine subnet ranges:**

| Subnet | Network Address | Usable Range | Broadcast |
|--------|----------------|--------------|-----------|
| 1 | 192.168.1.0 | 192.168.1.1 – 192.168.1.62 | 192.168.1.63 |
| 2 | 192.168.1.64 | 192.168.1.65 – 192.168.1.126 | 192.168.1.127 |
| 3 | 192.168.1.128 | 192.168.1.129 – 192.168.1.190 | 192.168.1.191 |
| 4 | 192.168.1.192 | 192.168.1.193 – 192.168.1.254 | 192.168.1.255 |

**Quick formula:**
- Hosts per subnet = 2^(32 - CIDR) - 2.
- Example: /26 → 2^(32-26) - 2 = 2^6 - 2 = 64 - 2 = 62 hosts.

### 5. Default Gateway and Routing

**Default gateway:** The router IP that forwards traffic to other networks.

PC: 192.168.1.100/24
Gateway: 192.168.1.1


**How routing works:**

1. PC wants to send to `8.8.8.8`.
2. PC checks: Is 8.8.8.8 in my subnet (192.168.1.0/24)? **No.**
3. PC sends packet to default gateway (192.168.1.1).
4. Gateway forwards to next hop toward destination.

**Routing table example:**

Destination Gateway Interface
0.0.0.0/0 192.168.1.1 eth0 (default route)
192.168.1.0/24 0.0.0.0 eth0 (local network)
10.0.0.0/8 192.168.1.254 eth0 (static route)


### 6. NAT (Network Address Translation)

**Purpose:** Allows multiple private IPs to share one public IP.

**How it works:**
Internal PC (192.168.1.100) → Router (NAT) → Internet (203.0.113.50)


- Outbound: Router replaces private IP with public IP.
- Inbound: Router maps response back to correct internal IP.

**Types of NAT:**

- **Static NAT:** One-to-one mapping (rare in small networks).
- **Dynamic NAT:** Pool of public IPs.
- **PAT (Port Address Translation):** Many-to-one (most common, also called "masquerading").

**Why it matters for troubleshooting:**

- VoIP and some applications struggle with NAT.
- Port forwarding required for inbound connections.
- Can cause one-way audio in VoIP if not configured properly.

### 7. IPv6 Basics

**Format:** Eight groups of four hexadecimal digits.

2001:0db8:85a3:0000:0000:8a2e:0370:7334


**Simplified:** Leading zeros can be omitted, consecutive zeros can be collapsed.

2001:db8:85a3::8a2e:370:7334


**Key differences from IPv4:**

- No broadcast (uses multicast instead).
- No NAT (designed for end-to-end connectivity).
- Much larger address space (3.4 × 10³⁸ addresses).
- Auto-configuration (SLAAC) built-in.

---

## Hands-On Exercises

### Exercise 1: Subnet Calculation Practice

Calculate the following:

1. You have `192.168.10.0/24`. You need 8 subnets.
   - What's the new CIDR?
   - What's the new subnet mask?
   - How many hosts per subnet?

2. You have `10.0.0.0/16`. You need subnets with 500 hosts each.
   - What CIDR do you need?
   - How many subnets can you create?

3. Given `172.16.5.100/27`:
   - What's the network address?
   - What's the broadcast address?
   - What's the usable IP range?

---

### Exercise 2: Identify Public vs. Private IPs

Classify these IPs as public or private:

- `192.168.50.1`
- `8.8.8.8`
- `10.255.255.1`
- `172.32.0.1`
- `172.20.10.5`
- `203.0.113.50`
- `192.169.1.1`

---

### Exercise 3: Read a Routing Table

Given this routing table:

Destination Gateway Interface
0.0.0.0/0 192.168.1.1 eth0
192.168.1.0/24 0.0.0.0 eth0
10.10.0.0/16 192.168.1.50 eth0


Answer:

1. Where does traffic to `8.8.8.8` go?
2. Where does traffic to `192.168.1.100` go?
3. Where does traffic to `10.10.5.25` go?
4. What is the default gateway?

---

### Exercise 4: NAT Troubleshooting Scenario

Scenario: Customer's VoIP phones work internally but can't receive inbound calls.

**Questions to investigate:**

1. Is port forwarding configured for SIP (5060) and RTP (10000–20000)?
2. Is the PBX aware of the public IP (NAT settings)?
3. Are phones registering with private or public IPs?
4. Is there a SIP ALG interfering?

Document your troubleshooting steps and resolution.

---

### Exercise 5: Build an IP Addressing Cheat Sheet

Create a one-page reference with:

- Private IP ranges (RFC 1918).
- Common CIDR notations and host counts.
- Formula for calculating subnets.
- Binary-to-decimal conversion table (optional).
- Example routing table with explanations.

---

## Additional Resources

- **LinkedIn Learning Course**: [Networking Foundations: Networking Basics](https://www.linkedin.com/learning/networking-foundations-networking-basics?u=85066170) – 1h 47m
- **LinkedIn Learning Path**: [Getting Started with Cisco Networks](https://www.linkedin.com/learning/paths/getting-started-with-cisco-networks?u=85066170) – 7h 33m

---

## Completion Checklist

- [ ] Read and understand all key teaching points.
- [ ] Complete all 5 hands-on exercises.
- [ ] Create your IP addressing cheat sheet.
- [ ] Practice at least 10 subnet calculations.
- [ ] Move on to [Module 5: Network Monitoring & Alerting](05-network-monitoring.md).

---

**Next Module**: [Network Monitoring & Alerting](05-network-monitoring.md)



