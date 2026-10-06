# From Ticket to Portfolio

This guide explains how to transform real incident work into anonymized, portfolio-ready content.

## Step 1 – Select a Representative Incident

Choose incidents that:

- Involve clear lifecycle stages (detection, triage, escalation, resolution).
- Show carrier or vendor coordination.
- Include meaningful communication and documentation.
- Have lessons learned or process improvement opportunities.

## Step 2 – Anonymize All Sensitive Data

Remove or generalize:

- Customer names and site addresses
- Circuit IDs, account numbers, and carrier ticket numbers
- IP addresses, hostnames, and device serials
- Internal team names, phone numbers, and email addresses
- Screenshots containing confidential information

Replace with generic labels like “Customer A”, “Site in Texas”, “Access Circuit”, “Carrier X”.

## Step 3 – Build a Timeline

Extract key events from the ticket chronology:

- Detection time and source (alert, customer report)
- Triage and validation steps
- Escalation to carrier or vendor
- Major status changes
- Restoration and validation
- Closure and follow-up actions

## Step 4 – Map to Frameworks

For each stage, note alignment with:

- ITIL 4: Incident management, problem linkage, continual improvement
- NIST SP 800-61: Detection and analysis, response, post-incident activity
- ISO/IEC 27035: Assessment, response, lessons learned
- SANS PICERL: Preparation through lessons learned

## Step 5 – Extract Lessons Learned

Identify:

- What went well (fast detection, effective escalation, clear communication).
- What could be improved (earlier carrier engagement, better L1 instructions, monitoring gaps).
- Specific action items (runbook updates, training, tooling changes).

## Step 6 – Publish as a Case Study

Structure the case study with:

- Scenario and impact
- Timeline
- Lifecycle mapping
- Lessons learned
- Framework alignment

Store it in the `case-studies/` folder and reference it in the README.
