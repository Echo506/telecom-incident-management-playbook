# Network Outage Runbook

## Purpose

Provide a repeatable process for triaging and responding to a reported network or circuit outage.

## Trigger Conditions

Use this runbook when:

- A monitoring platform reports a device or site down
- A customer reports complete loss of connectivity
- A circuit, firewall, router, or managed device is unreachable
- Multiple users or locations report service disruption

## Initial Information to Collect

- Customer/site name or anonymized identifier
- Time the incident was reported or detected
- Affected service and device type
- Circuit or service reference, if approved for internal use
- Scope: single user, site, region, or multiple locations
- Symptoms: no connectivity, intermittent connectivity, packet loss, latency
- Monitoring evidence and recent alarm history
- Recent changes or maintenance activity

## Triage Steps

1. Verify that the alert or customer report is valid.
2. Review monitoring status, device reachability, and historical availability.
3. Determine whether the outage affects one site or multiple sites.
4. Check for planned maintenance or known provider incidents.
5. Review recent configuration changes and device events.
6. Attempt approved basic troubleshooting, such as reachability testing.
7. Assign severity and priority based on business impact and urgency.
8. Escalate to the appropriate internal team, carrier, or vendor.

## Carrier Escalation Criteria

Escalate to the carrier when:

- The access circuit is down or unstable.
- Monitoring indicates the provider handoff is unavailable.
- Local equipment is operational but upstream connectivity is unavailable.
- There is evidence of a regional provider outage.
- Internal troubleshooting cannot restore service within the defined escalation period.

## Customer Communication

- Send an initial acknowledgment after ticket creation.
- Provide status updates at the interval defined by the incident priority.
- Avoid unsupported root-cause statements.
- Clearly communicate restoration confirmation and next steps.
- Record every material communication in the ticket chronology.

## Resolution Validation

Before resolving the ticket:

- Confirm device and circuit reachability.
- Validate service through monitoring and testing.
- Confirm restoration with the customer when appropriate.
- Document the root cause or the provider's preliminary cause.
- Record all resolution actions and final timestamps.

## Post-Incident Actions

Create a problem record or post-incident review when the incident:

- Is a major incident
- Reoccurs
- Breaches an SLA
- Reveals a process, monitoring, documentation, or redundancy gap
