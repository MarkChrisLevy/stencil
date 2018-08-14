/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import { JSXElements } from '@stencil/core';




declare namespace StencilComponents {

  interface AttributeBasicRoot {}
  interface AttributeBasicRootAttributes extends JSXElements.HTMLAttributes {}

  interface AttributeBasic {
    'customAttr': string;
    'multiWord': string;
    'single': string;
  }
  interface AttributeBasicAttributes extends JSXElements.HTMLAttributes {
    'customAttr'?: string;
    'multiWord'?: string;
    'single'?: string;
  }

  interface AttributeBooleanRoot {
    'toggleState': () => void;
  }
  interface AttributeBooleanRootAttributes extends JSXElements.HTMLAttributes {}

  interface AttributeBoolean {
    'boolState': boolean;
    'noreflect': boolean;
    'strState': string;
  }
  interface AttributeBooleanAttributes extends JSXElements.HTMLAttributes {
    'boolState'?: boolean;
    'noreflect'?: boolean;
    'strState'?: string;
  }

  interface AttributeComplex {
    'bool0': boolean;
    'bool1': boolean;
    'bool2': boolean;
    'getInstance': () => this;
    'nu0': number;
    'nu1': number;
    'str0': string;
    'str1': string;
  }
  interface AttributeComplexAttributes extends JSXElements.HTMLAttributes {
    'bool0'?: boolean;
    'bool1'?: boolean;
    'bool2'?: boolean;
    'nu0'?: number;
    'nu1'?: number;
    'str0'?: string;
    'str1'?: string;
  }

  interface AttributeHost {}
  interface AttributeHostAttributes extends JSXElements.HTMLAttributes {}

  interface ConditionalBasic {}
  interface ConditionalBasicAttributes extends JSXElements.HTMLAttributes {}

  interface ConditionalRerenderRoot {}
  interface ConditionalRerenderRootAttributes extends JSXElements.HTMLAttributes {}

  interface ConditionalRerender {}
  interface ConditionalRerenderAttributes extends JSXElements.HTMLAttributes {}

  interface CssVariablesRoot {}
  interface CssVariablesRootAttributes extends JSXElements.HTMLAttributes {}

  interface CssVariables {}
  interface CssVariablesAttributes extends JSXElements.HTMLAttributes {}

  interface DynamicImport {
    'update': () => Promise<void>;
  }
  interface DynamicImportAttributes extends JSXElements.HTMLAttributes {}

  interface EsmImport {
    'propVal': number;
    'someMethod': () => void;
  }
  interface EsmImportAttributes extends JSXElements.HTMLAttributes {
    'onSomeEvent'?: (event: CustomEvent) => void;
    'propVal'?: number;
  }

  interface InitCssRoot {}
  interface InitCssRootAttributes extends JSXElements.HTMLAttributes {}

  interface KeyReorderRoot {}
  interface KeyReorderRootAttributes extends JSXElements.HTMLAttributes {}

  interface KeyReorder {
    'num': number;
  }
  interface KeyReorderAttributes extends JSXElements.HTMLAttributes {
    'num'?: number;
  }

  interface LifecycleBasicA {}
  interface LifecycleBasicAAttributes extends JSXElements.HTMLAttributes {}

  interface LifecycleBasicB {
    'value': string;
  }
  interface LifecycleBasicBAttributes extends JSXElements.HTMLAttributes {
    'onLifecycleLoad'?: (event: CustomEvent) => void;
    'onLifecycleUpdate'?: (event: CustomEvent) => void;
    'value'?: string;
  }

  interface LifecycleBasicC {
    'value': string;
  }
  interface LifecycleBasicCAttributes extends JSXElements.HTMLAttributes {
    'onLifecycleLoad'?: (event: CustomEvent) => void;
    'onLifecycleUpdate'?: (event: CustomEvent) => void;
    'value'?: string;
  }

  interface LifecycleUnloadA {}
  interface LifecycleUnloadAAttributes extends JSXElements.HTMLAttributes {}

  interface LifecycleUnloadB {}
  interface LifecycleUnloadBAttributes extends JSXElements.HTMLAttributes {}

  interface LifecycleUnloadRoot {}
  interface LifecycleUnloadRootAttributes extends JSXElements.HTMLAttributes {}

  interface ReflectToAttr {
    'bool': boolean;
    'dynamicNu': number;
    'dynamicStr': string;
    'nu': number;
    'null': string;
    'otherBool': boolean;
    'str': string;
    'undef': string;
  }
  interface ReflectToAttrAttributes extends JSXElements.HTMLAttributes {
    'bool'?: boolean;
    'dynamicNu'?: number;
    'dynamicStr'?: string;
    'nu'?: number;
    'null'?: string;
    'otherBool'?: boolean;
    'str'?: string;
    'undef'?: string;
  }

  interface ShadowDomArrayRoot {}
  interface ShadowDomArrayRootAttributes extends JSXElements.HTMLAttributes {}

  interface ShadowDomArray {
    'values': number[];
  }
  interface ShadowDomArrayAttributes extends JSXElements.HTMLAttributes {
    'values'?: number[];
  }

  interface ShadowDomBasicRoot {}
  interface ShadowDomBasicRootAttributes extends JSXElements.HTMLAttributes {}

  interface ShadowDomBasic {}
  interface ShadowDomBasicAttributes extends JSXElements.HTMLAttributes {}

  interface ShadowDomSlotBasic {}
  interface ShadowDomSlotBasicAttributes extends JSXElements.HTMLAttributes {}

  interface ShadowDomSlotNestedRoot {}
  interface ShadowDomSlotNestedRootAttributes extends JSXElements.HTMLAttributes {}

  interface ShadowDomSlotNested {
    'i': number;
  }
  interface ShadowDomSlotNestedAttributes extends JSXElements.HTMLAttributes {
    'i'?: number;
  }

  interface SlotArrayBasic {}
  interface SlotArrayBasicAttributes extends JSXElements.HTMLAttributes {}

  interface SlotArrayComplexRoot {}
  interface SlotArrayComplexRootAttributes extends JSXElements.HTMLAttributes {}

  interface SlotArrayComplex {}
  interface SlotArrayComplexAttributes extends JSXElements.HTMLAttributes {}

  interface SlotArrayTop {}
  interface SlotArrayTopAttributes extends JSXElements.HTMLAttributes {}

  interface SlotBasicOrderRoot {}
  interface SlotBasicOrderRootAttributes extends JSXElements.HTMLAttributes {}

  interface SlotBasicOrder {}
  interface SlotBasicOrderAttributes extends JSXElements.HTMLAttributes {}

  interface SlotBasicRoot {}
  interface SlotBasicRootAttributes extends JSXElements.HTMLAttributes {}

  interface SlotBasic {}
  interface SlotBasicAttributes extends JSXElements.HTMLAttributes {}

  interface SlotDynamicWrapperRoot {}
  interface SlotDynamicWrapperRootAttributes extends JSXElements.HTMLAttributes {}

  interface SlotDynamicWrapper {
    'tag': string;
  }
  interface SlotDynamicWrapperAttributes extends JSXElements.HTMLAttributes {
    'tag'?: string;
  }

  interface SlotFallbackRoot {}
  interface SlotFallbackRootAttributes extends JSXElements.HTMLAttributes {}

  interface SlotFallback {
    'inc': number;
  }
  interface SlotFallbackAttributes extends JSXElements.HTMLAttributes {
    'inc'?: number;
  }

  interface SlotHtml {
    'inc': number;
  }
  interface SlotHtmlAttributes extends JSXElements.HTMLAttributes {
    'inc'?: number;
  }

  interface SlotLightDomRoot {}
  interface SlotLightDomRootAttributes extends JSXElements.HTMLAttributes {}

  interface SlotLightDomContent {}
  interface SlotLightDomContentAttributes extends JSXElements.HTMLAttributes {}

  interface SlotMapOrderRoot {}
  interface SlotMapOrderRootAttributes extends JSXElements.HTMLAttributes {}

  interface SlotMapOrder {}
  interface SlotMapOrderAttributes extends JSXElements.HTMLAttributes {}

  interface SlotReorderRoot {}
  interface SlotReorderRootAttributes extends JSXElements.HTMLAttributes {}

  interface SlotReorder {
    'reordered': boolean;
  }
  interface SlotReorderAttributes extends JSXElements.HTMLAttributes {
    'reordered'?: boolean;
  }

  interface SlotReplaceWrapperRoot {}
  interface SlotReplaceWrapperRootAttributes extends JSXElements.HTMLAttributes {}

  interface SlotReplaceWrapper {
    'href': string;
  }
  interface SlotReplaceWrapperAttributes extends JSXElements.HTMLAttributes {
    'href'?: string;
  }

  interface CssCmp {}
  interface CssCmpAttributes extends JSXElements.HTMLAttributes {}

  interface SassCmp {}
  interface SassCmpAttributes extends JSXElements.HTMLAttributes {}

  interface SvgAttr {}
  interface SvgAttrAttributes extends JSXElements.HTMLAttributes {}

  interface SvgClass {}
  interface SvgClassAttributes extends JSXElements.HTMLAttributes {}

  interface Tag3dComponent {}
  interface Tag3dComponentAttributes extends JSXElements.HTMLAttributes {}

  interface Tag88 {}
  interface Tag88Attributes extends JSXElements.HTMLAttributes {}
}

export interface LocalIntrinsicElements {
  'attribute-basic-root': StencilComponents.AttributeBasicRootAttributes;
  'attribute-basic': StencilComponents.AttributeBasicAttributes;
  'attribute-boolean-root': StencilComponents.AttributeBooleanRootAttributes;
  'attribute-boolean': StencilComponents.AttributeBooleanAttributes;
  'attribute-complex': StencilComponents.AttributeComplexAttributes;
  'attribute-host': StencilComponents.AttributeHostAttributes;
  'conditional-basic': StencilComponents.ConditionalBasicAttributes;
  'conditional-rerender-root': StencilComponents.ConditionalRerenderRootAttributes;
  'conditional-rerender': StencilComponents.ConditionalRerenderAttributes;
  'css-variables-root': StencilComponents.CssVariablesRootAttributes;
  'css-variables': StencilComponents.CssVariablesAttributes;
  'dynamic-import': StencilComponents.DynamicImportAttributes;
  'esm-import': StencilComponents.EsmImportAttributes;
  'init-css-root': StencilComponents.InitCssRootAttributes;
  'key-reorder-root': StencilComponents.KeyReorderRootAttributes;
  'key-reorder': StencilComponents.KeyReorderAttributes;
  'lifecycle-basic-a': StencilComponents.LifecycleBasicAAttributes;
  'lifecycle-basic-b': StencilComponents.LifecycleBasicBAttributes;
  'lifecycle-basic-c': StencilComponents.LifecycleBasicCAttributes;
  'lifecycle-unload-a': StencilComponents.LifecycleUnloadAAttributes;
  'lifecycle-unload-b': StencilComponents.LifecycleUnloadBAttributes;
  'lifecycle-unload-root': StencilComponents.LifecycleUnloadRootAttributes;
  'reflect-to-attr': StencilComponents.ReflectToAttrAttributes;
  'shadow-dom-array-root': StencilComponents.ShadowDomArrayRootAttributes;
  'shadow-dom-array': StencilComponents.ShadowDomArrayAttributes;
  'shadow-dom-basic-root': StencilComponents.ShadowDomBasicRootAttributes;
  'shadow-dom-basic': StencilComponents.ShadowDomBasicAttributes;
  'shadow-dom-slot-basic': StencilComponents.ShadowDomSlotBasicAttributes;
  'shadow-dom-slot-nested-root': StencilComponents.ShadowDomSlotNestedRootAttributes;
  'shadow-dom-slot-nested': StencilComponents.ShadowDomSlotNestedAttributes;
  'slot-array-basic': StencilComponents.SlotArrayBasicAttributes;
  'slot-array-complex-root': StencilComponents.SlotArrayComplexRootAttributes;
  'slot-array-complex': StencilComponents.SlotArrayComplexAttributes;
  'slot-array-top': StencilComponents.SlotArrayTopAttributes;
  'slot-basic-order-root': StencilComponents.SlotBasicOrderRootAttributes;
  'slot-basic-order': StencilComponents.SlotBasicOrderAttributes;
  'slot-basic-root': StencilComponents.SlotBasicRootAttributes;
  'slot-basic': StencilComponents.SlotBasicAttributes;
  'slot-dynamic-wrapper-root': StencilComponents.SlotDynamicWrapperRootAttributes;
  'slot-dynamic-wrapper': StencilComponents.SlotDynamicWrapperAttributes;
  'slot-fallback-root': StencilComponents.SlotFallbackRootAttributes;
  'slot-fallback': StencilComponents.SlotFallbackAttributes;
  'slot-html': StencilComponents.SlotHtmlAttributes;
  'slot-light-dom-root': StencilComponents.SlotLightDomRootAttributes;
  'slot-light-dom-content': StencilComponents.SlotLightDomContentAttributes;
  'slot-map-order-root': StencilComponents.SlotMapOrderRootAttributes;
  'slot-map-order': StencilComponents.SlotMapOrderAttributes;
  'slot-reorder-root': StencilComponents.SlotReorderRootAttributes;
  'slot-reorder': StencilComponents.SlotReorderAttributes;
  'slot-replace-wrapper-root': StencilComponents.SlotReplaceWrapperRootAttributes;
  'slot-replace-wrapper': StencilComponents.SlotReplaceWrapperAttributes;
  'css-cmp': StencilComponents.CssCmpAttributes;
  'sass-cmp': StencilComponents.SassCmpAttributes;
  'svg-attr': StencilComponents.SvgAttrAttributes;
  'svg-class': StencilComponents.SvgClassAttributes;
  'tag-3d-component': StencilComponents.Tag3dComponentAttributes;
  'tag-88': StencilComponents.Tag88Attributes;
}

declare global {

  interface HTMLAttributeBasicRootElement extends StencilComponents.AttributeBasicRoot, HTMLStencilElement {}
  var HTMLAttributeBasicRootElement: {
    prototype: HTMLAttributeBasicRootElement;
    new (): HTMLAttributeBasicRootElement;
  };

  interface HTMLAttributeBasicElement extends StencilComponents.AttributeBasic, HTMLStencilElement {}
  var HTMLAttributeBasicElement: {
    prototype: HTMLAttributeBasicElement;
    new (): HTMLAttributeBasicElement;
  };

  interface HTMLAttributeBooleanRootElement extends StencilComponents.AttributeBooleanRoot, HTMLStencilElement {}
  var HTMLAttributeBooleanRootElement: {
    prototype: HTMLAttributeBooleanRootElement;
    new (): HTMLAttributeBooleanRootElement;
  };

  interface HTMLAttributeBooleanElement extends StencilComponents.AttributeBoolean, HTMLStencilElement {}
  var HTMLAttributeBooleanElement: {
    prototype: HTMLAttributeBooleanElement;
    new (): HTMLAttributeBooleanElement;
  };

  interface HTMLAttributeComplexElement extends StencilComponents.AttributeComplex, HTMLStencilElement {}
  var HTMLAttributeComplexElement: {
    prototype: HTMLAttributeComplexElement;
    new (): HTMLAttributeComplexElement;
  };

  interface HTMLAttributeHostElement extends StencilComponents.AttributeHost, HTMLStencilElement {}
  var HTMLAttributeHostElement: {
    prototype: HTMLAttributeHostElement;
    new (): HTMLAttributeHostElement;
  };

  interface HTMLConditionalBasicElement extends StencilComponents.ConditionalBasic, HTMLStencilElement {}
  var HTMLConditionalBasicElement: {
    prototype: HTMLConditionalBasicElement;
    new (): HTMLConditionalBasicElement;
  };

  interface HTMLConditionalRerenderRootElement extends StencilComponents.ConditionalRerenderRoot, HTMLStencilElement {}
  var HTMLConditionalRerenderRootElement: {
    prototype: HTMLConditionalRerenderRootElement;
    new (): HTMLConditionalRerenderRootElement;
  };

  interface HTMLConditionalRerenderElement extends StencilComponents.ConditionalRerender, HTMLStencilElement {}
  var HTMLConditionalRerenderElement: {
    prototype: HTMLConditionalRerenderElement;
    new (): HTMLConditionalRerenderElement;
  };

  interface HTMLCssVariablesRootElement extends StencilComponents.CssVariablesRoot, HTMLStencilElement {}
  var HTMLCssVariablesRootElement: {
    prototype: HTMLCssVariablesRootElement;
    new (): HTMLCssVariablesRootElement;
  };

  interface HTMLCssVariablesElement extends StencilComponents.CssVariables, HTMLStencilElement {}
  var HTMLCssVariablesElement: {
    prototype: HTMLCssVariablesElement;
    new (): HTMLCssVariablesElement;
  };

  interface HTMLDynamicImportElement extends StencilComponents.DynamicImport, HTMLStencilElement {}
  var HTMLDynamicImportElement: {
    prototype: HTMLDynamicImportElement;
    new (): HTMLDynamicImportElement;
  };

  interface HTMLEsmImportElement extends StencilComponents.EsmImport, HTMLStencilElement {}
  var HTMLEsmImportElement: {
    prototype: HTMLEsmImportElement;
    new (): HTMLEsmImportElement;
  };

  interface HTMLInitCssRootElement extends StencilComponents.InitCssRoot, HTMLStencilElement {}
  var HTMLInitCssRootElement: {
    prototype: HTMLInitCssRootElement;
    new (): HTMLInitCssRootElement;
  };

  interface HTMLKeyReorderRootElement extends StencilComponents.KeyReorderRoot, HTMLStencilElement {}
  var HTMLKeyReorderRootElement: {
    prototype: HTMLKeyReorderRootElement;
    new (): HTMLKeyReorderRootElement;
  };

  interface HTMLKeyReorderElement extends StencilComponents.KeyReorder, HTMLStencilElement {}
  var HTMLKeyReorderElement: {
    prototype: HTMLKeyReorderElement;
    new (): HTMLKeyReorderElement;
  };

  interface HTMLLifecycleBasicAElement extends StencilComponents.LifecycleBasicA, HTMLStencilElement {}
  var HTMLLifecycleBasicAElement: {
    prototype: HTMLLifecycleBasicAElement;
    new (): HTMLLifecycleBasicAElement;
  };

  interface HTMLLifecycleBasicBElement extends StencilComponents.LifecycleBasicB, HTMLStencilElement {}
  var HTMLLifecycleBasicBElement: {
    prototype: HTMLLifecycleBasicBElement;
    new (): HTMLLifecycleBasicBElement;
  };

  interface HTMLLifecycleBasicCElement extends StencilComponents.LifecycleBasicC, HTMLStencilElement {}
  var HTMLLifecycleBasicCElement: {
    prototype: HTMLLifecycleBasicCElement;
    new (): HTMLLifecycleBasicCElement;
  };

  interface HTMLLifecycleUnloadAElement extends StencilComponents.LifecycleUnloadA, HTMLStencilElement {}
  var HTMLLifecycleUnloadAElement: {
    prototype: HTMLLifecycleUnloadAElement;
    new (): HTMLLifecycleUnloadAElement;
  };

  interface HTMLLifecycleUnloadBElement extends StencilComponents.LifecycleUnloadB, HTMLStencilElement {}
  var HTMLLifecycleUnloadBElement: {
    prototype: HTMLLifecycleUnloadBElement;
    new (): HTMLLifecycleUnloadBElement;
  };

  interface HTMLLifecycleUnloadRootElement extends StencilComponents.LifecycleUnloadRoot, HTMLStencilElement {}
  var HTMLLifecycleUnloadRootElement: {
    prototype: HTMLLifecycleUnloadRootElement;
    new (): HTMLLifecycleUnloadRootElement;
  };

  interface HTMLReflectToAttrElement extends StencilComponents.ReflectToAttr, HTMLStencilElement {}
  var HTMLReflectToAttrElement: {
    prototype: HTMLReflectToAttrElement;
    new (): HTMLReflectToAttrElement;
  };

  interface HTMLShadowDomArrayRootElement extends StencilComponents.ShadowDomArrayRoot, HTMLStencilElement {}
  var HTMLShadowDomArrayRootElement: {
    prototype: HTMLShadowDomArrayRootElement;
    new (): HTMLShadowDomArrayRootElement;
  };

  interface HTMLShadowDomArrayElement extends StencilComponents.ShadowDomArray, HTMLStencilElement {}
  var HTMLShadowDomArrayElement: {
    prototype: HTMLShadowDomArrayElement;
    new (): HTMLShadowDomArrayElement;
  };

  interface HTMLShadowDomBasicRootElement extends StencilComponents.ShadowDomBasicRoot, HTMLStencilElement {}
  var HTMLShadowDomBasicRootElement: {
    prototype: HTMLShadowDomBasicRootElement;
    new (): HTMLShadowDomBasicRootElement;
  };

  interface HTMLShadowDomBasicElement extends StencilComponents.ShadowDomBasic, HTMLStencilElement {}
  var HTMLShadowDomBasicElement: {
    prototype: HTMLShadowDomBasicElement;
    new (): HTMLShadowDomBasicElement;
  };

  interface HTMLShadowDomSlotBasicElement extends StencilComponents.ShadowDomSlotBasic, HTMLStencilElement {}
  var HTMLShadowDomSlotBasicElement: {
    prototype: HTMLShadowDomSlotBasicElement;
    new (): HTMLShadowDomSlotBasicElement;
  };

  interface HTMLShadowDomSlotNestedRootElement extends StencilComponents.ShadowDomSlotNestedRoot, HTMLStencilElement {}
  var HTMLShadowDomSlotNestedRootElement: {
    prototype: HTMLShadowDomSlotNestedRootElement;
    new (): HTMLShadowDomSlotNestedRootElement;
  };

  interface HTMLShadowDomSlotNestedElement extends StencilComponents.ShadowDomSlotNested, HTMLStencilElement {}
  var HTMLShadowDomSlotNestedElement: {
    prototype: HTMLShadowDomSlotNestedElement;
    new (): HTMLShadowDomSlotNestedElement;
  };

  interface HTMLSlotArrayBasicElement extends StencilComponents.SlotArrayBasic, HTMLStencilElement {}
  var HTMLSlotArrayBasicElement: {
    prototype: HTMLSlotArrayBasicElement;
    new (): HTMLSlotArrayBasicElement;
  };

  interface HTMLSlotArrayComplexRootElement extends StencilComponents.SlotArrayComplexRoot, HTMLStencilElement {}
  var HTMLSlotArrayComplexRootElement: {
    prototype: HTMLSlotArrayComplexRootElement;
    new (): HTMLSlotArrayComplexRootElement;
  };

  interface HTMLSlotArrayComplexElement extends StencilComponents.SlotArrayComplex, HTMLStencilElement {}
  var HTMLSlotArrayComplexElement: {
    prototype: HTMLSlotArrayComplexElement;
    new (): HTMLSlotArrayComplexElement;
  };

  interface HTMLSlotArrayTopElement extends StencilComponents.SlotArrayTop, HTMLStencilElement {}
  var HTMLSlotArrayTopElement: {
    prototype: HTMLSlotArrayTopElement;
    new (): HTMLSlotArrayTopElement;
  };

  interface HTMLSlotBasicOrderRootElement extends StencilComponents.SlotBasicOrderRoot, HTMLStencilElement {}
  var HTMLSlotBasicOrderRootElement: {
    prototype: HTMLSlotBasicOrderRootElement;
    new (): HTMLSlotBasicOrderRootElement;
  };

  interface HTMLSlotBasicOrderElement extends StencilComponents.SlotBasicOrder, HTMLStencilElement {}
  var HTMLSlotBasicOrderElement: {
    prototype: HTMLSlotBasicOrderElement;
    new (): HTMLSlotBasicOrderElement;
  };

  interface HTMLSlotBasicRootElement extends StencilComponents.SlotBasicRoot, HTMLStencilElement {}
  var HTMLSlotBasicRootElement: {
    prototype: HTMLSlotBasicRootElement;
    new (): HTMLSlotBasicRootElement;
  };

  interface HTMLSlotBasicElement extends StencilComponents.SlotBasic, HTMLStencilElement {}
  var HTMLSlotBasicElement: {
    prototype: HTMLSlotBasicElement;
    new (): HTMLSlotBasicElement;
  };

  interface HTMLSlotDynamicWrapperRootElement extends StencilComponents.SlotDynamicWrapperRoot, HTMLStencilElement {}
  var HTMLSlotDynamicWrapperRootElement: {
    prototype: HTMLSlotDynamicWrapperRootElement;
    new (): HTMLSlotDynamicWrapperRootElement;
  };

  interface HTMLSlotDynamicWrapperElement extends StencilComponents.SlotDynamicWrapper, HTMLStencilElement {}
  var HTMLSlotDynamicWrapperElement: {
    prototype: HTMLSlotDynamicWrapperElement;
    new (): HTMLSlotDynamicWrapperElement;
  };

  interface HTMLSlotFallbackRootElement extends StencilComponents.SlotFallbackRoot, HTMLStencilElement {}
  var HTMLSlotFallbackRootElement: {
    prototype: HTMLSlotFallbackRootElement;
    new (): HTMLSlotFallbackRootElement;
  };

  interface HTMLSlotFallbackElement extends StencilComponents.SlotFallback, HTMLStencilElement {}
  var HTMLSlotFallbackElement: {
    prototype: HTMLSlotFallbackElement;
    new (): HTMLSlotFallbackElement;
  };

  interface HTMLSlotHtmlElement extends StencilComponents.SlotHtml, HTMLStencilElement {}
  var HTMLSlotHtmlElement: {
    prototype: HTMLSlotHtmlElement;
    new (): HTMLSlotHtmlElement;
  };

  interface HTMLSlotLightDomRootElement extends StencilComponents.SlotLightDomRoot, HTMLStencilElement {}
  var HTMLSlotLightDomRootElement: {
    prototype: HTMLSlotLightDomRootElement;
    new (): HTMLSlotLightDomRootElement;
  };

  interface HTMLSlotLightDomContentElement extends StencilComponents.SlotLightDomContent, HTMLStencilElement {}
  var HTMLSlotLightDomContentElement: {
    prototype: HTMLSlotLightDomContentElement;
    new (): HTMLSlotLightDomContentElement;
  };

  interface HTMLSlotMapOrderRootElement extends StencilComponents.SlotMapOrderRoot, HTMLStencilElement {}
  var HTMLSlotMapOrderRootElement: {
    prototype: HTMLSlotMapOrderRootElement;
    new (): HTMLSlotMapOrderRootElement;
  };

  interface HTMLSlotMapOrderElement extends StencilComponents.SlotMapOrder, HTMLStencilElement {}
  var HTMLSlotMapOrderElement: {
    prototype: HTMLSlotMapOrderElement;
    new (): HTMLSlotMapOrderElement;
  };

  interface HTMLSlotReorderRootElement extends StencilComponents.SlotReorderRoot, HTMLStencilElement {}
  var HTMLSlotReorderRootElement: {
    prototype: HTMLSlotReorderRootElement;
    new (): HTMLSlotReorderRootElement;
  };

  interface HTMLSlotReorderElement extends StencilComponents.SlotReorder, HTMLStencilElement {}
  var HTMLSlotReorderElement: {
    prototype: HTMLSlotReorderElement;
    new (): HTMLSlotReorderElement;
  };

  interface HTMLSlotReplaceWrapperRootElement extends StencilComponents.SlotReplaceWrapperRoot, HTMLStencilElement {}
  var HTMLSlotReplaceWrapperRootElement: {
    prototype: HTMLSlotReplaceWrapperRootElement;
    new (): HTMLSlotReplaceWrapperRootElement;
  };

  interface HTMLSlotReplaceWrapperElement extends StencilComponents.SlotReplaceWrapper, HTMLStencilElement {}
  var HTMLSlotReplaceWrapperElement: {
    prototype: HTMLSlotReplaceWrapperElement;
    new (): HTMLSlotReplaceWrapperElement;
  };

  interface HTMLCssCmpElement extends StencilComponents.CssCmp, HTMLStencilElement {}
  var HTMLCssCmpElement: {
    prototype: HTMLCssCmpElement;
    new (): HTMLCssCmpElement;
  };

  interface HTMLSassCmpElement extends StencilComponents.SassCmp, HTMLStencilElement {}
  var HTMLSassCmpElement: {
    prototype: HTMLSassCmpElement;
    new (): HTMLSassCmpElement;
  };

  interface HTMLSvgAttrElement extends StencilComponents.SvgAttr, HTMLStencilElement {}
  var HTMLSvgAttrElement: {
    prototype: HTMLSvgAttrElement;
    new (): HTMLSvgAttrElement;
  };

  interface HTMLSvgClassElement extends StencilComponents.SvgClass, HTMLStencilElement {}
  var HTMLSvgClassElement: {
    prototype: HTMLSvgClassElement;
    new (): HTMLSvgClassElement;
  };

  interface HTMLTag3dComponentElement extends StencilComponents.Tag3dComponent, HTMLStencilElement {}
  var HTMLTag3dComponentElement: {
    prototype: HTMLTag3dComponentElement;
    new (): HTMLTag3dComponentElement;
  };

  interface HTMLTag88Element extends StencilComponents.Tag88, HTMLStencilElement {}
  var HTMLTag88Element: {
    prototype: HTMLTag88Element;
    new (): HTMLTag88Element;
  };

  interface HTMLElementTagNameMap {
    'attribute-basic-root': HTMLAttributeBasicRootElement
    'attribute-basic': HTMLAttributeBasicElement
    'attribute-boolean-root': HTMLAttributeBooleanRootElement
    'attribute-boolean': HTMLAttributeBooleanElement
    'attribute-complex': HTMLAttributeComplexElement
    'attribute-host': HTMLAttributeHostElement
    'conditional-basic': HTMLConditionalBasicElement
    'conditional-rerender-root': HTMLConditionalRerenderRootElement
    'conditional-rerender': HTMLConditionalRerenderElement
    'css-variables-root': HTMLCssVariablesRootElement
    'css-variables': HTMLCssVariablesElement
    'dynamic-import': HTMLDynamicImportElement
    'esm-import': HTMLEsmImportElement
    'init-css-root': HTMLInitCssRootElement
    'key-reorder-root': HTMLKeyReorderRootElement
    'key-reorder': HTMLKeyReorderElement
    'lifecycle-basic-a': HTMLLifecycleBasicAElement
    'lifecycle-basic-b': HTMLLifecycleBasicBElement
    'lifecycle-basic-c': HTMLLifecycleBasicCElement
    'lifecycle-unload-a': HTMLLifecycleUnloadAElement
    'lifecycle-unload-b': HTMLLifecycleUnloadBElement
    'lifecycle-unload-root': HTMLLifecycleUnloadRootElement
    'reflect-to-attr': HTMLReflectToAttrElement
    'shadow-dom-array-root': HTMLShadowDomArrayRootElement
    'shadow-dom-array': HTMLShadowDomArrayElement
    'shadow-dom-basic-root': HTMLShadowDomBasicRootElement
    'shadow-dom-basic': HTMLShadowDomBasicElement
    'shadow-dom-slot-basic': HTMLShadowDomSlotBasicElement
    'shadow-dom-slot-nested-root': HTMLShadowDomSlotNestedRootElement
    'shadow-dom-slot-nested': HTMLShadowDomSlotNestedElement
    'slot-array-basic': HTMLSlotArrayBasicElement
    'slot-array-complex-root': HTMLSlotArrayComplexRootElement
    'slot-array-complex': HTMLSlotArrayComplexElement
    'slot-array-top': HTMLSlotArrayTopElement
    'slot-basic-order-root': HTMLSlotBasicOrderRootElement
    'slot-basic-order': HTMLSlotBasicOrderElement
    'slot-basic-root': HTMLSlotBasicRootElement
    'slot-basic': HTMLSlotBasicElement
    'slot-dynamic-wrapper-root': HTMLSlotDynamicWrapperRootElement
    'slot-dynamic-wrapper': HTMLSlotDynamicWrapperElement
    'slot-fallback-root': HTMLSlotFallbackRootElement
    'slot-fallback': HTMLSlotFallbackElement
    'slot-html': HTMLSlotHtmlElement
    'slot-light-dom-root': HTMLSlotLightDomRootElement
    'slot-light-dom-content': HTMLSlotLightDomContentElement
    'slot-map-order-root': HTMLSlotMapOrderRootElement
    'slot-map-order': HTMLSlotMapOrderElement
    'slot-reorder-root': HTMLSlotReorderRootElement
    'slot-reorder': HTMLSlotReorderElement
    'slot-replace-wrapper-root': HTMLSlotReplaceWrapperRootElement
    'slot-replace-wrapper': HTMLSlotReplaceWrapperElement
    'css-cmp': HTMLCssCmpElement
    'sass-cmp': HTMLSassCmpElement
    'svg-attr': HTMLSvgAttrElement
    'svg-class': HTMLSvgClassElement
    'tag-3d-component': HTMLTag3dComponentElement
    'tag-88': HTMLTag88Element
  }

  interface ElementTagNameMap {
    'attribute-basic-root': HTMLAttributeBasicRootElement;
    'attribute-basic': HTMLAttributeBasicElement;
    'attribute-boolean-root': HTMLAttributeBooleanRootElement;
    'attribute-boolean': HTMLAttributeBooleanElement;
    'attribute-complex': HTMLAttributeComplexElement;
    'attribute-host': HTMLAttributeHostElement;
    'conditional-basic': HTMLConditionalBasicElement;
    'conditional-rerender-root': HTMLConditionalRerenderRootElement;
    'conditional-rerender': HTMLConditionalRerenderElement;
    'css-variables-root': HTMLCssVariablesRootElement;
    'css-variables': HTMLCssVariablesElement;
    'dynamic-import': HTMLDynamicImportElement;
    'esm-import': HTMLEsmImportElement;
    'init-css-root': HTMLInitCssRootElement;
    'key-reorder-root': HTMLKeyReorderRootElement;
    'key-reorder': HTMLKeyReorderElement;
    'lifecycle-basic-a': HTMLLifecycleBasicAElement;
    'lifecycle-basic-b': HTMLLifecycleBasicBElement;
    'lifecycle-basic-c': HTMLLifecycleBasicCElement;
    'lifecycle-unload-a': HTMLLifecycleUnloadAElement;
    'lifecycle-unload-b': HTMLLifecycleUnloadBElement;
    'lifecycle-unload-root': HTMLLifecycleUnloadRootElement;
    'reflect-to-attr': HTMLReflectToAttrElement;
    'shadow-dom-array-root': HTMLShadowDomArrayRootElement;
    'shadow-dom-array': HTMLShadowDomArrayElement;
    'shadow-dom-basic-root': HTMLShadowDomBasicRootElement;
    'shadow-dom-basic': HTMLShadowDomBasicElement;
    'shadow-dom-slot-basic': HTMLShadowDomSlotBasicElement;
    'shadow-dom-slot-nested-root': HTMLShadowDomSlotNestedRootElement;
    'shadow-dom-slot-nested': HTMLShadowDomSlotNestedElement;
    'slot-array-basic': HTMLSlotArrayBasicElement;
    'slot-array-complex-root': HTMLSlotArrayComplexRootElement;
    'slot-array-complex': HTMLSlotArrayComplexElement;
    'slot-array-top': HTMLSlotArrayTopElement;
    'slot-basic-order-root': HTMLSlotBasicOrderRootElement;
    'slot-basic-order': HTMLSlotBasicOrderElement;
    'slot-basic-root': HTMLSlotBasicRootElement;
    'slot-basic': HTMLSlotBasicElement;
    'slot-dynamic-wrapper-root': HTMLSlotDynamicWrapperRootElement;
    'slot-dynamic-wrapper': HTMLSlotDynamicWrapperElement;
    'slot-fallback-root': HTMLSlotFallbackRootElement;
    'slot-fallback': HTMLSlotFallbackElement;
    'slot-html': HTMLSlotHtmlElement;
    'slot-light-dom-root': HTMLSlotLightDomRootElement;
    'slot-light-dom-content': HTMLSlotLightDomContentElement;
    'slot-map-order-root': HTMLSlotMapOrderRootElement;
    'slot-map-order': HTMLSlotMapOrderElement;
    'slot-reorder-root': HTMLSlotReorderRootElement;
    'slot-reorder': HTMLSlotReorderElement;
    'slot-replace-wrapper-root': HTMLSlotReplaceWrapperRootElement;
    'slot-replace-wrapper': HTMLSlotReplaceWrapperElement;
    'css-cmp': HTMLCssCmpElement;
    'sass-cmp': HTMLSassCmpElement;
    'svg-attr': HTMLSvgAttrElement;
    'svg-class': HTMLSvgClassElement;
    'tag-3d-component': HTMLTag3dComponentElement;
    'tag-88': HTMLTag88Element;
  }
}


import { DefaultIntrinsicElements } from '@stencil/core';

declare global {
  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends LocalIntrinsicElements, DefaultIntrinsicElements {
      [tagName: string]: any;
    }
  }
}

export declare function defineCustomElements(window: any): void;