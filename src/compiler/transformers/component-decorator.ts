import { ComponentMeta, ComponentOptions } from '../interfaces';
import * as ts from 'typescript';


export function getComponentDecoratorData(classNode: ts.ClassDeclaration) {
  let metaData: ComponentMeta = null;

  if (!classNode.decorators) {
    return metaData;
  }

  let isComponent = false;

  classNode.decorators.forEach(decorator => {

    decorator.forEachChild(decoratorChild => {

      decoratorChild.forEachChild(componentChild => {

        if (componentChild.getText().trim() === 'Component') {
          isComponent = true;

        } else if (isComponent) {
          metaData = parseComponentMetaData(componentChild.getText());
        }

      });

    });
  });

  return metaData;
}


function parseComponentMetaData(text: string): ComponentMeta {
  try {
    const fnStr = `return ${text};`;

    // parse user component options
    const userOpts: ComponentOptions = new Function(fnStr)();

    // convert user component options from user into component meta
    const cmpMeta: ComponentMeta = {};

    cmpMeta.modesMeta = {};

    normalizeTag(userOpts, cmpMeta, text);
    normalizeStyles(userOpts, cmpMeta);
    normalizeModes(cmpMeta);
    normalizeShadow(userOpts, cmpMeta);
    normalizeHost(userOpts, cmpMeta);

    return cmpMeta;

  } catch (e) {
    console.log(`parseComponentMetaData: ${e}`);
    console.log(text);
  }
  return null;
}


function normalizeTag(userOpts: ComponentOptions, cmpMeta: ComponentMeta, orgText: string) {

  if ((<any>userOpts).selector) {
    console.log(`Please use "tag" instead of "selector" in component decorator: ${(<any>userOpts).selector}`);
    cmpMeta.tagNameMeta = (<any>userOpts).selector;
  }

  cmpMeta.tagNameMeta = userOpts.tag;

  if (!cmpMeta.tagNameMeta || cmpMeta.tagNameMeta.trim() === '') {
    throw `tag missing in component decorator: ${orgText}`;
  }

  cmpMeta.tagNameMeta = cmpMeta.tagNameMeta.trim().toLowerCase();

  if (cmpMeta.tagNameMeta.indexOf(' ') > -1) {
    throw `"${cmpMeta.tagNameMeta}" tag cannot contain a space`;
  }

  if (cmpMeta.tagNameMeta.indexOf(',') > -1) {
    throw `"${cmpMeta.tagNameMeta}" tag cannot be use for multiple tags`;
  }

  let invalidChars = cmpMeta.tagNameMeta.replace(/\w|-/g, '');
  if (invalidChars !== '') {
    throw `"${cmpMeta.tagNameMeta}" tag contains invalid characters: ${invalidChars}`;
  }

  if (cmpMeta.tagNameMeta.indexOf('-') === -1) {
    throw `"${cmpMeta.tagNameMeta}" tag must contain a dash (-) to work as a valid web component`;
  }

  if (cmpMeta.tagNameMeta.indexOf('--') > -1) {
    throw `"${cmpMeta.tagNameMeta}" tag cannot contain multiple dashes (--) next to each other`;
  }

  if (cmpMeta.tagNameMeta.indexOf('-') === 0) {
    throw `"${cmpMeta.tagNameMeta}" tag cannot start with a dash (-)`;
  }

  if (cmpMeta.tagNameMeta.lastIndexOf('-') === cmpMeta.tagNameMeta.length - 1) {
    throw `"${cmpMeta.tagNameMeta}" tag cannot end with a dash (-)`;
  }
}


function normalizeStyles(userOpts: ComponentOptions, cmpMeta: ComponentMeta) {
  if (!userOpts.styleUrls) {
    return;
  }

  // normalize the possible styleUrl structures

  if (typeof userOpts.styleUrls === 'string') {
    // as a string
    // styleUrls: 'my-styles.scss'

    if (!userOpts.styleUrls.trim().length) {
      throw `invalid style url for ${cmpMeta.tagNameMeta}: ${userOpts.styleUrls}`;
    }

    cmpMeta.modesMeta['default'] = {
      styleUrls: [userOpts.styleUrls.trim()]
    };

  } else if (Array.isArray(userOpts.styleUrls)) {
    // as an array of strings
    // styleUrls: ['my-styles.scss', 'my-other-styles']

    cmpMeta.modesMeta['default'] = {
      styleUrls: []
    };

    userOpts.styleUrls.forEach(styleUrl => {
      if (styleUrl && typeof styleUrl === 'string' && styleUrl.trim().length) {
        cmpMeta.modesMeta['default'].styleUrls.push(styleUrl.trim());
      } else {
        throw `invalid style url for ${cmpMeta.tagNameMeta}: ${styleUrl}`;
      }
    });

  } else {
    // as an object
    // styleUrls: {
    //   ios: 'badge.ios.scss',
    //   md: 'badge.md.scss',
    //   wp: 'badge.wp.scss'
    // }

    const styleModes: {[modeName: string]: string} = (<any>userOpts).styleUrls;

    Object.keys(styleModes).forEach(styleModeName => {
      const modeName = styleModeName.trim().toLowerCase();
      cmpMeta.modesMeta[modeName] = {
        styleUrls: []
      };

      if (typeof styleModes[styleModeName] === 'string') {
        const styleUrl = styleModes[styleModeName].trim();
        if (!styleUrl.length) {
          throw `invalid style url for ${cmpMeta.tagNameMeta}: ${styleModes[styleModeName]}`;
        }

        cmpMeta.modesMeta[modeName].styleUrls.push(styleUrl);

      } else if (Array.isArray(styleModes[styleModeName])) {
        const styleUrls: string[] = (<any>userOpts).styleUrls;

        styleUrls.forEach(styleUrl => {
          if (styleUrl && typeof styleUrl === 'string' && styleUrl.trim().length) {
            cmpMeta.modesMeta[modeName].styleUrls.push(styleUrl.trim());
          } else {
            throw `invalid style url for ${cmpMeta.tagNameMeta}: ${styleUrl}`;
          }
        });

      } else {
        throw `invalid style url for ${cmpMeta.tagNameMeta}: ${styleModes[styleModeName]}`;
      }
    });

  }
}


function normalizeModes(cmpMeta: ComponentMeta) {
  const modeNames = Object.keys(cmpMeta.modesMeta).sort();

  if (modeNames.length === 0) {
    // always set a default, even if there's nothing
    cmpMeta.modesMeta['default'] = {};

  } else {
    // normalize mode name sorting
    const modes = Object.assign({}, cmpMeta.modesMeta);
    cmpMeta.modesMeta = {};

    modeNames.forEach(modeName => {
      cmpMeta.modesMeta[modeName] = modes[modeName];
    });
  }
}


function normalizeShadow(userOpts: ComponentOptions, cmpMeta: ComponentMeta) {
  const rawShadowValue: any = userOpts.shadow;

  // default to NOT use shadow dom
  cmpMeta.isShadowMeta = false;

  // try to figure out a best guess depending on the value they put in
  if (rawShadowValue !== undefined) {
    if (typeof rawShadowValue === 'string') {
      if (rawShadowValue.toLowerCase().trim() === 'true') {
        cmpMeta.isShadowMeta = true;
      }

    } else {
      // ensure it's a boolean
      cmpMeta.isShadowMeta = !!rawShadowValue;
    }
  }
}


function normalizeHost(userOpts: ComponentOptions, cmpMeta: ComponentMeta) {
  cmpMeta.hostMeta = userOpts.host || {};
}
