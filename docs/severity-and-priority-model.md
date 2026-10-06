# Severity and Priority Model

## Purpose

Define a consistent method for classifying incidents by severity and priority to guide response times, escalation, and communication.

## Severity Levels

| Severity | Description | Example |
|---|---|---|
| Sev1 – Critical | Complete loss of service for a critical site or widespread outage affecting multiple sites | Core router down; multiple sites unreachable |
| Sev2 – High | Single site down with significant business impact | Primary internet circuit down at a key location |
| Sev3 – Medium | Partial degradation or non-critical service impact | Intermittent packet loss; secondary circuit affected |
| Sev4 – Low | Minimal impact; workaround available | Single user issue; non-business-critical application |

## Priority Matrix

Priority is determined by combining **Impact** and **Urgency**.

| Impact \ Urgency | High | Medium | Low |
|---|---|---|---|
| High | P1 | P2 | P3 |
| Medium | P2 | P3 | P4 |
| Low | P3 | P4 | P5 |

- **Impact:** Number of users, sites, or services affected and business criticality.
- **Urgency:** How quickly the business requires restoration.

## Response and Update Expectations

| Priority | Target response time | Update cadence |
|---|---|---|
| P1 | ≤ 15 minutes | Every 30–60 minutes |
| P2 | ≤ 30 minutes | Every 1–2 hours |
| P3 | ≤ 2 hours | Every 4–8 hours |
| P4 | ≤ 4 hours | Daily or as needed |

These targets should be aligned with contractual SLAs and internal OLAs.
