import { Component, ComponentMode, Listeners, ListenOpts, Registry, Watches, WatchOpts } from './interfaces';


export function getBundleFileName(bundleId: number) {
  return `ionic.${bundleId}.js`;
}


export function getBundleContent(bundleId: number, componentModeLoader: string) {
  return `Ionic.loadComponents(\n/** bundleId **/\n${bundleId},${componentModeLoader});`;
}


export function formatComponentModeLoader(component: Component, mode: ComponentMode) {
  const tag = component.tag.trim().toLowerCase();

  const componentClass = component.componentClass;

  const shadow = component.shadow;

  const modeName = (mode.name ? mode.name.trim().toLowerCase() : '');

  const modeCode = formatModeName(modeName);

  const styles = (mode.styles ? ('\'' + mode.styles.replace(/'/g, '"') + '\'') : '/* no styles */ 0');

  const componentFn = component.componentImporter.trim();

  let label = tag;
  if (mode.name) {
    label += '.' + mode.name;
  }

  const listeners = formatListeners(label, component.listeners);

  const watches = formatWatches(label, component.watches);

  const t = [
    `/** ${label}: [0] tagName **/\n'${tag}'`,
    `/** ${label}: [1] component class name **/\n'${componentClass}'`,
    `/** ${label}: [2] listeners **/\n${listeners}`,
    `/** ${label}: [3] watches **/\n${watches}`,
    `/** ${label}: [4] shadow **/\n${formatBoolean(shadow)}`,
    `/** ${label}: [5] modeName **/\n${modeCode}`,
    `/** ${label}: [6] styles **/\n${styles}`,
    `/** ${label}: [7] importComponent function **/\n${componentFn}`
  ];

  return `\n\n/***************** ${label} *****************/\n[\n` + t.join(',\n\n') + `\n\n]`;
}


function formatModeName(modeName: string) {
  let modeCode = `/* ${modeName} **/ `;

  switch (modeName) {
    case 'default':
      return modeCode + 0;
    case 'ios':
      return modeCode + 1;
    case 'md':
      return modeCode + 2;
    case 'wp':
      return modeCode + 3;
  }

  return modeCode + `'${modeName}'`;
}


function formatListeners(label: string, listeners: Listeners) {
  const methodNames = Object.keys(listeners);
  if (!methodNames.length) {
    return '[]'
  }

  const t: string[] = [];

  methodNames.forEach((methodName, listenerIndex) => {
    t.push(formatListenerOpts(label, methodName, listenerIndex, listeners[methodName]));
  });

  return `[\n` + t.join(',\n') + `\n]`;
}


function formatListenerOpts(label: string, methodName: string, listenerIndex: number, listenerOpts: ListenOpts) {
  const t = [
    `    /********* ${label} listener[${listenerIndex}] ${methodName} *********/\n` +
    `    /* [0] methodName **/ '${methodName}'`,
    `    /* [1] eventName ***/ '${listenerOpts.eventName}'`,
    `    /* [2] capture *****/ ${formatBoolean(listenerOpts.capture)}`,
    `    /* [3] passive *****/ ${formatBoolean(listenerOpts.passive)}`,
    `    /* [4] enabled *****/ ${formatBoolean(listenerOpts.enabled)}`,
  ];

  return `  [\n` + t.join(',\n') + `\n  ]`;
}


function formatWatches(label: string, watches: Watches) {
  const methodNames = Object.keys(watches);
  if (!methodNames.length) {
    return '[]'
  }

  const t: string[] = [];

  methodNames.forEach((methodName, watchIndex) => {
    t.push(formatWatcherOpts(label, methodName, watchIndex, watches[methodName]));
  });

  return `[\n` + t.join(',\n') + `\n]`;
}


function formatWatcherOpts(label: string, methodName: string, watchIndex: number, watchOpts: WatchOpts) {
  const t = [
    `    /********* ${label} watch[${watchIndex}] ${methodName} *********/\n` +
    `    /* [0] methodName **/ '${methodName}'`,
    `    /* [1] fn **********/ '${watchOpts.fn}'`
  ];

  return `  [\n` + t.join(',\n') + `\n  ]`;
}


function formatBoolean(val: boolean) {
  return val ?
    '/* true **/ 1' :
    '/* false */ 0';
}


export function getRegistryContent(registry: Registry) {
  let content = '(window.Ionic = window.Ionic || {}).components = ';
  content += JSON.stringify(registry, null, 2) + ';';
  return content;
}
