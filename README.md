# Telecom Incident Management Playbook

A practical, framework-aligned portfolio project for managing telecommunications, network operations, IT service management, and cybersecurity-related incidents.

This repository provides reusable policies, runbooks, communication templates, lifecycle models, and anonymized case-study examples for incident handling in a NOC, service desk, MSP, or telecommunications support environment.

## Objectives

- Apply ITIL 4 concepts to operational incident management
- Align incident response practices with NIST guidance
- Support structured carrier/vendor escalation
- Improve technical documentation and customer communications
- Define measurable service-management KPIs and SLA practices
- Create reusable runbooks for common network incidents
- Demonstrate a practical bridge between telecom operations and cybersecurity incident response

## Incident Lifecycle

This project uses a lifecycle aligned with NIST incident-handling guidance:

1. Preparation
2. Detection and analysis
3. Containment, eradication, and recovery
4. Post-incident activity and continuous improvement

```mermaid
flowchart LR
    A[Preparation] --> B[Detection and Analysis]
    B --> C[Triage and Prioritization]
    C --> D[Escalation and Response]
    D --> E[Containment and Recovery]
    E --> F[Validation and Resolution]
    F --> G[Post-Incident Review]
    G --> A
```

## Frameworks

| Framework | How it is used in this project |
|---|---|
| ITIL 4 | Incident, problem, change, SLA, escalation, and continual improvement practices |
| NIST SP 800-61 | Incident response lifecycle and handling concepts |
| ISO/IEC 27035 | Security incident management governance and coordination |
| SANS PICERL | Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned |

## Repository Contents

| Folder | Purpose |
|---|---|
| `docs/` | Policies, lifecycle definitions, roles, KPIs, and escalation standards |
| `frameworks/` | Mappings between ITIL, NIST, ISO 27035, and SANS |
| `runbooks/` | Step-by-step operational procedures for common incidents |
| `templates/` | Ticket notes, customer updates, carrier escalations, and PIR templates |
| `case-studies/` | Anonymized incident examples and lessons learned |
| `diagrams/` | Mermaid diagrams for lifecycle and escalation flows |
| `resources/` | Recommended study resources and references |

## Example Use Cases

- Network circuit outage
- Firewall unreachable or down
- High latency and packet loss
- Carrier or ISP outage
- Major incident with multiple affected sites
- Potential DDoS or security-related network disruption

## Professional Disclaimer

All examples in this repository are fictional or anonymized for educational and portfolio purposes. Do not include confidential customer information, internal processes, credentials, IP addresses, circuit identifiers, or private vendor ticket numbers.


## How to Use This Repository in Interviews

You can reference this repository when discussing:

- Incident management and ITSM experience
- NOC and telecommunications operations
- Cybersecurity incident response foundations
- Documentation, runbooks, and process improvement
- Communication with customers, carriers, and vendors

Example talking points:

- “I built a telecom incident management playbook that maps our daily NOC work to ITIL 4 and NIST incident response.”
- “I created runbooks and communication templates that standardize how we handle outages and carrier escalations.”
- “I documented anonymized case studies to show how I apply detection, triage, escalation, and post-incident review in practice.”

## For Recruiters

This repository demonstrates:

- Real-world NOC and telecommunications incident handling
- ITIL-aligned incident management practices
- NIST-based incident response concepts
- Bilingual (EN/ES) professional communication
- Clear documentation, runbooks, and process thinking

Use the `docs/` folder to see how I structure policies, runbooks, metrics, and lessons learned.

## NOC Tier 2 Training Course

This repository includes a complete **NOC Tier 2 Technician Training Course** with 13 comprehensive modules covering:

- Customer service and professional communication
- Network troubleshooting methodologies
- VoIP and unified communications
- Networking foundations (IP, subnetting, routing)
- Network monitoring and alerting
- Wireshark for VoIP analysis
- Firewall and VPN fundamentals
- Salesforce Service Cloud for NOC
- HPBX platforms (8x8, CoreDial, Windstream, Intelepeer)
- Product-specific training (BEC, CradlePoint, Ooma, Data Remote)
- Vendor-specific networking (Fortinet, Meraki, Cisco, Juniper, VeloCloud)
- CompTIA Network+ certification preparation

### Course Structure

| Component | Location |
|-----------|----------|
| Course index and overview | [`docs/training/README.md`](docs/training/README.md) |
| Training modules (13) | [`docs/training/topics/`](docs/training/topics/) |
| Progress tracking sheet | [`docs/training/progress-tracking.md`](docs/training/progress-tracking.md) |
| Certificate template | [`docs/training/certificate-template.md`](docs/training/certificate-template.md) |
| Instructor guide | [`docs/training/instructor-guide.md`](docs/training/instructor-guide.md) |

### How to Use This Course

**For self-study:**
1. Start with [`Module 1: Customer Service`](docs/training/topics/01-customer-service.md)
2. Complete all hands-on exercises for each module
3. Track your progress in the [`progress tracking sheet`](docs/training/progress-tracking.md)
4. Prepare for CompTIA Network+ certification (Module 13)

**For instructors:**
- See the [`Instructor Guide`](docs/training/instructor-guide.md) for teaching strategies, assessments, and lab setup.
- Use the [`Certificate Template`](docs/training/certificate-template.md) for course completion recognition.

**For job seekers:**
- Reference this training when discussing your NOC and telecommunications knowledge in interviews.
- Highlight specific modules that align with the role you're applying for.
- Mention your CompTIA Network+ preparation (if pursuing certification).


## Author

Created as a practical ITSM, NOC, telecommunications operations, and cybersecurity incident-response portfolio project.
