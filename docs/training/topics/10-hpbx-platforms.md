# Module 10: HPBX Platforms (8x8, CoreDial, Windstream, Intelepeer)

## Learning Objective

Understand the architecture, administration, and troubleshooting approaches for major Hosted PBX platforms used in the NOC.

---

## Foundational Knowledge You Need

Before diving into this module, understand:

- **What is Hosted PBX**: Cloud-based phone system managed by a provider.
- **Basic VoIP concepts**: SIP, RTP, registration, extensions.
- **Multi-tenant architecture**: One platform serving many customers.
- **Customer portals**: Web interfaces for admins to manage their phone systems.

---

## Key Teaching Points

### 1. Hosted PBX Architecture Overview

**What makes up a Hosted PBX solution:**

- **Core Platform**: Provider's cloud infrastructure (call processing, routing).
- **Customer Portal**: Web interface for admins to manage users, numbers, features.
- **Endpoints**: Physical phones, softphones, mobile apps.
- **SIP Trunks**: Connections to PSTN (public phone network).
- **Contact Center** (optional): Queue management, IVR, reporting.

**Typical deployment:**
Customer Site Provider Cloud
┌─────────────────┐ ┌──────────────────┐
│ IP Phones │────────────▶│ Hosted PBX │
│ (SIP) │◀────────────│ Platform │
└─────────────────┘ Internet └──────────────────┘
│
▼
┌──────────────────┐
│ PSTN Gateway │
│ (Public Network)│
└──────────────────┘

### 2. 8x8 Virtual Office

**Platform overview:**

- Cloud-based UCaaS (Unified Communications as a Service).
- Combines voice, video, chat, contact center.
- Suitable for SMB to enterprise.

**Admin portal features:**

- **User management**: Add/remove users, assign extensions.
- **Phone numbers**: Order, port, assign numbers.
- **Call routing**: Auto-attendant, hunt groups, call queues.
- **Devices**: Provision phones, manage MAC addresses.
- **Reporting**: Call logs, usage reports, analytics.

**Common issues:**

| Issue | Likely Cause | Troubleshooting |
|-------|--------------|-----------------|
| Phone won't register | Wrong credentials, network blocked | Check username/password, verify ports 5060/10000-20000 open |
| One-way audio | NAT/firewall issue | Check firewall, disable SIP ALG, verify RTP ports |
| Can't make outbound calls | Number not assigned, routing issue | Check number assignment, dial plan settings |
| Can't receive inbound calls | Number not routed, DND enabled | Check call routing, Do Not Disturb status |
| Poor call quality | Bandwidth, jitter, packet loss | Run speed test, check network QoS settings |

**Portal URL:** https://admin.8x8.com/

**Support escalation:**

- Partner portal: https://partner.8x8.com/
- Phone: 1-800-8x8-8x88 (check current number).
- Email: partner-support@8x8.com (or via ticket).

**Training:**

- [8x8 Online Sign Up Form](https://protect-us.mimecast.com/s/3YjWCM8oKMhk5gWHwtLcV)
- Spectrotel Internal Training including Contact Center.

### 3. CoreDial

**Platform overview:**

- White-label hosted PBX platform.
- Used by many service providers (branded differently).
- Strong focus on SMB market.

**Admin portal features:**

- **Account management**: Customer accounts, billing info.
- **Extensions**: Create, modify, delete extensions.
- **Inbound routing**: DID assignment, IVR, ring groups.
- **Outbound routing**: Trunk groups, dial plans.
- **Voicemail**: Configure boxes, email notifications.
- **CDR (Call Detail Records)**: Call logs, billing reports.

**Common issues:**

| Issue | Likely Cause | Troubleshooting |
|-------|--------------|-----------------|
| Extension not registering | Provisioning error, wrong server | Check SIP server settings, reboot phone |
| Inbound calls not ringing | DID not assigned, ring group empty | Verify DID routing, check ring group members |
| Outbound calls fail | Trunk group full, dial plan restriction | Check available trunks, review dial plan |
| Voicemail not working | Mailbox not created, notification misconfigured | Create mailbox, check email settings |
| Intermittent call quality | Network congestion, insufficient bandwidth | Check bandwidth usage, implement QoS |

**Portal URL:** Varies by provider (e.g., pbx.coredial.com or branded URL).

**Support escalation:**

- Email: learn@coredial.com (for training requests).
- Partner support: Via provider's ticketing system.
- Phone: Check provider-specific support number.

**Training:**

- Email [CoreDial Training Team](mailto:learn@coredial.com?subject=CoreDial%20Partner%20Support%20Training%20Request) to request course registration.
- Spectrotel Internal Training including Contact Center.

### 4. Windstream Hosted Services

**Platform overview:**

- Enterprise-focused hosted UC platform.
- Often bundled with managed network services.
- Strong in healthcare, finance, government sectors.

**Admin portal features:**

- **User administration**: Add/move/change users.
- **Number management**: Order ports, assign DIDs.
- **Call features**: Call forwarding, transfer, conferencing.
- **Contact Center**: Queue configuration, agent management.
- **Analytics**: Usage dashboards, call quality metrics.

**Common issues:**

| Issue | Likely Cause | Troubleshooting |
|-------|--------------|-----------------|
| User can't log in to portal | Wrong credentials, account locked | Reset password, check account status |
| Phones show "unregistered" | Network issue, provisioning failed | Check connectivity, reprovision phones |
| Calls drop after X minutes | Firewall timeout, SIP ALG | Check firewall settings, disable SIP ALG |
| Contact Center agents can't log in | License issue, queue misconfigured | Verify licenses, check queue settings |
| Billing discrepancies | CDR not matching, rate plan confusion | Pull CDR report, compare with invoice |

**Portal URL:** Varies (often my.windstream.com or similar).

**Support escalation:**

- Partner support: Via Spectrotel internal escalation.
- Windstream NOC: Check provider-specific contact.

**Training:**

- Spectrotel Internal Training including Contact Center.

### 5. Intelepeer Hosted Services

**Platform overview:**

- CPaaS (Communications Platform as a Service) + Hosted PBX.
- Strong API integration capabilities.
- Focus on custom workflows and automation.

**Admin portal features:**

- **Account setup**: Create accounts, configure services.
- **Number management**: Order, port, manage DIDs.
- **Call routing**: IVR, hunt groups, time-based routing.
- **API access**: Webhooks, REST API for integrations.
- **Reporting**: CDR, analytics, real-time dashboards.

**Common issues:**

| Issue | Likely Cause | Troubleshooting |
|-------|--------------|-----------------|
| API integration failing | Wrong credentials, endpoint misconfigured | Check API keys, verify webhook URLs |
| Calls not routing as expected | Routing rules misconfigured | Review IVR/routing configuration |
| Numbers not ported on time | LOA errors, carrier delays | Check LOA accuracy, follow up with porting team |
| SMS not working | SMS not enabled on number, wrong provisioning | Verify SMS capability, check provisioning |
| Call recording not saving | Storage full, recording settings incorrect | Check storage quota, verify recording config |

**Portal URL:** my.intelepeer.com (or provider-branded URL).

**Support escalation:**

- Partner support: Via Spectrotel internal escalation.
- Intelepeer NOC: Check provider-specific contact.

**Training:**

- Spectrotel Internal Training.

### 6. Platform Comparison Table

| Feature | 8x8 | CoreDial | Windstream | Intelepeer |
|---------|-----|----------|------------|------------|
| **Target market** | SMB to Enterprise | SMB | Enterprise | SMB to Enterprise |
| **Portal ease of use** | High | Medium | Medium | Medium-High |
| **Contact Center** | Built-in | Add-on | Built-in | API-driven |
| **API access** | Limited | Limited | Limited | Strong |
| **Mobile app** | Yes | Yes (branded) | Yes | Yes |
| **Video conferencing** | Yes (8x8 Video) | Via integration | Via integration | Via integration |
| **Typical provisioning time** | Minutes | Minutes | Hours-days | Minutes-hours |

### 7. Troubleshooting Methodology by Platform

**Step 1: Identify the platform**

- Check the account/case notes: Which platform is this?
- Look at the phone configuration: What SIP server is configured?
- Check the customer portal URL: Which platform does it point to?

**Step 2: Access the admin portal**

- Log in to the customer's admin portal (or your partner portal).
- Verify: Is the extension/user created and active?
- Check: Is the phone registered (green status)?
- Review: Recent call logs (are calls reaching the platform?).

**Step 3: Check platform-specific settings**

- **8x8**: Check "Devices" tab, verify MAC address provisioning.
- **CoreDial**: Check "Extensions" → extension status, SIP credentials.
- **Windstream**: Check "Users" → user status, feature assignments.
- **Intelepeer**: Check "Accounts" → account status, routing rules.

**Step 4: Review call logs/CDR**

- Look for the specific call (time, caller ID, called number).
- Note: Did the call reach the platform?
- If yes: Issue is likely on customer network (phones, firewall).
- If no: Issue is likely with carrier/SIP trunk.

**Step 5: Escalate appropriately**

- **Platform issue** (extension not working, feature broken): Escalate to platform provider.
- **Network issue** (phones can't register, call quality): Troubleshoot customer network.
- **Carrier issue** (inbound calls not reaching platform): Escalate to carrier/SIP trunk provider.

### 8. Best Practices for NOC Technicians

**Daily tasks:**

- Check platform status dashboards (any known outages?).
- Review open cases: Which platform is most affected?
- Monitor provisioning requests: Are new customers/phones activated?

**When troubleshooting:**

- Always verify: Which platform is this? (Don't assume!)
- Check the admin portal first (is the extension active?).
- Look at call logs (did the call reach the platform?).
- Document: Platform, extension number, error messages, portal screenshots.

**For escalations:**

- Include: Platform name, account ID, extension number, issue description.
- Attach: Call logs, error screenshots, troubleshooting steps taken.
- Specify: Impact (how many users affected, business critical?).

---

## Hands-On Exercises

### Exercise 1: Navigate Each Portal

For each platform (8x8, CoreDial, Windstream, Intelepeer):

1. Log in to the admin portal (training/sandbox environment).
2. Find and note:
   - Where to view extensions/users.
   - Where to see call logs/CDR.
   - Where to check device/phone status.
   - Where to view inbound routing.
3. Create a "portal map" (screenshot or notes) for quick reference.

---

### Exercise 2: Diagnose Platform-Specific Issues

**Scenario 1 (8x8):**

- Customer reports: "Phone shows 'unregistered'."
- You check 8x8 portal: Extension exists, but device not showing.
- **Your next steps:** ?

**Scenario 2 (CoreDial):**

- Customer reports: "Can't make outbound calls."
- You check CoreDial portal: Extension registered, but trunk group full.
- **Your next steps:** ?

**Scenario 3 (Windstream):**

- Customer reports: "Inbound calls not ringing."
- You check Windstream portal: DID assigned, but ring group empty.
- **Your next steps:** ?

**Scenario 4 (Intelepeer):**

- Customer reports: "Calls dropping after 30 seconds."
- You check Intelepeer portal: Calls reaching platform, then disconnecting.
- **Your next steps:** ?

Document your troubleshooting approach for each.

---

### Exercise 3: Create a Platform Quick Reference Guide

Build a one-page reference for each platform:

**Template:**

Platform: [Name]
Portal URL: [URL]
Login: [Credentials/SSO]

Key Sections:

Extensions/Users: [Path]

Call Logs: [Path]

Devices/Phones: [Path]

Inbound Routing: [Path]

Common Issues:

[Issue] → [Check this]

[Issue] → [Check that]

Support Contact:

Email: [Email]

Phone: [Number]

Portal: [Link to open ticket]


Create one for each of the 4 platforms.

---

### Exercise 4: Simulate an Escalation

Scenario: Customer on 8x8 reports "complete phone system down."

**Your investigation:**

1. Check 8x8 status page: No known outages.
2. Log in to admin portal: All extensions show "unregistered."
3. Check call logs: No calls reaching platform in last 30 minutes.
4. Customer confirms: Internet is up, other services working.

**Your escalation email to 8x8:**

Write a professional escalation email including:

- Account name/ID.
- Issue description.
- Impact (how many users, how long).
- Troubleshooting steps taken.
- Request: Urgent investigation and ETA.

---

### Exercise 5: Compare Call Logs Across Platforms

For each platform:

1. Pull a CDR report for a specific date/time range.
2. Identify:
   - Total calls.
   - Successful calls.
   - Failed calls (and error codes if available).
3. Compare:
   - How is the data presented?
   - What fields are available?
   - How easy is it to filter/search?

Note differences and which platform provides the most useful troubleshooting data.

---

## Additional Resources

- **8x8 Certification**: [Online Sign Up Form](https://protect-us.mimecast.com/s/3YjWCM8oKMhk5gWHwtLcV)
- **CoreDial Training**: Email [learn@coredial.com](mailto:learn@coredial.com?subject=CoreDial%20Partner%20Support%20Training%20Request)
- **Spectrotel Internal Training**: For all platforms including Contact Center.

---

## Completion Checklist

- [ ] Read and understand all key teaching points.
- [ ] Complete all 5 hands-on exercises.
- [ ] Create quick reference guides for all 4 platforms.
- [ ] Practice navigating each admin portal.
- [ ] Move on to [Module 11: Product-Specific Training](11-product-specific.md).

---

**Next Module**: [Product-Specific Training (BEC, CradlePoint, Ooma, Data Remote)](11-product-specific.md)
