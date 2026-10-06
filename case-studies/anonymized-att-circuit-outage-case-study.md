# Case Study: AT&T Access Circuit Outage (Anonymized)

> Educational and anonymized scenario based on typical NOC operations.

## Scenario

A monitoring platform reported that a customer site became unreachable. The device was associated with an AT&T access circuit at a retail location in Texas.

## Impact

- Affected service: Internet connectivity via AT&T
- Scope: Single customer site
- Business impact: Users unable to access cloud applications, POS systems, and corporate resources
- Initial classification: High priority

## Timeline

| Time (Local) | Activity |
|---|---|
| 23:12 (Day 1) | Monitoring platform detected device unreachable |
| 23:13 | Automated incident created and assigned to NOC queue |
| 08:29 (Day 2) | NOC technician validated outage and reviewed alarm history |
| 08:33 | Initial customer notification sent; site confirmed down since ~23:00 |
| 08:08 (Day 3) | NOC contacted AT&T; demarc reported down; carrier ticket opened |
| 08:09 | Customer update sent; L1 checks requested at site |
| 13:53 (Day 10) | AT&T confirmed physical layer fault at demarc |
| 14:10 | AT&T completed repair; connectivity restored |
| 14:20 | NOC validated service via monitoring and testing |
| 14:30 | Customer confirmed restoration; case resolved |

## Lifecycle Mapping

| Lifecycle Stage | Actions Taken |
|---|---|
| Detection and analysis | AIOps alert reviewed; device reachability validated |
| Triage | Scope, symptoms, priority, and potential fault domain assessed |
| Escalation | Carrier ticket opened with diagnostic evidence |
| Recovery | Carrier restored service; NOC validated connectivity |
| Closure | Customer notified; case documentation completed |
| Lessons learned | L1 check instructions and escalation timing reviewed |

## Lessons Learned

- Ensure L1 check instructions are clear and actionable for site staff.
- Open carrier tickets promptly when demarc faults are suspected.
- Maintain a consistent update cadence for prolonged outages.
- Document carrier ticket references and restoration timestamps consistently.

## Framework Alignment

- ITIL 4: Incident management, SLA management, and continual improvement
- NIST SP 800-61: Detection and analysis, response and recovery, post-incident activity
- ISO/IEC 27035: Assessment, response, and lessons learned
