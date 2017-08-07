const keyPlatAddr = 'platAddr';
const keyPlatPort = 'platPort';
const defaultPlatAddr = 'qsq.astropulsion.com';
const defaultPlatPort = '91';

export function setDefaultUrl() {
  if (getPlatAddress() === null && getPlatPort() === null) {
    console.log('Reset Default WSP Url');
    setPlatUrl(defaultPlatAddr, defaultPlatPort);
  }
}

export function getPlatUrl() {
  return `http://${getPlatAddress()}:${getPlatPort()}`;
}

export function setPlatUrl(addr, port) {
  setPlatAddress(addr);
  setPlatPort(port);
}

export function getPlatAddress() {
  return localStorage.getItem(keyPlatAddr);
}

export function getPlatPort() {
  return localStorage.getItem(keyPlatPort);
}

export function setPlatAddress(addr) {
  localStorage.setItem(keyPlatAddr, addr);
}

export function setPlatPort(port) {
  localStorage.setItem(keyPlatPort, port);
}