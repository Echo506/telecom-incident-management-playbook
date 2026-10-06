# Incident Ticket Helper

A lightweight Chrome browser-extension prototype for creating structured incident documentation, customer updates, and carrier escalation drafts.

The project is designed as an educational portfolio tool for NOC, ITSM, telecommunications support, and cybersecurity incident-response workflows. It runs locally in the browser and does not make external network requests.

> **Important:** This tool is for learning and portfolio demonstration. Do not enter real customer names, account numbers, circuit IDs, IP addresses, physical addresses, credentials, tickets, or confidential company information.

---

## Purpose

Incident analysts often repeat the same documentation tasks during a service interruption:

- Create and maintain ticket chronology
- Record impact, urgency, severity, symptoms, and troubleshooting
- Determine the appropriate technical escalation team
- Prepare customer-facing status updates
- Prepare carrier escalation messages
- Keep reusable communication templates

Incident Ticket Helper standardizes those tasks and generates drafts that the analyst must review before using in an approved ticketing or communication system.

---

## Features

### Incident documentation

The Incident tab collects:

- Ticket or case ID
- Incident type
- Product or service
- Recommended escalation team
- Service category
- Severity
- Impact
- Urgency
- Affected service
- Symptoms
- Incident start time
- Detection source
- Actions taken
- Next steps
- Output language: English or Spanish

It generates a structured internal incident note that includes:

1. Incident summary
2. Product/service classification
3. Recommended escalation team
4. Severity, impact, and urgency
5. Timeline details
6. Symptoms and affected-service summary
7. Actions taken
8. Next steps
9. Security reminder

### Product and escalation routing

The tool includes a product/service routing matrix. When an analyst selects a product, the extension automatically displays:

- Recommended escalation team
- Service category
- Routing recommendation

| Product / Service | Recommended Team | Category |
|---|---:|---|
| IOW - Webbing | T2 | PTaaS |
| IOS - StarLink | T2 | PTaaS |
| DataRemote | T2/T3 | PTaaS |
| Ooma | T2 | VOIP |
| BEC | T2/T3 | VOIP |
| Inseego | T2/T3 | PTaaS |
| Cradlepoint | T2/T3 | PTaaS |
| Wattbox | T2/T3 | PTaaS |
| FortiGate | T3/T4 | Edge |
| Meraki | T3/T4 | Edge |
| Cato | T3/T4 | Edge |
| Cisco | T3/T4 | Edge |
| Access Points/Switches | T3/T4 | LAN |
| Grandstream ATA | T2/T3 | VOIP |
| Mitel Phones | T2/T3 | VOIP |
| Polycom Phones | T2 | VOIP |
| Efax | T2 | VOIP |

> The matrix is a training aid and recommended routing reference. Analysts must follow the current approved internal escalation procedures for live incidents.

### Customer update generator

The Customer tab creates professional incident updates for customers in:

- English
- Spanish

It includes:

- Ticket/case reference
- Site/location
- Business impact
- Current status
- Next steps
- Professional closing

### Carrier escalation generator

The Carrier tab generates an escalation draft for a carrier or service provider.

It includes:

- Carrier name
- Circuit or service ID
- General site/location
- Symptoms
- Troubleshooting summary
- Requested action
- Request for carrier ticket number and estimated update time

### Local template storage

The Templates tab lets users:

- Save templates locally
- Load a saved template
- Delete a saved template
- Reuse common outage, customer-update, or escalation text

Templates are stored through `chrome.storage.local`. The extension does not send templates to an external server.

### Input validation and copy support

- Required fields are validated before a draft is generated.
- Copy buttons use the browser clipboard API with a fallback method.
- Generated content must be reviewed and corrected before operational use.

---

## Screens and workflows

| Tab | Primary use |
|---|---|
| Incident | Generate internal chronology and recommended escalation details |
| Customer | Generate customer-facing status updates |
| Carrier | Generate carrier escalation drafts |
| Templates | Save and reuse browser-local communication templates |

### Example incident workflow

1. Open the Incident Ticket Helper extension.
2. Enter fictional or approved training data.
3. Select the affected product/service.
4. Review the recommended team and category.
5. Choose severity, impact, and urgency.
6. Document symptoms, actions already taken, and next steps.
7. Select English or Spanish.
8. Generate the internal note.
9. Review the note for accuracy and remove any sensitive information.
10. Copy the approved draft into an authorized ticketing system.

---

## Technical architecture

```text
incident-ticket-helper/
├── manifest.json      # Chrome extension configuration (Manifest V3)
├── popup.html         # Extension popup interface and form fields
├── popup.js           # Form logic, note generators, routing, storage
├── styles.css         # Popup styling
├── README.md          # Project documentation
└── SECURITY.md         # Security and privacy review
```

### Key technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Chrome Extensions Manifest V3
- `chrome.storage.local`
- Clipboard API

---

## Installation and testing

### Load locally in Chrome

1. Download or clone this repository.
2. Open Google Chrome.
3. Go to:

   ```text
   chrome://extensions/
   ```

4. Enable **Developer mode** in the upper-right corner.
5. Select **Load unpacked**.
6. Choose this folder:

   ```text
   telecom-incident-management-playbook/tools/incident-ticket-helper
   ```

7. Pin the extension if desired.
8. Open the extension from the Chrome toolbar.

### Test checklist

Use fictional test data only.

- [ ] Select `FortiGate` and confirm the tool suggests `T3/T4` and `Edge`.
- [ ] Select `Ooma` and confirm the tool suggests `T2` and `VOIP`.
- [ ] Complete the Incident form and generate an English internal note.
- [ ] Change the language to Spanish and generate a Spanish internal note.
- [ ] Generate English and Spanish customer updates.
- [ ] Generate a carrier escalation draft.
- [ ] Save a template, close the popup, reopen it, and load the saved template.
- [ ] Verify that the extension works without internet access.

---

## Security and privacy

This extension follows a privacy-first approach:

- Uses only the `storage` permission.
- Uses no host permissions.
- Makes no external network requests.
- Does not access browser tabs, browsing history, cookies, or credentials.
- Stores templates locally in the browser profile only.
- Does not automatically send, submit, or post generated drafts.
- Requires manual review and manual copying into approved systems.

### Data handling rules

Never enter or publish:

- Customer names
- Customer account numbers
- Physical site addresses
- Circuit, service, or carrier ticket identifiers
- Public or private IP addresses
- Device serial numbers
- Network configurations
- Passwords, API keys, tokens, or credentials
- Internal URLs, phone numbers, or contact lists
- Any other confidential business information

Use fictional data such as:

```text
Ticket: INC-DEMO-001
Customer: Example Customer
Site: Demo Site A
Circuit: CIRCUIT-XXXX
Carrier: Carrier X
```

---

## Limitations

- The tool does not connect to Salesforce, Rev.io, ServiceNow, Jira, or any live ticketing platform.
- The tool does not validate SLA targets or retrieve real-time outage information.
- Product routing is static and must be reviewed when organizational responsibilities change.
- Generated drafts are not authoritative incident records.
- Human validation remains mandatory before use.

---

## Future improvements

- [ ] Add automated unit tests for output-generation functions.
- [ ] Add an editable local routing matrix.
- [ ] Add a search and filter capability for products/services.
- [ ] Add priority calculation based on impact × urgency.
- [ ] Add a major-incident communication mode.
- [ ] Add draft export as a local `.txt` or `.md` file.
- [ ] Add accessibility improvements and keyboard navigation.
- [ ] Add a local audit log using anonymized demo data only.
- [ ] Add user-selectable template categories.
- [ ] Add a formal change log.

---

## Framework alignment

This project demonstrates concepts that align with:

- **ITIL 4**: Incident management, service-level management, continual improvement, and escalation.
- **NIST incident response concepts**: Detection, analysis, response, recovery, and post-incident documentation.
- **Telecommunications/NOC operations**: Monitoring, triage, carrier coordination, technical escalation, and customer communication.
- **Secure-by-design principles**: Least privilege, local processing, data minimization, and manual approval before operational use.

---

## Disclaimer

This project is an independent educational and portfolio prototype. It is not affiliated with, endorsed by, or connected to any employer, customer, carrier, vendor, ticketing platform, or telecommunications provider.

All examples, routing data, templates, and workflows must be reviewed and approved before they are used in a production environment.
