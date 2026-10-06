# Case Study: Multi-Site Network Outage

> Fictional and anonymized educational scenario.

## Scenario

A customer reported loss of connectivity at a business location. Monitoring confirmed that the managed firewall was unreachable, and the access circuit was unavailable.

## Impact

- Affected service: Internet connectivity
- Scope: One customer location
- Business impact: Users could not access cloud applications, email, or VPN-dependent services
- Initial classification: High priority

## Timeline

| Time | Activity |
|---|---|
| 08:10 | Monitoring platform generated a device-down alert |
| 08:14 | Incident ticket created and assigned for triage |
| 08:20 | Technician validated loss of reachability |
| 08:30 | Initial customer notification sent |
| 08:45 | Carrier ticket opened with technical evidence |
| 10:15 | Carrier confirmed an access-network fault |
| 13:40 | Carrier reported repair completion |
| 13:50 | Connectivity validated through monitoring and testing |
| 14:00 | Customer confirmed restoration |
| 14:15 | Incident resolved and documentation completed |

## Lifecycle Mapping

| Lifecycle Stage | Actions Taken |
|---|---|
| Detection and analysis | Monitoring alert reviewed; outage validated |
| Triage | Scope, symptoms, priority, and potential fault domain assessed |
| Escalation | Carrier ticket opened with diagnostic evidence |
| Recovery | Carrier restored service; technical team validated connectivity |
| Closure | Customer notified; case documentation completed |
| Lessons learned | Monitoring and escalation procedures reviewed |

## Lessons Learned

- Include complete diagnostic evidence in the first carrier escalation.
- Establish a standard update cadence for high-priority outages.
- Document carrier reference numbers and restoration timestamps consistently.
- Review whether a backup connectivity option is appropriate for critical locations.

## Framework Alignment

- ITIL 4: Incident management and continual improvement
- NIST: Detection and analysis, response and recovery, post-incident activity
- ISO/IEC 27035: Assessment, response, and lessons learned
