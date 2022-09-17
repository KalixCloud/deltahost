import BDSAddonInstaller from 'bds-addon-installer';

let serverPath = '/home/container/';
let addon = '/home/container/BDS-Addons/MoonKnightBehaviorPack.mcpack';

let installer = new BDSAddonInstaller(serverPath);

// These functions are asynchronous, they will run at the same time.
// You can use then or async/await statements to wit for completion.
installer.installAddon(addon);
installer.installAllAddons();