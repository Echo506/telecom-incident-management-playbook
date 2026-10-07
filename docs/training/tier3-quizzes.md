# Tier 3 Advanced Path – Quiz Questions

Use these quiz questions to assess knowledge retention for each Tier 3 module.

---

## Module A: Fortinet NSE 4 Advanced Firewall Administration

### Quiz A1: Advanced Routing (10 questions)

**1. What is the primary purpose of policy-based routing (PBR)?**
- A) To route traffic based on source/destination IP only
- B) To route traffic based on custom policies (application, user, time)
- C) To replace dynamic routing protocols
- D) To encrypt routed traffic

**Correct Answer:** B

---

**2. In Fortinet SD-WAN, what does a "performance SLA" monitor?**
- A) Only latency
- B) Only packet loss
- C) Latency, jitter, and packet loss
- D) Only bandwidth utilization

**Correct Answer:** C

---

**3. Which routing protocol is a link-state protocol?**
- A) RIP
- B) BGP
- C) OSPF
- D) Static routing

**Correct Answer:** C

---

**4. What is VRF (Virtual Routing and Forwarding)?**
- A) A type of VPN
- B) Multiple virtual routing tables on a single physical device
- C) A firewall security feature
- D) A load balancing algorithm

**Correct Answer:** B

---

**5. In BGP, what is the primary metric for path selection?**
- A) Hop count
- B) Bandwidth
- C) AS path length
- D) Latency

**Correct Answer:** C

---

**6. What happens when an SD-WAN rule's performance SLA threshold is exceeded?**
- A) Traffic is dropped
- B) Traffic fails over to the next available member
- C) An alert is sent, but traffic continues on the same path
- D) The firewall reboots

**Correct Answer:** B

---

**7. Which command would you use to view the routing table on a FortiGate?**
- A) `get router info routing-table all`
- B) `show ip route`
- C) `display routing-table`
- D) `get system route`

**Correct Answer:** A

---

**8. What is the default administrative distance for OSPF routes?**
- A) 90
- B) 100
- C) 110
- D) 120

**Correct Answer:** C

---

**9. In a hub-and-spoke SD-WAN topology, where does all traffic flow?**
- A) Directly between spokes
- B) Through the hub
- C) To the internet only
- D) To a cloud gateway

**Correct Answer:** B

---

**10. What is the purpose of BGP communities?**
- A) To group users for authentication
- B) To tag routes for policy application
- C) To encrypt BGP sessions
- D) To compress routing updates

**Correct Answer:** B

---

### Quiz A2: High Availability (5 questions)

**1. What is the primary benefit of an active-passive HA cluster?**
- A) Load balancing across both units
- B) Full redundancy with one unit on standby
- C) Double the throughput
- D) Reduced licensing costs

**Correct Answer:** B

---

**2. In active-active HA, how is traffic handled?**
- A) All traffic goes through the primary unit
- B) Traffic is load-balanced across both units
- C) Traffic is dropped until failover
- D) Only management traffic is load-balanced

**Correct Answer:** B

---

**3. What is session synchronization in HA?**
- A) Syncing configuration between units
- B) Syncing active sessions so failover is seamless
- C) Syncing logs to a central server
- D) Syncing time between units

**Correct Answer:** B

---

**4. What triggers an HA failover? (Select all that apply)**
- A) Power failure on primary unit
- B) Monitored interface failure
- C) HA heartbeat loss
- D) Scheduled maintenance

**Correct Answers:** A, B, C

---

**5. What is the recommended practice for HA heartbeat interfaces?**
- A) Use a single 1 Gbps link
- B) Use multiple links in a redundant configuration
- C) Use the management port only
- D) Heartbeat is not required for HA

**Correct Answer:** B

---

### Quiz A3: Advanced Security Features (10 questions)

**1. What is the difference between flow-based and proxy-based inspection?**
- A) Flow-based is faster; proxy-based is more thorough
- B) Flow-based is more thorough; proxy-based is faster
- C) There is no difference
- D) Flow-based only works on UDP; proxy-based only on TCP

**Correct Answer:** A

---

**2. What does SSL deep inspection do?**
- A) Only inspects SSL certificates
- B) Decrypts, inspects, and re-encrypts SSL/TLS traffic
- C) Blocks all SSL traffic
- D) Allows SSL traffic without inspection

**Correct Answer:** B

---

**3. Which feature would you use to block Facebook during business hours?**
- A) Firewall address object
- B) Application control
- C) Web filtering with schedule
- D) IPS signature

**Correct Answer:** C

---

**4. What is the purpose of an IPS signature?**
- A) To authenticate users
- B) To detect and block known attacks
- C) To encrypt traffic
- D) To route traffic

**Correct Answer:** B

---

**5. What happens when antivirus detects a file?**
- A) It logs the event only
- B) It blocks or quarantines the file based on policy
- C) It allows the file but notifies the user
- D) It encrypts the file

**Correct Answer:** B

---

**6. Which inspection mode is required for application control?**
- A) Flow-based only
- B) Proxy-based only
- C) Either flow-based or proxy-based
- D) No inspection required

**Correct Answer:** B

---

**7. What is a "false positive" in IPS?**
- A) A real attack that is not detected
- B) Legitimate traffic incorrectly flagged as an attack
- C) An IPS signature that is outdated
- D) A successful attack

**Correct Answer:** B

---

**8. What is the purpose of DNS filtering?**
- A) To block malicious domains at the DNS resolution level
- B) To speed up DNS resolution
- C) To encrypt DNS queries
- D) To cache DNS records

**Correct Answer:** A

---

**9. Which feature would you use to prevent data exfiltration?**
- A) Web filtering
- B) Data Leak Prevention (DLP)
- C) Application control
- D) Antivirus

**Correct Answer:** B

---

**10. What is the impact of enabling SSL deep inspection on performance?**
- A) No impact
- B) Moderate impact (10–30% reduction)
- C) Severe impact (50%+ reduction)
- D) Improves performance

**Correct Answer:** B

---

### Quiz A4: VPN Advanced (5 questions)

**1. What is the difference between tunnel mode and transport mode in IPsec?**
- A) Tunnel mode encrypts the entire packet; transport mode encrypts only payload
- B) Transport mode encrypts the entire packet; tunnel mode encrypts only payload
- C) There is no difference
- D) Tunnel mode is for site-to-site; transport mode is for remote access only

**Correct Answer:** A

---

**2. In a hub-and-spoke topology, what is required for spoke-to-spoke communication?**
- A) Direct IPsec tunnel between spokes
- B) Traffic must flow through the hub
- C) BGP routing between spokes
- D) Spoke-to-spoke communication is not possible

**Correct Answer:** B

---

**3. What is DVTI (Dynamic Virtual Tunnel Interface)?**
- A) A static IPsec tunnel
- B) A dynamic IPsec tunnel for remote access or dynamic endpoints
- C) A type of SSL VPN
- D) A monitoring interface

**Correct Answer:** B

---

**4. What is the primary advantage of SSL VPN tunnel mode over web mode?**
- A) Faster performance
- B) Full network access (layer 3) vs. web-only access
- C) Easier to configure
- D) No client required

**Correct Answer:** B

---

**5. Which Phase 1 negotiation mode is faster?**
- A) Main mode
- B) Aggressive mode
- C) Quick mode
- D) Both are the same speed

**Correct Answer:** B

---

## Module B: Advanced Troubleshooting and Root Cause Analysis

### Quiz B1: RCA Methodologies (5 questions)

**1. What is the "5 Whys" technique?**
- A) Asking "why" 5 times to get to the root cause
- B) A 5-step troubleshooting methodology
- C) A 5-question quiz
- D) A 5-minute RCA process

**Correct Answer:** A

---

**2. What is a fishbone (Ishikawa) diagram used for?**
- A) Network topology mapping
- B) Root cause analysis (categorizing potential causes)
- C) Incident timeline creation
- D) Escalation path visualization

**Correct Answer:** B

---

**3. Which category is NOT typically part of a fishbone diagram?**
- A) People
- B) Process
- C) Profit
- D) Technology

**Correct Answer:** C

---

**4. What is fault tree analysis?**
- A) A visual representation of all possible failure paths
- B) A type of network diagram
- C) A troubleshooting checklist
- D) A timeline of events

**Correct Answer:** A

---

**5. What is the first step in change correlation?**
- A) Identify what changed before the incident
- B) Revert all changes
- C) Blame the change team
- D) Ignore changes

**Correct Answer:** A

---

### Quiz B2: Advanced Wireshark Analysis (10 questions)

**1. What does a TCP retransmission indicate?**
- A) Normal operation
- B) Packet loss or congestion
- C) Encryption issue
- D) DNS problem

**Correct Answer:** B

---

**2. What is a "duplicate ACK" in TCP?**
- A) An acknowledgment sent twice
- B) An acknowledgment for a packet that was already acknowledged
- C) A sign of packet loss (receiver got out-of-order packets)
- D) A security feature

**Correct Answer:** C

---

**3. What does "zero window" in TCP indicate?**
- A) The receiver's buffer is full (can't accept more data)
- B) The connection is closed
- C) The sender is paused
- D) The packet was dropped

**Correct Answer:** A

---

**4. Which Wireshark filter would you use to see only VoIP calls?**
- A) `voip`
- B) `sip || rtp`
- C) `telephony`
- D) `call`

**Correct Answer:** B

---

**5. What MOS score indicates toll-quality voice?**
- A) 3.0 or higher
- B) 3.5 or higher
- C) 4.0 or higher
- D) 5.0 only

**Correct Answer:** C

---

**6. What is the purpose of a TCP stream graph?**
- A) To visualize the entire conversation between two endpoints
- B) To show only errors
- C) To display encryption keys
- D) To show DNS queries

**Correct Answer:** A

---

**7. What does an SSL handshake failure indicate?**
- A) Normal operation
- B) Certificate mismatch, expiration, or protocol mismatch
- C) Network congestion
- D) DNS issue

**Correct Answer:** B

---

**8. What is NXDOMAIN in DNS?**
- A) Successful resolution
- B) Domain does not exist
- C) Server failure
- D) Timeout

**Correct Answer:** B

---

**9. What is SERVFAIL in DNS?**
- A) Successful resolution
- B) Domain does not exist
- C) Server failure (DNS server couldn't resolve)
- D) Timeout

**Correct Answer:** C

---

**10. Which Wireshark feature reconstructs TCP streams?**
- A) Follow → TCP Stream
- B) Analyze → Conversations
- C) Statistics → Summary
- D) View → Packets

**Correct Answer:** A

---

## Module C: Escalation Handling and Vendor Management

### Quiz C1: Escalation Criteria (5 questions)

**1. When should you escalate from Tier 3 to engineering/vendor?**
- A) Immediately when the ticket comes in
- B) When the issue is beyond your access level or expertise
- C) After 24 hours, regardless of the issue
- D) Only when the customer requests it

**Correct Answer:** B

---

**2. What severity level is a complete site outage affecting 100+ users?**
- A) Low
- B) Medium
- C) High
- D) Critical

**Correct Answer:** D

---

**3. What information is NOT required in an escalation email?**
- A) Problem statement
- B) Impact (users/services affected)
- C) Troubleshooting history
- D) Your personal opinion about the vendor

**Correct Answer:** D

---

**4. What is an ETA in escalation context?**
- A) Estimated Time of Arrival (for resolution or update)
- B) Estimated Time of Analysis
- C) Expected Time of Approval
- D) Emergency Technical Action

**Correct Answer:** A

---

**5. What should you do if a vendor misses their ETA?**
- A) Wait indefinitely
- B) Follow up and request a new ETA
- C) Escalate to the vendor's manager immediately
- D) Close the ticket

**Correct Answer:** B

---

### Quiz C2: Vendor Management (5 questions)

**1. What is the purpose of a vendor escalation matrix?**
- A) To track vendor pricing
- B) To document contact methods, support hours, and escalation paths
- C) To rate vendor performance
- D) To schedule vendor meetings

**Correct Answer:** B

---

**2. What information should you provide when escalating to a carrier NOC?**
- A) Circuit ID(s)
- B) Problem description
- C) Troubleshooting already performed
- D) All of the above

**Correct Answer:** D

---

**3. What is a "line test" in carrier troubleshooting?**
- A) A physical inspection of the circuit
- B) A remote test of circuit integrity (loss, signal, errors)
- C) A speed test
- D) A ping test

**Correct Answer:** B

---

**4. When should you escalate within a vendor (L1 → L2 → L3)?**
- A) Immediately, skip L1
- B) When L1 cannot resolve within SLA or lacks access/expertise
- C) After 48 hours, regardless
- D) Only when the customer complains

**Correct Answer:** B

---

**5. What is the purpose of a post-incident vendor review?**
- A) To blame the vendor
- B) To identify what went well, what didn't, and how to improve
- C) To cancel the vendor contract
- D) To request a refund

**Correct Answer:** B

---

## Module D: Problem Management and Process Improvement

### Quiz D1: ITIL Problem Management (10 questions)

**1. What is the difference between incident management and problem management?**
- A) Incident = fix it now; Problem = fix it forever
- B) Incident = long-term; Problem = short-term
- C) There is no difference
- D) Incident = proactive; Problem = reactive

**Correct Answer:** A

---

**2. What is a "known error"?**
- A) An error that is well-documented
- B) A problem with a identified root cause and workaround
- C) An error that everyone knows about
- D) An error in the knowledge base

**Correct Answer:** B

---

**3. What is a KEDB?**
- A) Known Error Database
- B) Knowledge Enhancement Database
- C) Key Error Detection Base
- D) Known Escalation Data Base

**Correct Answer:** A

---

**4. What is a workaround?**
- A) A permanent fix
- B) A temporary solution to restore service
- C) A way to avoid doing work
- D) A method to escalate faster

**Correct Answer:** B

---

**5. What triggers problem management?**
- A) A single incident
- B) Recurring incidents, trends, or patterns
- C) Customer complaints only
- D) Management request only

**Correct Answer:** B

---

**6. What is a problem record?**
- A) A log of all incidents
- B) A documented problem with investigation plan and corrective actions
- C) A list of known errors
- D) A change request

**Correct Answer:** B

---

**7. What is the purpose of a Request for Change (RFC)?**
- A) To document a problem
- B) To propose and authorize a change to infrastructure or processes
- C) To escalate an incident
- D) To close a ticket

**Correct Answer:** B

---

**8. What is a Change Advisory Board (CAB)?**
- A) A group that approves or rejects changes
- B) A team that implements changes
- C) A customer support team
- D) A vendor management group

**Correct Answer:** A

---

**9. What are the three types of changes in ITIL?**
- A) Small, medium, large
- B) Standard, normal, emergency
- C) Planned, unplanned, emergency
- D) Minor, major, critical

**Correct Answer:** B

---

**10. What is post-change validation?**
- A) Testing after a change to ensure it worked and didn't break anything
- B) Approving the change before implementation
- C) Documenting the change
- D) Rolling back the change

**Correct Answer:** A

---

## Module E: Advanced SD-WAN and Multi-Vendor Integration

### Quiz E1: SD-WAN Advanced Concepts (10 questions)

**1. What is application-aware routing?**
- A) Routing based on source/destination IP only
- B) Identifying applications and routing based on policy (SLA, priority)
- C) Routing all applications the same way
- D) Routing based on time of day only

**Correct Answer:** B

---

**2. What is Forward Error Correction (FEC)?**
- A) A method to correct packet loss by adding redundant data
- B) A type of firewall rule
- C) A routing protocol
- D) A VPN encryption method

**Correct Answer:** A

---

**3. What is SASE?**
- A) Secure Access Service Edge
- B) Simple Application Security Enhancement
- C) Secure Application Service Engine
- D) System Architecture for Secure Enterprises

**Correct Answer:** A

---

**4. What is cloud on-ramp?**
- A) A physical ramp to the cloud
- B) Direct connectivity to cloud providers (AWS, Azure, Google Cloud)
- C) A type of VPN
- D) A firewall feature

**Correct Answer:** B

---

**5. In VMware SD-WAN, what is a "business policy"?**
- A) A company's security policy
- B) Application-aware routing rules (priority, SLA, failover)
- C) A user access policy
- D) A change management policy

**Correct Answer:** B

---

**6. What is service chaining in SD-WAN?**
- A) Connecting multiple SD-WAN edges in a chain
- B) Routing traffic through multiple services (firewall, IPS, etc.) in sequence
- C) A type of VPN topology
- D) A load balancing method

**Correct Answer:** B

---

**7. What is the primary benefit of SD-WAN over traditional WAN?**
- A) Lower cost only
- B) Dynamic path selection, application awareness, centralized management
- C) Faster internet only
- D) Simpler configuration only

**Correct Answer:** B

---

**8. What is an SD-WAN "edge" device?**
- A) A core router
- B) A customer premises device (CPE) that connects to the SD-WAN overlay
- C) A cloud gateway
- D) A firewall

**Correct Answer:** B

---

**9. What is an SD-WAN "gateway" or "hub"?**
- A) A customer premises device
- B) A regional aggregation point for SD-WAN traffic
- C) A cloud application
- D) A management console

**Correct Answer:** B

---

**10. What is packet duplication in SD-WAN?**
- A) Sending the same packet on multiple paths for redundancy
- B) Duplicating packets to increase bandwidth
- C) A type of attack
- D) A configuration error

**Correct Answer:** A

---

## Answer Key Summary

### Module A (Fortinet NSE 4)
- A1: 1-B, 2-C, 3-C, 4-B, 5-C, 6-B, 7-A, 8-C, 9-B, 10-B
- A2: 1-B, 2-B, 3-B, 4-A/B/C, 5-B
- A3: 1-A, 2-B, 3-C, 4-B, 5-B, 6-B, 7-B, 8-A, 9-B, 10-B
- A4: 1-A, 2-B, 3-B, 4-B, 5-B

### Module B (Advanced Troubleshooting)
- B1: 1-A, 2-B, 3-C, 4-A, 5-A
- B2: 1-B, 2-C, 3-A, 4-B, 5-C, 6-A, 7-B, 8-B, 9-C, 10-A

### Module C (Escalation Handling)
- C1: 1-B, 2-D, 3-D, 4-A, 5-B
- C2: 1-B, 2-D, 3-B, 4-B, 5-B

### Module D (Problem Management)
- D1: 1-A, 2-B, 3-A, 4-B, 5-B, 6-B, 7-B, 8-A, 9-B, 10-A

### Module E (SD-WAN)
- E1: 1-B, 2-A, 3-A, 4-B, 5-B, 6-B, 7-B, 8-B, 9-B, 10-A

---

## Scoring Guide

- **90–100%:** Excellent! Ready for next module.
- **80–89%:** Good understanding. Review weak areas.
- **70–79%:** Passing. Review incorrect answers before proceeding.
- **<70%:** Needs improvement. Re-study the module and retake the quiz.

---

**Return to**: [Tier 3 Advanced Path](tier3-advanced-path.md)
