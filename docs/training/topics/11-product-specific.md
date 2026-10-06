# Module 11: Product-Specific Training (BEC, CradlePoint, Ooma, Data Remote)

## Learning Objective

Understand the function, configuration, and troubleshooting approaches for specific products commonly deployed in customer environments.

---

## Foundational Knowledge You Need

Before diving into this module, understand:

- **Basic networking**: IP addresses, DHCP, NAT, routing.
- **What is a network device**: Router, modem, cellular backup, SD-WAN appliance.
- **Device management**: Web GUI, CLI, cloud portal, mobile app.
- **Provisioning**: How devices are configured and activated.

---

## Key Teaching Points

### 1. BEC (Business Edge Connect / Broadband Edge Controller)

**Product overview:**

- SD-WAN / edge routing platform.
- Combines multiple internet connections (fiber, cable, cellular) for redundancy.
- Provides automatic failover, load balancing, and application-aware routing.

**Key features:**

- **Multi-WAN**: Aggregates multiple internet circuits.
- **Cellular backup**: 4G/5G failover when primary circuits fail.
- **SD-WAN overlay**: Creates secure tunnels to other sites/cloud.
- **Application visibility**: Identifies apps (VoIP, video, web) and prioritizes accordingly.
- **Cloud management**: Centralized portal for monitoring and configuration.

**Common models:**

- BEC-2600, BEC-2800 series (check current lineup).

**Typical deployment:**

[ISP 1: Fiber] ──┐
├──▶ [BEC Router] ──▶ [Customer LAN: Phones, PCs, Servers]
[ISP 2: Cable] ──┘
[Cellular 4G/5G] ─┘


**Common issues:**

| Issue | Likely Cause | Troubleshooting |
|-------|--------------|-----------------|
| No internet | All WAN links down, device rebooted | Check each WAN link status, verify power, reboot device |
| Failover not working | Backup link misconfigured, threshold too high | Check failover settings, test backup link manually |
| Slow performance | Load balancing misconfigured, single link congested | Check link utilization, review load balancing rules |
| Can't access cloud portal | Device offline, wrong credentials | Check device connectivity, verify login credentials |
| VoIP quality issues | QoS not configured, jitter on one link | Enable QoS for VoIP, check link quality metrics |

**Management:**

- **Web GUI**: https://[device-IP] (local management).
- **Cloud portal**: https://cloud.bec-systems.com/ (or similar, check current URL).
- **Mobile app**: BEC Manager (iOS/Android).

**Key settings to verify:**

1. **WAN links**: Are all configured links up?
2. **Failover**: What's the threshold? (e.g., failover if primary >50% packet loss).
3. **Load balancing**: Mode (auto, manual, weighted)?
4. **Cellular**: Is SIM card inserted? Is data plan active?
5. **LAN**: DHCP enabled? Correct subnet?

**Troubleshooting steps:**

1. Check device status LEDs (power, WAN, LAN, cellular).
2. Log in to web GUI or cloud portal.
3. Review WAN link status (up/down, utilization).
4. Check event logs (failover events, errors).
5. Test failover manually (disconnect primary, verify backup activates).

**Training:**

- Spectrotel Internal Training.

---

### 2. CradlePoint (Cellular Routers & Modems)

**Product overview:**

- Cellular routers and modems for backup or primary connectivity.
- Used in retail, healthcare, transportation, remote sites.
- Supports 4G LTE and 5G cellular networks.

**Key features:**

- **Cellular connectivity**: 4G LTE, 5G (depending on model).
- **Dual SIM**: Redundancy across carriers (Verizon, AT&T, etc.).
- **Ethernet ports**: Connect routers, switches, phones.
- **Wi-Fi**: Built-in access point (on some models).
- **Cloud management**: CradlePoint Cloud (centralized management).

**Common models:**

- **IBR900**: 5G cellular router (enterprise).
- **IBR1700**: High-performance 5G router.
- **MC400**: 4G LTE modem (USB).
- **AER series**: Aggregation routers for large deployments.

**Typical deployment:**


[Cellular Network: 4G/5G]
│
▼
[CradlePoint Router]
│
├──▶ [Primary Router/Firewall]
│
└──▶ [Direct to LAN: Phones, PCs]


**Common issues:**

| Issue | Likely Cause | Troubleshooting |
|-------|--------------|-----------------|
| No cellular signal | Poor coverage, antenna disconnected | Check signal strength (RSRP), reposition antenna |
| Slow speeds | Network congestion, data cap throttling | Check signal quality (SINR), verify data plan |
| Device offline | Power issue, SIM card problem | Check power, reseat SIM card, reboot |
| Can't failover | Routing misconfigured, priority wrong | Check routing table, verify failover priority |
| Intermittent connectivity | Weak signal, tower handoff issues | Check signal metrics, consider external antenna |

**Management:**

- **Web GUI**: https://[device-IP] (local management).
- **CradlePoint Cloud**: https://cloud.cradlepoint.com/ (centralized).
- **Mobile app**: CradlePoint Connect (iOS/Android).

**Key settings to verify:**

1. **Cellular**: Signal strength (RSRP), signal quality (SINR).
2. **Data plan**: Is data active? Any caps/throttling?
3. **APN**: Correct APN for carrier (e.g., vzwinternet for Verizon).
4. **Routing**: Default route via cellular or primary?
5. **Failover**: Priority order (primary vs. cellular)?

**Troubleshooting steps:**

1. Check signal strength in web GUI or cloud portal.
   - RSRP: >-90 dBm = good, <-110 dBm = poor.
   - SINR: >20 dB = good, <10 dB = poor.
2. Verify SIM card status (active, data available).
3. Check APN settings (must match carrier).
4. Test speed (speedtest.net over cellular).
5. Review event logs (disconnects, handoffs).

**Training:**

- Spectrotel Internal Training.

---

### 3. Ooma AirDial

**Product overview:**

- Cloud-based phone system with integrated hardware.
- All-in-one solution: Phone system + internet + support.
- Targeted at SMB market.

**Key features:**

- **Hosted PBX**: Cloud-managed phone system.
- **Included internet**: Some plans include broadband connection.
- **Plug-and-play**: Pre-configured devices, minimal setup.
- **Mobile app**: Ooma Office app (iOS/Android).
- **Features**: Voicemail, call forwarding, auto-attendant, conferencing.

**Common models:**

- **Ooma Telo**: Base station for residential/SMB.
- **Ooma Office**: Business-oriented system.
- **Ooma AirDial**: Specific SMB package (check current branding).

**Typical deployment:**

[Internet: Fiber/Cable]
│
▼
[Ooma Base Station]
│
├──▶ [Ooma Phones (proprietary)]
│
└──▶ [Regular phones via FXS ports]


**Common issues:**

| Issue | Likely Cause | Troubleshooting |
|-------|--------------|-----------------|
| No dial tone | Device offline, service suspended | Check internet, verify account status |
| Can't make calls | Service plan expired, provisioning issue | Check account, reprovision device |
| Poor call quality | Insufficient bandwidth, jitter | Run speed test, check QoS settings |
| Voicemail not working | Mailbox not set up, notification misconfigured | Check voicemail settings, verify email |
| Mobile app not connecting | Wrong credentials, network issue | Verify login, check network connectivity |

**Management:**

- **Web portal**: https://www.ooma.com/my-account/ (customer portal).
- **Mobile app**: Ooma Office (iOS/Android).
- **Device GUI**: https://192.168.1.1 (local device management).

**Key settings to verify:**

1. **Account status**: Active, suspended, or expired?
2. **Internet connection**: Is base station online?
3. **Phone registration**: Are phones showing as registered?
4. **Voicemail**: Mailbox created? Email notifications set?
5. **Call forwarding**: Configured correctly?

**Troubleshooting steps:**

1. Check base station LEDs (internet, phone, status).
2. Log in to customer portal (verify account status).
3. Check device GUI (internet connectivity, phone status).
4. Test call (inbound and outbound).
5. If issue persists: Reprovision device (via portal or support).

**Training:**

- Spectrotel Internal Training.

---

### 4. Data Remote / MIX Networks

**Product overview:**

- Remote monitoring and management platforms.
- Often used for distributed sites (retail, healthcare, enterprise).
- Combines networking, security, and monitoring in one platform.

**Key features:**

- **Remote monitoring**: Device health, connectivity, alerts.
- **Network management**: Routers, switches, APs from multiple vendors.
- **Security**: Firewall, VPN, threat detection.
- **Automation**: Automated remediation, scripted responses.
- **Reporting**: Dashboards, SLA tracking, compliance reports.

**Typical deployment:**
[Customer Sites: Multiple Locations]
│
▼
[Data Remote / MIX Platform]
│
├──▶ [Monitoring Dashboard]
├──▶ [Alerting/Notifications]
└──▶ [Automated Remediation]


**Common issues:**

| Issue | Likely Cause | Troubleshooting |
|-------|--------------|-----------------|
| Device offline | Network down, agent not running | Check connectivity, restart agent/service |
| Alerts not firing | Threshold misconfigured, notification misconfigured | Check alert rules, verify email/SMS settings |
| Slow dashboard | Too many devices, backend performance issue | Filter view, check backend logs |
| Automation not working | Script error, permissions issue | Check script logs, verify permissions |
| Data gaps in reporting | Agent disconnect, polling interval too long | Check agent status, reduce polling interval |

**Management:**

- **Web portal**: Varies by deployment (check internal docs).
- **API**: For integrations and custom automation.
- **Mobile app**: If available (check current offerings).

**Key settings to verify:**

1. **Device status**: Online/offline, last seen timestamp.
2. **Alert rules**: Thresholds, notification recipients.
3. **Polling interval**: How often data is collected.
4. **Automation scripts**: Enabled, error-free?
5. **User permissions**: Who can view/edit what?

**Troubleshooting steps:**

1. Check device status in dashboard.
2. Review recent alerts/events.
3. Verify agent/service is running on device.
4. Check network connectivity to platform.
5. Review automation/script logs (if applicable).

**Training:**

- Spectrotel Internal Training.

---

### 5. Product Comparison Table

| Feature | BEC | CradlePoint | Ooma AirDial | Data Remote/MIX |
|---------|-----|-------------|--------------|-----------------|
| **Primary function** | SD-WAN router | Cellular router | Hosted PBX + internet | Remote monitoring |
| **Connectivity** | Multi-WAN (fiber, cable, cellular) | Cellular (4G/5G) | Internet (fiber/cable) | Multi-vendor network |
| **Management** | Web GUI, cloud portal | Web GUI, cloud portal | Web portal, mobile app | Web portal, API |
| **Target market** | Enterprise, multi-site | Retail, remote sites | SMB | Enterprise, distributed |
| **Failover** | Automatic (multi-WAN) | Cellular backup | N/A (single internet) | Monitoring + alerting |
| **Cloud management** | Yes | Yes | Yes | Yes |

---

### 6. Troubleshooting Methodology for Products

**Step 1: Identify the product**

- Check the case/account: What product is deployed?
- Look at device model (label, web GUI, portal).
- Verify: Is this the right product for the reported issue?

**Step 2: Access the management interface**

- **Local**: Web GUI at device IP (e.g., 192.168.1.1).
- **Cloud**: Centralized portal (check internal docs for URLs).
- **Mobile app**: If available and customer has it installed.

**Step 3: Check device status**

- Power: Is the device on? (Check LEDs.)
- Connectivity: Are WAN/cellular links up?
- Registration: Is the device registered to the cloud portal?
- Alerts: Are there any active alerts or error messages?

**Step 4: Review logs and events**

- Event log: Reboots, failovers, errors.
- Connection log: When did links go up/down?
- Alert history: What alerts fired recently?

**Step 5: Test and verify**

- Test connectivity (ping, speedtest).
- Test failover (disconnect primary, verify backup activates).
- Test affected service (VoIP call, web browsing, etc.).

**Step 6: Document and escalate (if needed)**

- Document: Product, model, firmware version, issue description.
- Attach: Screenshots, logs, troubleshooting steps taken.
- Escalate: To product vendor support if beyond your scope.

---

### 7. Best Practices for NOC Technicians

**Daily tasks:**

- Check cloud portals for device health (any offline devices?).
- Review alerts/notifications (any critical issues?).
- Monitor failover events (are backups activating as expected?).

**When troubleshooting:**

- Always verify: Which product is this? (Don't assume!)
- Check the cloud portal first (is the device online?).
- Look at recent events (any reboots, failovers, errors?).
- Document: Product, model, serial number, firmware version.

**For escalations:**

- Include: Product name, model, serial, firmware version.
- Attach: Event logs, screenshots, troubleshooting steps taken.
- Specify: Impact (how many users/sites affected, business critical?).

---

## Hands-On Exercises

### Exercise 1: Explore Each Product's Portal

For each product (BEC, CradlePoint, Ooma, Data Remote):

1. Log in to the cloud portal (training/sandbox environment).
2. Find and note:
   - Where to view device status.
   - Where to see event logs.
   - Where to check connectivity (WAN, cellular, etc.).
   - Where to configure alerts/notifications.
3. Create a "portal map" (screenshot or notes) for quick reference.

---

### Exercise 2: Diagnose Product-Specific Issues

**Scenario 1 (BEC):**

- Customer reports: "Internet went down, but failover didn't activate."
- You check BEC portal: Primary WAN down, cellular link up but not active.
- **Your next steps:** ?

**Scenario 2 (CradlePoint):**

- Customer reports: "Cellular backup is very slow."
- You check CradlePoint portal: RSRP = -105 dBm, SINR = 8 dB.
- **Your next steps:** ?

**Scenario 3 (Ooma):**

- Customer reports: "No dial tone on any phone."
- You check Ooma portal: Base station offline.
- **Your next steps:** ?

**Scenario 4 (Data Remote):**

- Customer reports: "Not receiving alerts for offline devices."
- You check Data Remote portal: Alert notifications disabled.
- **Your next steps:** ?

Document your troubleshooting approach for each.

---

### Exercise 3: Create a Product Quick Reference Guide

Build a one-page reference for each product:

**Template:**


Product: [Name]
Portal URL: [URL]
Login: [Credentials/SSO]

Key Sections:

Device Status: [Path]

Event Logs: [Path]

Connectivity: [Path]

Alerts: [Path]

Common Issues:

[Issue] → [Check this]

[Issue] → [Check that]

Support Contact:

Email: [Email]

Phone: [Number]

Portal: [Link to open ticket]


Create one for each of the 4 products.

---

### Exercise 4: Simulate a Failover Test

For BEC or CradlePoint:

1. Log in to the cloud portal.
2. Note current status:
   - Primary link: Up/Down?
   - Backup link: Up/Down?
   - Active route: Primary or backup?
3. Simulate failure:
   - Disconnect primary link (unplug cable or disable in portal).
4. Observe:
   - How long until failover activates?
   - Does backup link become active?
   - Are alerts/notifications sent?
5. Restore primary link:
   - Does it failback automatically?
   - How long does failback take?

Document your observations and any configuration changes needed.

---

### Exercise 5: Build a Device Inventory Template

Create a spreadsheet template for tracking deployed devices:

**Columns:**

- Customer Name.
- Site Location.
- Product (BEC, CradlePoint, Ooma, Data Remote).
- Model.
- Serial Number.
- Firmware Version.
- Portal URL.
- Login Credentials (secure storage).
- Support Contact.
- Last Maintenance Date.
- Notes.

Use this template to organize device information for easier troubleshooting.

---

## Additional Resources

- **BEC Documentation**: Check Spectrotel internal training materials.
- **CradlePoint Docs**: https://www.cradlepoint.com/support/
- **Ooma Support**: https://support.ooma.com/
- **Data Remote/MIX**: Check Spectrotel internal training materials.

---

## Completion Checklist

- [ ] Read and understand all key teaching points.
- [ ] Complete all 5 hands-on exercises.
- [ ] Create quick reference guides for all 4 products.
- [ ] Practice navigating each cloud portal.
- [ ] Move on to [Module 12: Vendor-Specific Networking](12-vendor-networking.md).

---

**Next Module**: [Vendor-Specific Networking (Fortinet, Meraki, Cisco, Juniper, VeloCloud)](12-vendor-networking.md)
