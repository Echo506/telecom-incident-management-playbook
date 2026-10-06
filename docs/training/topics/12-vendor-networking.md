# Module 12: Vendor-Specific Networking (Fortinet, Meraki, Cisco, Juniper, VeloCloud)

## Learning Objective

Develop troubleshooting skills for major networking vendors, understanding their platforms, CLI/GUI differences, and common issues.

---

## Foundational Knowledge You Need

Before diving into this module, understand:

- **Basic networking**: Routing, switching, VLANs, firewalls.
- **CLI vs. GUI**: Command-line interface vs. graphical interface.
- **Common protocols**: OSPF, BGP, STP, IPsec, SSL VPN.
- **Device types**: Firewalls, routers, switches, SD-WAN appliances.

---

## Key Teaching Points

### 1. Fortinet (FortiGate Firewalls)

**Platform overview:**

- Next-generation firewalls (NGFW) with advanced security features.
- Used for perimeter security, SD-WAN, VPN, and application control.
- Common in enterprise and service provider environments.

**Management interfaces:**

- **GUI**: Web-based (https://[device-IP]).
- **CLI**: SSH or console access.
- **FortiManager**: Centralized management for multiple devices.
- **FortiAnalyzer**: Centralized logging and reporting.

**Key CLI commands:**

```bash
# System status
get system status

# Network interfaces
get system interface

# Firewall policies
show firewall policy

# Session table (active connections)
diagnose sys session list

# CPU and memory usage
get system performance status

# Routing table
get router info routing-table all

# VPN tunnels
diagnose vpn tunnel list

# Packet capture (advanced)
diagnose sniffer packet any "host 192.168.1.100" 4
```

**Common issues:**

| Issue | Likely Cause | Troubleshooting |
|-------|--------------|-----------------|
| Users can't access internet | Policy blocking, NAT misconfigured | Check firewall policies, verify NAT rules |
| VPN tunnel down | Phase 1/2 mismatch, network issue | Check VPN config, verify connectivity to peer |
| High CPU usage | Traffic spike, inspection overload | Check top processes, review traffic logs |
| SD-WAN not failing over | Threshold misconfigured, link monitoring issue | Check SD-WAN rules, verify link health |
| Can't access GUI | Management access disabled, wrong IP | Check admin settings, verify management IP |

**GUI navigation:**

- **Dashboard**: System status, widgets (CPU, memory, sessions).
- **Policy & Objects**: Firewall policies, addresses, services.
- **Network**: Interfaces, routing, SD-WAN.
- **VPN**: IPsec, SSL VPN configuration.
- **Log & Report**: Traffic logs, event logs, security logs.

**Best practices:**

- Backup config regularly (auto-backup to FTP/SCP).
- Keep firmware updated (check release notes for bugs).
- Use admin profiles (limit access by role).
- Enable logging (send to FortiAnalyzer or syslog server).
- Monitor sessions (high session count = potential issue).

**Training:**

- **Spectrotel Internal Training**.
- **Fortinet NSE 1-3**: https://training.fortinet.com/course/index.php
- **FortiGateway**: Advanced training (NSE 4+).

---

### 2. Meraki (Cisco Meraki MX, MS, MR)

**Platform overview:**

- Cloud-managed networking (firewalls, switches, access points).
- Zero-touch provisioning, centralized dashboard.
- Ideal for distributed enterprises, retail, healthcare.

**Management interfaces:**

- **Meraki Dashboard**: https://dashboard.meraki.com/ (cloud-based).
- **Local status page**: https://[device-IP] (limited local access).
- **API**: REST API for automation and integrations.
- **Systems Manager**: MDM for devices (optional).

**Key features by device type:**

- **MX (Security Appliance)**: Firewall, SD-WAN, VPN, content filtering.
- **MS (Switch)**: L2/L3 switching, PoE, VLANs, access control.
- **MR (Access Point)**: Wi-Fi, guest portal, RF optimization.

**Common issues:**

| Issue | Likely Cause | Troubleshooting |
|-------|--------------|-----------------|
| Device offline in dashboard | Internet down, device rebooted | Check uplink connectivity, power cycle device |
| Slow internet | Bandwidth limit, content filtering | Check bandwidth limits, review content filtering logs |
| VLAN not working | VLAN not created, port misconfigured | Check VLAN config, verify port VLAN assignment |
| Wi-Fi clients disconnecting | RF interference, AP overload | Check RF environment, review client count |
| VPN tunnel flapping | Uplink instability, configuration issue | Check uplink status, verify VPN config |

**Dashboard navigation:**

- **Network-wide**: Devices, clients, traffic analysis.
- **Security & SD-WAN**: Firewall rules, SD-WAN policies, VPN.
- **Switch**: Ports, VLANs, PoE, access policies.
- **Wireless**: SSIDs, RF, client troubleshooting.
- **Appliances**: MX-specific settings (DHCP, port forwarding).

**Key troubleshooting tools:**

- **Live tools**: Packet capture, ping, traceroute from dashboard.
- **Event log**: Device reboots, config changes, alerts.
- **Traffic analysis**: Top applications, clients, destinations.
- **Uplink status**: WAN health, latency, packet loss.

**Best practices:**

- Use configuration templates (for multi-site deployments).
- Enable alerts (email/SMS for device offline, uplink changes).
- Monitor uplink health (latency, packet loss, jitter).
- Use guest splash pages (for guest Wi-Fi compliance).
- Regularly review firmware updates (dashboard → Firmware).

**Training:**

- **Spectrotel Internal Training**.
- **Cisco Meraki MX Deep Dive**: https://netdecorators.thinkific.com/courses/take/meraki-mx-deep-dive/texts/5739057-how-to-use-the-the-mx-deep-dive-course

---

### 3. Cisco Routers and Switches (IOS/IOS-XE)

**Platform overview:**

- Industry-standard routers and switches.
- IOS (Internetwork Operating System) CLI-based.
- Used in enterprise, service provider, data center.

**Management interfaces:**

- **CLI**: Console, SSH, Telnet (not recommended).
- **Web GUI**: Limited (some models have web interface).
- **Cisco DNA Center**: Centralized management (enterprise).
- **Prime Infrastructure**: Monitoring and configuration (older).

**Key CLI commands:**

```bash
# System info
show version
show running-config

# Interfaces
show ip interface brief
show interfaces [interface-name]

# Routing table
show ip route

# VLANs (switches)
show vlan brief
show interfaces trunk

# STP (spanning tree)
show spanning-tree

# CDP/LLDP (neighbor discovery)
show cdp neighbors
show lldp neighbors

# NAT
show ip nat translations

# ACLs
show access-lists

# Logs
show logging

# Ping and traceroute
ping [IP]
traceroute [IP]

# Save config
copy running-config startup-config
```

**Common issues:**

| Issue | Likely Cause | Troubleshooting |
|-------|--------------|-----------------|
| Interface down | Cable unplugged, shutdown command | Check cable, run `show interface`, `no shutdown` |
| Can't route between VLANs | SVI not created, routing disabled | Check SVI config, ensure `ip routing` enabled |
| STP loop | Misconfigured, rogue switch | Check STP topology, enable BPDU guard |
| NAT not working | ACL misconfigured, pool exhausted | Check NAT config, verify ACL matches traffic |
| High CPU | Traffic spike, process issue | `show process cpu`, identify top processes |

**Configuration examples:**

```bash
# Configure interface
interface GigabitEthernet0/1
 ip address 192.168.1.1 255.255.255.0
 no shutdown

# Create VLAN
vlan 10
 name Sales

# Configure SVI (VLAN interface)
interface Vlan10
 ip address 192.168.10.1 255.255.255.0

# Configure NAT
ip nat inside source list 1 interface GigabitEthernet0/0 overload
access-list 1 permit 192.168.0.0 0.0.255.255
```

**Best practices:**

- Always save config after changes (`copy run start`).
- Use descriptive interface descriptions.
- Enable logging (send to syslog server).
- Use SSH, not Telnet (encrypted management).
- Regularly backup configs (TFTP/SCP).

**Training:**

- **Spectrotel Internal Training**.
- **LinkedIn Learning Path**: [Getting Started with Cisco Networks](https://www.linkedin.com/learning/paths/getting-started-with-cisco-networks?u=85066170) – 7h 33m

---

### 4. Juniper (SRX, EX, MX Series)

**Platform overview:**

- High-performance routers, switches, and firewalls.
- Junos OS: Consistent CLI across all platforms.
- Common in service provider and large enterprise.

**Management interfaces:**

- **CLI**: Console, SSH (text-based, highly consistent).
- **J-Web**: Web-based GUI (limited use).
- **Junos Space**: Centralized management (optional).
- **Contrail**: SDN/orchestration (advanced).

**Key CLI commands:**

```bash
# Enter configuration mode
configure

# System info
show system information
show configuration

# Interfaces
show interfaces
show interfaces terse

# Routing table
show route

# Firewall policies (SRX)
show security policies
show security flow session

# VLANs (EX switches)
show vlans

# STP
show spanning-tree interface

# Logs
show log messages
show log security

# Ping and traceroute
ping [IP]
traceroute [IP]

# Commit config (after changes)
commit

# Save config (create backup)
save [filename]
```

**Junos CLI structure:**

- **Operational mode**: `>` prompt (viewing, troubleshooting).
- **Configuration mode**: `#` prompt (making changes).
- **Commit**: Changes don't take effect until committed.

**Common issues:**

| Issue | Likely Cause | Troubleshooting |
|-------|--------------|-----------------|
| Can't commit config | Syntax error, conflict with existing config | Check error message, `show | compare` |
| Security policy blocking | Policy order, application mismatch | Check policy order, verify application definition |
| BGP/OSPF not forming | Mismatch, network issue | Check neighbor config, verify connectivity |
| High memory | Routing table growth, process issue | `show system memory`, identify top processes |
| Interface flapping | Cable issue, speed/duplex mismatch | Check interface stats, verify speed/duplex |

**Configuration example:**

```bash
# Enter config mode
configure

# Set interface IP
set interfaces ge-0/0/0 unit 0 family inet address 192.168.1.1/24

# Set security policy
set security policies from-zone trust to-zone untrust policy allow-all match source-address any
set security policies from-zone trust to-zone untrust policy allow-all match destination-address any
set security policies from-zone trust to-zone untrust policy allow-all match application any
set security policies from-zone trust to-zone untrust policy allow-all then permit

# Commit changes
commit
```

**Best practices:**

- Always commit after changes (`commit`).
- Use `show | compare` to see pending changes.
- Enable archival (auto-backup configs).
- Use configuration groups (for multi-device consistency).
- Monitor system resources (`show system storage`, `show system memory`).

**Training:**

- **Spectrotel Internal Training**.
- **LinkedIn Learning Course**: [Juniper Security Policies Fundamentals](https://www.linkedin.com/learning/juniper-security-policies-fundamentals/learn-to-secure-your-network-with-juniper-security-policies?autoplay=true&u=85066170)

---

### 5. VeloCloud / VMware SD-WAN

**Platform overview:**

- SD-WAN solution for enterprise connectivity.
- Centralized orchestration, dynamic path selection.
- Acquired by VMware, now part of Broadcom.

**Architecture:**

- **Orchestrator**: Central management (cloud-based).
- **Gateways**: Regional hubs for traffic aggregation.
- **Edges**: Customer premises devices (CPE).

**Management interfaces:**

- **Orchestrator**: https://[region].velocloud.com/ (cloud portal).
- **Edge local GUI**: https://[edge-IP] (limited local access).
- **API**: REST API for automation.

**Key features:**

- **Dynamic path selection**: Routes traffic over best link (MPLS, broadband, LTE).
- **Application-aware**: Prioritizes VoIP, video, critical apps.
- **Zero-touch provisioning**: Ship device to site, auto-configures.
- **Cloud on-ramp**: Direct connectivity to AWS, Azure, Google Cloud.

**Common issues:**

| Issue | Likely Cause | Troubleshooting |
|-------|--------------|-----------------|
| Edge offline in orchestrator | Internet down, device rebooted | Check uplink, power cycle edge |
| Poor application performance | Link congestion, misconfigured business policy | Check link utilization, review business policies |
| Tunnel down to gateway | Network issue, certificate problem | Check tunnel status, verify certificates |
| VoIP quality issues | Jitter, packet loss on link | Check link quality metrics, adjust business policy |
| Can't access local GUI | Management access disabled, wrong IP | Check edge config, verify management IP |

**Orchestrator navigation:**

- **Monitor**: Edges, gateways, links, tunnels.
- **Configure**: Business policies, device settings.
- **Troubleshoot**: Live tools, flow records, logs.
- **Reports**: Historical data, SLA reports.

**Key troubleshooting tools:**

- **Live tools**: Ping, traceroute, packet capture from orchestrator.
- **Flow records**: See actual traffic flows (source, dest, app, path).
- **Link quality**: Latency, jitter, packet loss per link.
- **Tunnel status**: Up/down, path, encryption.

**Best practices:**

- Define clear business policies (prioritize critical apps).
- Monitor link quality (set alerts for degradation).
- Use redundant gateways (for high availability).
- Regularly review flow records (identify top talkers).
- Keep edge firmware updated (orchestrator → Update).

**Training:**

- **Spectrotel Internal Training**.
- **VMWare SD-WAN Learning Track**: https://partners.velocloud.com/learning-track/sd-wan-learning/
  - Step 1: Selling VMWare SD-WAN – 1h 20m
  - Step 2: VMWare SD-WAN Feature Overview – 2h 3m
  - Step 3: Designing VMWare SD-WAN – 1h 37m
  - Step 4: Deploying VMWare Sd-WAN – 1h 30m
  - Step 5: Support and Troubleshooting VMWare SD-WAN – 1h 2m
  - Step 6: Monitoring and Diagnosing SD-WAN – 1h 44m
  - Step 7: Operating VMWare SD-WAN Gateways – 1h 23m

---

### 6. Vendor Comparison Table

| Feature | Fortinet | Meraki | Cisco IOS | Juniper | VeloCloud |
|---------|----------|--------|-----------|---------|-----------|
| **Primary focus** | Security/NGFW | Cloud-managed networking | Routers/switches | Routers/switches/firewalls | SD-WAN |
| **Management** | GUI, CLI, FortiManager | Cloud dashboard only | CLI (mostly) | CLI, J-Web | Cloud orchestrator |
| **CLI complexity** | Medium | N/A (cloud-only) | High | Medium-High | N/A (cloud-only) |
| **Zero-touch provisioning** | Limited | Yes | Limited | Limited | Yes |
| **Best for** | Security-focused, SD-WAN | Distributed sites, simplicity | Traditional enterprise | Service provider, large enterprise | SD-WAN, cloud on-ramp |

---

### 7. Troubleshooting Methodology by Vendor

**Step 1: Identify the vendor and device type**

- Check the case/account: What vendor is this?
- Look at device model (label, web GUI, CLI).
- Verify: Is this a firewall, router, switch, or SD-WAN edge?

**Step 2: Access the management interface**

- **GUI**: Web browser (https://[device-IP] or cloud portal).
- **CLI**: SSH or console (for Fortinet, Cisco, Juniper).
- **Cloud**: Meraki dashboard, VeloCloud orchestrator.

**Step 3: Check device health**

- **System status**: CPU, memory, disk usage.
- **Interfaces**: Up/down, errors, utilization.
- **Logs**: Recent events, errors, reboots.

**Step 4: Verify connectivity**

- **Ping**: Can the device reach critical IPs (gateway, DNS, servers)?
- **Traceroute**: What path is traffic taking?
- **Session/flow table**: Are connections being established?

**Step 5: Check policies and routing**

- **Firewall policies**: Is traffic allowed or blocked?
- **Routing table**: Is there a valid route to the destination?
- **NAT**: Is translation configured correctly?

**Step 6: Document and escalate (if needed)**

- Document: Vendor, model, firmware, issue description.
- Attach: Config snippets, logs, screenshots.
- Escalate: To vendor TAC if beyond your scope.

---

### 8. Best Practices for NOC Technicians

**Daily tasks:**

- Check device health dashboards (any red/yellow indicators?).
- Review alerts/notifications (any critical issues?).
- Monitor link utilization (any congested links?).

**When troubleshooting:**

- Always verify: Which vendor/device is this? (Don't assume!)
- Check the dashboard/GUI first (is the device online?).
- Look at recent logs (any reboots, errors, config changes?).
- Document: Vendor, model, serial number, firmware version.

**For escalations:**

- Include: Vendor, model, serial, firmware version.
- Attach: Config snippets, logs, screenshots, troubleshooting steps taken.
- Specify: Impact (how many users/sites affected, business critical?).

---

## Hands-On Exercises

### Exercise 1: Explore Each Vendor's Interface

For each vendor (Fortinet, Meraki, Cisco, Juniper, VeloCloud):

1. Log in to the management interface (training/sandbox environment).
2. Find and note:
   - Where to view device status (CPU, memory).
   - Where to see interface status.
   - Where to check logs/events.
   - Where to view routing/firewall policies.
3. Create a "interface map" (screenshot or notes) for quick reference.

---

### Exercise 2: Practice CLI Commands (Fortinet, Cisco, Juniper)

For CLI-based vendors:

1. **Fortinet:**
   - Run: `get system status`, `get system interface`, `show firewall policy`.
   - Note: Firmware version, interface status, policy count.

2. **Cisco:**
   - Run: `show version`, `show ip interface brief`, `show ip route`.
   - Note: IOS version, interface status, routing table entries.

3. **Juniper:**
   - Run: `show system information`, `show interfaces terse`, `show route`.
   - Note: Junos version, interface status, routing table entries.

Compare: How similar/different are the outputs?

---

### Exercise 3: Diagnose Vendor-Specific Issues

**Scenario 1 (Fortinet):**

- Customer reports: "Internet is slow."
- You check FortiGate: CPU at 95%, session table full.
- **Your next steps:** ?

**Scenario 2 (Meraki):**

- Customer reports: "Wi-Fi keeps disconnecting."
- You check Meraki dashboard: AP shows high interference, 50+ clients.
- **Your next steps:** ?

**Scenario 3 (Cisco):**

- Customer reports: "Can't access server in VLAN 20."
- You check Cisco switch: VLAN 20 exists, but SVI is down.
- **Your next steps:** ?

**Scenario 4 (Juniper):**

- Customer reports: "BGP session with ISP is down."
- You check Juniper: BGP neighbor shows "Idle" state.
- **Your next steps:** ?

**Scenario 5 (VeloCloud):**

- Customer reports: "VoIP calls are choppy."
- You check VeloCloud orchestrator: Primary link has 15% packet loss.
- **Your next steps:** ?

Document your troubleshooting approach for each.

---

### Exercise 4: Create a Vendor Quick Reference Guide

Build a one-page reference for each vendor:

**Template:**

Vendor: [Name]
Portal/GUI URL: [URL]
CLI Access: [SSH/Console]

Key Commands/Sections:

System Status: [Command/Path]

Interface Status: [Command/Path]

Logs/Events: [Command/Path]

Policies/Routing: [Command/Path]

Common Issues:

[Issue] → [Check this]

[Issue] → [Check that]

Support Contact:

Vendor TAC: [Phone/Email]

Portal: [Link to open ticket]


Create one for each of the 5 vendors.

---

### Exercise 5: Simulate a Multi-Vendor Troubleshooting Scenario

Scenario: Customer reports "can't access cloud application."

**Environment:**

- Edge: VeloCloud SD-WAN.
- Firewall: Fortinet FortiGate.
- Core switch: Cisco Catalyst.
- ISP router: Juniper.

**Your investigation:**

1. Check VeloCloud: Tunnel to gateway up, link quality good.
2. Check Fortinet: Firewall policy allows traffic, NAT configured.
3. Check Cisco: VLAN routing OK, no ACL blocking.
4. Check Juniper: BGP session up, route exists.

**Issue found:** Fortinet firewall policy was blocking the specific application port.

**Your resolution:**

- Modify firewall policy to allow the application.
- Test connectivity.
- Document the change.

Write out your full troubleshooting workflow.

---

## Additional Resources

- **Fortinet NSE 1-3**: https://training.fortinet.com/course/index.php
- **Cisco Meraki MX Deep Dive**: https://netdecorators.thinkific.com/courses/take/meraki-mx-deep-dive/texts/5739057-how-to-use-the-the-mx-deep-dive-course
- **LinkedIn Learning Path**: [Getting Started with Cisco Networks](https://www.linkedin.com/learning/paths/getting-started-with-cisco-networks?u=85066170) – 7h 33m
- **LinkedIn Learning Course**: [Juniper Security Policies Fundamentals](https://www.linkedin.com/learning/juniper-security-policies-fundamentals/learn-to-secure-your-network-with-juniper-security-policies?autoplay=true&u=85066170)
- **VMWare SD-WAN Learning Track**: https://partners.velocloud.com/learning-track/sd-wan-learning/

---

## Completion Checklist

- [ ] Read and understand all key teaching points.
- [ ] Complete all 5 hands-on exercises.
- [ ] Create quick reference guides for all 5 vendors.
- [ ] Practice CLI commands for Fortinet, Cisco, and Juniper.
- [ ] Move on to [Module 13: CompTIA Network+ Foundation](13-comptia-network-plus.md).

---

**Next Module**: [CompTIA Network+ Foundation (Incentivized)](13-comptia-network-plus.md)
