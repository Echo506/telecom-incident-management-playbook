# Carrier Escalation Template

## Purpose

Standardize how the NOC escalates access circuit and service issues to carriers.

## Template

**Subject:** Escalation – {{SERVICE_TYPE}} Outage – {{CIRCUIT_ID}} – {{SITE_NAME}}

Hello {{CARRIER_NAME}} Support,

We are requesting escalation for a service outage affecting the following circuit:

- **Customer:** {{CUSTOMER_NAME}}  
- **Site address:** {{SITE_ADDRESS}}  
- **Circuit ID / Service:** {{CIRCUIT_ID}}  
- **Service type:** {{SERVICE_TYPE}}  
- **Symptoms:** {{SYMPTOMS}}  
- **Outage start time:** {{OUTAGE_START_TIME}}  
- **Local time zone:** {{TIMEZONE}}  

Our troubleshooting indicates:

- Device status: {{DEVICE_STATUS}}  
- Local equipment power and connections: {{LOCAL_EQUIPMENT_STATUS}}  
- Monitoring evidence: {{MONITORING_EVIDENCE_SUMMARY}}  

We suspect a fault at or beyond the demarcation point and request:

- Confirmation of any known outages or maintenance in the area  
- Line tests and loopback tests as applicable  
- Dispatch or physical inspection if required  

Please provide a carrier ticket number and an estimated time for the next update.

Best regards,  
{{TECH_NAME}} / NOC Team  
{{COMPANY_NAME}}  
{{CONTACT_INFO}}
