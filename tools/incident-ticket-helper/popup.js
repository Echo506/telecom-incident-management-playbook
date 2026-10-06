// popup.js - Incident Ticket Helper
// Educational prototype only.
// No external requests. Templates are stored locally using chrome.storage.local.

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initProductRouting();
  initIncidentForm();
  initCustomerForm();
  initCarrierForm();
  initTemplates();
});

/* ---------- PRODUCT / ESCALATION ROUTING ---------- */

const PRODUCT_ROUTING = {
  "IOW - Webbing": {
    team: "T2",
    category: "PTaaS"
  },
  "IOS - StarLink": {
    team: "T2",
    category: "PTaaS"
  },
  DataRemote: {
    team: "T2/T3",
    category: "PTaaS"
  },
  Ooma: {
    team: "T2",
    category: "VOIP"
  },
  BEC: {
    team: "T2/T3",
    category: "VOIP"
  },
  Inseego: {
    team: "T2/T3",
    category: "PTaaS"
  },
  Cradlepoint: {
    team: "T2/T3",
    category: "PTaaS"
  },
  Wattbox: {
    team: "T2/T3",
    category: "PTaaS"
  },
  FortiGate: {
    team: "T3/T4",
    category: "Edge"
  },
  Meraki: {
    team: "T3/T4",
    category: "Edge"
  },
  Cato: {
    team: "T3/T4",
    category: "Edge"
  },
  Cisco: {
    team: "T3/T4",
    category: "Edge"
  },
  "Access Points/Switches": {
    team: "T3/T4",
    category: "LAN"
  },
  "Grandstream ATA": {
    team: "T2/T3",
    category: "VOIP"
  },
  "Mitel Phones": {
    team: "T2/T3",
    category: "VOIP"
  },
  "Polycom Phones": {
    team: "T2",
    category: "VOIP"
  },
  Efax: {
    team: "T2",
    category: "VOIP"
  }
};

function initProductRouting() {
  const productSelect = document.getElementById("product-service");
  const targetTeam = document.getElementById("target-team");
  const serviceCategory = document.getElementById("service-category");
  const recommendation = document.getElementById("routing-recommendation");

  if (!productSelect || !targetTeam || !serviceCategory || !recommendation) {
    return;
  }

  productSelect.addEventListener("change", () => {
    const product = productSelect.value;
    const route = PRODUCT_ROUTING[product];

    if (!route) {
      targetTeam.value = "";
      serviceCategory.value = "";
      recommendation.textContent =
        "Select a product or service to view the recommended escalation team.";
      return;
    }

    targetTeam.value = route.team;
    serviceCategory.value = route.category;
    recommendation.textContent =
      `Recommended escalation: ${route.team} | Category: ${route.category}`;
  });
}

/* ---------- TABS ---------- */

function initTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      const selectedPanel = document.getElementById(`tab-${tabId}`);

      if (!selectedPanel) {
        return;
      }

      tabs.forEach((tab) => {
        tab.classList.remove("active");
        tab.setAttribute("aria-selected", "false");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      selectedPanel.classList.add("active");
    });
  });
}

/* ---------- INCIDENT FORM ---------- */

function initIncidentForm() {
  const form = document.getElementById("incident-form");
  const output = document.getElementById("output-internal");
  const copyBtn = document.getElementById("copy-internal-btn");

  if (!form || !output) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateRequiredFields(form)) {
      showMessage("Please fill in all required incident fields.");
      return;
    }

    const data = {
      incidentId: getValue("incident-id"),
      incidentType: getValue("incident-type"),
      productService: getValue("product-service"),
      targetTeam: getValue("target-team"),
      serviceCategory: getValue("service-category"),
      severity: getValue("severity"),
      impact: getValue("impact"),
      urgency: getValue("urgency"),
      symptoms: getValue("symptoms"),
      affectedService: getValue("affected-service"),
      startTime: getValue("start-time"),
      detectionSource: getValue("detection-source"),
      actionsTaken: getValue("actions-taken"),
      nextSteps: getValue("next-steps"),
      language: getValue("language") || "en"
    };

    output.value = buildInternalNote(data);
  });

  copyBtn?.addEventListener("click", async () => {
    await copyText(output);
  });
}

/* ---------- CUSTOMER FORM ---------- */

function initCustomerForm() {
  const form = document.getElementById("customer-form");
  const output = document.getElementById("output-customer");
  const copyBtn = document.getElementById("copy-customer-btn");

  if (!form || !output) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateRequiredFields(form)) {
      showMessage("Please fill in all required customer-update fields.");
      return;
    }

    const data = {
      caseId: getValue("cust-case-id"),
      site: getValue("cust-site"),
      impact: getValue("cust-impact"),
      status: getValue("cust-status"),
      next: getValue("cust-next"),
      language: getValue("cust-language") || "en"
    };

    output.value = buildCustomerUpdate(data);
  });

  copyBtn?.addEventListener("click", async () => {
    await copyText(output);
  });
}

/* ---------- CARRIER FORM ---------- */

function initCarrierForm() {
  const form = document.getElementById("carrier-form");
  const output = document.getElementById("output-carrier");
  const copyBtn = document.getElementById("copy-carrier-btn");

  if (!form || !output) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateRequiredFields(form)) {
      showMessage("Please fill in all required carrier-escalation fields.");
      return;
    }

    const data = {
      carrierName: getValue("carrier-name"),
      circuit: getValue("carrier-circuit"),
      site: getValue("carrier-site"),
      symptoms: getValue("carrier-symptoms"),
      troubleshooting: getValue("carrier-troubleshooting"),
      request: getValue("carrier-request")
    };

    output.value = buildCarrierEscalation(data);
  });

  copyBtn?.addEventListener("click", async () => {
    await copyText(output);
  });
}

/* ---------- TEMPLATES: LOCAL STORAGE ---------- */

function initTemplates() {
  const saveBtn = document.getElementById("save-template-btn");
  const loadBtn = document.getElementById("load-template-btn");
  const deleteBtn = document.getElementById("delete-template-btn");
  const nameInput = document.getElementById("template-name");
  const contentInput = document.getElementById("template-content");
  const templateList = document.getElementById("template-list");

  if (
    !saveBtn ||
    !loadBtn ||
    !deleteBtn ||
    !nameInput ||
    !contentInput ||
    !templateList
  ) {
    return;
  }

  loadTemplateList();

  saveBtn.addEventListener("click", async () => {
    const name = nameInput.value.trim();
    const content = contentInput.value.trim();

    if (!name || !content) {
      showMessage("Provide both a template name and template content.");
      return;
    }

    await saveTemplate(name, content);
    await loadTemplateList(name);

    showMessage(`Template "${name}" saved locally.`);
  });

  loadBtn.addEventListener("click", async () => {
    const name = templateList.value;

    if (!name) {
      showMessage("Select a template to load.");
      return;
    }

    const content = await loadTemplate(name);

    if (content === null) {
      showMessage("The selected template could not be found.");
      return;
    }

    nameInput.value = name;
    contentInput.value = content;
    showMessage(`Template "${name}" loaded.`);
  });

  deleteBtn.addEventListener("click", async () => {
    const name = templateList.value;

    if (!name) {
      showMessage("Select a template to delete.");
      return;
    }

    const confirmed = window.confirm(
      `Delete the locally stored template "${name}"?`
    );

    if (!confirmed) {
      return;
    }

    await deleteTemplate(name);
    await loadTemplateList();

    nameInput.value = "";
    contentInput.value = "";

    showMessage(`Template "${name}" deleted.`);
  });
}

function storageIsAvailable() {
  return typeof chrome !== "undefined" &&
    chrome.storage &&
    chrome.storage.local;
}

function saveTemplate(name, content) {
  return new Promise((resolve) => {
    if (!storageIsAvailable()) {
      window.localStorage.setItem(`template:${name}`, content);
      resolve();
      return;
    }

    chrome.storage.local.set(
      {
        [`template:${name}`]: content
      },
      () => resolve()
    );
  });
}

function loadTemplate(name) {
  return new Promise((resolve) => {
    const key = `template:${name}`;

    if (!storageIsAvailable()) {
      resolve(window.localStorage.getItem(key));
      return;
    }

    chrome.storage.local.get([key], (result) => {
      resolve(result[key] || null);
    });
  });
}

function deleteTemplate(name) {
  return new Promise((resolve) => {
    const key = `template:${name}`;

    if (!storageIsAvailable()) {
      window.localStorage.removeItem(key);
      resolve();
      return;
    }

    chrome.storage.local.remove([key], () => resolve());
  });
}

function loadTemplateList(selectedName = "") {
  return new Promise((resolve) => {
    const templateList = document.getElementById("template-list");

    if (!templateList) {
      resolve();
      return;
    }

    const renderTemplates = (items) => {
      const names = Object.keys(items)
        .filter((key) => key.startsWith("template:"))
        .map((key) => key.replace("template:", ""))
        .sort((a, b) => a.localeCompare(b));

      templateList.innerHTML =
        '<option value="">-- Select a template --</option>';

      names.forEach((name) => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;

        if (name === selectedName) {
          option.selected = true;
        }

        templateList.appendChild(option);
      });

      resolve();
    };

    if (!storageIsAvailable()) {
      const items = {};

      Object.keys(window.localStorage)
        .filter((key) => key.startsWith("template:"))
        .forEach((key) => {
          items[key] = window.localStorage.getItem(key);
        });

      renderTemplates(items);
      return;
    }

    chrome.storage.local.get(null, renderTemplates);
  });
}

/* ---------- HELPERS ---------- */

function getValue(id) {
  const element = document.getElementById(id);
  return element ? (element.value || "").trim() : "";
}

function validateRequiredFields(form) {
  const fields = form.querySelectorAll("[required]");

  for (const field of fields) {
    const value = (field.value || "").trim();

    if (!value) {
      field.focus();
      return false;
    }
  }

  return true;
}

async function copyText(textarea) {
  const text = textarea?.value?.trim();

  if (!text) {
    showMessage("Generate a draft before copying.");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    showMessage("Draft copied to clipboard.");
  } catch (error) {
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    showMessage("Draft copied to clipboard.");
  }
}

function showMessage(message) {
  window.alert(message);
}

function formatLines(text) {
  if (!text || !text.trim()) {
    return "- [None recorded]";
  }

  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^-+\s*/, ""));

  if (lines.length === 0) {
    return "- [None recorded]";
  }

  return lines.map((line) => `- ${line}`).join("\n");
}

/* ---------- CONTENT BUILDERS ---------- */

function buildInternalNote(data) {
  const isSpanish = data.language === "es";

  if (isSpanish) {
    return (
      "=== NOTA INTERNA DE INCIDENTE ===\n" +
      `Ticket: ${data.incidentId}\n` +
      `Tipo: ${data.incidentType}\n` +
      `Producto/Servicio: ${data.productService}\n` +
      `Categoría: ${data.serviceCategory || "[No asignada]"}\n` +
      `Equipo de escalamiento recomendado: ${data.targetTeam || "[No asignado]"}\n` +
      `Severidad: ${data.severity}\n` +
      `Impacto: ${data.impact}\n` +
      `Urgencia: ${data.urgency}\n\n` +
      "--- CRONOLOGÍA ---\n" +
      `Inicio del incidente: ${data.startTime}\n` +
      `Fuente de detección: ${data.detectionSource}\n\n` +
      "--- IMPACTO Y SÍNTOMAS ---\n" +
      `Servicio afectado: ${data.affectedService}\n` +
      "Síntomas:\n" +
      `${formatLines(data.symptoms)}\n\n` +
      "--- RESPUESTA Y ESCALAMIENTO ---\n" +
      "Acciones tomadas:\n" +
      `${formatLines(data.actionsTaken)}\n\n` +
      "Próximos pasos:\n" +
      `${formatLines(data.nextSteps)}\n\n` +
      "--- SEGURIDAD ---\n" +
      "Esta nota es un borrador. Verificar antes de usarla en sistemas productivos.\n" +
      "No incluir información confidencial sin autorización.\n"
    );
  }

  return (
    "=== INTERNAL INCIDENT NOTE ===\n" +
    `Ticket: ${data.incidentId}\n` +
    `Type: ${data.incidentType}\n` +
    `Product/Service: ${data.productService}\n` +
    `Category: ${data.serviceCategory || "[Not assigned]"}\n` +
    `Recommended escalation team: ${data.targetTeam || "[Not assigned]"}\n` +
    `Severity: ${data.severity}\n` +
    `Impact: ${data.impact}\n` +
    `Urgency: ${data.urgency}\n\n` +
    "--- TIMELINE ---\n" +
    `Incident start: ${data.startTime}\n` +
    `Detection source: ${data.detectionSource}\n\n` +
    "--- IMPACT AND SYMPTOMS ---\n" +
    `Affected service: ${data.affectedService}\n` +
    "Symptoms:\n" +
    `${formatLines(data.symptoms)}\n\n` +
    "--- RESPONSE AND ESCALATION ---\n" +
    "Actions taken:\n" +
    `${formatLines(data.actionsTaken)}\n\n` +
    "Next steps:\n" +
    `${formatLines(data.nextSteps)}\n\n` +
    "--- SECURITY ---\n" +
    "This note is a draft. Verify it before using it in production systems.\n" +
    "Do not include confidential information without authorization.\n"
  );
}

function buildCustomerUpdate(data) {
  const isSpanish = data.language === "es";

  if (isSpanish) {
    return (
      `Asunto: Ticket ${data.caseId} – Actualización de incidente\n\n` +
      "Hola,\n\n" +
      `Le escribimos respecto al caso ${data.caseId} para su sitio en ${data.site}.\n\n` +
      "Impacto en el negocio:\n" +
      `${data.impact}\n\n` +
      "Estado actual:\n" +
      `${data.status}\n\n` +
      "Próximos pasos:\n" +
      `${data.next}\n\n` +
      "Proporcionaremos una actualización adicional cuando haya información relevante disponible.\n\n" +
      "Saludos cordiales,\n" +
      "Equipo NOC\n"
    );
  }

  return (
    `Subject: Ticket ${data.caseId} – Incident Update\n\n` +
    "Hello,\n\n" +
    `We are writing regarding case ${data.caseId} for your site at ${data.site}.\n\n` +
    "Business impact:\n" +
    `${data.impact}\n\n` +
    "Current status:\n" +
    `${data.status}\n\n` +
    "Next steps:\n" +
    `${data.next}\n\n` +
    "We will provide another update when meaningful information becomes available.\n\n" +
    "Best regards,\n" +
    "NOC Team\n"
  );
}

function buildCarrierEscalation(data) {
  return (
    `Subject: Escalation – ${data.carrierName} – Circuit ${data.circuit} – ${data.site}\n\n` +
    `Hello ${data.carrierName} Support,\n\n` +
    "We are requesting escalation for a service issue affecting the following service:\n\n" +
    `- Site / Location: ${data.site}\n` +
    `- Circuit / Service ID: ${data.circuit}\n\n` +
    "Symptoms:\n" +
    `${data.symptoms}\n\n` +
    "Troubleshooting summary:\n" +
    `${data.troubleshooting}\n\n` +
    "Requested action:\n" +
    `${data.request}\n\n` +
    "Please confirm whether there are any known outages or maintenance events, " +
    "perform applicable line testing, provide a carrier ticket number, and share " +
    "an estimated time for the next update.\n\n" +
    "Best regards,\n" +
    "NOC Team\n"
  );
}