# Incident Ticket Helper

A browser-extension prototype designed to support structured incident documentation and communication.

## Purpose

Incident analysts frequently repeat the same documentation tasks:

- Recording incident symptoms
- Capturing timestamps
- Preparing customer updates
- Preparing escalation notes
- Organizing technical information
- Maintaining consistent case chronology

This prototype explores how lightweight browser automation can support those activities while preserving a standardized incident-management process.

## Features

- Browser-extension popup interface
- Structured incident-information entry
- Reusable documentation workflow
- Foundation for ticket-note generation
- Foundation for customer and carrier communication templates

## Repository Files

| File | Purpose |
|---|---|
| `manifest.json` | Browser-extension metadata and permissions |
| `popup.html` | User interface for the extension popup |

## Potential Future Improvements

- Add JavaScript form handling.
- Add incident-severity selection.
- Add impact and urgency fields.
- Generate structured ticket chronology.
- Generate customer update drafts.
- Generate carrier escalation drafts.
- Add English/Spanish communication modes.
- Add local-only storage for templates.
- Add input validation.
- Add unit tests.
- Add a security and privacy review.

## Security and Privacy

This project must not collect, transmit, or store:

- Customer names
- Account numbers
- Circuit identifiers
- IP addresses
- Passwords or tokens
- Confidential ticket information
- Internal company data

Use fictional or anonymized information for demonstrations.

The extension should follow the principle of least privilege and request only the browser permissions it actually needs.

## Example Workflow

1. Open the extension.
2. Enter fictional incident details.
3. Select incident type and priority.
4. Generate a structured internal note.
5. Review the output manually.
6. Copy the approved text into an authorized ticketing system.

## Security and Privacy Review

- The extension uses only `storage` and no host permissions.
- No external network requests are made.
- All data remains local to the browser profile.
- No credentials, tokens, or confidential fields are collected.
- Templates are stored via `chrome.storage.local` only.
- Users must manually copy generated text into authorized systems.
- The tool is intended for educational and portfolio use, not production operations.

The analyst remains responsible for verifying all generated content before use.
