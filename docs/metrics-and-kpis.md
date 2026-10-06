# Metrics and KPIs for Incident Management

## Purpose

Define key performance indicators that help measure the effectiveness of incident management processes.

## Core Metrics

| Metric | Definition | Why It Matters |
|---|---|---|
| MTTR (Mean Time to Resolve) | Average time from incident creation to resolution | Indicates overall efficiency in restoring service |
| MTTA (Mean Time to Acknowledge) | Average time from incident creation to first human action | Shows responsiveness of the NOC or service desk |
| First Contact Resolution (FCR) | Percentage of incidents resolved on first interaction | Reflects quality of initial triage and knowledge |
| SLA Compliance Rate | Percentage of incidents resolved within SLA targets | Measures adherence to contractual commitments |
| Reopen Rate | Percentage of incidents reopened after resolution | Highlights quality of resolution and validation |
| Major Incident Count | Number of Sev1/Sev2 incidents over a period | Indicates stability and risk exposure |

## Example Calculations

- **MTTR** = Sum of (Resolution Time − Creation Time) / Number of resolved incidents
- **MTTA** = Sum of (First Response Time − Creation Time) / Number of incidents with response
- **SLA Compliance** = (Incidents resolved within SLA / Total incidents) × 100

## How to Use These Metrics

- Track trends over time (weekly, monthly, quarterly).
- Identify teams, services, or incident types with poor performance.
- Use findings to drive process improvements, training, or tooling changes.
- Include selected metrics in post-incident reviews for major events.

## Alignment with Frameworks

- ITIL 4: Continual improvement and service performance management
- NIST SP 800-61: Post-incident activity and process refinement
- ISO/IEC 27035: Monitoring and measurement of incident management effectiveness
