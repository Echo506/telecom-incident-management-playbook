# Module 5: Network Monitoring & Alerting

## Learning Objective

Understand how network monitoring works and how to respond to alerts proactively to prevent or minimize incidents.

---

## Foundational Knowledge You Need

Before diving into this module, understand:

- **Basic networking concepts**: Devices, interfaces, IP addresses, bandwidth.
- **What is monitoring**: Continuously checking device/network health and performance.
- **Common monitoring protocols**: SNMP, ICMP, syslog.
- **Difference between monitoring and troubleshooting**: Monitoring is proactive; troubleshooting is reactive.

---

## Key Teaching Points

### 1. Monitoring Protocols Explained

#### ICMP (Internet Control Message Protocol)

- **Purpose**: Basic connectivity checks (ping).
- **How it works**: Sends echo request, expects echo reply.
- **Use case**: Is the device up or down?
- **Limitations**: Doesn't tell you about performance or specific services.

#### SNMP (Simple Network Management Protocol)

- **Purpose**: Collect detailed device metrics (CPU, memory, interface stats, etc.).
- **Versions**:
  - SNMPv1/v2c: Community string (password-like), unencrypted.
  - SNMPv3: Encrypted, authenticated (more secure).
- **Common OIDs (Object Identifiers)**:
  - CPU usage: `.1.3.6.1.4.1.2021.10.1.3.1`
  - Memory usage: `.1.3.6.1.4.1.2021.4.6.0`
  - Interface traffic: `.1.3.6.1.2.1.2.2.1.10` (in octets)

#### Syslog

- **Purpose**: Centralized log collection from devices.
- **How it works**: Devices send log messages to a syslog server.
- **Use case**: Security events, configuration changes, errors.
- **Common facilities**: auth, daemon, kern, local0–7.

### 2. Monitoring Tools Overview

| Tool | Type | Best For |
|------|------|----------|
| **SolarWinds** | Commercial | Enterprise networks, comprehensive dashboards |
| **PRTG** | Commercial (free tier available) | Medium networks, easy setup |
| **LibreNMS** | Open-source | Linux environments, SNMP-heavy monitoring |
| **Nagios** | Open-source | Highly customizable, steep learning curve |
| **Zabbix** | Open-source | Large-scale, agent-based and agentless |
| **Datadog/New Relic** | SaaS | Cloud infrastructure, application monitoring |

**Key features to look for:**
- Auto-discovery of devices.
- Customizable thresholds and alerts.
- Historical data and trending.
- Integration with ticketing systems.

### 3. Understanding Thresholds and Baselines

**Threshold:** A value that triggers an alert when exceeded.

CPU usage > 80% for 5 minutes = Alert
Bandwidth utilization > 90% = Alert
Packet loss > 5% = Alert


**Baseline:** Normal performance levels for a device/network.

- Establish baselines during normal operations.
- Use baselines to set realistic thresholds.
- Example: If average CPU is 30%, alert at 80%. If average is 70%, alert at 90%.

**Dynamic thresholds (advanced):**
- Some tools learn baselines automatically.
- Alert when metrics deviate from historical norms.
- Reduces false positives.

### 4. Common Alert Types & Responses

| Alert | Likely Cause | Immediate Action |
|-------|--------------|------------------|
| **Device Down** | Power failure, network outage, device crash | Verify with ping, check upstream links, escalate if widespread |
| **High CPU** | Traffic spike, process issue, attack | Check top processes, review recent config changes |
| **High Memory** | Memory leak, too many connections | Restart service/device if critical, investigate root cause |
| **Interface Down** | Cable unplugged, port failure, shutdown command | Check physical connection, verify config |
| **High Bandwidth Utilization** | Large file transfer, backup, DDoS | Identify top talkers, check if expected |
| **Packet Loss** | Congestion, bad cable, hardware issue | Run traceroute, check interface errors |
| **High Latency** | Congestion, routing issue, distance | Compare with baseline, check routing path |

### 5. Responding to Alerts: A Structured Approach

**Step 1: Verify the alert**

- Is the device actually down (ping it)?
- Is this a one-time spike or sustained issue?
- Are other devices affected?

**Step 2: Assess impact**

- How many users/services are affected?
- Is this a critical device (core router, PBX, firewall)?
- What's the business impact?

**Step 3: Investigate**

- Check recent changes (config, firmware, traffic patterns).
- Review logs (syslog, event viewer).
- Look at related metrics (CPU + memory + interface errors).

**Step 4: Take action**

- If simple fix (restart service, clear error): Do it.
- If complex or widespread: Escalate with full context.
- Document everything in the ticket.

**Step 5: Follow up**

- Confirm the alert clears.
- Update the ticket with resolution.
- If recurring, create a problem ticket for root cause analysis.

### 6. Reducing False Positives

**Common causes:**

- Thresholds set too low.
- Temporary spikes (backups, updates).
- Network glitches (single failed ping).

**Solutions:**

- Use sustained thresholds (e.g., "CPU > 80% for 5 minutes").
- Require multiple failures before alerting (e.g., 3 failed pings).
- Schedule maintenance windows to suppress alerts.
- Regularly review and adjust thresholds based on baselines.

### 7. Monitoring Dashboards: What to Track

**Critical metrics for NOC:**

- Device availability (up/down status).
- Interface utilization (bandwidth %).
- CPU and memory usage.
- Packet loss and latency.
- Error/discarded packet counts.
- VoIP-specific: MOS score, jitter, active calls.

**Dashboard best practices:**

- Use color coding (green = OK, yellow = warning, red = critical).
- Group by location or function (core, edge, VoIP, etc.).
- Include trending graphs (24h, 7d, 30d views).
- Make it actionable: Click an alert to see details and take action.

---

## Hands-On Exercises

### Exercise 1: Set Up a Basic Alert

Using a monitoring tool (or simulated environment):

1. Add a device (router, switch, or server).
2. Configure an alert: "CPU > 70% for 3 minutes."
3. Trigger the alert (simulate high CPU if possible).
4. Verify you receive the notification.
5. Document the alert and resolution steps.

---

### Exercise 2: Analyze a Dashboard

You're given a monitoring dashboard screenshot or live access.

**Tasks:**

1. Identify 3 devices with warnings or critical alerts.
2. For each, note:
   - What's the alert?
   - What's the likely cause?
   - What's your first action?
3. Prioritize: Which alert do you handle first and why?

---

### Exercise 3: Create a Baseline Report

For a device you have access to:

1. Collect CPU, memory, and bandwidth data for 24 hours (or use historical data).
2. Calculate:
   - Average CPU usage.
   - Peak CPU usage.
   - Average bandwidth utilization.
3. Recommend thresholds based on your findings.

Example:
- Average CPU: 35%, Peak: 72% → Set alert at 85%.
- Average bandwidth: 40%, Peak: 85% → Set alert at 90%.

---

### Exercise 4: Write an Alert Response Runbook

Create a one-page runbook for this alert:

**Alert:** "Core Router CPU > 90%"

**Include:**

1. Verification steps (ping, SSH, check processes).
2. Impact assessment (how many users affected?).
3. Immediate actions (restart process? reroute traffic?).
4. Escalation criteria (when to call Tier 3?).
5. Documentation requirements (what to log in the ticket?).

---

### Exercise 5: Simulate an Incident from Monitoring

Scenario: You receive an alert: "PBX Server Down."

**Your tasks:**

1. Verify: Ping the server, check other monitoring metrics.
2. Assess: How many users/phones are affected?
3. Investigate: Check logs, recent changes, power/UPS status.
4. Act: Restart service, failover to backup, or escalate.
5. Communicate: Send initial notification to stakeholders.
6. Document: Create a ticket with full timeline.

Write out your response as if you're handling it in real-time.

---

## Additional Resources

- **LinkedIn Learning Video**: [Network Monitoring](https://www.linkedin.com/learning/search?keywords=network%20monitoring&u=85066170) – 7m 46s
- **SolarWinds**: [SolarWinds Internal Training](your-internal-portal)
- **PRTG Manual**: https://www.paessler.com/manuals/prtg

---

## Completion Checklist

- [ ] Read and understand all key teaching points.
- [ ] Complete all 5 hands-on exercises.
- [ ] Create your alert response runbook.
- [ ] Practice analyzing at least 1 monitoring dashboard.
- [ ] Move on to [Module 6: Wireshark for VoIP Analysis](06-wireshark-voip.md).

---

**Next Module**: [Wireshark for VoIP Analysis](06-wireshark-voip.md)
