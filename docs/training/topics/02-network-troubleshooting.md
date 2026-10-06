# Module 2: Network Troubleshooting Fundamentals

## Learning Objective

Apply a structured methodology to diagnose and resolve network connectivity issues efficiently.

---

## Foundational Knowledge You Need

Before diving into this module, understand:

- **OSI Model layers 1–4**: Physical, Data Link, Network, Transport.
- **TCP/IP basics**: IP addresses, ports, protocols (TCP vs. UDP).
- **Basic command-line tools**: `ping`, `tracert` (Windows), `traceroute` (Linux/Mac).
- **Network topology concepts**: LAN, WAN, gateway, router, switch.

---

## Key Teaching Points

### 1. The Troubleshooting Methodology

Follow this systematic approach for every network issue:

1. **Gather information**: What's the symptom? When did it start? Who's affected?
2. **Verify connectivity**: Can you ping the gateway? Can you ping external IPs?
3. **Test DNS**: Can you resolve domain names (`nslookup google.com`)?
4. **Trace the route**: Where does the traffic stop or degrade?
5. **Isolate the issue**: Is it local, ISP, or remote?
6. **Implement fix or escalate**: Apply solution or hand off to appropriate team.

### 2. Understanding Common Commands

#### Ping

Tests basic connectivity to a target.

```bash
ping 8.8.8.8
ping google.com
```

**What to look for:**
- High latency (>100ms consistently)
- Packet loss (any % is concerning)
- Timeout (no response = connectivity issue)

#### Traceroute

Shows the path packets take and where they fail.

```bash
# Windows
tracert 8.8.8.8

# Linux/Mac
traceroute 8.8.8.8
```

**What to look for:**
- Where does the trace stop?
- Is there high latency at a specific hop?
- Are hops showing `* * *` (packet loss)?

#### NSLookup / Dig

Tests DNS resolution.

```bash
# Windows
nslookup google.com

# Linux/Mac
dig google.com
```

**What to look for:**
- Does it return an IP address?
- Is the response time reasonable?
- Does it fail for some domains but not others?

### 3. Reading a Traceroute

Example output:

1 2 ms 1 ms 1 ms 192.168.1.1
2 15 ms 14 ms 16 ms 10.50.1.1
3 25 ms 23 ms 24 ms 203.0.113.5
4 * * * Request timed out.
5 45 ms 43 ms 44 ms 198.51.100.10



**Interpretation:**
- Hop 1: Your local gateway (normal).
- Hop 2–3: ISP network (normal).
- Hop 4: Packet loss (could be ISP filtering or actual issue).
- Hop 5+: Traffic continues (issue may be cosmetic).

**Red flags:**
- Trace stops completely at hop X = failure at that point.
- High latency starts at hop X = congestion or routing issue there.
- All hops after X show `* * *` = complete failure.

### 4. Differentiating Issue Types

| Symptom | Likely Cause | Next Step |
|---------|--------------|-----------|
| Can't ping gateway | Local network issue | Check cables, Wi-Fi, local router |
| Can ping gateway but not 8.8.8.8 | ISP issue | Contact ISP, check modem status |
| Can ping 8.8.8.8 but not google.com | DNS issue | Change DNS servers, flush DNS |
| High latency on specific hops | ISP or intermediate routing | Document, escalate if persistent |
| Intermittent connectivity | Wireless interference, bad cable | Test with wired connection |

### 5. When to Escalate

Escalate to Tier 3 or carrier when:

- Issue is beyond your access level (e.g., carrier routing).
- Multiple customers affected (possible widespread outage).
- Requires configuration changes you're not authorized to make.
- Root cause is in carrier network (confirmed via traceroute).

**Escalation checklist:**
- [ ] Document all troubleshooting steps taken.
- [ ] Include traceroute output.
- [ ] Note affected users/services.
- [ ] Specify impact level (critical, high, medium, low).

---

## Hands-On Exercises

### Exercise 1: Follow the Checklist

Scenario: Customer reports "no internet."

Use this checklist:

1. Can they ping their gateway (192.168.1.1)?
2. Can they ping 8.8.8.8?
3. Can they nslookup google.com?
4. Run a traceroute to 8.8.8.8.
5. Based on results, identify the failure point.

Document your findings and recommended action.

---

### Exercise 2: Analyze 5 Traceroutes

You're given 5 traceroute outputs (from real or simulated cases).

For each:
- Identify where the issue is (if any).
- Classify as: local, ISP, carrier, or remote.
- Recommend: fix locally, contact ISP, or escalate.

---

### Exercise 3: Command-Line Practice

On your own machine (Windows or Linux):

1. Ping your gateway 10 times. Note average latency.
2. Ping 8.8.8.8 10 times. Compare latency.
3. Run traceroute to google.com. Count the hops.
4. Run nslookup on 5 different domains. Note response times.

Save your output for reference.

---

### Exercise 4: Create Your Troubleshooting Cheat Sheet

Build a one-page reference with:

- Commands you use most (ping, tracert, nslookup, ipconfig/ifconfig).
- Common symptoms and likely causes.
- Escalation criteria.
- Key questions to ask customers.

---

### Exercise 5: Simulate a Customer Call

Role-play with a colleague:

- Customer: "My internet has been slow all morning."
- Your job: Ask the right questions, guide them through basic tests, and determine next steps.

Focus on:
- Clear instructions.
- Patience.
- Systematic approach.

---

## Additional Resources

- **LinkedIn Learning Course**: [Learning Network Troubleshooting](https://www.linkedin.com/learning-login/share?account=85066170&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-network-troubleshooting-2021%3Ftrk%3Dshare_ent_url%26shareId%3DIvtY5xTnROCX4cziFXHVPQ%253D%253D) – 2h 1m
- **LinkedIn Learning Course**: [Networking Foundations: Networking Basics](https://www.linkedin.com/learning/networking-foundations-networking-basics?u=85066170) – 1h 47m

---

## Completion Checklist

- [ ] Read and understand all key teaching points.
- [ ] Complete all 5 hands-on exercises.
- [ ] Create your troubleshooting cheat sheet.
- [ ] Practice at least 2 role-play scenarios.
- [ ] Move on to [Module 3: VoIP & Unified Communications Basics](03-voip-uc-basics.md).

---

**Next Module**: [VoIP & Unified Communications Basics](03-voip-uc-basics.md)
