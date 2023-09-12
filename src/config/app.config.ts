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
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator'],
  tenantName: 'Company',
  applicationName: 'sersha',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage company profile',
    'Invite administrators to the application',
    'Manage administrators',
    'Manage list of children using the simulator',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/3064b039-801d-4c76-98fb-306c15b4b556',
};
