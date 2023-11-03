interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee'],
  tenantName: 'Organization',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own account information',
    'View own customer information',
    'Edit own customer information',
    'Contact support',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage organization information',
    'Manage employee information',
    'Manage HR manager information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f63edcac-aa0e-4d1f-a2af-e0b0495d6500',
};
