# NOC Tier 3 Advanced Path

This guide outlines the advanced training path for technicians progressing from **Tier 2** to **Tier 3** roles.

---

## Overview

The Tier 3 Advanced Path builds upon the foundational **13-module Tier 2 course** with additional advanced topics, deeper technical expertise, and escalation handling skills.

### Key Differences: Tier 2 vs. Tier 3

| Aspect | Tier 2 | Tier 3 |
|--------|--------|--------|
| **Primary Focus** | Incident resolution, troubleshooting, customer communication | Complex escalations, root cause analysis, problem management |
| **Technical Depth** | Foundational networking, VoIP, firewall, VPN | Advanced routing, complex firewall policies, multi-vendor integration |
| **Escalation Role** | Receives escalations from Tier 1 | Receives escalations from Tier 2, escalates to engineering/vendor |
| **Certifications** | CompTIA Network+ (recommended) | CompTIA Network+ + Fortinet NSE 4 (required) |
| **Autonomy** | Works independently on standard incidents | Handles complex, multi-system incidents with minimal guidance |
| **Documentation** | Follows runbooks and templates | Creates runbooks, improves processes, mentors Tier 2 |

---

## Prerequisites

Before starting the Tier 3 Advanced Path, you should:

- ✅ Complete all 13 modules of the Tier 2 course
- ✅ Have 6–12 months of hands-on NOC Tier 2 experience
- ✅ Hold CompTIA Network+ certification (or equivalent knowledge)
- ✅ Be comfortable with:
  - Network troubleshooting (ping, traceroute, Wireshark)
  - VoIP call flows and SIP/RTP analysis
  - Basic firewall and VPN configuration
  - Salesforce case management
  - HPBX platform administration

---

## Tier 3 Advanced Training Modules

### Module A: Fortinet NSE 4 Advanced Firewall Administration

**Certification:** Fortinet Network Security Expert 4 (NSE 4)

**Duration:** 40–60 hours (study + lab practice + exam)

**Topics Covered:**

- **Advanced Routing:**
  - Policy-based routing
  - SD-WAN rules and performance SLA
  - BGP and OSPF configuration
  - Virtual routing and forwarding (VRF)

- **High Availability (HA):**
  - Active-passive and active-active clusters
  - Session synchronization
  - Failover testing and troubleshooting

- **Advanced Security Features:**
  - Application control (deep packet inspection)
  - Web filtering and DNS filtering
  - Intrusion Prevention System (IPS)
  - SSL/TLS inspection (deep inspection vs. certificate inspection)
  - Antivirus and malware protection

- **VPN Advanced:**
  - Hub-and-spoke IPsec topologies
  - Full mesh IPsec
  - Dynamic IPsec (DVTI)
  - SSL VPN tunnel mode vs. web mode

- **Troubleshooting and Debugging:**
  - Debug flow (advanced packet tracing)
  - Packet sniffer with filters
  - Memory and CPU troubleshooting
  - Log analysis (FortiAnalyzer integration)

**Resources:**

- **Fortinet NSE 4 Training:** https://training.fortinet.com/course/index.php
- **Fortinet Documentation:** https://docs.fortinet.com/
- **Practice Labs:** Set up FortiGate VM in GNS3/EVE-NG or use Fortinet demo appliances

**Exam Details:**

- **Cost:** ~$400 USD (check current pricing)
- **Format:** Multiple-choice, 60 questions, 90 minutes
- **Passing Score:** 70%
- **Validity:** 2 years (renew with NSE 5 or CE credits)

---

### Module B: Advanced Troubleshooting and Root Cause Analysis

**Duration:** 20–30 hours (study + case studies + practice)

**Topics Covered:**

- **Root Cause Analysis (RCA) Methodologies:**
  - 5 Whys technique
  - Fishbone (Ishikawa) diagrams
  - Fault tree analysis
  - Change correlation (what changed before the incident?)

- **Complex Multi-System Incidents:**
  - VoIP quality issues across SD-WAN
  - Intermittent connectivity (packet loss, jitter, latency)
  - Application performance degradation (is it network or application?)
  - Multi-vendor escalation coordination

- **Advanced Wireshark Analysis:**
  - TCP stream analysis (retransmissions, out-of-order, zero window)
  - VoIP quality metrics (MOS, jitter, packet loss)
  - SSL/TLS handshake analysis
  - DNS troubleshooting (NXDOMAIN, SERVFAIL, slow resolution)

- **Performance Baselines and Trending:**
  - Establishing baselines (what's "normal"?)
  - Identifying anomalies (what's "abnormal"?)
  - Capacity planning (when to upgrade?)
  - Historical analysis (is this a recurring issue?)

**Hands-On Exercises:**

1. **Case Study Analysis:**
   - Review 5 complex incident reports (provided by instructor or from real experience).
   - Identify root cause, contributing factors, and prevention measures.

2. **Wireshark Deep-Dive:**
   - Analyze a pcap with TCP performance issues.
   - Identify retransmissions, duplicate ACKs, windowing issues.
   - Recommend fixes (MTU, QoS, buffer tuning).

3. **RCA Documentation:**
   - Write a full root cause analysis report for a major incident.
   - Include: timeline, root cause, contributing factors, corrective actions, prevention measures.

---

### Module C: Escalation Handling and Vendor Management

**Duration:** 10–15 hours (study + role-play + documentation)

**Topics Covered:**

- **Escalation Criteria:**
  - When to escalate from Tier 2 to Tier 3
  - When to escalate from Tier 3 to engineering/vendor
  - Severity classification (Critical, High, Medium, Low)
  - SLA and breach management

- **Vendor Escalation Paths:**
  - Carrier escalation (ISP, SIP trunk, circuit providers)
  - Platform vendor escalation (8x8, CoreDial, Windstream, Intelepeer)
  - Hardware vendor escalation (Fortinet, Cisco, Meraki, CradlePoint)
  - Software vendor escalation (Salesforce, VMware, Microsoft)

- **Effective Escalation Communication:**
  - What information to include in escalation emails/tickets
  - How to write a clear problem statement
  - Providing troubleshooting history (what's already been tried)
  - Setting expectations with customers during escalations

- **Vendor Management:**
  - Tracking vendor tickets and ETAs
  - Escalating within the vendor (L1 → L2 → L3 → engineering)
  - Post-incident vendor reviews (what went well, what didn't)
  - Building vendor relationships (know your account team)

**Hands-On Exercises:**

1. **Escalation Email Writing:**
   - Write 3 escalation emails (carrier, platform vendor, hardware vendor).
   - Include: problem statement, impact, troubleshooting history, requested action, urgency.

2. **Role-Play: Vendor Call:**
   - Simulate a call with a carrier NOC.
   - Practice: clear problem description, providing circuit IDs, requesting line tests, tracking ticket numbers.

3. **Escalation Matrix Creation:**
   - Build an escalation matrix for your organization.
   - Include: vendor name, contact method (phone/email/portal), support hours, escalation levels, typical response times.

---

### Module D: Problem Management and Process Improvement

**Duration:** 15–20 hours (study + documentation + implementation)

**Topics Covered:**

- **ITIL Problem Management:**
  - Difference between incident management (fix it now) and problem management (fix it forever)
  - Problem identification (recurring incidents, trends, patterns)
  - Problem categorization and prioritization
  - Known error database (KEDB)
  - Workarounds vs. permanent fixes

- **Change Management:**
  - Request for Change (RFC) process
  - Change advisory board (CAB)
  - Standard, normal, and emergency changes
  - Post-change validation and rollback planning

- **Process Improvement:**
  - Identifying process gaps (where do incidents keep happening?)
  - Creating or updating runbooks
  - Automating repetitive tasks (scripts, macros, workflows)
  - Measuring improvement (KPIs, metrics, trends)

- **Knowledge Management:**
  - Creating knowledge base articles
  - Documenting known errors and workarounds
  - Sharing lessons learned with the team
  - Mentoring Tier 1 and Tier 2 technicians

**Hands-On Exercises:**

1. **Problem Record Creation:**
   - Take 5 recurring incidents and create a problem record.
   - Include: problem description, impact, root cause hypothesis, investigation plan, corrective actions.

2. **Runbook Creation:**
   - Write a new runbook for a complex scenario not covered in Tier 2 training.
   - Example: "Troubleshooting SD-WAN Application Performance Issues."

3. **Knowledge Base Article:**
   - Write a knowledge base article for a known error.
   - Include: symptoms, root cause, workaround, permanent fix (if available).

---

### Module E: Advanced SD-WAN and Multi-Vendor Integration

**Duration:** 20–30 hours (study + lab practice + scenarios)

**Topics Covered:**

- **SD-WAN Advanced Concepts:**
  - Dynamic path selection based on application SLA
  - Forward error correction (FEC) for packet loss mitigation
  - Application-aware routing (identify and prioritize apps)
  - Cloud on-ramp (direct connectivity to AWS, Azure, Google Cloud)
  - SASE (Secure Access Service Edge) concepts

- **Multi-Vendor Integration:**
  - SD-WAN overlay on top of existing routing (BGP, OSPF)
  - Firewall integration with SD-WAN (service chaining)
  - VoIP optimization over SD-WAN (QoS, jitter buffers, packet duplication)
  - Cloud application performance (Office 365, Salesforce, Zoom)

- **Advanced VeloCloud/VMware SD-WAN:**
  - Business policies (application-aware routing rules)
  - Edge device troubleshooting (logs, diagnostics, packet capture)
  - Gateway and hub architecture
  - Orchestrator advanced features (custom dashboards, alerts, reports)

**Hands-On Exercises:**

1. **SD-WAN Policy Design:**
   - Design business policies for a customer with VoIP, video, and critical applications.
   - Prioritize VoIP over web browsing.
   - Configure failover rules (what happens if primary link degrades?).

2. **Multi-Vendor Lab:**
   - Set up a lab with SD-WAN edge, firewall, and VoIP phones.
   - Simulate link degradation (add latency, jitter, packet loss).
   - Verify SD-WAN fails over to backup link.
   - Verify VoIP quality remains acceptable.

3. **Cloud Application Performance:**
   - Configure direct cloud on-ramp for Office 365 or Salesforce.
   - Compare performance (latency, jitter) with and without cloud on-ramp.
   - Document findings and recommendations.

---

## Tier 3 Certification Path

### Required Certifications

| Certification | Provider | Priority | Timeline |
|---------------|----------|----------|----------|
| **CompTIA Network+** | CompTIA | Required | Complete before Tier 3 path |
| **Fortinet NSE 4** | Fortinet | Required | Complete within 6 months of starting Tier 3 |

### Recommended Certifications (Optional but Valuable)

| Certification | Provider | Priority | Timeline |
|---------------|----------|----------|----------|
| **CompTIA Security+** | CompTIA | Recommended | Within 12 months |
| **Cisco CCNA** | Cisco | Recommended | Within 12–18 months |
| **VMware VCP-NV** | VMware | Recommended | Within 18–24 months (if using SD-WAN heavily) |
| **ITIL 4 Foundation** | Axelos | Recommended | Within 12 months |

---

## Tier 3 Skills Assessment

Use this checklist to assess your readiness for Tier 3 responsibilities:

### Technical Skills

- [ ] I can troubleshoot complex multi-system incidents (network + VoIP + application).
- [ ] I can analyze TCP streams in Wireshark (retransmissions, windowing, out-of-order).
- [ ] I can configure and troubleshoot BGP or OSPF routing.
- [ ] I can configure advanced firewall policies (NAT, policy-based routing, SD-WAN rules).
- [ ] I can configure and troubleshoot IPsec VPN (hub-and-spoke, full mesh).
- [ ] I can configure HA clusters (active-passive, active-active).
- [ ] I can use debug flow and packet sniffer on FortiGate firewalls.
- [ ] I can design SD-WAN business policies for application-aware routing.
- [ ] I can integrate SD-WAN with existing routing and firewall infrastructure.

### Process Skills

- [ ] I can write a root cause analysis (RCA) report for a major incident.
- [ ] I can create a problem record with investigation plan and corrective actions.
- [ ] I can write a Request for Change (RFC) with rollback plan.
- [ ] I can create or update runbooks for complex scenarios.
- [ ] I can write knowledge base articles for known errors.
- [ ] I can mentor Tier 1 and Tier 2 technicians.

### Communication Skills

- [ ] I can write clear escalation emails to vendors and engineering teams.
- [ ] I can effectively communicate with carrier NOCs during outages.
- [ ] I can manage customer expectations during complex, multi-vendor incidents.
- [ ] I can present technical findings to non-technical stakeholders.
- [ ] I can lead a post-incident review (PIR) meeting.

---

## Tier 3 Career Path

### Typical Progression

Tier 1 (0–12 months)
↓ Tier 2 (12–24 months) + Network+ certification
↓ Tier 3 (24–48 months) + NSE 4 certification
↓ Senior Tier 3 / Team Lead (48–60 months)
↓ NOC Manager / Engineering / Security Specialist (60+ months)


### Career Options After Tier 3

- **Senior Tier 3 Technician:** Handle most complex incidents, mentor others.
- **NOC Team Lead:** Manage a team of Tier 1/2/3 technicians.
- **Network Engineer:** Design and implement network infrastructure.
- **Security Engineer:** Focus on firewall, VPN, and security architecture.
- **Cloud Engineer:** Specialize in cloud networking (AWS, Azure, GCP).
- **SD-WAN Architect:** Design and implement SD-WAN solutions.
- **Problem Manager:** Focus on problem management and process improvement.

---

## Additional Resources

- **Fortinet NSE 4 Study Guide:** https://training.fortinet.com/course/index.php
- **Wireshark University:** https://www.wireshark.org/training/
- **ITIL 4 Foundation:** https://www.axelos.com/
- **CompTIA Security+:** https://www.comptia.org/certifications/security
- **Cisco CCNA:** https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html

---

## Next Steps

1. **Complete Tier 2 Training:** Finish all 13 modules of the Tier 2 course.
2. **Gain Experience:** Work as Tier 2 for 6–12 months to build hands-on skills.
3. **Start Fortinet NSE 4:** Begin NSE 4 study (40–60 hours).
4. **Practice Advanced Troubleshooting:** Work on complex incidents, document RCAs.
5. **Develop Soft Skills:** Practice escalation communication, vendor management, mentoring.
6. **Pursue Additional Certs:** Consider Security+, CCNA, or ITIL 4 Foundation.

---

**Return to**: [Course Index](README.md)
