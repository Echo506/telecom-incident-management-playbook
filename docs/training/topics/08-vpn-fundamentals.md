# Module 8: VPN Fundamentals

## Learning Objective

Understand how VPNs work, their impact on network troubleshooting, and how to diagnose VPN-related issues.

---

## Foundational Knowledge You Need

Before diving into this module, understand:

- **Basic networking**: IP addresses, routing, NAT.
- **What is encryption**: Converting data to unreadable format for security.
- **Public vs. private networks**: Internet vs. internal corporate networks.
- **Common use cases**: Remote workers, site-to-site connectivity, secure access.

---

## Key Teaching Points

### 1. What is a VPN?

**VPN (Virtual Private Network):**

- Creates an encrypted "tunnel" over the public internet.
- Makes remote devices/sites appear as if they're on the same private network.
- Protects data from eavesdropping on untrusted networks.

**Analogy:**

- Think of a VPN like a private, secure pipeline through the public internet.
- Your traffic enters the pipeline at one end and exits at the other, protected from outsiders.

### 2. Types of VPNs

#### Remote Access VPN

- **Purpose:** Individual users connect to corporate network.
- **Use case:** Work-from-home employees, traveling staff.
- **How it works:**
  - User runs VPN client (software).
  - Authenticates with credentials (username/password, MFA, certificate).
  - Establishes encrypted tunnel to VPN gateway.
  - Gets an internal IP address (e.g., 10.0.0.50).
  - Can access internal resources (file servers, intranet, VoIP systems).

**Examples:** Cisco AnyConnect, FortiClient, OpenVPN, WireGuard.

#### Site-to-Site VPN

- **Purpose:** Connect entire networks (office to office, office to data center).
- **Use case:** Branch offices, hybrid cloud, partner connectivity.
- **How it works:**
  - Two VPN gateways (firewalls/routers) establish tunnel.
  - All traffic between sites is encrypted.
  - Devices on both sides communicate as if on same LAN.

**Examples:** IPsec site-to-site, GRE over IPsec, SD-WAN overlays.

#### SSL VPN vs. IPsec VPN

| Feature | SSL VPN | IPsec VPN |
|---------|---------|-----------|
| **Protocol** | TLS/SSL (like HTTPS) | IPsec (Internet Protocol Security) |
| **Port** | TCP 443 (usually) | UDP 500, 4500 |
| **Client** | Often browser-based or lightweight client | Dedicated client or built-in OS support |
| **Granularity** | Can be app-specific (e.g., only web apps) | Full network access (layer 3) |
| **Firewall friendliness** | Easier (uses 443, often allowed) | Harder (requires IPsec ports/protocols) |
| **Use case** | Remote access, quick connectivity | Site-to-site, full network integration |

### 3. How VPNs Work (Simplified)

#### Remote Access VPN Flow

1. User opens VPN client.

2. Enters credentials (username, password, MFA).

3.Client connects to VPN gateway (vpn.company.com).

4.Gateway authenticates user (against AD, RADIUS, etc.).

5.Tunnel is established (encrypted).

6.User gets internal IP (e.g., 10.0.0.50/24).

7.User can now access internal resources.


#### Site-to-Site VPN Flow

Firewall A (office) and Firewall B (data center) configured with matching settings.

Phase 1: IKE negotiation (authenticate each other, establish secure channel).

Phase 2: IPsec SA (Security Association) created for data traffic.

Traffic between subnets (192.168.1.0/24 ↔ 10.0.0.0/24) is encrypted.

Tunnel stays up (with keepalives) or comes up on-demand.


### 4. Split Tunneling vs. Full Tunneling

#### Split Tunneling

- **Definition:** Only traffic to specific destinations goes through VPN.
- **Example:**
  - VPN: 10.0.0.0/8 → goes through tunnel.
  - Internet (google.com, youtube.com) → goes directly (not through VPN).
- **Pros:**
  - Better performance (internet traffic doesn't traverse VPN).
  - Less load on VPN gateway.
- **Cons:**
  - Security risk (traffic not inspected by corporate security).
  - Can cause routing issues (some apps behave unexpectedly).

#### Full Tunneling

- **Definition:** ALL traffic goes through VPN (including internet).
- **Example:**
  - User visits google.com → traffic goes: User → VPN → Internet → back through VPN → User.
- **Pros:**
  - Full visibility and control (corporate security policies apply).
  - Consistent experience (all traffic treated same).
- **Cons:**
  - Higher latency (extra hop through VPN).
  - More load on VPN gateway and internet link.

**Troubleshooting impact:**

- Split tunneling: Some apps work, others don't (check routing table).
- Full tunneling: All traffic affected by VPN performance.

### 5. VPN and Troubleshooting: Key Considerations

#### How VPN Affects Network Troubleshooting

**When VPN is connected:**

- Your default route may change (traffic goes through VPN).
- DNS may change (corporate DNS servers).
- Some resources may become unreachable (routing conflicts).
- VoIP may have issues (extra latency, MTU problems).

**When VPN is disconnected:**

- Back to normal routing (direct internet).
- Internal resources no longer accessible.
- VoIP may work better (if VPN was causing issues).

#### Common VPN-Related Issues

| Issue | Symptom | Likely Cause |
|-------|---------|--------------|
| **Can't connect to VPN** | Client fails to establish tunnel | Wrong credentials, firewall blocking, server down |
| **Connected but no access** | VPN shows "connected" but can't ping internal IPs | Routing issue, split tunnel misconfiguration |
| **Slow performance** | Everything is sluggish over VPN | Bandwidth limits, high latency, MTU issues |
| **VoIP problems with VPN** | Calls drop, one-way audio, choppy | MTU, routing, QoS not preserved over VPN |
| **DNS not resolving** | Can ping IPs but not hostnames | DNS servers not pushed via VPN, split DNS issue |
| **Intermittent disconnects** | VPN drops randomly | Unstable internet, idle timeout, NAT issues |

### 6. Diagnosing VPN Issues

#### Step 1: Verify VPN Connection

```bash
# Windows
ipconfig /all

# Look for VPN adapter:
# - Does it have an IP address?
# - Is it in the expected subnet (e.g., 10.0.0.x)?
```

```bash
# Mac/Linux
ifconfig
# or
ip addr show
```

#### Step 2: Check Routing Table

```bash
# Windows
route print

# Mac/Linux
netstat -rn
# or
ip route show
```

**What to look for:**

- Default route (0.0.0.0/0): Does it point to VPN or local gateway?
- Specific routes: Are internal subnets (10.0.0.0/8, 192.168.0.0/16) routed via VPN?

#### Step 3: Test Connectivity

```bash
# Ping internal server
ping 10.0.0.50

# Trace route to see path
tracert 10.0.0.50   # Windows
traceroute 10.0.0.50  # Mac/Linux

# Test DNS
nslookup internal-server.company.com
```

#### Step 4: Check MTU Issues

**Symptoms:**

- Some sites load, others don't.
- Large file transfers fail, but small ones work.
- VoIP has issues (packet fragmentation).

**Test:**

```bash
# Windows (ping with don't fragment flag)
ping -f -l 1472 8.8.8.8

# If it fails, try lower:
ping -f -l 1400 8.8.8.8
```

**Fix:**

- Reduce MTU on VPN adapter (e.g., from 1500 to 1400).
- Or enable PMTUD (Path MTU Discovery) if supported.

#### Step 5: Isolate the Issue

**Test with VPN disconnected:**

- Does the issue persist?
- If yes: Not VPN-related.
- If no: VPN is contributing to the problem.

**Test with different network:**

- Try VPN from home vs. mobile hotspot.
- If one works and other doesn't: Network-specific issue (firewall, ISP).

### 7. VPN Best Practices for NOC Technicians

**For remote workers:**

- Use wired connection when possible (more stable than Wi-Fi).
- Close unnecessary apps (reduce bandwidth usage).
- Test VoIP with and without VPN (determine impact).
- Report persistent issues (don't just "live with it").

**For troubleshooting:**

- Always ask: "Is the VPN connected?"
- Try disconnecting VPN temporarily (isolate issue).
- Check routing table (where is traffic going?).
- Verify DNS (are you using corporate or public DNS?).
- Test MTU if you see intermittent failures.

**For escalation:**

- Document: VPN type, client version, error messages.
- Include: Routing table, ping/traceroute output.
- Note: Does issue occur on multiple networks?

---

## Hands-On Exercises

### Exercise 1: Connect and Analyze VPN

1. Connect to your corporate VPN (or use a test VPN if available).
2. Run: `ipconfig /all` (Windows) or `ifconfig` (Mac/Linux).
3. Note:
   - VPN adapter IP address.
   - DNS servers assigned.
4. Run: `route print` or `netstat -rn`.
5. Identify:
   - Default route (where does internet traffic go?).
   - Specific routes (which subnets go through VPN?).

---

### Exercise 2: Compare Routing With/Without VPN

1. **Without VPN:**
   - Run: `route print`.
   - Note default gateway.
   - Run: `tracert 8.8.8.8`.
2. **With VPN:**
   - Connect VPN.
   - Run: `route print` again.
   - Note changes in default route.
   - Run: `tracert 8.8.8.8` again.
3. **Compare:**
   - Did the default route change?
   - Did the path to 8.8.8.8 change (extra hops through VPN)?

---

### Exercise 3: Diagnose a VPN Issue

Scenario: User reports "VoIP works fine without VPN, but with VPN calls drop after 30 seconds."

**Your troubleshooting steps:**

1. Verify: Is VPN connected? (Yes)
2. Test: Ping internal PBX over VPN. (Success, 50ms latency)
3. Test: Traceroute to PBX. (Shows 5 hops, all through VPN)
4. Check: MTU on VPN adapter. (1500, default)
5. Test: Ping with large packets over VPN.
   ```bash
   ping -f -l 1472 10.0.0.50
   ```
   (Fails)
6. Test: Ping with smaller packets.
   ```bash
   ping -f -l 1400 10.0.0.50
   ```
   (Succeeds)

**Root cause:** MTU issue (packets too large, getting fragmented).

**Fix:** Reduce MTU on VPN adapter to 1400.

Document your findings and resolution.

---

### Exercise 4: Build a VPN Troubleshooting Checklist

Create a one-page reference for VPN-related issues:

- [ ] Is the VPN connected?
- [ ] What's the VPN adapter IP?
- [ ] What's the default route (VPN or local)?
- [ ] Can you ping internal resources?
- [ ] Does traceroute show expected path?
- [ ] Is DNS resolving internal names?
- [ ] Test MTU (ping with -f -l flags).
- [ ] Try disconnecting VPN (does issue persist?).
- [ ] Try different network (home vs. hotspot).

---

### Exercise 5: Document a VPN Configuration

You're setting up a new remote user.

**Document:**

1. VPN type (remote access, site-to-site, SSL, IPsec).
2. Client software required (name, version, download link).
3. Authentication method (username/password, MFA, certificate).
4. Internal resources accessible (subnets, servers, applications).
5. Split tunneling or full tunneling?
6. Known issues/workarounds (MTU, DNS, etc.).

Example:

VPN Configuration: Remote User

Type: Remote Access (SSL VPN)

Client: FortiClient 7.0.5

Server: vpn.company.com

Auth: Username + Password + MFA (Duo)

Internal Access: 10.0.0.0/8 (full network)

Split Tunnel: No (full tunnel)

MTU: 1400 (recommended)

DNS: 10.0.0.10, 10.0.0.11 (corporate DNS)


---

## Additional Resources

- **LinkedIn Learning Course**: [Learning VPN](https://www.linkedin.com/learning/learning-vpn?u=85066170) – 54m
- **OpenVPN Docs**: https://openvpn.net/community-resources/
- **WireGuard Docs**: https://www.wireguard.com/

---

## Completion Checklist

- [ ] Read and understand all key teaching points.
- [ ] Complete all 5 hands-on exercises.
- [ ] Create your VPN troubleshooting checklist.
- [ ] Practice connecting/disconnecting VPN and analyzing routing.
- [ ] Move on to [Module 9: Salesforce Service Cloud for NOC](09-salesforce-noc.md).

---

**Next Module**: [Salesforce Service Cloud for NOC](09-salesforce-noc.md)
