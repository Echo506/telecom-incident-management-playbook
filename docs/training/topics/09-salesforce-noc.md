# Module 9: Salesforce Service Cloud for NOC

## Learning Objective

Use Salesforce Service Cloud effectively to manage incidents, communicate with stakeholders, and track resolution progress.

---

## Foundational Knowledge You Need

Before diving into this module, understand:

- **What is a CRM**: Customer Relationship Management system.
- **What is a ticket/case**: Record of a customer issue or incident.
- **Basic ITIL concepts**: Incident, problem, change management (helpful but not required).
- **Email and phone etiquette**: Professional communication with customers.

---

## Key Teaching Points

### 1. Salesforce Service Cloud Overview

**What is Service Cloud?**

- Salesforce platform designed for customer service teams.
- Manages cases (tickets), customer communications, and service workflows.
- Integrates with email, phone, chat, and other channels.

**Key objects for NOC:**

- **Case**: The incident/ticket record.
- **Account**: The customer organization.
- **Contact**: Individual person at the customer (admin, end user).
- **Asset**: Specific service or product affected (e.g., phone line, circuit, PBX).
- **Work Order**: Field dispatch or technician assignment (if applicable).

### 2. Case Lifecycle in NOC

**Typical flow:**

Case Created

Inbound email, phone call, monitoring alert, or manual creation.

Case Triage

Categorize, prioritize, assign to technician.

Investigation

Troubleshoot, gather information, update case notes.

Resolution

Fix applied, tested, confirmed with customer.

Case Closed

Documented, customer notified, SLA met.



**Case status values:**

- **New**: Just created, not yet worked.
- **In Progress**: Actively being worked.
- **Pending Customer**: Waiting for customer response/info.
- **Pending Vendor**: Waiting on carrier or third-party.
- **Resolved**: Fix applied, awaiting customer confirmation.
- **Closed**: Customer confirmed, case complete.

### 3. Creating a Case

**Required fields (typically):**

- **Subject**: Brief description (e.g., "Complete phone service outage – ABC Corp").
- **Account**: Customer name.
- **Contact**: Primary contact person.
- **Priority**: Critical, High, Medium, Low.
- **Origin**: Phone, Email, Web, System (monitoring alert).
- **Description**: Detailed explanation of the issue.

**Best practices:**

- **Subject line:** Be specific and actionable.
  - ✅ Good: "One-way audio on inbound calls – 555-1234"
  - ❌ Bad: "Phone issue"
- **Description:** Include:
  - Symptom (what's broken?).
  - Impact (how many users/services affected?).
  - Time started (when did it begin?).
  - Troubleshooting already done.
- **Attachments:** Add screenshots, logs, traceroutes if available.

### 4. Prioritization and SLAs

**Priority levels:**

| Priority | Definition | Response Time | Example |
|----------|------------|---------------|---------|
| **Critical** | Complete service outage, business down | 15 minutes | All phones down, no 911 capability |
| **High** | Major degradation, multiple users affected | 1 hour | 50% of phones can't make calls |
| **Medium** | Partial impact, workaround exists | 4 hours | One department affected, can use mobile |
| **Low** | Minor issue, single user, non-urgent | 24 hours | One phone has voicemail issue |

**SLA (Service Level Agreement):**

- Contractual commitment to respond/resolve within X time.
- Tracked in Salesforce via "Milestones" or custom fields.
- Breaches trigger escalations and reporting.

**SLA fields to monitor:**

- **Target Response Time**: When you must first respond.
- **Target Resolution Time**: When issue must be resolved.
- **Elapsed Time**: How long case has been open.
- **Breached**: Yes/No (if SLA exceeded).

### 5. Updating Cases

**When to update:**

- **Initial response**: Acknowledge receipt, set expectations.
- **Status changes**: Moving from "In Progress" to "Pending Vendor", etc.
- **Significant findings**: Root cause identified, escalation made.
- **Resolution**: Fix applied, testing completed.
- **Customer requests**: Any time customer provides new info.

**Case comments/internal notes:**

- **Internal notes**: Visible only to your team.
  - Use for: Technical details, troubleshooting steps, carrier ticket numbers.
  - Example: "Carrier ticket #12345, ETA 2 hours for repair."
- **Customer-visible comments**: Visible to customer (if using Customer Portal).
  - Use for: Status updates, next steps, questions for customer.
  - Example: "Our team is on-site. ETA for restoration is 3:00 PM."

**Best practices:**

- Update at least every 2–4 hours for Critical/High priority cases.
- Always document carrier/ticket numbers for escalations.
- Note who you spoke with and what was agreed.
- Use clear, professional language (even in internal notes).

### 6. Email Templates and Macros

**Email templates:**

- Pre-written emails for common scenarios.
- Saves time, ensures consistency.
- Examples:
  - Initial acknowledgment.
  - Status update.
  - Resolution confirmation.
  - Request for more information.

**How to use:**

1. Open the case.
2. Click "Email" button.
3. Select template from dropdown.
4. Customize (add customer name, specific details).
5. Send.

**Macros:**

- Automate repetitive actions.
- Example macro: "Escalate to Carrier"
  - Changes status to "Pending Vendor".
  - Adds internal note template.
  - Sends email to customer.
  - Assigns to queue "Carrier Escalations".

**Creating a template (example):**

Subject: Update – Case {!Case.CaseNumber}: {!Case.Subject}

Hi {!Contact.FirstName},

This is an update regarding your case.

Current Status: {!Case.Status}
Next Steps: Our team is [action]. We expect [resolution/ETA].

We'll provide another update by [time/date] or sooner if there are changes.

Best regards,
{!$User.Name}
NOC Tier 2 Technician



### 7. Escalations and Assignments

**When to escalate:**

- Issue exceeds your access level (requires admin/carrier).
- SLA at risk of breach.
- Customer requests escalation.
- Issue requires specialized knowledge (Tier 3, engineering).

**Escalation process:**

1. Update case notes with all troubleshooting done.
2. Change status to "Escalated" or "Pending Vendor".
3. Reassign to appropriate queue/person (e.g., "Carrier Team", "Tier 3").
4. Add escalation reason in notes.
5. Notify customer (if appropriate).

**Assignment rules:**

- Automatic routing based on criteria.
- Examples:
  - All "Critical" priority → Assign to "NOC On-Call" queue.
  - All "VoIP" cases → Assign to "VoIP Team".
  - All cases from VIP account → Assign to "Premium Support" queue.

### 8. Reporting and Dashboards

**Common NOC reports:**

- **Cases by Priority**: How many Critical/High/Medium/Low cases open?
- **Cases by Status**: New, In Progress, Pending, Resolved, Closed.
- **SLA Breaches**: How many cases missed SLA this week/month?
- **Average Resolution Time**: How long do cases take to resolve?
- **Cases by Technician**: Workload distribution.
- **Top Accounts**: Which customers have most cases?

**Dashboard components:**

- **Open Cases by Priority** (pie chart).
- **Cases Created vs. Closed** (bar chart, trend over time).
- **SLA Compliance %** (gauge chart).
- **Top 5 Accounts** (table).
- **Aging Cases** (cases open > 24/48/72 hours).

**How to use:**

- Review dashboard at start of shift.
- Identify aging cases (prioritize those first).
- Monitor SLA breaches (take action before breach occurs).
- Share with management in daily/weekly meetings.

### 9. Mobile and Offline Access

**Salesforce Mobile App:**

- Access cases on the go.
- Receive push notifications for new/updated cases.
- Update cases from phone (add notes, send emails).

**Best practices:**

- Enable notifications for Critical/High priority cases.
- Use mobile app for quick updates when away from desk.
- Sync regularly to ensure you have latest data.

---

## Hands-On Exercises

### Exercise 1: Create a Test Case

In your Salesforce sandbox or training environment:

1. Create a new case:
   - Subject: "Test case – VoIP outage"
   - Account: Select test account.
   - Priority: High.
   - Origin: Phone.
   - Description: "Customer reports all phones down since 10:00 AM. 20 users affected."
2. Add an internal note:
   - "Initial triage: Confirmed outage. Escalating to carrier."
3. Change status to "In Progress".
4. Assign to yourself.

---

### Exercise 2: Use an Email Template

1. Open the case you created.
2. Click "Email".
3. Select a template (e.g., "Initial Acknowledgment").
4. Customize:
   - Add customer name.
   - Add specific details (time, impact).
5. Send the email.

---

### Exercise 3: Create a Macro

Create a macro called "Status Update – Pending Vendor":

**Actions:**

1. Update field: Status = "Pending Vendor".
2. Add internal note:

Escalated to carrier.
Carrier ticket #: [TBD]
ETA: [TBD]

3. Send email (use "Status Update" template).
4. Assign to queue: "Carrier Escalations".

Test the macro on a test case.

---

### Exercise 4: Build a Simple Report

Create a report: "My Open Cases"

**Filters:**

- Assigned to: [Your Name].
- Status: Not equal to "Closed".
- Created Date: Last 30 days.

**Columns:**

- Case Number.
- Subject.
- Priority.
- Status.
- Created Date.
- Age (days open).

**Save and run:**

- Export to Excel (optional).
- Review: Which cases need attention?

---

### Exercise 5: Simulate a Full Case Lifecycle

Scenario: Customer calls about complete phone service outage.

**Steps:**

1. **Create case**:
- Priority: Critical.
- Subject: "Complete phone service outage – XYZ Corp".
2. **Initial update**:
- Send acknowledgment email.
- Add internal note: "Starting investigation."
3. **Investigation**:
- Add notes: "Checked PBX status. Down. Rebooting."
- Update status: "In Progress".
4. **Escalation**:
- Reboot failed.
- Escalate to carrier.
- Add carrier ticket number.
- Change status: "Pending Vendor".
5. **Resolution**:
- Carrier restores service.
- Test with customer.
- Update case: "Service restored. Customer confirmed."
- Change status: "Resolved".
6. **Closure**:
- Customer confirms all working.
- Change status: "Closed".
- Send closure email.

Document the entire timeline in the case.

---

## Additional Resources

- **Salesforce Trailhead**: [Salesforce Customer 360: Quick Look](https://trailhead.salesforce.com/content/learn/modules/salesforce-customer-360-quick-look?trail_id=salesforce_advantage) – 5m
- **Salesforce Trailhead**: [Get to Know the Service Cloud Platform](https://trailhead.salesforce.com/content/learn/modules/service-cloud-platform-quick-look/get-to-know-the-service-cloud-platform?trail_id=empower-managers-and-agents-with-the-service-cloud-platform) – 10m
- **Salesforce Trailhead**: [Service Cloud Agent Productivity](https://trailhead.salesforce.com/content/learn/modules/service-cloud-agent-productivity?trailmix_creator_id=svccloud&trailmix_slug=day-in-the-life-of-a-virtual-service-agent) – 1h 40m

---

## Completion Checklist

- [ ] Read and understand all key teaching points.
- [ ] Complete all 5 hands-on exercises.
- [ ] Create at least 2 email templates.
- [ ] Create at least 1 macro.
- [ ] Build and run at least 1 report.
- [ ] Move on to [Module 10: HPBX Platforms](10-hpbx-platforms.md).

---

**Next Module**: [HPBX Platforms (8x8, CoreDial, Windstream, Intelepeer)](10-hpbx-platforms.md)
