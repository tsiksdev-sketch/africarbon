import ServicePageLayout from "./servicesPageLayout";

const integrity =
  "AICTS provides advisory, readiness and documentation support. Outcomes such as credit issuance, certification, finance, buyer participation or offtake depend on applicable standards, regulation, registry processes, project performance, validation, verification and market conditions.";

const ClimateFinance = () => (
  <ServicePageLayout
   
 
    who="Project owners, renewable energy developers, NGOs, municipalities, investors, banks, development partners, corporates and climate project pipelines seeking finance or market engagement."
    how="We help project owners and institutions strengthen the technical, commercial and impact narrative required for credible investor and funder engagement. Our work improves readiness, documentation, credibility and communication."
    delivers={[
      "Climate finance concept notes",
      "Investment-readiness assessments",
      "Carbon and REC value scenario analysis",
      "Project teasers and investment briefs",
      "Funder-facing proposals",
      "Green finance advisory",
      "Project pipeline screening",
      "Due diligence support",
      "ESG investment narratives",
      "Data room preparation",
      "Buyer and offtaker readiness support",
    ]}
    outputs={[
      "Investor-readiness reports",
      "Climate finance concept notes",
      "Project information memoranda",
      "Carbon and REC value notes",
      "Risk and opportunity assessments",
      "Funder-facing proposal packs",
      "Buyer-readiness briefs",
    ]}
    integrityNote={integrity}
    finalCta={{
      heading: "Take the next credible step",
      copy: "Share your project, policy, institutional or market-readiness question with AICTS and we will help identify a practical way forward.",
      button: "Prepare an Investor Readiness Pack",
      to: "/tools/diagnostic",
    }}
  />
);

export default ClimateFinance;
