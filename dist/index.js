// server/index.ts
import "dotenv/config";
import express from "express";
import { createServer } from "http";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var smtpPort = Number(process.env.SMTP_PORT || 465);
var smtpSecure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : smtpPort === 465;
var smtpTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASSWORD || ""
  }
});
var formatCurrency = (value) => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value);
async function startServer() {
  const app = express();
  const server = createServer(app);
  app.use(express.json({ limit: "32kb" }));
  app.post("/api/send-transfer-confirmation", async (req, res) => {
    const { firstName, lastName, iban, swift, bankCode, amount, email, label } = req.body ?? {};
    const transferAmount = Number(amount);
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const fromAddress = process.env.SMTP_FROM || smtpUser;
    if (!firstName || !lastName || !iban || !swift || !bankCode || !email || !Number.isFinite(transferAmount) || transferAmount <= 0) {
      return res.status(400).json({ message: "Les informations du virement sont incompl\xE8tes." });
    }
    if (!smtpUser || !smtpPassword || !fromAddress) {
      return res.status(503).json({
        message: "Le service email n\u2019est pas configur\xE9. Renseignez SMTP_USER, SMTP_PASSWORD et SMTP_FROM."
      });
    }
    try {
      await smtpTransporter.sendMail({
        from: `Groupe Cr\xE9dit Agricole <${fromAddress}>`,
        to: email,
        subject: "Confirmation de votre virement",
        text: [
          `Bonjour ${firstName} ${lastName},`,
          "",
          "Votre virement a \xE9t\xE9 effectu\xE9 avec succ\xE8s.",
          `Montant : ${formatCurrency(transferAmount)}`,
          `IBAN destinataire : ${iban}`,
          `Code Swift / BIC : ${swift}`,
          `Code banque : ${bankCode}`,
          `Libell\xE9 : ${label || "Virement"}`,
          "",
          "Merci de votre confiance.",
          "Groupe Cr\xE9dit Agricole"
        ].join("\n"),
        html: `<div style="font-family:Arial,sans-serif;max-width:620px;margin:auto;color:#1f2937"><div style="padding:24px;background:#006b4f;color:#fff;border-radius:12px 12px 0 0"><strong>GROUPE CR\xC9DIT AGRICOLE</strong></div><div style="padding:24px;border:1px solid #e5e7eb;border-top:0;border-radius:0 0 12px 12px"><h2>Confirmation de votre virement</h2><p>Bonjour ${firstName} ${lastName},</p><p>Votre virement a \xE9t\xE9 effectu\xE9 avec succ\xE8s.</p><table style="border-collapse:collapse;width:100%"><tr><td style="padding:8px 0;color:#6b7280">Montant</td><td style="padding:8px 0;font-weight:bold">${formatCurrency(transferAmount)}</td></tr><tr><td style="padding:8px 0;color:#6b7280">IBAN destinataire</td><td style="padding:8px 0">${iban}</td></tr><tr><td style="padding:8px 0;color:#6b7280">Code Swift / BIC</td><td style="padding:8px 0">${swift}</td></tr><tr><td style="padding:8px 0;color:#6b7280">Code banque</td><td style="padding:8px 0">${bankCode}</td></tr><tr><td style="padding:8px 0;color:#6b7280">Libell\xE9</td><td style="padding:8px 0">${label || "Virement"}</td></tr></table><p style="margin-top:24px">Merci de votre confiance.</p></div></div>`
      });
      return res.json({ success: true });
    } catch (error) {
      console.error("SMTP transfer confirmation error:", error);
      return res.status(502).json({ message: "L\u2019email de confirmation n\u2019a pas pu \xEAtre envoy\xE9." });
    }
  });
  const staticPath = process.env.NODE_ENV === "production" ? path.resolve(__dirname, "public") : path.resolve(__dirname, "..", "dist", "public");
  app.use(express.static(staticPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });
  const port = process.env.PORT || 3e3;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
startServer().catch(console.error);
