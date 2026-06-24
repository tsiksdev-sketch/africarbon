import ServicePageLayout from "./servicesPageLayout";

const integrity =
  "AICTS provides advisory, readiness and documentation support. Outcomes such as credit issuance, certification, finance, buyer participation or offtake depend on applicable standards, regulation, registry processes, project performance, validation, verification and market conditions.";

const RECs = () => (
  <ServicePageLayout
    who="Renewable energy generators, independent power producers, corporates buying renewable electricity, banks, utilities, project owners, ESG teams, institutions exploring Scope 2 electricity claims and market-development stakeholders."
    how="Through Africa RECs and country-focused initiatives such as ZAM-REC and ZIM-REC, AICTS contributes to renewable energy certificate awareness, generator readiness, buyer education and energy attribute market development in selected African markets."
    delivers={[
      "REC awareness and education",
      "Renewable energy generator readiness assessments",
      "Device and generation documentation review",
      "Metering and evidence readiness support",
      "Evident Registry-related preparation support",
      "Buyer education and corporate renewable electricity claims advisory",
      "Scope 2 electricity emissions support",
      "REC transaction-readiness support",
      "Stakeholder engagement and market development",
    ]}
    outputs={[
      "REC readiness reports",
      "Generator documentation checklists",
      "Metering evidence review notes",
      "Buyer education briefs",
      "Scope 2 advisory notes",
      "Market-entry preparation roadmaps",
      "Stakeholder engagement materials",
    ]}
    integrityNote={integrity}
    finalCta={{
      heading: "Take the next credible step",
      copy: "Share your project, policy, institutional or market-readiness question with AICTS and we will help identify a practical way forward.",
      button: "Assess REC Readiness",
      to: "/start-a-diagnostic",
    }}
  />
);

export default RECs;
