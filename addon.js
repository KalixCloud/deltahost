import BDSAddonInstaller from 'bds-addon-installer';

// No tocar este apartado para evitar errores
let serverPath = '/home/container/';
// Instalar un mod en específico
let addon = '/home/container/BDS-Addons/MoonKnightBehaviorPack.mcpack';

let installer = new BDSAddonInstaller(serverPath);

// Instalar un mod en específico
installer.installAddon(addon);
// Instalar todos los addons subidos
installer.installAllAddons();
