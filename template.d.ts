// Version 1.1.2
module Template {
    export var VERSION: string;
    export var attrHooks: any;
    export function toAttrs(attrs: any, prefix?: string): string;
    export function text(...children: any[]): string;
    export function tag(name, children: any[]): string;
    export function shortTag(name, atts?: any): string;
    // template_helpers
    export function image(src: string, attrs?: any): string;
    export function stylesheet(src: string, attrs?: any): string;
    // template_tags
    export function a(...children: any[]): string;
    export function abbr(...children: any[]): string;
    export function address(...children: any[]): string;
    export function area(...children: any[]): string;
    export function article(...children: any[]): string;
    export function aside(...children: any[]): string;
    export function audio(...children: any[]): string;
    export function b(...children: any[]): string;
    export function base(...children: any[]): string;
    export function bdi(...children: any[]): string;
    export function bdo(...children: any[]): string;
    export function blockquote(...children: any[]): string;
    export function body(...children: any[]): string;
    export function button(...children: any[]): string;
    export function canvas(...children: any[]): string;
    export function caption(...children: any[]): string;
    export function cite(...children: any[]): string;
    export function code(...children: any[]): string;
    export function col(...children: any[]): string;
    export function colgroup(...children: any[]): string;
    export function command(...children: any[]): string;
    export function data(...children: any[]): string;
    export function datalist(...children: any[]): string;
    export function dd(...children: any[]): string;
    export function del(...children: any[]): string;
    export function details(...children: any[]): string;
    export function dfn(...children: any[]): string;
    export function div(...children: any[]): string;
    export function dl(...children: any[]): string;
    export function dt(...children: any[]): string;
    export function em(...children: any[]): string;
    export function embed(...children: any[]): string;
    export function eventsource(...children: any[]): string;
    export function fieldset(...children: any[]): string;
    export function figcaption(...children: any[]): string;
    export function figure(...children: any[]): string;
    export function footer(...children: any[]): string;
    export function form(...children: any[]): string;
    export function h1(...children: any[]): string;
    export function h2(...children: any[]): string;
    export function h3(...children: any[]): string;
    export function h4(...children: any[]): string;
    export function h5(...children: any[]): string;
    export function h6(...children: any[]): string;
    export function head(...children: any[]): string;
    export function header(...children: any[]): string;
    export function hgroup(...children: any[]): string;
    export function html(...children: any[]): string;
    export function i(...children: any[]): string;
    export function iframe(...children: any[]): string;
    export function ins(...children: any[]): string;
    export function kbd(...children: any[]): string;
    export function keygen(...children: any[]): string;
    export function label(...children: any[]): string;
    export function legend(...children: any[]): string;
    export function li(...children: any[]): string;
    export function mark(...children: any[]): string;
    export function map(...children: any[]): string;
    export function menu(...children: any[]): string;
    export function meter(...children: any[]): string;
    export function nav(...children: any[]): string;
    export function noscript(...children: any[]): string;
    export function object(...children: any[]): string;
    export function ol(...children: any[]): string;
    export function optgroup(...children: any[]): string;
    export function option(...children: any[]): string;
    export function output(...children: any[]): string;
    export function p(...children: any[]): string;
    export function pre(...children: any[]): string;
    export function progress(...children: any[]): string;
    export function q(...children: any[]): string;
    export function ruby(...children: any[]): string;
    export function rp(...children: any[]): string;
    export function rt(...children: any[]): string;
    export function s(...children: any[]): string;
    export function samp(...children: any[]): string;
    export function script(...children: any[]): string;
    export function section(...children: any[]): string;
    export function select(...children: any[]): string;
    export function small(...children: any[]): string;
    export function source(...children: any[]): string;
    export function span(...children: any[]): string;
    export function strong(...children: any[]): string;
    export function style(...children: any[]): string;
    export function sub(...children: any[]): string;
    export function summary(...children: any[]): string;
    export function sup(...children: any[]): string;
    export function table(...children: any[]): string;
    export function tbody(...children: any[]): string;
    export function td(...children: any[]): string;
    export function textarea(...children: any[]): string;
    export function tfoot(...children: any[]): string;
    export function th(...children: any[]): string;
    export function thead(...children: any[]): string;
    export function time(...children: any[]): string;
    export function title(...children: any[]): string;
    export function tr(...children: any[]): string;
    export function track(...children: any[]): string;
    export function u(...children: any[]): string;
    export function ul(...children: any[]): string;
    export function video(...children: any[]): string;
    export function wbr(...children: any[]): string;
    export function br(atts?: any): string;
    export function hr(atts?: any): string;
    export function img(atts?: any): string;
    export function input(atts?: any): string;
    export function link(atts?: any): string;
    export function meta(atts?: any): string;
    export function param(atts?: any): string;
}
