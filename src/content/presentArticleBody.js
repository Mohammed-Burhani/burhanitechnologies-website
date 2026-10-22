import { normalizeArticleBody } from "./articlePresentation";
import { structureCloudMigrationWorksheet } from "./cloudMigrationWorksheet";
import { structureAnalyticsWorksheet } from "./analyticsWorksheet";
import { structureDocumentManagementWorksheet } from "./documentManagementWorksheet";
import { structureEcommerceWorksheet } from "./ecommerceWorksheet";
import { structureErpPartnerWorksheet } from "./erpPartnerWorksheet";
import { structureCostDrivers } from "./costDriversPresentation";
import { structureLifecycleSections } from "./lifecyclePresentation";
import { structureAzureLists } from "./azureListsPresentation";
import { structureErpModulesWorksheet } from "./erpModulesWorksheet";
import { structureErpCompaniesWorksheet } from "./erpCompaniesWorksheet";
import { structureErpSectorsSections } from "./erpSectorsPresentation";
import { structureManufacturingErpWorksheet } from "./manufacturingErpWorksheet";
import { structureErpCrmWorksheet } from "./erpCrmWorksheet";
import { structureHealthcareWorksheet } from "./healthcareWorksheet";
import { structureDedicatedDevelopersWorksheet } from "./dedicatedDevelopersWorksheet";
import { structureApiIntegrationWorksheet } from "./apiIntegrationWorksheet";
import { presentInventorySoftwareArticle } from "./inventorySoftwarePresentation";
import { presentDeepTechArticle } from "./deepTechPresentation";
import { presentInventoryBenefitsArticle } from "./inventoryBenefitsPresentation";
import { presentInventoryTechniquesArticle } from "./inventoryTechniquesPresentation";
import { presentLegacyModernizationArticle } from "./legacyModernizationPresentation";
import { presentMobileDevelopmentArticle } from "./mobileDevelopmentPresentation";
import { presentOnPremiseCloudArticle } from "./onPremiseCloudPresentation";
import { presentMobileCostArticle } from "./mobileCostPresentation";
import { presentSapAutomationArticle } from "./sapAutomationPresentation";
import { presentRpaServicesArticle } from "./rpaServicesPresentation";
import { presentOutsourcingArticle } from "./outsourcingPresentation";
import { presentDevelopmentStagesArticle } from "./developmentStagesPresentation";
import { presentBpaGuideArticle } from "./bpaGuidePresentation";
import { presentSoftwareMaintenanceArticle } from "./softwareMaintenancePresentation";
import { presentUxProcessArticle } from "./uxProcessPresentation";
import { presentRpaToolsArticle } from "./rpaToolsPresentation";
import { presentWebDevelopmentArticle } from "./webDevelopmentPresentation";
import { presentErpImplementationArticle } from "./erpImplementationPresentation";
import { presentWarehouseArticle } from "./warehousePresentation";
import { presentWebsiteWebAppArticle } from "./websiteWebAppPresentation";
import { presentStrategicMobileArticle } from "./strategicMobilePresentation";
import { trimLegacyArticleSpacing } from "./legacyArticleSpacing";

const transforms = [
  structureCloudMigrationWorksheet,
  structureAnalyticsWorksheet,
  structureDocumentManagementWorksheet,
  structureEcommerceWorksheet,
  structureErpPartnerWorksheet,
  structureErpModulesWorksheet,
  structureErpCompaniesWorksheet,
  structureManufacturingErpWorksheet,
  structureErpCrmWorksheet,
  structureHealthcareWorksheet,
  structureDedicatedDevelopersWorksheet,
  structureApiIntegrationWorksheet,
  presentInventorySoftwareArticle,
  presentInventoryBenefitsArticle,
  presentInventoryTechniquesArticle,
  presentLegacyModernizationArticle,
  presentMobileDevelopmentArticle,
  presentOnPremiseCloudArticle,
  presentMobileCostArticle,
  presentSapAutomationArticle,
  presentRpaServicesArticle,
  presentOutsourcingArticle,
  presentDevelopmentStagesArticle,
  presentBpaGuideArticle,
  presentSoftwareMaintenanceArticle,
  presentUxProcessArticle,
  presentRpaToolsArticle,
  presentWebDevelopmentArticle,
  presentErpImplementationArticle,
  presentWarehouseArticle,
  presentWebsiteWebAppArticle,
  presentStrategicMobileArticle,
  structureCostDrivers,
  structureLifecycleSections,
  structureErpSectorsSections,
  presentDeepTechArticle,
  normalizeArticleBody,
  structureAzureLists,
  trimLegacyArticleSpacing,
];

// Each correction recognizes only its reviewed article and source shape.
// Keep the CMS snapshot intact and use the same presentation for the body
// and its section navigation.
export const presentArticleBody = (body, slug) =>
  transforms.reduce((content, transform) => transform(content, slug), body);
