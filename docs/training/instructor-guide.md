# NOC Tier 2 Technician Training – Instructor Guide

This guide is for instructors, managers, or team leads who will be teaching or overseeing the NOC Tier 2 Technician Training Course.

---

## Table of Contents

1. [Course Overview](#course-overview)
2. [Target Audience](#target-audience)
3. [Delivery Methods](#delivery-methods)
4. [Module-by-Module Teaching Guide](#module-by-module-teaching-guide)
5. [Assessment Strategies](#assessment-strategies)
6. [Hands-On Lab Setup](#hands-on-lab-setup)
7. [Troubleshooting Common Issues](#troubleshooting-common-issues)
8. [Certification and Completion](#certification-and-completion)

---

## Course Overview

**Course Title:** NOC Tier 2 Technician Training

**Duration:** 8–12 weeks (recommended pace: 1–2 modules per week)

**Total Modules:** 13

**Format:** Self-paced or instructor-led (in-person or virtual)

**Prerequisites:**

- Basic computer skills.
- Familiarity with Windows and/or Linux.
- No prior networking experience required (but helpful).

**Learning Outcomes:**

Upon completion, students will be able to:

- Communicate professionally with customers and carriers.
- Troubleshoot network and VoIP issues using structured methodologies.
- Use monitoring tools to proactively detect and respond to incidents.
- Navigate major HPBX platforms and vendor-specific networking equipment.
- Prepare for CompTIA Network+ certification.

---

## Target Audience

This course is designed for:

- **New NOC hires** (Tier 1 transitioning to Tier 2).
- **Technical support staff** moving into network operations.
- **Career changers** entering telecommunications/networking.
- **Existing Tier 2 technicians** seeking structured training and certification prep.

---

## Delivery Methods

### Option 1: Self-Paced (Recommended for Motivated Learners)

- Student works through modules independently.
- Instructor available for questions (office hours, Slack, email).
- Weekly check-ins to review progress.
- Student completes hands-on exercises on their own time.

**Pros:** Flexible, allows students to learn at their own speed.

**Cons:** Requires self-discipline, may take longer to complete.

### Option 2: Instructor-Led (Classroom or Virtual)

- Instructor teaches 1–2 modules per week (live sessions).
- Group discussions, Q&A, and hands-on labs during class time.
- Homework: Complete exercises between sessions.
- Quizzes at the start of each session (review previous module).

**Pros:** Structured, accountable, peer learning.

**Cons:** Requires scheduling, may move too fast/slow for some students.

### Option 3: Hybrid (Best of Both Worlds)

- Students complete reading and videos on their own.
- Weekly live session for Q&A, demos, and group exercises.
- Instructor reviews completed exercises and provides feedback.

**Pros:** Flexible + structured, good engagement.

**Cons:** Requires coordination and consistent attendance.

---

## Module-by-Module Teaching Guide

### Module 1: Customer Service & Communication Skills

**Teaching Focus:**

- Role-playing scenarios (customer calls, email responses).
- Review and critique student-written emails.
- Emphasize tone, clarity, and expectation management.

**In-Lab Activity:**

- Simulate 3 customer calls (angry customer, confused customer, VIP customer).
- Write 5 email templates as a group.

**Assessment:**

- Review email templates (clarity, professionalism).
- Evaluate role-play performance (empathy, clarity, problem-solving).

---

### Module 2: Network Troubleshooting Fundamentals

**Teaching Focus:**

- Demonstrate commands live (ping, tracert, nslookup).
- Walk through real troubleshooting scenarios.
- Emphasize systematic approach (don't skip steps!).

**In-Lab Activity:**

- Give students 5 traceroute outputs to analyze.
- Simulate "no internet" scenario, have students troubleshoot.

**Assessment:**

- Quiz on command usage (when to use ping vs. tracert vs. nslookup).
- Evaluate troubleshooting documentation (clarity, completeness).

---

### Module 3: VoIP & Unified Communications Basics

**Teaching Focus:**

- Diagram call flows on whiteboard (SIP messages).
- Demonstrate Wireshark capture of a VoIP call (if possible).
- Explain NAT/firewall impact on VoIP.

**In-Lab Activity:**

- Capture a VoIP call in Wireshark (live demo or pre-recorded).
- Diagnose one-way audio scenario.

**Assessment:**

- Quiz on SIP message types and call flow.
- Evaluate VoIP troubleshooting checklist.

---

### Module 4: Networking Foundations

**Teaching Focus:**

- Subnetting practice on whiteboard (step-by-step).
- Explain routing with real-world analogies (mail delivery, highways).
- Demonstrate NAT with packet capture (show IP translation).

**In-Lab Activity:**

- Subnetting competition (who can solve 10 problems fastest?).
- Build a simple network diagram with VLANs and routing.

**Assessment:**

- Subnetting quiz (timed, 20 problems).
- Evaluate IP addressing cheat sheet.

---

### Module 5: Network Monitoring & Alerting

**Teaching Focus:**

- Demo a monitoring tool (SolarWinds, PRTG, or LibreNMS).
- Show real dashboards and alerts.
- Discuss alert fatigue and how to reduce false positives.

**In-Lab Activity:**

- Set up a basic alert in a monitoring tool (simulated or real).
- Analyze a dashboard and prioritize alerts.

**Assessment:**

- Quiz on monitoring protocols (SNMP, ICMP, syslog).
- Evaluate alert response runbook.

---

### Module 6: Wireshark for VoIP Analysis

**Teaching Focus:**

- Live Wireshark demo (capture and filter traffic).
- Walk through VoIP call analysis (SIP → RTP).
- Show common issues (one-way audio, call drops) in captures.

**In-Lab Activity:**

- Students capture their own VoIP call (or analyze provided pcap).
- Diagnose issues in sample captures.

**Assessment:**

- Practical exam: Analyze a pcap and identify the issue.
- Evaluate Wireshark filter cheat sheet.

---

### Module 7: Firewall Administration Essentials

**Teaching Focus:**

- Explain stateful vs. stateless with analogies (bouncer at a club).
- Demo firewall rule configuration (GUI or CLI).
- Show how to test ports (telnet, Test-NetConnection).

**In-Lab Activity:**

- Configure firewall rules for VoIP (allow SIP/RTP).
- Test port connectivity to various services.

**Assessment:**

- Quiz on firewall concepts (NAT, ALG, stateful).
- Evaluate firewall troubleshooting checklist.

---

### Module 8: VPN Fundamentals

**Teaching Focus:**

- Explain VPN types with diagrams (remote access vs. site-to-site).
- Demo connecting to a VPN and analyzing routing changes.
- Discuss MTU issues and how to test/fix them.

**In-Lab Activity:**

- Connect/disconnect VPN, compare routing tables.
- Test MTU with ping (vary packet sizes).

**Assessment:**

- Quiz on VPN concepts (split tunnel, full tunnel, IPsec vs. SSL).
- Evaluate VPN troubleshooting checklist.

---

### Module 9: Salesforce Service Cloud for NOC

**Teaching Focus:**

- Demo Salesforce (create case, update, escalate, close).
- Show email templates and macros in action.
- Discuss SLA tracking and escalation paths.

**In-Lab Activity:**

- Students create test cases and practice workflows.
- Build a macro and email template.

**Assessment:**

- Practical exam: Handle a simulated case from creation to closure.
- Evaluate Salesforce deliverables (templates, macros, report).

---

### Module 10: HPBX Platforms

**Teaching Focus:**

- Walk through each platform's admin portal (8x8, CoreDial, Windstream, Intelepeer).
- Compare features and common issues.
- Show how to escalate to each vendor.

**In-Lab Activity:**

- Navigate each portal (training accounts).
- Diagnose platform-specific scenarios.

**Assessment:**

- Quiz on platform differences and features.
- Evaluate HPBX quick reference guides.

---

### Module 11: Product-Specific Training

**Teaching Focus:**

- Demo each product's cloud portal (BEC, CradlePoint, Ooma, Data Remote).
- Show failover testing (disconnect primary, verify backup).
- Discuss common deployment scenarios.

**In-Lab Activity:**

- Simulate failover test (if hardware available).
- Explore cloud portals and document key sections.

**Assessment:**

- Quiz on product functions and troubleshooting.
- Evaluate product quick reference guides.

---

### Module 12: Vendor-Specific Networking

**Teaching Focus:**

- Demo CLI for Fortinet, Cisco, Juniper (live or recorded).
- Show cloud dashboards for Meraki and VeloCloud.
- Compare troubleshooting approaches by vendor.

**In-Lab Activity:**

- Practice CLI commands (show version, show interface, etc.).
- Diagnose vendor-specific scenarios.

**Assessment:**

- Practical exam: Troubleshoot a multi-vendor scenario.
- Evaluate vendor quick reference guides.

---

### Module 13: CompTIA Network+ Foundation

**Teaching Focus:**

- Review exam structure and domains.
- Share study resources and tips.
- Motivate students to pursue certification.

**In-Lab Activity:**

- Take a practice exam together (timed).
- Review weak areas as a group.
- Build study plans.

**Assessment:**

- Practice exam score (aim for 85%+).
- Evaluate Network+ study plan and cheat sheet.

---

## Assessment Strategies

### Formative Assessments (Ongoing)

- **Quizzes:** 5–10 questions at the start of each session (review previous module).
- **Exercise Reviews:** Check completed hands-on exercises (provide feedback).
- **Participation:** Engagement in discussions, labs, and group activities.

### Summative Assessments (End of Course)

- **Final Practical Exam:** Multi-vendor troubleshooting scenario (2–3 hours).
- **Deliverables Portfolio:** All cheat sheets, guides, and templates created during the course.
- **Network+ Practice Exam:** Score 85%+ indicates readiness for real exam.

### Grading Rubric (Optional)

| Component | Weight |
|-----------|--------|
| Module Quizzes | 20% |
| Hands-On Exercises | 30% |
| Deliverables (cheat sheets, guides) | 20% |
| Final Practical Exam | 20% |
| Network+ Practice Exam | 10% |

**Passing Score:** 70%+ overall.

---

## Hands-On Lab Setup

### Minimum Lab Requirements

**Per Student:**

- Laptop/PC with:
  - Windows 10/11 or Linux (Ubuntu, Fedora, etc.).
  - Wireshark installed.
  - Access to command line (PowerShell, Terminal).
- Internet access.
- Softphone installed (optional, for VoIP labs).

**Instructor/Shared Resources:**

- Monitoring tool (PRTG free tier, LibreNMS, or demo of SolarWinds).
- Salesforce sandbox/training account.
- Access to HPBX platform portals (training accounts).
- Access to vendor cloud portals (Meraki, VeloCloud, etc.).
- Packet capture files (for Wireshark labs).

### Optional Lab Enhancements

- Physical devices (old routers, switches, phones) for hands-on practice.
- Virtual lab environment (GNS3, EVE-NG, Packet Tracer).
- VLAN-capable switch for VLAN labs.
- Firewall appliance (Fortinet, pfSense) for firewall labs.

---

## Troubleshooting Common Issues

### Issue 1: Student Falling Behind

**Symptoms:**

- Missing exercise submissions.
- Low quiz scores.
- Infrequent participation.

**Solutions:**

- Schedule 1:1 check-in (identify barriers).
- Adjust pace (slow down or provide additional support).
- Pair with a peer mentor (buddy system).

### Issue 2: Student Struggling with Technical Concepts

**Symptoms:**

- Consistently low quiz scores.
- Difficulty completing hands-on exercises.
- Frustration or lack of confidence.

**Solutions:**

- Provide additional examples and analogies.
- Break complex topics into smaller chunks.
- Offer extra office hours or tutoring sessions.
- Recommend supplementary resources (videos, articles).

### Issue 3: Lab Environment Issues

**Symptoms:**

- Students can't access tools/portals.
- Software installation problems.
- Network connectivity issues during labs.

**Solutions:**

- Test lab environment before each session.
- Provide step-by-step installation guides.
- Have backup options (pre-recorded demos, alternative tools).
- Ensure IT support is available for technical issues.

### Issue 4: Lack of Engagement

**Symptoms:**

- Low participation in discussions.
- Minimal questions asked.
- Students seem disinterested.

**Solutions:**

- Use interactive activities (polls, breakout rooms, group exercises).
- Relate content to real-world scenarios (share war stories).
- Encourage questions (create safe environment, no "dumb" questions).
- Gamify learning (competitions, badges, rewards).

---

## Certification and Completion

### Course Completion Requirements

To receive a certificate of completion, students must:

1. Complete all 13 modules (marked as "Completed" in progress tracker).
2. Submit all hands-on exercises (5 per module, 65 total).
3. Submit all deliverables (cheat sheets, guides, templates).
4. Score 70%+ on final practical exam.
5. Score 85%+ on Network+ practice exam (recommended).

### Certificate Presentation

**Options:**

- **In-Person:** Present certificate at graduation ceremony (team meeting, all-hands).
- **Virtual:** Send certificate via email, recognize in team call.
- **Self-Paced:** Student downloads certificate upon meeting requirements.

### Post-Course Support

**Continue Learning:**

- Encourage students to pursue CompTIA Network+ certification.
- Provide access to advanced training (Security+, CCNA, vendor certs).
- Create alumni network (Slack channel, LinkedIn group).

**Career Development:**

- Update résumé with course completion.
- Practice technical interviewing (mock interviews).
- Discuss career paths (Tier 3, engineering, security, cloud).

---

## Instructor Resources

### Templates and Tools

- **Progress Tracker:** [progress-tracking.md](progress-tracking.md)
- **Certificate Template:** [certificate-template.md](certificate-template.md)
- **Quiz Bank:** (Create your own or use CompTIA practice questions)
- **Lab Guides:** (Document step-by-step lab setups)

### Recommended Reading

- "CompTIA Network+ Study Guide" (Sybex).
- "Network Warrior" (O'Reilly) – real-world networking.
- "The Art of Troubleshooting" – methodology and mindset.

### Communities and Support

- **Professor Messer:** https://www.professormesser.com/ (free Network+ videos).
- **Reddit r/CompTIA:** Community for certification advice.
- **Discord Study Servers:** Join networking/certification study groups.

---

**Return to**: [Course Index](README.md)
