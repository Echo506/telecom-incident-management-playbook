# Security Incident Addendum

## Purpose

Extend the incident management process to cover security-related events such as DDoS, compromised devices, or suspected intrusions affecting network services.

## Additional Considerations

- Involve security or IR teams early when compromise is suspected.
- Preserve logs and evidence before making changes that could destroy artifacts.
- Coordinate with legal, compliance, or privacy teams when data exposure is possible.
- Limit public communication until facts are confirmed.

## Example Security Scenarios

- DDoS attack saturating an access circuit
- Compromised router or firewall with unauthorized configuration changes
- Ransomware affecting a site’s connectivity and services
- Unauthorized access to management interfaces

## Lifecycle Adjustments

| Stage | Additional Actions |
|---|---|
| Detection and analysis | Correlate with security alerts, IDS/IPS, and threat intelligence |
| Containment | Isolate affected devices, block malicious IPs, disable accounts |
| Eradication | Remove malware, reset credentials, patch vulnerabilities |
| Recovery | Restore from known-good configurations and validate integrity |
| Post-incident | Conduct joint NOC–security review; update detection and response playbooks |

## Framework Alignment

- NIST SP 800-61: Computer security incident handling
- ISO/IEC 27035: Information security incident management
- SANS PICERL: Security-focused incident response lifecycle
